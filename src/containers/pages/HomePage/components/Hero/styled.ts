import styled from 'styled-components';

export const StyledSHero = styled.div`
  color: white;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 80vh;
  flex-wrap: wrap;
  margin: 0 auto;
  gap: 70px;
  
  h1 {
    font-size: 75px;
  }
  
  p {
    position: absolute;
    top: 20%;
    left: 10%;
    color: white;
    font-size: 16px;
    height: 150px;
    width: 300px;
    padding: 10px;
    text-align: left;
  }
  
  img{
    position: absolute;
    max-height: 40px;
    max-width: 40px;
    left: 15%;
    top: 40%;
  }
  
  p:hover{
    color: black;
    background: white;
    border-radius: 10px;
  }
  
  @media (max-width: 750px) {
    height: 40vh;
    h1 {
      font-size: 50px;
    }
    
    p {
      font-size: 10px;
      height: 75px;
    }
  }
`;

export const StyledColorDiv = styled.div`
  margin: 0 auto;
  width: 100%;
  max-height: 80vh;
  display: flex;
  justify-content: center;
  position: absolute;
  align-items: center;
  ;
  .color-box {
    display: flex;
    background: #a513bf;
    width: 400px;
    height: 600px;
    border-radius: 10px;
  }
  
  @media (max-width: 750px) {
    .color-box {
      width: 200px;
      height: 300px;
    }
  }
`;

