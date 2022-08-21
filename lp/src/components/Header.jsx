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

const Wrap = styled.h1`
  font-size: 25px;
`;

const Header = () => {
    function handleClick() {
        let div = document.querySelector('.div');
        div.classList.toggle('active');

        if (div.classList.contains('active')) {
            div.innerHTML = '<h1>Hello World</h1>';
        } else {
            div.innerHTML = '<h1>Hello</h1>';
        }
    }

    return (
        <HeaderWrapper>
            <Title>Learn React</Title>
            <Wrap className='div' onClick={handleClick}><h1>Hello</h1></Wrap>
        </HeaderWrapper>
    );
};

export default Header;

