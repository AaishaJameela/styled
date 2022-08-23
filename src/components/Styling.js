import React from "react";
import styled from "styled-components";
import { BiSearch } from "react-icons/bi";
import { MdChatBubbleOutline } from "react-icons/md";
import { FiBell } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";

export default function styling() {
  const Header = styled.header`
    position: relative;
    display: flex;
    height: 55px;
    border-bottom: 1px solid rgba(72, 94, 144, 0.16);
  `;
  const Button = styled.button`
    margin-left: auto;
    display: flex;
  `;
  const Do = styled.div`
    font-weight: 800;
    font-size: 23px;
    color: rgb(3, 26, 97);
    font-family: "IBM Plex Sans", sans-serif;
    padding: 10px 10px;
  `;
  const Ar = styled.div`
    display: inline-block;
    font-weight: 300;
    font-size: 22px;
    color: rgb(1, 104, 250);
    font-family: "IBM Plex Sans", sans-serif;
    padding: 10px 0px;
  `;
  const NavBar = styled.div`
    position: relative;
    left: 320px;
    li {
      display: inline;
    }
  `;
  const Content = styled.div`
    img {
      position: relative;
      width: 610px;
      height: 460px;
      padding: 50px 50px;
    }
  `;
  const DIV = styled.div`
    padding: 50px 50px;
  `;
  const FORM = styled.div`
    height: 900px;
    width: 300px;
    color: black;
    position: absolute;
    left: 900px;
    top: 200px;
    background-color: white;
    font-family: "IBM Plex Sans", sans-serif;
  `;
  const P = styled.text`
    font-size: 15px;
    color: rgb(131, 146, 165);
  `;
  const INPUT = styled.input`
    width: 97%;
    height: 3%;
  `;
  const Button1 = styled.button`
      color: white;
      background-color: blue;
      border:2px solid blue;
      border-radius: 4px;
      width: 100%;
      height: 4%;
    }
  `;
  const Button2 = styled.button`
      color: blue;
      background-color:white;
      border:2px solid blue;
      border-radius: 4px;
      width: 100%;
      height: 4%;
    }
  `;
  const Button3 = styled.button`
      color: lightblue;
      background-color:white;
      border:2px solid lightblue;
      border-radius: 4px;
      width: 100%;
      height: 4%;
    }
  `;
  const Footer = styled.footer`
    font-size: 10px;
    font-family: -apple-system, BlinkMacSystemFont, "Inter UI", Roboto,
      sans-serif;
    letter-spacing: 0.3px;
    padding: 15px 25px;
    background-color: rgb(250, 251, 252);
    color: rgb(99, 115, 136);
    border-top: 1px solid rgba(72, 94, 144, 0.16);
    text-transform: uppercase;
  `;
  const NAVBAR = styled.div`
    position: relative;
    left: 1050px;
    li {
      display: inline;
    }
  `;
  return (
    <div>
      <Header>
        <Do>
          do
          <Ar>ar</Ar>
        </Do>
        <NavBar>
          <center>
            <ul>
              <li>
                <a href="">Dashboard</a> &emsp;
              </li>
              <li>
                <a href="">Apps</a> &emsp;
              </li>
              <li>
                <a href="">Pages</a> &emsp;
              </li>
              <li>
                <a href="">Components</a> &emsp;
              </li>
              <li>
                <a href="">Collections</a> &emsp;
              </li>
            </ul>
          </center>
        </NavBar>
        <BiSearch /> &emsp;
        <MdChatBubbleOutline /> &emsp;
        <FiBell /> &emsp;
        <FaUserCircle />
      </Header>
      <Content>
        <img
          src="https://doar-react.netlify.app/static/media/img15.7466a766337d9343c274.png"
          alt="Workspace"
        />
        <DIV>
          <p>
            Workspace design vector is created by{" "}
            <a href=""> pikisuperstar (freepik.com) </a>
          </p>
        </DIV>
      </Content>
      <FORM>
        <center>
          <h3>Sign In</h3>
          <P>Welcome back! Please sign in to continue.</P>
          <br></br>
          <br></br>
          <br></br>
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
          <b>Password</b> &emsp;&emsp;&emsp;&emsp;&emsp;
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
        <center>-------------------------OR--------------------------</center>
        <br></br>
        <Button2>Sign In with Facebook</Button2>
        <br></br>
        <br></br>
        <Button3>Sign In with Twitter</Button3>
        <br></br>
        <br></br>
        <center>
          <P>
            Don't have an account? <a href="">Create an Account</a>
          </P>
        </center>
      </FORM>
      <Footer>
        <NAVBAR>
          <ul>
            <li>
              <a href="">Licences</a> &emsp;
            </li>
            <li>
              <a href="">Change Log</a> &emsp;
            </li>
            <li>
              <a href="">Get Help</a> &emsp;
            </li>
          </ul>
        </NAVBAR>
        <span>
          {" "}
          Doar 2022 Made With <FiHeart /> By BootXperts
        </span>
      </Footer>
    </div>
  );
}
