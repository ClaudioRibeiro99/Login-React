import { useEffect, useState } from 'react';
import './styles.css';
import api from './services/api';


function App() {



  api.post(`${api}/auth/login`, {'mail':mail,'password':password})
    .then((response) => {
      console.log(response)
      return response.data
    })

  return (
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form">
            <span className="login-form-title">Post Request</span>

            <div className="wrap-input">
              <input 
                className="input" 
                type="email" 
                onclick={mail}                       
              />
              <span className="focus-input" data-placeholder="Email"></span>
            </div>

            <div className="wrap-input">
              <input 
                className="input"
                type="password"
                onclick={password}
              />
              <span className="focus-input" data-placeholder="Password"></span>
            </div>

            <div className="container-login-form-btn">
              <button className="login-form-btn">Login</button>
            </div>

            <div className="text-center">
              <span className="txt1">Não possui conta?</span>
              <a className="txt2" href="#">Criar conta.</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
