import React from "react";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {useBc} from '../../helpers/context/BcContext'

//공지사항 상세내용

  export default function NoticeDetail() {

    const bcData = useBc()
  
    return (
      <>
        <Grid container>
        <Grid item xs={12}>
        <Paper elevation={0}>
        <ArrowBackIosIcon style={{marginLeft:'10px',float:'left', fontSize: 35, marginTop:'16px'}} onClick={bcData.handleBack}/>
        </Paper>
        </Grid>
        <br/><br/><br/><br/><br/>
        <Grid item xs={12} style={{lineHeight:'1.5'}}>
        <Paper elevation={0} >
            <p style={{fontSize:18, marginTop:'auto', marginBottom:'auto', display:'inline-block', verticalAlign:'middle'}}>[공지사항] 안녕하세요 공지사항 페이지입니다.</p><br/>
            <p style={{color: '#b9b5b5',top:'10px'}}>2020-10-28</p><hr/>
        </Paper>
        <br/>
        <Paper elevation={0} >
            <p style={{fontSize:16, margin:'1rem'}}>안녕하세요 공지사항 내용입니다.<br/><br/>
            얼음에 희망의 뼈 아니다. 놀이 거친 이상, 구하지 평화스러운 착목한는 유소년에게서 우는 아니다. 할지라도 목숨이 것은 뜨고, 이것이다. 옷을 같이 생의 피가 같지 위하여서 말이다. 수 들어 것이 석가는 일월과 길을 목숨이 칼이다. 열락의 얼음과 든 소리다.이것은 물방아 것은 이것이다. 인간의 그들의 얼음이 그들에게 이것은 위하여, 인생을 이상 우리의 사막이다. 바이며, 있을 불어 것은 끓는 황금시대다. 남는 노래하며 그들의 그들은 끓는 노년에게서 타오르고 봄날의 실현에 황금시대다.    
            </p><br/>
        </Paper>
        </Grid>
        </Grid>
        
      </>
      
    );
  }