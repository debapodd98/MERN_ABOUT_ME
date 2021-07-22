import React from "react";
import { NavLink } from "react-router-dom";
import signin from "../images/signin.svg";

const Login = () => {
  return (
    <>
      <section className='signin'>
        <div className='container mt-5'>
          <div className='signin-content'>
            <div className='signin-image'>
              <figure>
                <img src={signin} alt='Register Pic' />
              </figure>
              <NavLink to='/signup' className='signup-image-link'>
                Create an Account
              </NavLink>
            </div>
            <div className='signin-form'>
              <h2 className='form-title'>Sign in</h2>
              <form className='register-form' id='register-form'>
                <div className='form-group'>
                  <label htmlFor='email'>
                    <i class='zmdi zmdi-email material-icons-name'></i>
                  </label>
                  <input
                    type='email'
                    name='email'
                    id='email'
                    autoComplete='off'
                    placeholder='Enter your email'
                  />
                </div>

                <div className='form-group'>
                  <label htmlFor='password'>
                    <i class='zmdi zmdi-lock material-icons-name'></i>
                  </label>
                  <input
                    type='password'
                    name='password'
                    id='password'
                    autoComplete='off'
                    placeholder='Enter your Password'
                  />
                </div>

                <div className='form-group form-button'>
                  <input
                    type='submit'
                    name='signin'
                    id='signin'
                    className='form-submit'
                    value='Log in'
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
