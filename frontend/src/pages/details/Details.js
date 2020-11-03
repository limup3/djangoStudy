import React from "react";
import {Link, useHistory} from "react-router-dom";
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import ImageIcon from '@material-ui/icons/Image';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import DevicesIcon from '@material-ui/icons/Devices';
import LockIcon from '@material-ui/icons/Lock';
import PersonAddDisabledIcon from '@material-ui/icons/PersonAddDisabled';
import IconButton from '@material-ui/core/IconButton';

//하단 바 더보기 목록 , BottomNavigation을 사용하여 아이콘 분류

const useStyles = makeStyles({
  root: {
    float: 'left',
  },
  input: {
    display: 'none',
  },
});

const handleLater = e => {
  e.preventDefault();
  alert("추후 예정")
}


  export default function Details() {
  
    const classes = useStyles();

    const history = useHistory();

    const handleNotice = e => {
      e.preventDefault();
      history.push({
        pathname:'/Notice',
        state: {value:'Detail'}
      })
    }

    const handleTyping = e => {
      e.preventDefault();
      history.push({
        pathname:'/BcTyping',
        state: {value:'Detail'}
      })
    }

    const handleLogout = e => {
      e.preventDefault();
      localStorage.removeItem("userKey")
      history.push("/")
    }

    return (
      <>
      <h1>더보기</h1><br/>
      <BottomNavigation
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="공지사항" icon={<NotificationsNoneIcon fontSize="large" />} onClick={handleNotice}/>
      <BottomNavigationAction label="FAQ" icon={<HelpOutlineIcon fontSize="large" />} onClick={handleLater} />
      <BottomNavigationAction label="1:1 문의" icon={<ChatBubbleOutlineIcon fontSize="large" />} onClick={handleLater} />
      <BottomNavigationAction label="로그아웃" icon={<ExitToAppIcon fontSize="large" />} onClick={handleLogout} />
    </BottomNavigation><br/><br/><br/><br/><hr/>
    <h3>명함정보 등록</h3>
      <div onClick={handleTyping}><BorderColorIcon /> 직접입력</div>

      <div style={{position:'relative', right:'13px'}}>
      <input accept="image/*" className={classes.input} id="icon-button-file" type="file" />
      <label htmlFor="icon-button-file" >
        <IconButton color="inherit" aria-label="upload picture" component="span" style={{fontSize:15}}>
          <ImageIcon />&nbsp;이미지 가져오기
        </IconButton>
      </label>
      </div>
      {/* <br/><br/> */}
      {/* <ImageIcon/> 이미지 가져오기 <br/><br/> */}
      <div onClick={handleLater}>
      <PhoneAndroidIcon /> 연락처 연동 <br/><br/>
      <DevicesIcon/> 다른 서비스 연동 <br/><br/>
      </div>
    <h3>계정</h3>
    <Link to ="/ChangePw" style={{textDecoration:'none', color:'black'}}><LockIcon/> 비밀번호 재설정</Link> <br/><br/>
      <Link to ="/UserDelete" style={{textDecoration:'none', color:'black'}}><PersonAddDisabledIcon/> 회원 탈퇴</Link> <br/><br/>
       
        

      </>
      
    );
  }