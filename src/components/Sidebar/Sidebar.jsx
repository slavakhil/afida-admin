import React, { useState } from 'react';
import './Sidebar.scss';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
        <div className="sidebar-section">
          <h3 className="section-title">Основные страницы</h3>
          <ul>
            <li>
              <span className="icon">🏠</span>
              <span className="text">Главная</span>
            </li>
            <li>
              <span className="icon">📂</span>
              <span className="text">Проекты</span>
            </li>
            <li>
              <span className="icon">📧</span>
              <span className="text">Сообщения</span>
            </li>
          </ul>
        </div>
        <div className="sidebar-section">
          <h3 className="section-title">Другие страницы</h3>
          <ul>
            <li>
              <span className="icon">⚙️</span>
              <span className="text">Настройки</span>
            </li>
            <li>
              <span className="icon">🛠️</span>
              <span className="text">Инструменты</span>
            </li>
          </ul>
        </div>
      </div>
      <button onClick={toggleSidebar} className="toggle-btn">
        {isOpen ? '‹' : '›'}
      </button>
    </>
  );
};

export default Sidebar;