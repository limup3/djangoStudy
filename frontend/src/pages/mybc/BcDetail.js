import React from "react";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { Link } from 'react-router-dom';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import MessageIcon from '@material-ui/icons/Message';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneIcon from '@material-ui/icons/Phone';
import { Map } from "../../components";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {useBc} from '../../helpers/context/BcContext'
import Button from '@material-ui/core/Button';
import CreateIcon from '@material-ui/icons/Create';

    //명함 상세 페이지 , match를 통한 사용자 확인

  export default function BcDetail({match}) {

    const bcData = useBc()

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };  


    return (
      <>
        <Grid container>
        <Grid item xs={8}>
        <Paper elevation={0}>
        <ArrowBackIosIcon style={{marginLeft:'10px', marginBottom: '10px', float:'left', fontSize: 25}} onClick={bcData.handleBack} />
        <h2 style={{margin:'1rem', marginLeft:'50px'}}>명함 상세</h2>
        </Paper>
        </Grid>
        <Grid item xs={4}>
        <MoreVertIcon style={{margin:'1rem', marginRight:'auto', float:'right', fontSize: 25}} onClick={handleClick}/> 
         <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        //상단 메뉴바
         >
        <MenuItem onClick={handleClose}>휴대폰 연락처에 저장</MenuItem>
        <MenuItem onClick={handleClose}>팀 명함첩으로 복제</MenuItem>
        <MenuItem onClick={handleClose} style={{color:'red'}}>명함 삭제</MenuItem>
       </Menu> 
      
        <Link to ="/BcDetailEdit"><Button startIcon={<CreateIcon />} size='small' style={{float:'right', marginTop:'15px', left:'10px', color:'gray'}} >편집</Button></Link>   
        </Grid>
        <img style={{marginLeft:'auto', marginRight:'auto', width:'95%'}}src={"/images/Bc.PNG"} alt={"명함사진"} />
     
      <Grid container>
        <Grid item xs={9} style={{padding:'0.3rem', lineHeight:'0.5rem'}}>
        <h2 style={{fontSize:20}}>{match.params.bcName}</h2>
          <p style={{fontSize:13}}>{match.params.bcPosition}</p>
          <p style={{fontSize:13}}>{match.params.bcCompany}</p>
        </Grid>
        <Grid item xs={3}>
        <AccountCircleIcon color="disabled" style={{ fontSize: 50, float:'right', marginTop: '15px', padding:'0.5rem' }}/>
        </Grid>
        </Grid>

 
      </Grid> 
      <hr/>
      <Grid container>
        <Grid item xs={9} style={{padding:'0.3rem'}}>
        <Paper elevation={0}>
        <h2 style={{fontSize:18}}>연락처</h2>
        </Paper>
        </Grid>
        <Grid item xs={3}>
        <Link to ="/BcDetailEdit"><Button startIcon={<CreateIcon />} size='small' style={{float:'right', marginTop:'15px', color:'gray'}} >편집</Button></Link> 
        </Grid>

        <Grid item xs={6} style={{padding:'0.3rem', lineHeight:'0.5rem'}}>
        <p style={{fontSize:13, color:'gray'}}>휴대폰</p>  
          <p style={{fontSize:13}}>{bcData.bcinformation.bcMobile}</p>
        </Grid>
        <Grid item xs={6}>
        <a href={'tel:' + bcData.bcinformation.bcMobile}><PhoneIcon  style={{  float:'right', marginTop: '15px', padding:'0.5rem', color:'black' }}/></a>
        <a href={'sms:' + bcData.bcinformation.bcMobile}><MessageIcon  style={{  float:'right', marginTop: '15px', padding:'0.5rem', color:'black' }}/></a>

        </Grid>
        <Grid item xs={6} style={{padding:'0.3rem', lineHeight:'0.5rem'}}>
        <p style={{fontSize:13, color:'gray'}}>이메일</p>  
          <p style={{fontSize:13}}>{bcData.bcinformation.bcEmail}</p>
        </Grid>
        <Grid item xs={6}>
        <a href={'mailto:' + bcData.bcinformation.bcEmail}><MailOutlineIcon  style={{  float:'right', marginTop: '15px', padding:'0.5rem', color:'black' }}/></a>
        </Grid>

        <Grid item xs={6} style={{padding:'0.3rem', lineHeight:'0.5rem'}}>
        <p style={{fontSize:13, color:'gray'}}>유선전화</p>  
          <p style={{fontSize:13}}>{bcData.bcinformation.bcPhone}</p>
        </Grid>
        <Grid item xs={6}>
        <a href={'tel:' + bcData.bcinformation.bcPhone}><PhoneIcon  style={{  float:'right', marginTop: '15px', padding:'0.5rem', color:'black' }}/></a>
        </Grid>

        <Grid item xs={12} style={{padding:'0.3rem', lineHeight:'0.5rem'}}>
        <p style={{fontSize:13, color:'gray'}}>팩스</p>  
          <p style={{fontSize:13}}>{bcData.bcinformation.bcFax}</p>
        </Grid>

        <Grid item xs={12} style={{padding:'0.3rem', lineHeight:'0.5rem'}}>
        <p style={{fontSize:13, color:'gray'}}>주소</p>  
          <p style={{fontSize:13}}>{bcData.bcinformation.bcAddr}</p>
        </Grid>
        <Map
        bcAddr={bcData.bcinformation.bcAddr}
        />

        </Grid>

      </>
      
    );
  }