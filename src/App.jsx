import { useState } from 'react';
import './App.scss';
import Sidebar from './components/Sidebar/Sidebar';
// import ButtonIcon from './components/UI/Buttons/ButtonIcon/ButtonIcon.jsx';
// import { ReactComponent as X } from './assets/icons/x.svg';

function App() {
  return (
    <div className='App'>
      <Sidebar />
      <div className='content'>
        <ButtonIcon Icon={X} onHandleClick={() => {}} />
      </div>
    </div>
  );
}

export default App;
