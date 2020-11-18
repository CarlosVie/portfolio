import styled from 'styled-components';

const StyledItem = styled.div`
  height: 80vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  cursor: pointer;

  .item {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    height:  70vh;
    margin: auto;
    width: 100%;
    
    img{
      position: relative;
      max-width: 100%;
      max-height: 90%;
    }
    
    h1 {
      position: absolute;
      top: 40%;
      left: 45%;
      font-family: 'Bebas Neue', cursive;
      font-size: 70px;
    }
    
    @media (max-width: 750px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: last;
      h1 {
        font-size: 20px;
        top: 20%;
      }
      
      img{
        height: 40%;
      }
    }
  }
`;

export default StyledItem;