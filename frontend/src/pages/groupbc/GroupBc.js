import React, { useState } from 'react';
import {Link} from "react-router-dom";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
// import Badge from '@material-ui/core/Badge';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SettingsIcon from '@material-ui/icons/Settings';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

//그룹명함첩

const useStyles = makeStyles((theme) => ({
    title: {
      fontSize: 20,
      margin: '1.2rem',
    },
    border_line: {
      backgroundColor: '#f7f5f5',      
    },
    gbc_join: {
        color: '#b9b5b5'
    },
    gbc_add: {
        float: 'right',
    },
    gcb_bcName: {
        float: 'left',
        fontSize: 20,
        marginTop: '30px'
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'left',
      color: theme.palette.text.secondary,
    },
  }));

export default function Groupbc() {
    const classes = useStyles();

    const [groupName] = useState("그룹명")
    const [groupBcName] = useState("명함첩명")

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };


    return (
        <>
        <h1>그룹 명함첩</h1>
        <Link to="/GroupAdd"><Button variant="contained" color="primary" style={{ float:"right" }}>그룹 등록</Button></Link>
        <br/><br/><br/>
        
        
        <Card >
        <Paper elevation={0} className={classes.title} >{groupName}
        <SettingsIcon style={{float:"right"}} onClick={handleClick}/>
        <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Link to={`/GroupRename/${groupName}`} style={{textDecoration:'none'}}><MenuItem onClick={handleClose}>그룹명 변경</MenuItem></Link>
        <Link to={`/GroupBcRename/${groupBcName}`} style={{textDecoration:'none', color:'purple'}}><MenuItem onClick={handleClose}>명함첩명 변경</MenuItem></Link>
        <MenuItem onClick={handleClose} style={{color:'red'}}>명함 삭제</MenuItem>
      </Menu>
        </Paper>
        <Link to="/GroupDetail" style={{textDecoration:'none'}}>
        <CardContent>
        <Paper >
      <Grid container>
        <Grid item xs={12} className={classes.border_line}>
        <Paper className={classes.gbc_join}>참여중인 명함첩
    {/* <Badge style={{float:"right", right:"10px", color:"#9d9df7"}}>{"+ 명함첩 추가"}</Badge> */}
        </Paper>

        </Grid>
        <Grid item xs={3}>
        <AccountCircleIcon color="primary" style={{ fontSize: 80 }}/>
        </Grid>
        <Grid item xs={9}>
        <p className={classes.gcb_bcName}>{groupBcName}</p>
        </Grid>
        </Grid>
        </Paper>
      </CardContent>
        </Link>
        </Card>
 



        </>
     );
}
 