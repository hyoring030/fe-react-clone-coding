// 해당 위치에 필요한 컴포넌트를 바탕으로 직접 Bootstrap Album 페이지를 개발하시면 됩니다.
import Top from "./component/Top/Top";
import React from "react";
import { GlobalStyle } from "./component/Styled/Styled";
import Box from "./component/Box/Box";
import styled from "styled-components";
import Hhead from "./component/Head/Hhead";
import Footer from "./component/Footer/Footer";

const Back=styled.div`
display: flex;
flex-wrap: wrap;

justify-content: center;
background-color: #f8f9fa;

	flex: 1 1 30%;


`;



function App() {
  return <> 
  <GlobalStyle/>
    <Top text="Album" />
    <Back>
      <Hhead Text="Main call to action" Text2="Secondary action"></Hhead>
    <Box Text="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer." 
     BtnText1="View" BtnText2="Edit"></Box>
     <Box Text="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer." 
     BtnText1="View" BtnText2="Edit"></Box>
     <Box Text="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer." 
     BtnText1="View" BtnText2="Edit"></Box>
     <Box Text="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer." 
     BtnText1="View" BtnText2="Edit"></Box>
     <Box Text="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer." 
     BtnText1="View" BtnText2="Edit"></Box>
     <Box Text="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer." 
     BtnText1="View" BtnText2="Edit"></Box>
     <Box Text="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer." 
     BtnText1="View" BtnText2="Edit"></Box>
     <Box Text="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer." 
     BtnText1="View" BtnText2="Edit"></Box>
     <Box Text="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer." 
     BtnText1="View" BtnText2="Edit"></Box>
     <Footer></Footer>
</Back>
  </>;


};


export default App;
