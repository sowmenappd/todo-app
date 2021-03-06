import React from "react";
import LoginForm from "./LoginForm";

const LoginComponent = ({ onSubmit, onResponse, onBackPressed }) => {
  return (
    <>
      <div
        style={{
          fontSize: 50,
          marginTop: 30,
          marginBottom: 40,
          textAlign: "center",
        }}
      >
        <span style={{ color: "blueviolet" }}>Log</span>
        <span style={{ color: "darkmagenta" }}>in</span>
      </div>
      <LoginForm
        onSubmit={onSubmit}
        onResponse={onResponse}
        onBack={onBackPressed}
      />
    </>
  );
};

export default LoginComponent;
