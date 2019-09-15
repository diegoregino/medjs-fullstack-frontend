import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import FormRegister from '../components/Register';

const API = 'https://shopping-cart-api.diegoregino.now.sh/api/users';

const createUser = async(form) => {
  const payload = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(form),
  };

  try {
    const result = await fetch(API, payload);
    const user = await result.json();
    if (user && user.token) {
      localStorage.setItem('userEco', JSON.stringify(user))
    }
  } catch (error) {
    console.log('Error: (', error);
  }
};

const Register = () => (
  <div className="container">
    <div className="card o-hidden border-0 shadow-lg my-5">
      <div className="card-body p-0">
        <div className="row">
          <div className="col-lg-5 d-none d-lg-block bg-register-image" />
          <div className="col-lg-7">
            <div className="p-5">
              <div className="text-center">
                <h1 className="h4 text-gray-900 mb-4">Create an Account!</h1>
              </div>
              {/* Remplazamos todo el html del formulario por el componente */}
              <FormRegister handleSumbit={createUser} />
              <hr />
              <div className="text-center">
                <Link className="small" to="/login">Already have an account? Login!</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default withRouter(Register);