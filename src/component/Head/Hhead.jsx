import React from 'react';
import styled from "styled-components";

const Headd = styled.div`
width:100%;
height: 20%;
background-color: white;
height: 450px;

`;


const HeadText=styled.h1`
  text-align: center;
  margin-top: 100px;
  font-weight: lighter;
  font-size: 38px;
  
`;

const InText=styled.p`
  text-align: center;
 font-weight: 30;
  font-size: large;
  margin-top: 10px;
  letter-spacing: 2px;
`;

const Headbtn1 =styled.button`

   align-content: center;
   padding: 10px 10px 25px 10px;

    width  :auto ;
  height: 30px;
  margin : auto;display: block;
  background-color: #007bff;
  color: #fff;    border-color: #007bff;
  display: inline-block;
  margin-left: 600px;
  border-radius: 3px;
  margin-top: 30px;
  margin-right: 5px;
  font-size: medium;
  border: 1px;
  cursor: pointer;

`;

const Headbtn2 =styled.button`
   padding: 10px 10px 25px 10px;
border: 1px;
margin-left: 50px;
   text-align: center;
   font-size: medium;
    width  :auto ;
  height: 30px;
  margin : auto;display: block;
  color: #fff;
    background-color: #6c757d;
    border-color: #6c757d;
    display: inline-block;
    border-radius: 3px;
    cursor: pointer;

`;

const Hhead = (props) => {
    return (
<Headd>
<HeadText>Album example</HeadText>
<InText>Something short and leading about the collection below—its contents, <br/>the creator, etc. Make it short and sweet, but not too short so 
  folks don’t<br/> simply skip over it entirely.</InText>
<Headbtn1>{props.Text}</Headbtn1>
<Headbtn2>{props.Text2}</Headbtn2>

</Headd>


    );
};

export default Hhead;