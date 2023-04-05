import React from "react";
import logo from "../../img/logo_welbex.svg";
import telegram from "../../img/telegram.svg";
import whatsapp from "../../img/whatsapp.svg";
import viber from "../../img/viber.svg";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div id="logo_welbex">
        <img src={logo} alt="Welbex" />
        <p>крупный интегратор CRM в Росcии и ещё 8 странах</p>
      </div>
      <div id="menu">
        <a className="a" href="/">
          Услуги
        </a>
        <a className="a" href="/">
          Виджеты
        </a>
        <a className="a" href="/">
          Интеграции
        </a>
        <a className="a" href="/">
          Кейсы
        </a>
        <a className="a" href="/">
          Сертификаты
        </a>
      </div>
      <div id="contact_information">
        <a className="a tell" href="tel:+75555555555">
          +7 555 555-55-55
        </a>
        <a className="a" href="https://web.telegram.org">
          <img src={telegram} alt="telegram" />
        </a>
        <a className="a" href="https://www.viber.com/ru/">
          <img src={viber} alt="viber" />
        </a>
        <a className="a" href="https://web.whatsapp.com/">
          <img src={whatsapp} alt="whatsapp" />
        </a>
      </div>
    </header>
  );
};

export default Header;
