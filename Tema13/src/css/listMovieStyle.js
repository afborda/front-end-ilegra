import styled from "styled-components";

export const Section = styled.section`
  margin-top: 50px;

  .movie-list {
    display: flex;
    flex-wrap: wrap;
    max-width: 1200px;
    justify-content: center;
  }

  .resume-movie {
    background: #1c1c1c;
    border-radius: 10px;
    margin: 10px;
    width: 220px;
    flex-direction: column;
    justify-content: space-between;

    & h2 {
      padding: 5px;
      color: #fff;
      font-weight: bold;
    }

    & p {
      padding: 5px;
      color: #a9a9a9;
    }
  }

  .resume-movie-img {
    width: 220px;
    height: 280px;
  }

  .button-details {
    display: flex;
    justify-content: center;
    min-width: 100%;
    background: #e6b91e;
    margin-top: 5px;
    padding: 5px;
    border-radius: 0px 0px 10px 10px;
    transition: background;
  }

  .button-details:hover {
    background: #fff;
    transition-delay: 0.9s initial;
    text-decoration: underline;
  }

  .button-details--style {
    padding: 10px;
    font-weight: bold;
    font-size: 18px;
    cursor: pointer;
  }
`;
