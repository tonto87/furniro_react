import React, { useState, useReducer } from "react";
import { LoginSignupStyle } from "../LoginSignup/styles";
import LoginPage from "../../components/loginComponents/loginPage";
import RegisterPage from "../../components/loginComponents/registerPage";
import ProfilPage from "../../components/loginComponents/profilPage";

const initialState = { users: [] };

const ACTIONS = {
  ADD_USER: "addUser",
  CHANGE_USER: "changeUser",
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_USER:
      return { ...state, users: [...state.users, action.payload] };
    case ACTIONS.CHANGE_USER:
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.payload.id ? { ...user, ...action.payload } : user
        ),
      };
    default:
      return state;
  }
};

const LoginSignup = () => {
  const [signIn, setSignIn] = useState(null);
  const [state, dispatch] = useReducer(reducer, initialState);
  const [loggeduser, setLoggedUser] = useState({});

  const handleLogin = ({ username, password }) => {
    const foundUser = state.users.find(
      (user) =>
        user.username === username && user.password === password && user.id
    );
    if (foundUser) {
      alert("Welcome");
      setLoggedUser(foundUser);
    } else {
      alert("User not found");
    }
  };

  const handleRegister = ({ id, username, password, email }) => {
    const regUser = state.users.find(
      (user) =>
        id === id &&
        user.username === username &&
        user.password === password &&
        user.email === email
    );
    if (regUser) {
      alert("Already registered");
    } else {
      dispatch({
        type: ACTIONS.ADD_USER,
        payload: { id, username, password, email },
      });
      alert("Registration successful");
    }
  };

  const handleProfile = ({ id, username, password, email }) => {
    const changeUser = state.users.find((user) => user.id === id);
    if (changeUser) {
      dispatch({
        type: ACTIONS.CHANGE_USER,
        payload: { id, username, password, email },
      });
      alert("Credentials Successfully Changed");
    } else {
      alert("Nothing changed");
    }
  };

  const handleSignIn = (value) => {
    setSignIn(value);
  };

  console.log(state.users);

  return (
    <LoginSignupStyle>
      <div className="formbody">
        <div className="btns">
          <button onClick={() => handleSignIn(true)}>sign in</button>
          <button onClick={() => handleSignIn(false)}>sign up</button>
        </div>
        {signIn && <LoginPage onClick={handleLogin} />}
        {signIn === false && <RegisterPage onClick={handleRegister} />}
        {/* <ProfilPage onClick={handleProfile} loggeduser={loggeduser} /> */}
      </div>
    </LoginSignupStyle>
  );
};

export default LoginSignup;
