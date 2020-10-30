import React from "react";
import "./Login.css";
import { auth, provider } from "./firebase";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";
import { useHistory } from "react-router-dom";

function Login({ color }) {
  const history = useHistory();
  const [{}, dispatch] = useStateValue();
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => alert(error.message));
    history.push("/");
  };

  return (
    <div
      className="login"
      style={{
        borderColor: `${color}`,
        display: "flex",
        flexDirection: "column",
        color: `${color}`,
      }}
    >
      <button
        type="submit"
        onClick={signIn}
        className="customBtn"
        style={{
          color: `${color}`,
          borderColor: `${color}`,
          marginTop: "32vh",
          borderRadius: "50px",
        }}
      >
        Sign In With Google
      </button>
    </div>
  );
}

export default Login;
