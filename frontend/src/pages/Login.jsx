import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Login from '../components/Login.jsx'

const LoginPage = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state) => state.user);

  useEffect(()=>{
    if(isAuthenticated === true)
    {
      navigate("/");
    }
  },[]) //eslint-disable-line
  return (
    <div>
         <Login/>
    </div>
  );
}

export default LoginPage;
