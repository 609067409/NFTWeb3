import React from 'react';
import { useState } from "react";
import Movie from './components/Movie/Movie';
import MovieDetails from './components/MovieDetails/MovieDetails';
import { HashRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import useActiveWeb3 from "./hooks/useActiveWeb3";
import useAuth from "./hooks/useAuth";
function App() {
  const { account } = useActiveWeb3();
  const { login: connect } = useAuth();
  const [theme, setTheme] = useState(false);
  let switchTheme = function () {
    console.log('switch')
    setTheme(!theme)
  }
  return (
    <div className={theme ? 'App' : 'App dark'}>
      <div className='switch' onClick={() => { switchTheme() }}>{theme ? 'dark mode' : "light mode"}</div>
      {account ? (
        <span className="connectWallet">{account}</span>
      ) : (
        <div className="connectWallet" onClick={() => connect()}>Connect Wallet to Mint</div>
      )}
      <HashRouter>
        <Routes>
          <Route exact path="/" element={<Movie></Movie>} ></Route>
          <Route exact path="/movieDetails" element={<MovieDetails></MovieDetails>} ></Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
