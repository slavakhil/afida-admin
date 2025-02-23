import React from 'react';
import './ButtonIcon.scss';

function ButtonIcon({ Icon, onHandleClick, isSpec = false, iconColor, backgroundColor }) {
  return (
    <button
      className={`button-icon ${isSpec ? 'button-icon--spec' : ''}`}
      style={{ fill: iconColor, backgroundColor: backgroundColor }}
      onClick={onHandleClick}
    >
      <Icon />
    </button>
  );
}

export default ButtonIcon;
