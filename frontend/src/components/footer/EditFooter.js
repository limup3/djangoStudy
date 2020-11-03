import React from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import "./Footer.css";
import AppBar from '@material-ui/core/AppBar';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

// 내 명함첩에서 편집버튼 클릭시 나오는 하단 바 , Drawer 사용

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});


export default function EditFooter() {

    const classes = useStyles();
    const [state, setState] = React.useState({
      '더보기': false,
    });
  
    const toggleDrawer = (anchor, open) => (event) => {
      if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
      }
  
      setState({ ...state, [anchor]: open });
    };

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' ,
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
  
      <List>
          <ListItem>          
            <ListItemText primary={"팀 명함첩으로 복제"} />
          </ListItem>
          <ListItem>          
            <ListItemText primary={"파일로 내보내기"} />
          </ListItem>
          <ListItem>          
            <ListItemText primary={"명함 삭제"} />
          </ListItem>
      </List>
      <Divider />

    </div>
  );

  return (
    <>
    <AppBar >
      <Tabs
        value={value}
        onChange={handleChange}
        variant="fullWidth"
        className="Footer"
        indicatorColor="primary"
      >
        <Tab  label="그룹" />
        <Tab  label="이메일" />
    <div>
      {['더보기'].map((anchor) => (
        <React.Fragment key={anchor} >
          <Button onClick={toggleDrawer(anchor, true)} style={{color:'#cacaca', margin:'0.4rem' }}>{anchor}</Button>
          <Drawer anchor="bottom" open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
      </Tabs>
      </AppBar>

      

     {/* </Paper> */}
    </>
  );
}
