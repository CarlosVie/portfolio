import { MenuItem } from '@material-ui/core';
import styled from 'styled-components';

export const StyledDiv = styled.div `
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  height: 75px;
  
  & h1 {
    color: white;
    font-family: 'Bebas Neue', cursive;
    font-size: 50px;
    position: relative;
    left: 20px;
  }
  
  & ul {
    display: flex;
  }
 
  & li {
    list-style: none;
    margin: 10px;
    padding: 0 10px;
  }
  
  & a {
    text-decoration: none;
    color: white;
    font-size: 15px;
    font-family: 'Poppins', sans-serif;
  }
  
  & button {
    background: #0058FF;
    color: white;
    font-family: 'Poppins', sans-serif;
    width: 100px;
    border-radius: 30px;
    border-style: none;
    //box-shadow: 2px 2px white;
  }
  
  .menu{
    display: none;
  }
  
  @media (max-width: 750px) {
    h1 {
    text-align: center;
       font-size: 25px;
    }
    
    ul {
      display: none;
    }
    
    .menu {
      display: block;
    }
  }
`;

export const StyledMenuItem = styled(MenuItem)`
  & a {
    text-decoration: none;
    color: black;
    font-family: 'Bebas Neue', cursive;
    font-size: 15px;
  }
`;

