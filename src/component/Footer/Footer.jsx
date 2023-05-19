import React from 'react';
import styled from "styled-components";

const Foot= styled.div`
width:100%;
height: 150px;
background-color: white;


`;

const FootText=styled.p`
    margin-left: 190px;
    margin-top: 50px;
    font-weight: 100;
`

const StyledLink =styled.link`
    color: aqua;
`;
const Footer = () => {
    return (
 <Foot><FootText>Album example is © Bootstrap, but please download and customize it for yourself!

 <br/>New to Bootstrap? Visit the homepage
  or read our getting started guide.
 
 </FootText>
 </Foot>
    );
};

export default Footer;