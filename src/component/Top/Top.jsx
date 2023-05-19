import React from 'react';
import styled from "styled-components";
import {CiCamera} from "react-icons/ci";
import {AiOutlineMenu} from "react-icons/ai"


const Topp =styled.nav`

    background-color: #343a40;
    justify-content: space-between;
`;


const Text =styled.h2`
    color: white;
    text-align: justify;
    line-height: 55px;
    text-indent: 200px;
    display: inline-block;

`;

const Menubar =styled.button`
   
    background-color:transparent;
    position: center;
    float: right;
    //padding-left:1000px ;
    margin-left: 1000px;
    padding-top:10px;
    cursor: pointer;

`;


const Top = (props) => {
    return (
        <>
            <Topp>
                <Text> < CiCamera color="white" />{props.text}
                <Menubar><AiOutlineMenu color='white' size="25px" float='right'  ></AiOutlineMenu></Menubar>
                </Text>
              

            </Topp>
        </>
    );
};

export default Top;