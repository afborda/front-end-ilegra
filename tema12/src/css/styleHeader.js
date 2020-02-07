import styled from "styled-components";

export const Navigation = styled.nav` 
  width: 1280px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  padding: 10px;
  div img {
    width: 160px;
    height: 48px;
  }
  div {
    display: flex;
  }
  ul {
    align-items: center; 
    display: flex;
    list-style: none;

    li {
      margin: 0 10px 0 10px;
    }
   
    & p {
    }
    & div {
      width: 50px;
      background: #fff;
      display: flex;
      justify-content: space-around;
      align-items: center;
      border-radius: 8px;
      box-shadow: 0px 0px 5px 0px
    }

    & div img {
      width: 20px;
    }  
  } 
 
`;

export const HeaderStyle = styled.header`
  background: #000000;
  display: flex;
  justify-content: center;
`;
