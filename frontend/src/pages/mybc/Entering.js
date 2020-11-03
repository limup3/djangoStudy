import React,{useState} from "react";
import {Link} from "react-router-dom";
import { makeStyles , withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
// import CardContent from '@material-ui/core/CardContent';
import RecentActorsIcon from '@material-ui/icons/RecentActors';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import CreateIcon from '@material-ui/icons/Create';
import Tooltip from '@material-ui/core/Tooltip';
import CloseIcon from '@material-ui/icons/Close';

//입력중인 명함에서 입력중 탭 목록

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

  export default function Entering() {
    const classes = useStyles();

    const [edit, setEdit] = useState(false)

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
      {!edit &&
      <>
      <Grid container>
      <Grid item xs={12}>
      <Button startIcon={<CreateIcon />}  style={{float:'right', marginTop:'25px'}} onClick={() => setEdit(true)} >편집</Button>
      </Grid>
      </Grid>
      <br/><br/>
      <Link to="/BcDetailEdit" style={{textDecoration:'none'}}>
        <Paper elevation={1} style={{position:'relative', right:'8px', bottom:'30px', width:'100%', }}>
        <Grid item xs={4}>
            <h3>임시저장됨</h3>
            <p style={{color: '#b9b5b5',top:'10px'}}>2020-10-28</p>
        </Grid>
        <Grid item xs={8} style={{float:'right', bottom:'80px',position:'relative'}}>
        <RecentActorsIcon color="disabled" style={{ fontSize: 60 }}/>
        </Grid>
        </Paper>
      </Link>
     
      </>
      }

     {edit &&
      <>
      <Grid container>
      <Grid item xs={10} >
          <Tooltip title="전체선택">
        <FormControl className={classes.formControl} style={{top:'10px', right:'15px'}}  >
        <GreenCheckbox
            onClick={handleToggleAll(items)}
            checked={numberOfChecked(items) === items.length && items.length !== 0}
            indeterminate={numberOfChecked(items) !== items.length && numberOfChecked(items) !== 0}
            disabled={items.length === 0}
            inputProps={{ 'aria-label': 'all items selected' }}
            style={{right:'50%', }}
          />
      </FormControl>
      </Tooltip>

      <Button style={{right:'43%', top:'25%'}}>{`${numberOfChecked(items)} 개 선택됨`}</Button>
        </Grid>

        <Grid item xs={2}>

      <FormControl className={classes.formControl_text} onClick={() => setEdit(false)}>
      <InputLabel htmlFor="age-native-simple" >
        <Button startIcon={<CloseIcon/>} size="small" style={{top:'5px', right:'5px'}} >취소</Button>
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
                        style={{top:"40px", right:"13px"}}
                        edge="start"
                        checked={checked.indexOf(value) !== -1}
                        tabIndex={-1}
                        disableRipple
                        inputProps={{ 'aria-labelledby': labelId }}
                    />
                </ListItem>
                </Grid>
                <Grid item xs={11}>
                    <Paper elevation={1} style={{position:'relative', right:'20px', bottom:'30px', width:'100%'}}>
                    <Grid item xs={12}>
                    <RecentActorsIcon color="disabled" style={{ fontSize: 60, float:'right', right:'40px' }}/>
                        <h3>임시저장됨</h3>
                        <p style={{color: '#b9b5b5',top:'10px'}}>2020-10-28</p>
                    </Grid>
                    </Paper>
                </Grid>
                </Grid>
                    
                </>
                );
            })}
            </List>

            <Button variant="contained" fullWidth  style={{ position:'fixed', bottom:'0' , height:'7%', width:'100%', right:'1px', color:'white', backgroundColor:'black'}}>삭제</Button>
      </>
      }
      </>
    
      )
    return (
      <>
      {editing(number)}
      </>
    );
  }