import React from "react";
import { loadingContext } from "../App";
import Spinner from "react-spinkit";

const Loading = ({ loading }) => {
  return loading ? (
    <div className="overlay-content">
      <loadingContext.Consumer>
        <div className="wrapper">
          <Spinner name="pacman" fadeIn="none" color="yellow" />
          <span className="message">Teste</span>
        </div>
      </loadingContext.Consumer>
    </div>
  ) : null;
};

export default Loading;
