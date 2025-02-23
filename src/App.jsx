import React from 'react';
import './App.scss';
import Sidebar from './components/Sidebar/Sidebar';
import ButtonIcon from './components/UI/Buttons/ButtonIcon/ButtonIcon';
import X from './assets/icons/x.svg?react';

function App() {
  return (
    <div className='App'>
      <Sidebar />
      <div className='content'>
        <ButtonIcon Icon={X} onHandleClick={() => {}} isSpec={true} />
      </div>
    </div>
  );
}

export default App;
