import React, { useState } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { PageContext } from './PageContext';

import { Home, FavHacks, Login, Error, CreateAccount, NewCustomer } from './Pages';
import { Header } from './Components';

import './App.css';


function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [nameValue, setNameValue] = useState("");

  const value = { isLoggedIn, setIsLoggedIn };

  return (
    <PageContext.Provider value={value}>
      <div className="App">
        <BrowserRouter>

          <Header />

          <div className="Page">
            <Routes>
              <Route path="/" element=
                {
                  isLoggedIn ?
                    <Navigate to="/favhacks" />
                    :
                    <Home />
                } />
              <Route path="/favhacks" element={<FavHacks isLoggedIn={isLoggedIn} />} />
              <Route path="/login" element={<Login />} />
              <Route path="/createaccount" element={<CreateAccount />} />
              <Route path="/newcustomer" element={<NewCustomer />} />
              <Route path="*" element={<Error />} />
            </Routes>
          </div>

        </BrowserRouter>
      </div>
    </PageContext.Provider>
  );
}

export default App;
