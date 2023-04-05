import React from "react";
import telegram from "../img/telegram.svg";
import whatsapp from "../img/whatsapp.svg";
import viber from "../img/viber.svg";
import "../css/Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="company">
        <h4>О КОМПАНИИ</h4>
        <p>Партнёрская программа</p>
        <p>Вакансии</p>
      </div>
      <div className="menu">
        <h4>МЕНЮ</h4>
        <div>
          <p>Расчёт стоимости</p>
          <p>Услуги</p>
          <p>Виджеты</p>
          <p>Интеграции</p>
          <p>Наши клиенты</p>
          <p className="menu-1">
            <span>Кейсы</span>
          </p>
          <p className="menu-2">
            <span>Благодарственные письма</span>
          </p>
          <p>Сертификаты</p>
          <p>Блог на Youtube</p>
          <p>Вопрос / Ответ</p>
        </div>
      </div>
      <div className="contacts">
        <h4>КОНТАКТЫ</h4>
        <div className="contact_info_tell">
          <a href="tel:+75555555555">+7 555 555-55-55</a>
        </div>
        <div className="contact_info">
          <a href="https://web.telegram.org">
            <img src={telegram} alt="telegram" />
          </a>
          <a href="https://www.viber.com/ru/">
            <img src={viber} alt="viber" />
          </a>
          <a href="https://web.whatsapp.com/">
            <img src={whatsapp} alt="whatsapp" />
          </a>
          <p>Москва, Путевой проезд 3с1, к 902</p>
        </div>
        <div className="privacy">
          <p>©WELBEX 2022. Все права защищены</p>
          <a href="/">Политика конфиденциальности</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
