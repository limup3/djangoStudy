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
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import Fab from '@material-ui/core/Fab';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import DoneIcon from '@material-ui/icons/Done';
import { useLocation, useHistory } from 'react-router-dom';

//명함 직접입력

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
      },
      margin: {
        margin: theme.spacing(2),
      },
      withoutLabel: {
        marginTop: theme.spacing(3),
      },
      textField: {
        width: '25ch',
      },
      input: {
        display: 'none',
      }
    }));


  export default function BcTyping() {
 
    const classes = useStyles();

    const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
    });

    const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
    };

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
      <form className={classes.root} noValidate autoComplete="off">
        <Grid container>
        <Grid item xs={9}>
        <Paper elevation={0}>
        <ArrowBackIosIcon style={{marginLeft:'10px', marginBottom: '10px', float:'left', fontSize: 25}} onClick={handleBack} />
        <h2 style={{margin:'1rem', marginLeft:'50px'}}>직접입력</h2>
        </Paper>
        </Grid>
        <Grid item xs={3}>
        <Button startIcon={<DoneIcon />} style={{float:'right', marginTop:'15px',  color:'green'}} onClick={handleBack}>완료</Button> 
        </Grid>

      <Grid container>
      <FormControl style={{width:'65%'}} className={classes.margin}>
          <InputLabel htmlFor="standard-adornment-amount">이름</InputLabel>
          <Input
            id="standard-adornment-amount"
            value={values.amount}
            onChange={handleChange('amount')}
            startAdornment={<InputAdornment position="start"></InputAdornment>}
          />
        </FormControl>
        <Grid item xs={3}>
        <AccountCircleIcon color="disabled" style={{ fontSize: 50, float:'right', marginTop: '15px', padding:'0.5rem' }}/>
        </Grid>
        </Grid>
        </Grid>
        
        <FormControl fullWidth className={classes.margin}>
          <InputLabel htmlFor="standard-adornment-amount">직책</InputLabel>
          <Input
            id="standard-adornment-amount"
            // value={values.amount}
            // onChange={handleChange('amount')}
            startAdornment={<InputAdornment position="start"></InputAdornment>}
          />
        </FormControl>

        <FormControl fullWidth className={classes.margin}>
          <InputLabel htmlFor="standard-adornment-amount">부서</InputLabel>
          <Input
            id="standard-adornment-amount"
            // value={values.amount}
            // onChange={handleChange('amount')}
            startAdornment={<InputAdornment position="start"></InputAdornment>}
          />
        </FormControl>

        <FormControl fullWidth className={classes.margin}>
          <InputLabel htmlFor="standard-adornment-amount">회사</InputLabel>
          <Input
            id="standard-adornment-amount"
            // value={values.amount}
            // onChange={handleChange('amount')}
            startAdornment={<InputAdornment position="start"></InputAdornment>}
          />
        </FormControl>

        <FormControl fullWidth className={classes.margin}>
          <InputLabel htmlFor="standard-adornment-amount">휴대폰</InputLabel>
          <Input
            id="standard-adornment-amount"
            // value={values.amount}
            // onChange={handleChange('amount')}
            startAdornment={<InputAdornment position="start"></InputAdornment>}
          />
        </FormControl>

        <FormControl fullWidth className={classes.margin}>
          <InputLabel htmlFor="standard-adornment-amount">이메일</InputLabel>
          <Input
            id="standard-adornment-amount"
            // value={values.amount}
            // onChange={handleChange('amount')}
            startAdornment={<InputAdornment position="start"></InputAdornment>}
          />
        </FormControl>

        <FormControl fullWidth className={classes.margin}>
          <InputLabel htmlFor="standard-adornment-amount">유선전화</InputLabel>
          <Input
            id="standard-adornment-amount"
            // value={values.amount}
            // onChange={handleChange('amount')}
            startAdornment={<InputAdornment position="start"></InputAdornment>}
          />
        </FormControl>

        <FormControl fullWidth className={classes.margin}>
          <InputLabel htmlFor="standard-adornment-amount">주소</InputLabel>
          <Input
            id="standard-adornment-amount"
            // value={values.amount}
            // onChange={handleChange('amount')}
            startAdornment={<InputAdornment position="start"></InputAdornment>}
          />
        </FormControl>

        <FormControl fullWidth className={classes.margin}>
          <InputLabel htmlFor="standard-adornment-amount">영문 이름</InputLabel>
          <Input
            id="standard-adornment-amount"
            // value={values.amount}
            // onChange={handleChange('amount')}
            startAdornment={<InputAdornment position="start"></InputAdornment>}
          />
        </FormControl>

        <FormControl fullWidth className={classes.margin}>
          <InputLabel htmlFor="standard-adornment-amount">영문 회사명</InputLabel>
          <Input
            id="standard-adornment-amount"
            // value={values.amount}
            // onChange={handleChange('amount')}
            startAdornment={<InputAdornment position="start"></InputAdornment>}
          />
        </FormControl>

        <FormControl fullWidth className={classes.margin}>
          <InputLabel htmlFor="standard-adornment-amount">영문 직책</InputLabel>
          <Input
            id="standard-adornment-amount"
            // value={values.amount}
            // onChange={handleChange('amount')}
            startAdornment={<InputAdornment position="start"></InputAdornment>}
          />
        </FormControl>

        <FormControl fullWidth className={classes.margin}>
          <InputLabel htmlFor="standard-adornment-amount">영문 부서</InputLabel>
          <Input
            id="standard-adornment-amount"
            // value={values.amount}
            // onChange={handleChange('amount')}
            startAdornment={<InputAdornment position="start"></InputAdornment>}
          />
        </FormControl>

        <FormControl fullWidth className={classes.margin}>
          <InputLabel htmlFor="standard-adornment-amount">영문 주소</InputLabel>
          <Input
            id="standard-adornment-amount"
            // value={values.amount}
            // onChange={handleChange('amount')}
            startAdornment={<InputAdornment position="start"></InputAdornment>}
          />
        </FormControl>

        </form>

        <Fab color="secondary" aria-label="add" 
    style={{
        float: "right",
        position: "sticky",
        margin: "1rem",
        bottom: "80px", 
        display: "flex",
    }} 
    >
          {/* <input type="file" accept="image/*" capture="camera" /> */}
     <input accept="image/*" capture="camera" className={classes.input} id="icon-button-file" type="file" />
      <label htmlFor="icon-button-file">
        <IconButton color="inherit" aria-label="upload picture" component="span">
          <AddAPhotoIcon />
        </IconButton>
      </label>
    </Fab>

     

       

      </>
      
    );
  }