import styled from 'styled-components';

const StyledRootDiv = styled.div`
  margin: 0 auto;
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 100px 0;
  background-color: black;
  
  .section-title {
    color: white;
    display: flex;
    justify-content: center;
    font-family: 'Bebas Neue', cursive;
    font-size: 60px;
    padding: 30px;
  }
  
  .timeline {
    width: 80%;
    height: auto;
    max-width: 1400px;
    margin: 0 auto;
    position: relative;
  }
  
  .timeline ul {
    list-style: none;
  }
  
  .timeline ul li {
    padding: 20px;
    border-radius: 10px;
    margin-bottom: 20px;
    cursor: pointer;
    color: #6F6F6F;
  }
  
  .timeline ul li p {
    color: white;
  }
  
  .timeline ul li:last-child {
    margin-bottom: 0;
  }
  
  .timeline-content h1 {
    font-weight: 500;
    font-size: 25px;
    line-height: 30px;
    margin-bottom: 10px;
    padding: 10px;
    display: flex;
    justify-content: center;
  }
  
  .timeline-content p {
    font-size: 16px;
    line-height: 30px;
    font-weight: 300;
  }
  .timeline-content .date {
    font-size: 12px;
    font-weight: 300;
    margin-bottom: 10px;
    letter-spacing: 2px;
  }
  
  .imgDiv {
    background: #ededed;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
  }
  
  .imgDiv img {
    width: 50%;
    height: 50%;
  }
  
  @media only screen and (min-width: 768px) {
    .timeline ul li {
      width: 50%;
      position: relative;
      margin-bottom: 50px;
    }
    .timeline ul li:nth-child(odd) {
      float: left;
      clear: right;
      transform: translateX(-30px);
      border-radius: 20px;
    }
    .timeline ul li:nth-child(even) {
      float: right;
      clear: left;
      transform: translateX(30px);
      border-radius: 20px;
    }
  }

`;

export default StyledRootDiv;