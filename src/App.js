import React from 'react';
import './App.css';
import AddQuestion from './components/AddQuestion'
import QuestionList from './components/QuestionList'


function App() {
  

  return (
    <div className="App">
      <h1>Interview Questions</h1>
      <div>
        <AddQuestion/>
        <QuestionList/>
      </div>
    </div>
  );
}

export default App;
