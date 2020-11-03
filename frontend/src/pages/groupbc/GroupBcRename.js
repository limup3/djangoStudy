import React from "react";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import {useBc} from '../../helpers/context/BcContext'
import Button from '@material-ui/core/Button';

//명함첩명 변경

  export default function GroupBcRename({match}) {

    const bcData = useBc()

    return (
      <>
    <Grid container>
    <Grid item xs={10}>
    <Paper elevation={0}>
    <ArrowBackIosIcon style={{marginLeft:'10px',float:'left', fontSize: 35}} onClick={bcData.handleBack}/>
    <h1 style={{margin:'1rem', marginLeft:'50px'}}>명함첩명 변경</h1>
    </Paper>
    </Grid>
    <Grid item xs={2}>
        <Button style={{color:'green', fontSize:20, margin:'1rem', float:'right'}}>완료</Button>
    </Grid>
    </Grid>
    <form noValidate autoComplete="off">
      <TextField fullWidth id="standard-basic" defaultValue={match.params.groupBcName} />
    </form>
      </>
      
    );
  }