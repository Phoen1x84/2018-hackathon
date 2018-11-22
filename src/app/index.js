import React from "react";
import PropTypes from "prop-types";
import { Placeholder } from "@sitecore-jss/sitecore-jss-react";
import componentFactory from "./componentFactory";

import "normalize.css";
import "./scss/_canvas.scss";
//import css from "assets/css/default.css";

const App = ({ route }) => {
  return (
    <div className="canvas">
      <Placeholder name="main" rendering={route} />
    </div>
  );
};

App.propTypes = {
  route: PropTypes.object
};

export default App;
