import React from "react";
import "../css/Content.css";

const Content = () => {
  return (
    <div id="content">
      <div id='content-left'>
        <h1>
          Зарабатывайте больше<span className ="gradient">с WELBEX</span>
        </h1>
        <p>Развиваем и контролируем продажи за вас</p>
      </div>
      <div id="content-right">
        <h2>Вместе с <span className ="gradient"> БЕСПЛАТНОЙ КОНСУЛЬТАЦИЕЙ </span> мы дарим:</h2>
        <div className="gift">
          <div className="gift-block">
            <div className="Line-9"></div>
            <h3 className="gift-block-1"><span>ВИДЖЕТЫ</span></h3>
            <p>30 готовых решений </p>
          </div>
          <div className="gift-block">
          <div className="Line-9"></div>
            <h3 className="gift-block-2"><span>DASHBOARD</span></h3>
            <p>с показателми вашего бизнеса</p>
          </div>
          <div className="gift-block">
          <div className="Line-9"></div>
            <h3 className="gift-block-3"><span>Skype Аудит</span></h3>
            <p>отдела продаж и CRM системы</p>
          </div>
          <div className="gift-block">
          <div className="Line-9"></div>
            <h3 className="gift-block-4"><span>35 дней</span></h3>
            <p>использования CRM</p>
          </div>
        </div>
        <button>Получить консультацию</button>
      </div>
    </div>
  );
};

export default Content;

