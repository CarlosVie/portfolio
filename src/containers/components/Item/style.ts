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
      left: 55%;
      font-family: 'Bebas Neue', cursive;
      font-size: 70px;
    }
    
    @media (max-width: 750px) {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    justify-items: center;
    margin: 10px;
    padding: 20px;
      h1 {
          position: initial;
          font-size: 10vw;
          grid-row: initial;
      }
      
      img {
        padding-bottom: 15px;
        position: initial;
      }
    
    }
 }
`;

export default StyledItem;