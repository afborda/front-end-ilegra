import styled from "styled-components";

export const SearchMovieStyle = styled.section`
  background: #000;
  width: 100%;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;

  .search-form {
    width: 60%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .search-form-button--style {
    background: #e6b91e;
    font-weight: bold;
    padding: 17px;
    border-radius: 0px 5px 5px 0px;
    cursor: pointer;
  }

  .search-form-input--style {
    width: 500px;
    padding: 14.5px;
    font-size: 18px;
    letter-spacing: 1px;
    border-radius: 5px 0px 0px 5px;
    border: none;
  }
`;
