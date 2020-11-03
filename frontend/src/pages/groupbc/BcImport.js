import React,{useState} from "react";
import { makeStyles , withStyles } from '@material-ui/core/styles';
import { useLocation, useHistory } from "react-router-dom";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {useBc} from '../../helpers/context/BcContext'
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import { green } from '@material-ui/core/colors';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Checkbox from '@material-ui/core/Checkbox';
import BcList from "../mybc/BcList";
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import DoneIcon from '@material-ui/icons/Done';
import CloseIcon from '@material-ui/icons/Close';

// 명함 가져오기 
// 그룹 등록으로 인한 명함 가져오기와 GroupDetail에서 내 명함첩 가져오기 두 파일에서 호출

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      marginBottom: '40px',
      minWidth: 120,
    },
  }));

  const GreenCheckbox = withStyles({
    root: {
      color: green[400],
      '&$checked': {
        color: green[600],
      },
    },
    checked: {},
  })((props) => <Checkbox color="default" {...props} />);

  function not(a, b) {
    return a.filter((value) => b.indexOf(value) === -1);
  }
  
  function intersection(a, b) {
    return a.filter((value) => b.indexOf(value) !== -1);
  }
  
  function union(a, b) {
    return [...a, ...not(b, a)];
  }
  

  export default function BcImport() {
    const classes = useStyles();

    const bcData = useBc()

    const [edit] = useState(true)
    // 편집일때와 아닐때 분류

    const [checked, setChecked] = React.useState([]);
    const [number] = React.useState([0]);

    const handleToggle = (value) => () => {
      const currentIndex = checked.indexOf(value);
      const newChecked = [...checked];
      console.log(value)
      if (currentIndex === -1) {
        newChecked.push(value);
      } else {
        newChecked.splice(currentIndex, 1);
      }
  
      setChecked(newChecked);
    };

    const numberOfChecked = (items) => intersection(checked, items).length;

    const handleToggleAll = (items) => () => {
      if (numberOfChecked(items) === items.length) {
        setChecked(not(checked, items));
      } else {
        setChecked(union(checked, items));
      }
    };

    //체크박스 관리

    const history = useHistory();
    const location = useLocation();
    console.log(location.state)

    const handleBack = e => {
      e.preventDefault();

      if(location.state !== undefined) {
        history.push({
          pathname:'/MyBc',
          state: { FooterValue: 1}
        })
      } else {
        history.goBack()
      }

    }

    //풋터 인덱스 관리

    const editing = (items) => (
      <>
    <Grid container>
    <Grid item xs={12}>
    <Paper elevation={0}>
    <CloseIcon style={{marginLeft:'10px',float:'left', fontSize: 35}} onClick={handleBack}/>
    <h1 style={{margin:'1rem', marginLeft:'50px'}}>내 명함첩에서 가져오기</h1>
    </Paper>
    </Grid>
    <Grid item xs={9} >
          <Tooltip title="전체선택">
        <FormControl className={classes.formControl} style={{top:'10px'}}  >
        <GreenCheckbox
            onClick={handleToggleAll(items)}
            checked={numberOfChecked(items) === items.length && items.length !== 0}
            indeterminate={numberOfChecked(items) !== items.length && numberOfChecked(items) !== 0}
            disabled={items.length === 0}
            inputProps={{ 'aria-label': 'all items selected' }}
            style={{right:'40%', }}
          />
      </FormControl>
      </Tooltip>
      <Button style={{right:'30%', top:'25%'}}>{`${numberOfChecked(items)} 개 선택됨`}</Button>
        </Grid>

        <Grid item xs={3}>

      <FormControl className={classes.formControl_text} style={{left:'13px'}}>
      <InputLabel htmlFor="age-native-simple">
      <Button size="small" startIcon={<DoneIcon />} style={{color:'green'}}>완료</Button>
      </InputLabel>
      </FormControl>
      
        </Grid>
    </Grid>

    <List >
            {items.map((value) => {
                const labelId = `transfer-list-all-item-${value}-label`;

                return (
                    <>
                    <Grid container>
                <Grid item xs={1} >
                <ListItem key={value} role="listitem" onClick={handleToggle(value)} style={{position:'relative', right:'20px', bottom:'50px', width:'100%'}}>
                    
                    <GreenCheckbox 
                        style={{top:"160px", left:'20px'}}
                        edge="start"
                        checked={checked.indexOf(value) !== -1}
                        tabIndex={-1}
                        disableRipple
                        inputProps={{ 'aria-labelledby': labelId }}
                    />
                </ListItem>
                </Grid>
                <Grid item xs={11}>
                <BcList
                        bcName={bcData.bcinformation.bcName}
                        bcPosition={bcData.bcinformation.bcPosition}
                        bcCompany={bcData.bcinformation.bcCompany}
                        edit={edit}
                    /> 
                </Grid>
                </Grid>
                    
                </>
                );
            })}
            </List>
            
        <Button variant="contained" fullWidth  style={{ position:'fixed', bottom:'0' , height:'7%', width:'100%', right:'1px', color:'white', backgroundColor:'#63cc63'}}>만들기</Button>
            
      </>
    )

    return (
      <>
      {editing(number)}
      </>
      
    );
  }