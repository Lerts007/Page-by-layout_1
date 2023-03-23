import React from 'react';
import telegram from "../img/telegram.png";
import whatsapp from "../img/whatsapp.png";
import viber from "../img/viber.png";

const Footer = () => {
  return (
    <div>
      <div>
        <h4>О компании</h4>
        <p>Партнёрская программа</p>
        <p>Вакансии</p>
      </div>
      <div>
        <h4>Меню</h4>
        <p>Расчёт стоимости</p>
        <p>Виджеты</p>
        <p>Интеграции</p>
        <p>Наши клиенты</p>
        <p>Кейсы</p>
        <p>Благодарственные письма</p>
        <p>Сертификаты</p>
        <p>Блог на Youtube</p>
        <p>Вопрос / Ответ</p>
      </div>
      <div>
        <h4>Контакты</h4>
        <div id="contact_information">
          <a href="tel:+75555555555">+7 555 555-55-55</a>
          <a href="https://web.telegram.org">
            <img src={telegram} alt="telegram" />
          </a>
          <a href="https://www.viber.com/ru/">
            <img src={viber} alt="viber" />
          </a>
          <a href="https://web.whatsapp.com/">
            <img src={whatsapp} alt="whatsapp" />
          </a>
        </div>
        <p>Москва, Путевой проезд 3с1, к 902</p>
      </div>
      <div>
        <p>©WELBEX 2022. Все права защищены</p>
        <p>Политика конфиденциальности</p>
      </div>
    </div>
  );
};

export default Footer;