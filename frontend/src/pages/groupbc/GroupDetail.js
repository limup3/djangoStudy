import React,{useState} from "react";
import { makeStyles , withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import {Link} from "react-router-dom";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Checkbox from '@material-ui/core/Checkbox';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import BcList from "../mybc/BcList";
import {useBc} from '../../helpers/context/BcContext'
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import Fab from '@material-ui/core/Fab';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import SortIcon from '@material-ui/icons/Sort';
import CreateIcon from '@material-ui/icons/Create';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import CloseIcon from '@material-ui/icons/Close';

//그룹 상세정보

const useStyles = makeStyles((theme) => ({

    input: {
      display: 'none',
    },
    formControl: {
        margin: theme.spacing(1),
        // marginBottom: '40px',
        // marginTop:'20px',
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

  export default function GroupDetail() {

    const classes = useStyles();

    const bcData = useBc()

    const [anchorEl, setAnchorEl] = React.useState(null);

    const [edit, setEdit] = useState(false)

    const [checked, setChecked] = React.useState([]);
    const [number] = React.useState([0]);

    
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

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
    <Grid container>
    <Grid item xs={12}>
    <Paper elevation={0}>
    <ArrowBackIosIcon style={{marginLeft:'10px',float:'left', fontSize: 35}} onClick={bcData.handleBack}/>
    <h1 style={{margin:'1rem', marginLeft:'50px'}}>그룹명</h1>
    </Paper>
    </Grid>
    </Grid>
    <h4 style={{marginLeft:'8%'}}>명함첩</h4>
    <hr/>
    <Link to="/BcImport"><Button fullWidth style={{backgroundColor:'#fdfafa'}}>{"+ 내 명함첩에서 가져오기"}</Button></Link>
    <hr/>
    {!edit &&
    <>
    <br/>
    <Grid item xs={12}>
    <Button startIcon={<CreateIcon />} style={{float:'right' , margin:'auto' }} onClick={() => setEdit(true)}>편집</Button>
    <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}
    style={{float:'right'}} startIcon={<SortIcon />}
    >
    명함정렬
    </Button>
    <Menu
    id="simple-menu"
    anchorEl={anchorEl}
    keepMounted
    open={Boolean(anchorEl)}
    onClose={handleClose}
    >
    <MenuItem onClick={handleClose}>등록일순</MenuItem>
    <MenuItem onClick={handleClose}>이름순</MenuItem>
    <MenuItem onClick={handleClose}>회사명순</MenuItem>
    <MenuItem onClick={handleClose}>최근 조회순</MenuItem>
    <MenuItem onClick={handleClose}>지역별순</MenuItem>
    </Menu>
    </Grid>
    <br/><br/>
    <BcList
    bcName={bcData.bcinformation.bcName}
    bcPosition={bcData.bcinformation.bcPosition}
    bcCompany={bcData.bcinformation.bcCompany}
    /> 
    <Fab color="secondary" aria-label="add" 
    style={{
        position: "fixed",
        margin: "1rem",
        bottom: "10%",
        left: "75%" 
    }} 
    >
     <input accept="image/*" capture="camera" className={classes.input} id="icon-button-file" type="file" />
      <label htmlFor="icon-button-file">
        <IconButton color="inherit" aria-label="upload picture" component="span">
          <AddAPhotoIcon />
        </IconButton>
      </label>
    </Fab>
    </>
  }
  {edit &&
  <>
  <Grid container>
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


        <Button style={{right:'30%', top:'35%'}}>{`${numberOfChecked(items)} 개 선택됨`}</Button>

        </Grid>

        <Grid item xs={3}>

      <FormControl className={classes.formControl_text} style={{left:'35px'}} onClick={() => setEdit(false)}>
      <InputLabel htmlFor="age-native-simple">
      <Button startIcon={<CloseIcon/>} size="small">취소</Button>
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
                        style={{top:"180px",left:'10px'}}
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
  </>
  }
    </>
    
    )

    return (
      <>
      {editing(number)}
      </>
    )
  }