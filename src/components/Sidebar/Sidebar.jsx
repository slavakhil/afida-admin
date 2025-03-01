import React, { useState } from 'react';
import './Sidebar.scss';
import { sidebarMainElemenets, sidebarSecondaryElemenets } from '../../utils/consts';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
        <div className={`sidebar-section-main ${isOpen ? 'open' : 'closed'}`}>
          <div>Logo</div>
          <div className='section-list'>
            {sidebarMainElemenets &&
              sidebarMainElemenets.map((item) => (
                <div key={item.id} className='section-item'>
                  <span className='icon'>{<item.Icon />}</span>
                  {isOpen && <span className='text'>{item.title}</span>}
                </div>
              ))}
          </div>
        </div>
        <div className={`sidebar-section-secondary ${isOpen ? 'open' : 'closed'}`}>
          <div className='section-list'>
            {sidebarSecondaryElemenets &&
              sidebarSecondaryElemenets.map((item) => (
                <div key={item.id} className='section-item'>
                  <span className='icon'>{<item.Icon />}</span>
                  {isOpen && <span className='text'>{item.title}</span>}
                </div>
              ))}
          </div>
        </div>
      </div>
      <button onClick={toggleSidebar} className='toggle-btn'>
        {isOpen ? '‹' : '›'}
      </button>
    </>
  );
};

export default Sidebar;
