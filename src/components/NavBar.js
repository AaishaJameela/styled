import React from "react";
import styles from "styled-components";

export default function Navbar() {
  const Header = styles.header`
    height: 90px;
    color: white;
    position:relative;
    padding: 20px;
    background-color: pink;

    img{
      width: 90px;
      height: 60px;
    }
  `;
  const Content = styles.div`
    img{
      position: relative;
      left: 30px;
      top: 30px;
      width: 700px;
      height: 500px;
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
    `;
  const Button = styles.button`
      color: white;
      background-color:grey;
      border:2px solid blue;
      width: 180px;
    }
  `;
  const Footer = styles.footer`
    height: 90px;
    color: white;
    position:relative;
    background-color: pink;
  `;
  return (
    <div>
      <Header>
        <img src="https://etimg.etb2bimg.com/photo/93130023.cms" alt="Sedin" />
        <center>
          <h5>Dashboard Apps Pages Components Collections</h5>
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
          <h2>Welcome back! Please sign in to continue.</h2>
        </center>
        <label>
          <b>Email address</b>
        </label>
        <br></br>
        <input
          type="text"
          id="firstName"
          placeholder="yourname@yourmail.com"
        ></input>
        <br></br>
        <label>
          <b>Password Forgot password?</b>
        </label>
        <br></br>
        <input
          type="text"
          id="lastName"
          placeholder="Enter your password"
        ></input>{" "}
        <br></br>
        <Button>Sign In</Button>
        <br></br>
        OR<br></br>
        <Button>Sign In with Facebook</Button>
        <br></br>
        <Button>Sign In with Twitter</Button>
        <br></br>
        Don't have an account? <a href="">Create an Account</a>
      </FORM>
      <Footer>
        <h3>Made by Aaisha</h3>
        <h3>Licences Change Get Help</h3>
      </Footer>
    </div>
  );
}
