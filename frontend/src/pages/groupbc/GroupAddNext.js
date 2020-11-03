import React from "react";
import { useHistory } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';

//그룹 등록 2

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));

  export default function GroupAddNext() {
  
    const classes = useStyles();

    const history = useHistory();

    const handleBack = e => {
      e.preventDefault();
      history.push({
        pathname:'/MyBc',
        state: { FooterValue: 1}
      })
    }

    const handleCreate = e => {
      e.preventDefault();
      history.push({
        pathname:'/BcImport',
        state: {value:'GroupAddNext'}
      })
    }
 

    return (
      <>
      
      <Grid container>
        <Grid item xs={12}>
        <Paper elevation={0}>
        <CloseIcon style={{marginLeft:'10px',float:'left', fontSize: 35}} onClick={handleBack}/>
        <h1 style={{margin:'1rem', marginLeft:'50px'}}>명함첩 만들기</h1>
        </Paper>
        </Grid>
        

      </Grid>  
      <Card style={{margin:'1rem'}} >
        <CardContent>
        <form className={classes.root} noValidate autoComplete="off">
        <TextField id="outlined-basic" label="명함첩을 입력하세요" variant="outlined" style={{ right:'10px', width:'100%' }} />
        </form>
        <br/>
        <Button variant="contained" color="primary" style={{ width:'100%' }} onClick={handleCreate}>만들기</Button>
      </CardContent>
        </Card>
      </>
      
    );
  }