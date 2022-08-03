import React from 'react';
import styled from "styled-components";

const HeaderWrapper = styled.div`
  width: 100%;
  max-width: 1920px;
  height: 70px;
`;

const Title = styled.h1`
  font-size: 25px;
`;

const Header = () => {
    return (
        <HeaderWrapper>
            <Title>Learn React</Title>
        </HeaderWrapper>
    );
};

export default Header;

