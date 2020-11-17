import styled from 'styled-components';

const StyledLoading = styled.div `
  margin: 0 auto;
  height: 100vh;
  text-align: center;
  align-items: center;
  & h1 {
    position: relative;
    top: 40px;
    color: white;
    font-size: 50px;
    font-family: 'Bebas Neue', cursive;
  }
  
  & img {
    position: relative;
    top: 40px;
    display: block;
    margin: auto;
    max-width: 100%;
    padding: 40px;
  }
`;

export default StyledLoading;