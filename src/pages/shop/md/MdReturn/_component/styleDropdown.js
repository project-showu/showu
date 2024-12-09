import styled from 'styled-components';

const S = {};

  // S.DetailWrapper = styled.div`
  //   padding: 20px;
  //   background-color: black;
  //   color: white;
  // `

  // S.Dropdown = styled.div`
  //   margin-bottom: 30px;
  // `
  
  S.DropdownContainer = styled.div`
    margin-top: 10px;
    align-items: center;
    position: relative;
    display: inline-block;
    margin-left: 20px;
  `

  S.DropdownButton = styled.button` // 옵션 선택 박스
    /* min-width: 160px; */
    width: 300px;
    height: 35px;
    border-radius: 5px;
    background-color: #000;
    border: 0.5px solid white;
    cursor: pointer;
    
    & p {
      text-align: left;
      font-size: 17px;
      padding-left: 10px;
    }
  `

  S.DropdownContent = styled.div` // 옵션1, 옵션2, 옵션3
    display: block;
    position: absolute;
    background-color: #000;
    border: 0.5px solid white;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
    width: 300px;
    border-radius: 5px;
  `

  S.DropdownItem = styled.div`
    padding: 5px 16px;
    color: white;
    cursor: pointer;
    font-size: 17px;
    
    &:hover {
      background-color: #ffd400;
      color: #000;
    }
  `

export default S;