import React from 'react';
import './App.css';
import PageHeader from './components/PageHeader';
import BasicForm from './components/BasicForm';
import DisplayGroup from './components/DisplayGroup';
import 'semantic-ui-css/semantic.min.css';

function App() {
  return (
    <div className="App">
      <PageHeader />
      <BasicForm />
      <DisplayGroup />
    </div>
  );
}

export default App;
