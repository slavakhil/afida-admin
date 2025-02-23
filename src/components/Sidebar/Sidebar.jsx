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
        <div className='sidebar-section-main'>
          <div>Logo</div>
          <ul>
            <li>
              <span className='icon'>🏠</span>
              <span className='text'>Главная</span>
            </li>
            <li>
              <span className='icon'>📂</span>
              <span className='text'>Проекты</span>
            </li>
            <li>
              <span className='icon'>📧</span>
              <span className='text'>Сообщения</span>
            </li>
          </ul>
        </div>
        <div className='sidebar-section-secondary'>
          <ul>
            <li>
              <span className='icon'>⚙️</span>
              <span className='text'>Настройки</span>
            </li>
            <li>
              <span className='icon'>🛠️</span>
              <span className='text'>Инструменты</span>
            </li>
          </ul>
        </div>
      </div>
      <button onClick={toggleSidebar} className='toggle-btn'>
        {isOpen ? '‹' : '›'}
      </button>
    </>
  );
};

export default Sidebar;
