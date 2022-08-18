import React from "react";
import styles from "styled-components";

export default function styling() {
  const Header = styles.header`
    height: 60px;
    color: white;
    position:relative;
    padding: 20px;
    background-color: pink;
    font-family: Times New Roman;

    img{
      width: 90px;
      height: 60px;
      position: absolute;
    }
  `;
  const Content = styles.div`
    img{
      position: relative;
      left: 30px;
      top: 30px;
      width: 750px;
      height: 1000px;
    }
  `;
  const FORM = styles.div`
    height: 900px;
    width:300px;
    color: black;
    position:absolute;
    left: 900px;
    top: 200px;
    background-color: white;
    font-family: Times New Roman;
    `;
  const INPUT = styles.input`
    width: 97%
  `;
  const Button1 = styles.button`
      color: white;
      background-color:pink;
      border:2px solid pink;
      border-radius: 4px;
      width: 100%;
    }
  `;
  const Button2 = styles.button`
      color: grey;
      background-color:#FFE4C4;
      border:2px solid grey;
      border-radius: 4px;
      width: 100%;
    }
  `;
  const Button3 = styles.button`
      color: grey;
      background-color:#FAEBD7;
      border:2px solid grey;
      border-radius: 4px;
      width: 100%;
    }
  `;
  const Footer = styles.footer`
    height: 70px;
    color: white;
    position:relative;
    background-color: pink;
    font-family: Times New Roman;
  `;
  return (
    <div>
      <Header>
        <img src="https://etimg.etb2bimg.com/photo/93130023.cms" alt="Sedin" />
        <center>
          <h3>Dashboard Apps Pages Components Collections</h3>
        </center>
      </Header>
      <Content>
        <img
          src="https://cdn.dribbble.com/users/389914/screenshots/6665910/__love_____.gif"
          alt="Workspace"
        />
      </Content>
      <FORM>
        <center>
          <h1>Sign In</h1>
          <p>Welcome back! Please sign in to continue.</p>
        </center>
        <label>
          <b>Email address</b>
        </label>
        <br></br>
        <INPUT
          type="text"
          id="firstName"
          placeholder="yourname@yourmail.com"
        ></INPUT>
        <br></br>
        <br></br>
        <label>
          <b>Password</b>
          <a href="">Forgot password?</a>
        </label>
        <br></br>
        <INPUT
          type="text"
          id="lastName"
          placeholder="Enter your password"
        ></INPUT>{" "}
        <br></br>
        <br></br>
        <Button1>Sign In</Button1>
        <br></br>
        <br></br>
        <center>OR</center>
        <br></br>
        <Button2>Sign In with Facebook</Button2>
        <br></br>
        <br></br>
        <Button3>Sign In with Twitter</Button3>
        <br></br>
        <br></br>
        <center>
          <p>
            Don't have an account? <a href="">Create an Account</a>
          </p>
        </center>
      </FORM>
      <Footer>
        <h3>Made by @Aaisha</h3>
      </Footer>
    </div>
  );
}
