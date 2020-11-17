import styled from 'styled-components';

const StyledRootDiv = styled.div`
  margin: 0 auto;
  background: black;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  
  & img {
    max-width: 80%;
    max-height: 80%;
  }
`;

export default StyledRootDiv;