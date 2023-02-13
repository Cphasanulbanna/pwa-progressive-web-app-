import React from 'react';
import styled from 'styled-components';
import logo from "../../Assets/Images/logo.svg";

export default function Header() {
  return (
    <>
      <HeaderSection>
        <Divlogo>
          <Heading>
            <LogoImage src={logo} alt="img"/>
          </Heading>
        </Divlogo>
        <DivButton>
          <Link>Login</Link>
        </DivButton>
      </HeaderSection>
    </>
  )
}

const HeaderSection = styled.header`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  width: 90%;
  align-items: center;
  padding: 20px 0;
`;
const Divlogo = styled.div``;
const Heading = styled.h1`
  cursor: pointer;
  width: 100px;
`;
const LogoImage = styled.img`
  width: 100%;
  display: block;
`;
const DivButton = styled.div``;
const Link = styled.a`
  color: #fff;
  background-color: #046bf7;
  padding: 10px 32px;
  border-radius: 5px;
  display: inline-block;
  cursor: pointer;
`;

