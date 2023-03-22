import React from "react";
import logo from "../img/logo.png";
import telegram from "../img/telegram.png";
import whatsapp from "../img/whatsapp.png";
import viber from "../img/viber.png";
import "../css/Header.css";

const Header = () => {
  return (
    <header>
      <div id="logo_welbex">
        <img src={logo} alt="Логотип" />
        <p>крупный интегратор CRM в Росcии и ещё 8 странах</p>
      </div>
      <div id="menu">
        <a href="/">Услуги</a>
        <a href="/">Виджеты</a>
        <a href="/">Интеграции</a>
        <a href="/">Кейсы</a>
        <a href="/">Сертификаты</a>
      </div>
      <div id="contact_information">
        <a href="tel:+75555555555">+7 555 555-55-55</a>
        <a href="https://web.telegram.org">
          <img src={telegram} alt="telegram" />
        </a>
        <a href="https://web.whatsapp.com/">
          <img src={whatsapp} alt="whatsapp" />
        </a>
        <a href="https://www.viber.com/ru/">
          <img src={viber} alt="viber" />
        </a>
      </div>
    </header>
  );
};

export default Header;
