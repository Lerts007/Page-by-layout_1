import React from "react";
import "./Content.css";

const Content = () => {
  return (
    <div id="content">
      <div id="content-left">
        <h1>
          Зарабатывайте больше
          <span className="gradient gradient-left">с WELBEX</span>
        </h1>
        <p>Развиваем и контролируем продажи за вас</p>
      </div>
      <div id="content-right">
        <h2>
          Вместе с{" "}
          <span className="gradient gradient-right">
            {" "}
            бесплатной консультацией
          </span>{" "}
          мы дарим:
        </h2>
        <div className="gift">
          <div className="gift-block">
            <div className="Line-9"></div>
            <h3 className="gift-block-1 gift-block-h3">
              <span>Виджеты</span>
            </h3>
            <p className="gift-block-p">30 готовых решений </p>
          </div>
          <div className="gift-block">
            <div className="Line-9"></div>
            <h3 className="gift-block-2 gift-block-h3">
              <span>Dashboard</span>
            </h3>
            <p className="gift-block-p">с показателями вашего бизнеса</p>
          </div>
          <div className="gift-block">
            <div className="Line-9"></div>
            <h3 className="gift-block-3 gift-block-h3">
              <span>Skype Аудит</span>
            </h3>
            <p className="gift-block-p">отдела продаж и CRM системы</p>
          </div>
          <div className="gift-block">
            <div className="Line-9"></div>
            <h3 className="gift-block-4 gift-block-h3">
              <span>35 дней</span>
            </h3>
            <p className="gift-block-p">использования CRM</p>
          </div>
        </div>
        <button>Получить консультацию</button>
      </div>
    </div>
  );
};

export default Content;
