import React from "react";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import {useBc} from '../../helpers/context/BcContext'
import Button from '@material-ui/core/Button';
import DoneIcon from '@material-ui/icons/Done';

//명함 상세페이지 편집

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
      },
      margin: {
        margin: theme.spacing(2),
      },
    }));


  export default function BcDetailEdit() {
 
    const classes = useStyles();

    const bcData = useBc()

    return (
      <>
      <form className={classes.root} noValidate autoComplete="off">
        <Grid container>
        <Grid item xs={9}>
        <Paper elevation={0}>
        <ArrowBackIosIcon style={{marginLeft:'10px', marginBottom: '10px', float:'left', fontSize: 25}} onClick={bcData.handleBack} />
        <h2 style={{margin:'1rem', marginLeft:'50px'}}>명함 정보 편집</h2>
        </Paper>
        </Grid>
        <Grid item xs={3}>
      <Button startIcon={<DoneIcon />} style={{float:'right', marginTop:'15px',  color:'green'}} onClick={bcData.handleBack}>완료</Button> 
        </Grid>
        <img style={{marginLeft:'auto', marginRight:'auto', width:'95%'}}src={"/images/Bc.PNG"} alt={"명함사진"} />
        </Grid>
      <Grid container>
      <FormControl style={{width:'60%'}} className={classes.margin}>
          <InputLabel htmlFor="standard-adornment-amount">이름</InputLabel>
          <Input
            id="standard-adornment-amount"
            defaultValue={bcData.bcinformation.bcName}
            // onChange={handleChange('amount')}
            // placeholder={bcData.bcinformation.bcName}
            startAdornment={<InputAdornment position="start"></InputAdornment>}
          />
        </FormControl>
        <Grid item xs={3}>
        <AccountCircleIcon color="disabled" style={{ fontSize: 50, float:'right', marginTop: '15px', padding:'0.5rem' }}/>
        </Grid>
        </Grid>

        
        <FormControl fullWidth className={classes.margin}>
          <InputLabel htmlFor="standard-adornment-amount">직책</InputLabel>
          <Input
            id="standard-adornment-amount"
            defaultValue={bcData.bcinformation.bcPosition}
            startAdornment={<InputAdornment position="start"></InputAdornment>}
          />
        </FormControl>

        <FormControl fullWidth className={classes.margin}>
          <InputLabel htmlFor="standard-adornment-amount">부서</InputLabel>
          <Input
            id="standard-adornment-amount"
            defaultValue={bcData.bcinformation.bcDepartment}
            startAdornment={<InputAdornment position="start"></InputAdornment>}
          />
        </FormControl>

        <FormControl fullWidth className={classes.margin}>
          <InputLabel htmlFor="standard-adornment-amount">회사</InputLabel>
          <Input
            id="standard-adornment-amount"
            defaultValue={bcData.bcinformation.bcCompany}
            startAdornment={<InputAdornment position="start"></InputAdornment>}
          />
        </FormControl>

        <FormControl fullWidth className={classes.margin}>
          <InputLabel htmlFor="standard-adornment-amount">휴대폰</InputLabel>
          <Input
            id="standard-adornment-amount"
            defaultValue={bcData.bcinformation.bcMobile}
            startAdornment={<InputAdornment position="start"></InputAdornment>}
          />
        </FormControl>

        <FormControl fullWidth className={classes.margin}>
          <InputLabel htmlFor="standard-adornment-amount">이메일</InputLabel>
          <Input
            id="standard-adornment-amount"
            defaultValue={bcData.bcinformation.bcEmail}
            startAdornment={<InputAdornment position="start"></InputAdornment>}
          />
        </FormControl>

        <FormControl fullWidth className={classes.margin}>
          <InputLabel htmlFor="standard-adornment-amount">유선전화</InputLabel>
          <Input
            id="standard-adornment-amount"
            defaultValue={bcData.bcinformation.bcPhone}
            startAdornment={<InputAdornment position="start"></InputAdornment>}
          />
        </FormControl>

        <FormControl fullWidth className={classes.margin}>
          <InputLabel htmlFor="standard-adornment-amount">주소</InputLabel>
          <Input
            id="standard-adornment-amount"
            defaultValue={bcData.bcinformation.bcAddr}
            startAdornment={<InputAdornment position="start"></InputAdornment>}
          />
        </FormControl>

        </form>
 
     

       

      </>
      
    );
  }