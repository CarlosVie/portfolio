import styled from 'styled-components';

const StyledFooter = styled.div`
  width: 100%;
  height: 50vh;
  background: black;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 30px;
  
  @media (max-width: 750px) {
    flex-direction: column;
    p {
      font-size: 10px;
    }
  }
  
  .contacts-section {
    width: 50%;
    height: 100%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    h1 {
      font-family: 'Bebas Neue', cursive;
      font-size: 70px;
      color: white;
    }
    img {
      max-width: 60%;
      max-height: 60%;
      border-radius: 180px;
    }
  }
  
  .licence-section {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    ul {
      list-style: none;
      display: flex;
      justify-content: space-between;
    }
    
    p {
      text-align: left;
      line-height: 5px;
    }
  }
  
  

`;

export default StyledFooter;