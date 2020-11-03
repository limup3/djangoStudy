import React,{useState} from "react";
import {Link} from "react-router-dom";
import { makeStyles , withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import RecentActorsIcon from '@material-ui/icons/RecentActors';
import Badge from '@material-ui/core/Badge';
import "./MyBc.css"
import BcList from "./BcList";
import {EditFooter} from "../../components";
import {useBc} from '../../helpers/context/BcContext'
import Tooltip from '@material-ui/core/Tooltip';
import CloseIcon from '@material-ui/icons/Close';

//내 명함첩에서 편집클릭시 나오는 화면

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    minWidth: 275,
  },
  text: {
    fontSize: 14,
    color: 'gray',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.text.secondary,
  },
  formControl: {
    margin: theme.spacing(1),
    marginTop: '5%',
    minWidth: 120,
  },
  formControl_text: {
    margin: theme.spacing(1),
    minWidth: 40,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
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


export default function BcEdit() {
    const classes = useStyles();

    const bcData = useBc()

    const [bcEntering] = useState(1)

    const [edit] = useState(true)
    
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

    const editing = (items) => (
        <>
        <EditFooter/>

        <a href="https://deex.co.kr/">
        <img className="Advertising" src={"/header_images/Ad.JPG"} alt={"광고"} />
        </a>
        <br/>

      <Card className={classes.root}>

      <CardContent>

      <Grid container>

        <Grid item xs={12}>
          <Paper className={classes.paper}>입력중인 명함
          <Badge badgeContent={bcEntering} color="error" style={{float:"right", top:"10px", right:"10px"}}>
          </Badge>
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

      <Button style={{right:'30%', top:'40%'}}>{`${numberOfChecked(items)} 개 선택됨`}</Button>
        </Grid>

        <Grid item xs={3}>

      <FormControl className={classes.formControl_text} style={{left:'13px'}}>
      <InputLabel htmlFor="age-native-simple">
        <Link to ="/MyBc" style={{textDecoration:"none"}}><Button startIcon={<CloseIcon/>} size="small">취소</Button></Link>
      </InputLabel>
      </FormControl>
      
        </Grid>
        </Grid>

      </CardContent>

      <CardContent>
      <Paper className={classes.paper}>
      <Grid container>
        <Grid item xs={9} className={classes.text}>
        본인의 명함을 입력하세요
        </Grid>
        <Grid item xs={3}>
        <RecentActorsIcon color="disabled" style={{ fontSize: 25 }}/>
        </Grid>
        </Grid>
        </Paper>

      </CardContent>

        <List className={classes.root}>
            {items.map((value) => {
                const labelId = `transfer-list-all-item-${value}-label`;

                return (
                    <>
                    <Grid container>
                    <Grid item xs={1} >
                    <ListItem key={value} role="listitem" onClick={handleToggle(value)}>
                    
                    <GreenCheckbox 
                        style={{top:"120px"}}
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

    </Card>

        </>
            )
    return (
      <>
      {editing(number)}
      </>
    )
    }
        
         