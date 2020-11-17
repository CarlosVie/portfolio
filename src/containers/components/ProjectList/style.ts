import styled from 'styled-components';

const StyleProjectList = styled.div`
  margin: 0 auto;
  padding: 0 200px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: black;
  
  h1 {
    padding: 10px 0 50px;
    color: white;
    font-family: 'Bebas Neue', cursive;
  }
  
  @media (max-width: 750px) {
    padding: 0;
  }
`;


export default StyleProjectList;