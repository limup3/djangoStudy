import React from 'react';
import { BrowserRouter } from "react-router-dom";
import Page from './Page';
import { BcProvider } from './helpers/context/BcContext'

//BCProvider = context Api 사용 

const App = () => (
    <BrowserRouter>
      <BcProvider>
      <Page />
      </BcProvider>
    </BrowserRouter>
);

export default App;