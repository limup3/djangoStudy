import React from "react";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import {Link} from "react-router-dom";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {useBc} from '../../helpers/context/BcContext'

//입력중인 명함에서 입력불가에 대한 상세내용 페이지

  export default function EFDetail() {

    const bcData = useBc()

    return (
      <>
    <Grid container>
    <Grid item xs={12}>
    <Paper elevation={0}>
    <ArrowBackIosIcon style={{marginLeft:'10px',float:'left', fontSize: 35}} onClick={bcData.handleBack}/>
    <h1 style={{margin:'1rem', marginLeft:'50px'}}>상세정보</h1>
    </Paper>
    </Grid>
    </Grid>
    <img style={{marginLeft:'auto', marginRight:'auto', width:'95%'}}src={"/images/Bc.PNG"} alt={"명함사진"} />
    <p>명함 인식이 불가능합니다. 재촬영 또는 직접입력을 해주세요.</p><br/><br/><br/>
    <p style={{color:'green'}}>재촬영</p><br/>
    <Link to="/BcTyping" style={{textDecoration:'none'}}><p>직접입력</p></Link><br/>
    <p style={{color:'red'}}>명함 삭제</p><br/>
    </>
    );
  }