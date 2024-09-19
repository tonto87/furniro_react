import React, { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";
import { appActions } from "../../reducer/appReducer";
import { Title } from "./styles";

const About = () => {
  const [hidden] = useState(true);
  const { dispatch } = useContext(AppContext);

  return (
    <div>
      <button onClick={() => dispatch({ type: appActions.INCREMENT })}>
        Increase
      </button>
      <Title $hide={hidden}>About Page</Title>
      <p>This is a simple app using React Router, Context, and useReducer.</p>
    </div>
  );
};

export default About;
