import React from "react";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Link, useLocation, useHistory } from 'react-router-dom';

// 공지사항

  export default function Notice() {

    const history = useHistory();
    const location = useLocation();
    console.log(location.state)

    const handleBack = e => {
      e.preventDefault();

      if(location.state !== undefined) {
        if(location.state.value === "Detail") {
          history.push({
            pathname:'/MyBc',
            state: { FooterValue: 4}
          })
        }
        else if(location.state.value === "MyBc") {
          history.push({
            pathname:'/MyBc',
            state: { FooterValue: 0}
          })
        }
      } 

    }
  
    return (
      <>
        <Grid container>
        <Grid item xs={12}>
        <Paper elevation={0}>
        <ArrowBackIosIcon style={{marginLeft:'10px',float:'left', fontSize: 35}} onClick={handleBack}/>
        <h1 style={{margin:'1rem', marginLeft:'50px'}}>공지사항</h1>
        </Paper>
        </Grid>
        <br/><br/><br/><br/><br/>
        <Grid item xs={12} style={{lineHeight:'1.5'}}>
        <Link to="/NoticeDetail" style={{textDecoration:'none'}}>
        <Paper elevation={0} >
            <p style={{fontSize:18, marginTop:'auto', marginBottom:'auto', display:'inline-block', verticalAlign:'middle'}}>[공지사항] 안녕하세요 공지사항 페이지입니다.</p><br/>
            <p style={{color: '#b9b5b5',top:'10px'}}>2020-10-28</p><hr/>
        </Paper>
        </Link>
        <Paper elevation={0} >
            <p style={{fontSize:18, marginTop:'auto', marginBottom:'auto', display:'inline-block', verticalAlign:'middle'}}>[공지사항] 공지사항 테스트.</p><br/>
            <p style={{color: '#b9b5b5',top:'10px'}}>2020-10-28</p><hr/>
        </Paper>
        </Grid>
        </Grid>

        
        
      </>
      
    );
  }