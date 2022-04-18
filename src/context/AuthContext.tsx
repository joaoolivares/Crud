import React, {createContext, useState, useEffect} from "react";
import api from "../api";
import {Values} from "../model/LoginDTO";
import { useNavigate } from "react-router";

const AuthContext = createContext({});


const AuthProvider: React.FC<any> = ({ children }) => {
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      api.defaults.headers.common['Authorization'] = token;
    }
    setLoading(false);
  },[])

const [auth, setAuth] = useState<boolean>(false);
const [loading, setLoading] = useState<boolean>(true);
const navigate = useNavigate();

const handleLogin = async(user: Values) => {
  const {data} = await api.post('/auth', user);
  localStorage.setItem('token', data);
  api.defaults.headers.common['Authorization'] = data;
  navigate('/pessoa');
  setAuth(true);
}

  const handleLogout = () => {
    localStorage.removeItem('token');
    api.defaults.headers.common['Authorization'] = '';
    window.location.href = '/login'
    setAuth(false);
  }

  if (loading) {
    return(
      <h1>Loading</h1>
    );
  }

  return (
    <AuthContext.Provider value={{ auth, handleLogin, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
}

export {AuthContext, AuthProvider};