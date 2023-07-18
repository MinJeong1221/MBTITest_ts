import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MainPage from './pages/MainPage';
import QuestionPage from './pages/QuestionPage';
import ResultPgae from './pages/ResultPage';

function App(): React.ReactElement {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/question" element={<QuestionPage />} />
        <Route path="/result" element={<ResultPgae />} />
      </Routes>
    </Router>
  );
}

export default App;
