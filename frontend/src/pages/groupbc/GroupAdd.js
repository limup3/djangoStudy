import React from "react";
import CloseIcon from '@material-ui/icons/Close';
import { useHistory } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

//그룹 등록 1

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));

  export default function GroupAdd() {
  
    const classes = useStyles();

    const history = useHistory();

    const handleBack = e => {
        e.preventDefault();
        history.push({
          pathname:'/MyBc',
          state: { FooterValue: 1}
        })
      }
    const handleNext = e => {
    e.preventDefault();
    history.push("/GroupAddNext")
    } 

    return (
      <>
      
      <Grid container>
        <Grid item xs={12}>
        <Paper elevation={0}>
        <CloseIcon style={{marginLeft:'10px',float:'left', fontSize: 35}} onClick={handleBack}/>
        <h1 style={{margin:'1rem', marginLeft:'50px'}}>그룹 만들기</h1>
        </Paper>
        </Grid>
        

      </Grid>  
      <Card style={{margin:'1rem'}} >
        <CardContent>
        <p style={{fontSize: '13px', color: 'gray'}}>그룹의 명칭은 그룹명함에서 변경할 수 있습니다.</p>
        <form className={classes.root} noValidate autoComplete="off">
        <TextField id="outlined-basic" label="그룹명을 입력하세요" variant="outlined" style={{ right:'10px', width:'100%' }} />
        </form>
        <br/>
        <Button variant="contained" color="primary" style={{ width:'100%' }} onClick={handleNext}>다음</Button>
      </CardContent>
        </Card>
      </>
      
    );
  }