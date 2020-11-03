import React,{useState} from "react";
import {Link} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import RecentActorsIcon from '@material-ui/icons/RecentActors';
import Fab from '@material-ui/core/Fab';
import Badge from '@material-ui/core/Badge';
import "./MyBc.css"
import BcList from "./BcList";
import {useBc} from '../../helpers/context/BcContext'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import SortIcon from '@material-ui/icons/Sort';
import CreateIcon from '@material-ui/icons/Create';
import IconButton from '@material-ui/core/IconButton';

//내 명함첩 , 메인페이지

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
    minWidth: 120,
  },
  formControl_text: {
    margin: theme.spacing(1),
    minWidth: 40,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  input: {
    display: 'none',
  },
}));


export default function MyBc() {
    const classes = useStyles();

    const bcData = useBc()

    const [bcEntering] = useState(1)

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };


    return (
        <>
        <a href="https://deex.co.kr/">
        <img className="Advertising" src={"/header_images/Ad.JPG"} alt={"광고"} />
        </a>
        <br/>
       <>
      <Card className={classes.root}>

      <CardContent>

      <Grid container>

        <Grid item xs={12}>
        <Link to="/BcEntering" style={{textDecoration:'none'}}>
          <Paper className={classes.paper}>입력중인 명함
            <Badge badgeContent={bcEntering} color="error" style={{float:"right", top:"10px", right:"10px"}}>
            </Badge>
          </Paper>
        </Link>

        </Grid><br/><br/><br/>

    <Grid item xs={12}>
    <Link to ="/BcEdit" style={{textDecoration:"none"}}><Button startIcon={<CreateIcon />} style={{float:'right' , margin:'auto' }}>편집</Button></Link>
    
    <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} style={{float:'right'}} startIcon={<SortIcon />}>명함정렬</Button>
    
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
        </Grid>

      </CardContent>

      <CardContent>
      <input accept="image/*" capture="camera" className={classes.input} id="icon-button-file" type="file" />
      <label htmlFor="icon-button-file">
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
        </label>
      </CardContent>

      <BcList
        bcName={bcData.bcinformation.bcName}
        bcPosition={bcData.bcinformation.bcPosition}
        bcCompany={bcData.bcinformation.bcCompany}
        />
 
    </Card>

    <Fab color="secondary" aria-label="add" 
    style={{
        float: "right",
        position: "sticky",
        margin: "1rem",
        bottom: "80px", 
        display: "flex",
    }} 
    >
          {/* <input type="file" accept="image/*" capture="camera" /> */}
     <input accept="image/*" capture="camera" className={classes.input} id="icon-button-file" type="file" />
      <label htmlFor="icon-button-file">
        <IconButton color="inherit" aria-label="upload picture" component="span">
          <AddAPhotoIcon />
        </IconButton>
      </label>
    </Fab>

    </>

        </>
      );
    }
        
         