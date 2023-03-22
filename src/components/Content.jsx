import React from "react";
import "../css/Content.css";

const Content = () => {
  return (
    <div id="content">
      <div id='content-left'>
        <h1>
          Зарабатывайте больше<span class ="gradient">с WELBEX</span>
        </h1>
        <p>Развиваем и контролируем продажи за вас</p>
      </div>
      <div id="content-right">
        <h2>Вместе с <span class ="gradient">БЕСПЛАТНОЙ КОНСУЛЬТАЦИЕЙ</span> мы дарим:</h2>
        <div class="gift">
          <h3>ВИДЖЕТЫ</h3>
          <p>30 готовых решений </p>
          <h3>DASHBOARD</h3>
          <p>с показателмивашего бизнеса</p>
          <h3>Skype Аудит</h3>
          <p>отдела продаж и CRM системы</p>
          <h3>35 дней</h3>
          <p>использования CRM</p>
        </div>
      </div>
    </div>
  );
};

export default Content;
