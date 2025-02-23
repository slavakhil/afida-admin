import React from 'react';
import './ButtonIcon.scss';

function ButtonIcon({ Icon, onHandleClick, isOutline = false, iconColor, backgroundColor }) {
  return (
    <button
      className={`button-icon ${isOutline ? 'button-icon--outline' : ''}`}
      style={{ backgroundColor, iconColor }}
      onClick={onHandleClick}
    >
      <Icon />
    </button>
  );
}

export default ButtonIcon;
