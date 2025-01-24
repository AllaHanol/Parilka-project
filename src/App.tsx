import React from 'react';
import './App.css';

import { BrowserRouter } from 'react-router-dom';
import AppRouter from './routes/AppRouter.tsx'
const App = () => {
  return (
<BrowserRouter>
    <AppRouter/>
   </BrowserRouter>
  );
}

export default App;
