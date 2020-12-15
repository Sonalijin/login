import React, { useState } from "react";

const ProfileLook = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
  };
  const style = {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#fff",
    marign: "auto",
    height: 500,
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <div style={style}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marign: "auto",
        }}
      >
        <div
          style={{
            flex: "start",
            border: "3px solid #f1f1f1",
            boxShadow: "0 0 0 3px #f1f1f1",
            width: 240,
            padding: 4,
            textAlign: "center",
            fontFamily: "arial",
            fontSize: 18,
            cursor: "pointer",
          }}
        >
          <b>Login</b>
        </div>
        <div
          style={{
            border: "3px solid #f1f1f1",
            boxShadow: "0 0 0 3px #f1f1f1",
            width: 240,
            padding: 4,
            textAlign: "center",
            fontFamily: "arial",
            fontSize: 18,
            cursor: "pointer",
          }}
        >
          <b>Register</b>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          border: "3px solid #f1f1f1",
          boxShadow: "0 0 0 3px #f1f1f1",
          width: 500,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            borderWidth: 2,
            borderRadius: 150 / 2,
            padding: 5,
          }}
        >
          <img
            src="woman.png"
            alt="Avatar"
            style={{
              height: 150,
              width: 150,
              borderRadius: 150 / 2,
            }}
          />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItem: "center",
            fontFamily: "arial",
            fontSize: 18,
            //textAlign: "center",
          }}
        >
          <div>
            <div htmlFor="username">
              <b>Username</b>
            </div>
            <input
              type="username"
              placeholder="Enter Username"
              style={{
                width: "100%",
                paddingTop: "10px",
                margin: "8px 0",
                display: "inline-block",
                border: "none",
                boxSizing: "border-box",
                borderBottom: "1px solid #000",
                boxShadow: "0 0 0 3px #f1f1f1",
              }}
              required
              onChange={(e) => {
                setUserName(e.target.value);
              }}
              value={userName}
            />
          </div>
          <div>
            <div htmlFor="password" name="password">
              <b>Password</b>
            </div>
            <input
              type="password"
              placeholder="Enter Password"
              style={{
                width: "100%",
                paddingTop: "10px",
                margin: "8px 0",
                display: "inline-block",
                border: "none",
                boxSizing: "border-box",
                borderBottom: "1px solid #000",
                boxShadow: "0 0 0 3px #f1f1f1",
              }}
              required
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              value={password}
            />
          </div>
          <div>
            <div>
              <button
                type="submit"
                value="Login"
                style={{
                  color: "white",
                  padding: "14px 20px",
                  margin: "20px 0",
                  border: "none",
                  cursor: "pointer",
                  width: "100%",
                  backgroundColor: "#4CAF50",
                  borderRadius: 50,
                  textAlign: "center",
                }}
                onClick={submitHandler}
              >
                Login
              </button>
            </div>

            <div>---------- or Sign in with ------------</div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                margin: "10px 0",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  overflow: "hidden",
                  borderWidth: 2,
                  borderRadius: 50,
                  padding: 5,
                  margin: "5px 0",
                  border: "none",
                  cursor: "pointer",
                  width: "40%",
                  backgroundColor: "white",
                  textAlign: "center",
                  border: "3px solid blue",
                  fontFamily: "arial",
                  fontWeight: 400,
                  fontSize: 16,
                }}
              >
                <img
                  src="facebook.png"
                  alt="Avatar"
                  style={{
                    height: 20,
                    width: 20,
                    borderRadius: 20 / 2,
                  }}
                />
                Facebook
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  overflow: "hidden",
                  borderWidth: 2,
                  borderRadius: 50,
                  padding: 5,
                  margin: "5px 0",
                  border: "none",
                  cursor: "pointer",
                  width: "40%",
                  backgroundColor: "white",
                  textAlign: "center",
                  border: "3px solid red",
                  fontFamily: "arial",
                  fontSize: 16,
                  fontWeight: 400,
                }}
              >
                <img
                  src="google-plus.png"
                  alt="Avatar"
                  style={{
                    height: 20,
                    width: 20,
                    borderRadius: 20 / 2,
                  }}
                />
                Google
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileLook;
