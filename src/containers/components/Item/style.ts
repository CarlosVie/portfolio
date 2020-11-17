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
      h1 {
        font-size: 40px;
      }
      img{
        width: 80%;
        height: 70%;
      }
    }
  }
`;

export default StyledItem;