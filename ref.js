import React, { useState, useRef } from "react";
import "./form.css";
import ErrorModal from "../UI/ErrorModal";
//import classes from '../UI/Card';
const UserDetail = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  // const [EnterUsername, setEnterUsername] = useState("");
  // const [EnterUserAge, setEnterUserAge] = useState("");
  const [error, setError] = useState();

  // const onUsernameHandler = (event) => {
  //   setEnterUsername(event.target.value);
  // };
  // const onUserAgeHandler = (event) => {
  //   setEnterUserAge(event.target.value);
  // };

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;
    const userDetail = {
      userName: enteredName,
      userAge: enteredAge,
    };
    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }
    props.onSaveUserDetail(userDetail);
    // setEnterUserAge("");
    // setEnterUsername("");
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
  };
  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}

      <form onSubmit={submitHandler}>
        <div className="form-regs">
          <div className="form-reg">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              // onChange={onUsernameHandler}
              // value={EnterUsername}
              ref={nameInputRef}
              type="text"
            />
          </div>
          <div className="form-reg">
            <label htmlFor="age">Age (Years)</label>
            <input
              id="age"
              // onChange={onUserAgeHandler}
              // value={EnterUserAge}
              ref={ageInputRef}
              type="number"
            />
          </div>

          <div className="form-re">
            <button type="submit">Add User</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UserDetail;