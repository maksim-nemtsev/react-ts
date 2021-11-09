import React from 'react';
import './App.css';
import CustomHookComponent from './components/CustomHookComponent';
import TestComponent from './components/ExportInterfaceComponent';
import UseContextComponent from './components/UseContextComponent';
import UseEffectComponent from './components/UseEffectComponent';
import UseReducerComponent from './components/UseReducerComponent';
import UseRefComponent from './components/UseRefComponent';
import UseStateComponent from './components/UseStateComponent';


function App() {
  return (
    <div>
      <UseStateComponent/>
      <UseEffectComponent/>
      <UseContextComponent/>
      <UseReducerComponent/>
      <UseRefComponent/>
      <CustomHookComponent/>
      <TestComponent/>
    </div>
  );
}

export default App;
