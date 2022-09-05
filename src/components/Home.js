import React from "react";
import styled from "styled-components";
import { BiSearch } from "react-icons/bi";
import { MdChatBubbleOutline } from "react-icons/md";
import { FiBell } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";

export default function styling() {
  const Header = styled.header`
    height: 55px;
    position: relative;
    display: flex;
    border-bottom: 1px solid rgba(72, 94, 144, 0.16);
  `;
  const Do = styled.div`
    font-size: 23px;
    font-weight: 800;
    color: rgb(3, 26, 97);
    padding: 10px 10px;
  `;
  const Ar = styled.div`
    font-size: 22px;
    font-weight: 300;
    font-family: "IBM Plex Sans", sans-serif;
    color: rgb(1, 104, 250);
    display: inline-block;
  `;
  const NavBar = styled.div`
    font-weight: 500;
    color: rgb(0, 23, 55);
    position: absolute;
    display: flex;
    left: 400px;
    li {
      display: inline;
    }
  `;
  const A = styled.a`
    text-decoration: none;
    color: rgb(27, 46, 75);
  `;
  const Div = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    position: relative;
    left: 1120px;
  `;
  const Content = styled.div`
    img {
      width: 600px;
      height: 390px;
      padding: 20px 100px;
    }
  `;
  const DIV = styled.div`
    padding: 50px 50px;
  `;
  const Para = styled.p`
    font-size: 12px;
    text-align: center;
    position: absolute;
  `;
  const FORM = styled.div`
    width: 300px;
    height: 500px;
    font-size: 15px;
    position: absolute;
    left: 900px;
    top: 80px;
    font-family: "IBM Plex Sans", sans-serif;
  `;
  const H3 = styled.h3`
    color: rgb(0, 23, 55); ;
  `;
  const P = styled.text`
    font-size: 13px;
    color: rgb(131, 146, 165);
  `;
  const INPUT = styled.input`
    width: 100%;
    height: 32px;
    color: rgb(27, 46, 75);
    background-color: rgb(255, 255, 255);
    border: 1px solid rgb(192, 204, 218);
    border-radius: 4px;
  `;
  const A1 = styled.a`
    font-size: 13px;
    text-decoration: none;
    color: rgb(1, 104, 250);
  `;
  const Button1 = styled.button`
      width: 100%;
      height: 7%;
      color: rgb(255, 255, 255);
      background-color: rgb(4, 40, 147);
      border:1px solid rgb(4, 40, 147);
      border-radius: 4px;
      cursor: pointer;
    }
  `;
  const Button2 = styled.button`
      width: 100%;
      height: 7%;
      color: rgb(64, 100, 172);
      background:transparent;
      border: 1px solid rgb(64, 100, 172);
      border-radius: 4px;
      cursor: pointer;
    }
  `;
  const Button3 = styled.button`
      width: 100%;
      height: 7%;
      color: rgb(0, 167, 230);
      background:transparent;
      border:1px solid rgb(0, 167, 230);
      border-radius: 4px;
      cursor: pointer;
    }
  `;
  const Footer = styled.footer`
    font-size: 11px;
    font-family: -apple-system, BlinkMacSystemFont, "Inter UI", Roboto,
      sans-serif;
    text-transform: uppercase;
    padding: 15px 25px;
    color: rgb(99, 115, 136);
    border-top: 1px solid rgba(72, 94, 144, 0.16);
    background-color: rgb(250, 251, 252);
  `;
  const NAVBAR = styled.div`
    position: absolute;
    left: 1090px;
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
          <ul>
            <li>
              <A href="">Dashboard</A> &emsp;
            </li>
            <li>
              <A href="">Apps</A> &emsp;
            </li>
            <li>
              <A href="">Pages</A> &emsp;
            </li>
            <li>
              <A href="">Components</A> &emsp;
            </li>
            <li>
              <A href="">Collections</A> &emsp;
            </li>
          </ul>
        </NavBar>
        <Div>
          <BiSearch size="20px" /> &emsp;
          <MdChatBubbleOutline size="20px" /> &emsp;
          <FiBell size="20px" /> &emsp; &nbsp;
          <FaUserCircle size="30px" />
        </Div>
      </Header>
      <Content>
        <img
          src="https://doar-react.netlify.app/static/media/img15.7466a766337d9343c274.png"
          alt="Workspace"
        />
        <DIV>
          <Para>
            Workspace design vector is created by{" "}
            <A1 href=""> pikisuperstar (freepik.com) </A1>
          </Para>
        </DIV>
      </Content>
      <FORM>
        <H3>Sign In</H3>
        <P>Welcome back! Please sign in to continue.</P>
        <br></br>
        <br></br>
        <br></br>
        <label>Email address</label>
        <br></br>
        <INPUT
          type="text"
          id="firstName"
          placeholder="yourname@yourmail.com"
        ></INPUT>
        <br></br>
        <br></br>
        <label>
          Password &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;
          <A1 href="">Forgot password?</A1>
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
        <center>---------------------------OR--------------------------</center>
        <br></br>
        <Button2>Sign In with Facebook</Button2>
        <br></br>
        <br></br>
        <Button3>Sign In with Twitter</Button3>
        <br></br>
        <br></br>
        <center>
          <P>
            Don't have an account? <A1 href="">Create an Account</A1>
          </P>
        </center>
      </FORM>
      <Footer>
        <NAVBAR>
          <ul>
            <li>
              <A href="">Licences</A> &emsp;
            </li>
            <li>
              <A href="">Change Log</A> &emsp;
            </li>
            <li>
              <A href="">Get Help</A> &emsp;
            </li>
          </ul>
        </NAVBAR>
        <span>
          {" "}
          © Doar 2022 Made With <FiHeart color="red" size="15px" /> By{" "}
          <A href="">BootXperts</A>
        </span>
      </Footer>
    </div>
  );
}
