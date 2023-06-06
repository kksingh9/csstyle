import React, { useState, useEffect, useReducer, useContext, useRef } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import AuthContext from '../../store/auth-context';
import Input from '../UI/Input/Input';

const emailReducer = (state, action) => {
  if(action.type === 'USER_INPUT'){
    return { value: action.val, isValid: action.val.includes('@')};
  }
  if(action.type === 'INPUT_BLUR'){
    return { value: state.value, isValid: state.value.includes('@') };
  }
  return { value: '', isValid: false };
};
const passwordReducer = (state, action) => {
  if(action.type === 'USER_INPUT'){
    return { value: action.val, isValid: action.val.trim().length > 6};
  }
  if(action.type === 'INPUT_BLUR'){
    return { value: state.value, isValid: state.value.trim().length > 6 };
  }
  return { value: '', isValid: false };
};


const Login = ( ) => {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();
  // const [enteredCollege, setEnteredCollege] = useState('');
  // const [collegeIsValid, setCollegeIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: '',
    isValid: null,
  });
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: '',
    isValid: null,
  });

  const authctx = useContext(AuthContext);
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const {isValid: emailIsValid} = emailState;
  const {isValid: passwordIsValid} = passwordState;

  useEffect(() => {
    const identifers= setTimeout( () => {
      console.log('Check Validity');
    setFormIsValid(
     emailIsValid && passwordIsValid
    );
  }, 500);
  return () => {
    console.log('Clean Up');
    clearTimeout(identifers);
  }
  }, [emailIsValid, passwordIsValid]);

  const emailChangeHandler = (event) => {
    //setEnteredEmail(event.target.value);
    dispatchEmail({type: 'USER_INPUT', val: event.target.value});
    
    setFormIsValid(
      event.target.value.includes('@') && passwordState.isValid
    );
  };

  const passwordChangeHandler = (event) => {
    //setEnteredPassword(event.target.value);
    dispatchPassword({type: 'USER_INPUT', val: event.target.value});
    setFormIsValid(
      //event.target.value.trim().length > 6 && enteredEmail.includes('@')
      event.target.value.trim().length > 6 && emailState.isValid
    );
  };
  // const collegeChangeHandler = (event) => {
  //   setEnteredCollege(event.target.value);
  //   // setFormIsValid(
  //   //   event.target.value.trim().length > 6 && enteredEmail.includes('@')
  //   // );
  // };

  const validateEmailHandler = () => {
    //setEmailIsValid(emailState.isValid);
    dispatchEmail({type: 'INPUT_BLUR'});
  };

  const validatePasswordHandler = () => {
    //setPasswordIsValid(enteredPassword.trim().length > 6);
    dispatchPassword({type: 'INPUT_BLUR'});
  };
  // const validateCollegeHandler = () => {
  //   setCollegeIsValid(enteredCollege.trim().length > 7);
  // };

  const submitHandler = (event) => {
    event.preventDefault();
    //props.onLogin(emailState.value, passwordState.value, enteredCollege);
    if (formIsValid){
    authctx.onLogin(emailState.value, passwordState.value);
     emailInputRef.current.focus();
    } else{
      passwordInputRef.current.focus();
    }
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input 
          ref={emailInputRef}
          type = "email"
          id="email"
          label="E-Mail"
          isValid={emailIsValid}
          value={emailState.value}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        />
         <Input 
          ref={passwordInputRef}
          type = "password"
          id="password"
          label="Password"
          isValid={passwordIsValid}
          value={passwordState.value}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        />
        {/* <div
          className={`${classes.control} ${
            collegeIsValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="college">College</label>
          <input
            type="text"
            id="college"
            value={enteredCollege}
            onChange={collegeChangeHandler}
            onBlur={validateCollegeHandler}
          />
        </div> */}
        <div className={classes.actions}>
          <Button type="submit" 
          className={classes.btn} 
          //disabled={!formIsValid}
          >
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;