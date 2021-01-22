import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
`;

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between; 
    width:100%;
    background:#2E294E;
    font-size:25px;
    color: #FFF;
    padding:20px;
    border-bottom: 3px solid #d07373;   

    img {
    margin: 5px;
    width: 55px;
    cursor: pointer;
  }

  span {
      padding:15px;
  }

  .pseudo-search{
    width: 40%;
    display: inline;
    border: 2px solid #ccc;
    border-radius: 100px;
    padding: 10px 15px;
    
    input {
      border: 0;
      background-color: transparent;
      width: 95%;
      color:#ccc;


      &:focus {
        // Unsure how to fix this...
        outline: none;
      }
    }
  }
  
`;