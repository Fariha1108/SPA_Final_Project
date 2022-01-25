import React, { useState } from 'react';
import { BrowserRouter, Route, Routes, NavLink, Navigate } from 'react-router-dom';

import { Home, FavHacks, Login, Error, CreateAccount } from './Pages';

import { PageContext } from './PageContext';

import './App.css';


function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const value = { isLoggedIn, setIsLoggedIn };

  //const navigate = useNavigate();

  return (
    <PageContext.Provider value={value}>

      <div className="App">
        <BrowserRouter>

          <header>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/favhacks"
                  style={{
                    display: `${isLoggedIn ? "block" : "none"}`
                  }}

                >Your favorite life hacks</NavLink>
              </li>
              <li>
                {
                  isLoggedIn ?
                    <button onClick={() => setIsLoggedIn(false)}>Logout</button>
                    :
                    <button onClick={() => setIsLoggedIn(true)}>Login</button>
                }
              </li>
              <li>
                {/* S<button onClick={() => navigate("/createaccount")}>Create an account</button> */}
              </li>
            </ul>
          </header>

          <div className="Page">
            <Routes>
              <Route path="/" element=
                {
                  isLoggedIn ?
                    <Navigate to="/login" />
                    :
                    <Home />
                } />
              <Route path="/favhacks" element={<FavHacks />} />
              <Route path="/login" element={<FavHacks />} />
              <Route path="/createaccount" element={<CreateAccount />} />
              <Route path="*" element={<Error />} />
            </Routes>
          </div>

        </BrowserRouter>
      </div>

    </PageContext.Provider>
  );
}

export default App;
