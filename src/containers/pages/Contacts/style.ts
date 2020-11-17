import styled from 'styled-components';

const StyledContacts = styled.div`
  margin: 0 auto;
  background: white;
  width: 100%;
  height: 100vh;
  
  .body {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    .map {
      width: 100%;
      height: 400px;
    }
    
    .contacts {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      padding: 50px;
      
      .info{
        padding: 40px;
        display: block;
        justify-content: center;
        align-items: center;
        width: 50%;
      }
      
      .btns {
        display: flex;
        padding: 40px;
        flex-direction: column;
      }
    }
    
  }
  
`;

export default StyledContacts;