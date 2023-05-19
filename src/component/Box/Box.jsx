import React from 'react';
import styled from "styled-components";

const BoxEach = styled.div`

  margin: 15px;
  border-radius: 5px;
  display: inline-block;
  background-color:rgb(85, 89, 92);
  width: 350px;
  height: 380px;

`;
const BoxText =styled.div`

  border-radius: 5px;
background-color: transparent;
width: 350px; height: 220px;
color: white;
display: flex;
justify-content: center;
align-items: center;

`;


const TextBox=styled.div`
  height: 160px;
  background-color: #ffffff;
  border: 1px solid gray;
  border-radius: 1%;
  align-items: center;
  justify-content: center;
  padding-top: 50px;
  padding: 15px 20px;
  box-sizing: border-box;
  
`;


const Text = styled.p`
  font-size: 15px;
  text-align: center;


`;


const Textbtn =styled.button`
  width  :50px ;
  height: 30px;
background-color: white;
border: 1px solid gray;
border-radius: 5%;
cursor: pointer;

`;

const Min=styled.p`
  display: flex;
  margin-top: 30px;
`;

const Mtext=styled.p`
   text-indent: 150px;
`
const Box = (props) => {
    return (
        <div>
            <BoxEach><BoxText>Thumbnail</BoxText>
            <TextBox>
                <Text style={{textAlign: "left"}}>{props.Text}<br/> </Text>
                <Min>
                <Textbtn>{props.BtnText1}</Textbtn>
                <Textbtn>{props.BtnText2}</Textbtn> <Mtext>9mins </Mtext>
                </Min> 
                           </TextBox>
                
            </BoxEach>
        </div>
    );
};

export default Box;