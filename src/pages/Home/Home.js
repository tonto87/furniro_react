import React, { useContext, useEffect } from "react";
import { AppContext } from "../../context/AppContext";
import { appActions } from "../../reducer/appReducer";
import { LangContext } from "../../context/LangContext";
import { Title } from "./styles";

const Home = () => {
  const { state, dispatch } = useContext(AppContext);
  const { lang, changeLang } = useContext(LangContext);

  const handleClick = () => {
    dispatch({ type: appActions.DECREMENT });
  };

  const langChange = () => {
    changeLang(lang === "az" ? "en" : "az");
  };

  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: appActions.LOGIN });
      dispatch({ type: appActions.UPDATE_PROFILE, payload: { name: "FIRI" } });
    }, 1000);
  }, []);

  const textMapper = {
    en: { head: "Home Page", btnDecrase: "Decrease", pCounter: "Counter: " },
    az: { head: "Ana Sehife", btnDecrase: "Azaltmaq", pCounter: "Sayac: " },
  };

  return (
    <div>
      <Title>
        {textMapper[lang].head}

        <button onClick={langChange}>{lang}</button>
      </Title>
      <button onClick={handleClick}>{textMapper[lang].btnDecrase}</button>
      <p>
        {textMapper[lang].pCounter} {state.counter}
      </p>

      <p>{state.user.isLoggedIn ? <div>{state.user.name}</div> : "NO User"}</p>
    </div>
  );
};

export default Home;
