import React from 'react';
import { useAuth } from './context/AuthContext';
import Sidebar from './containers/SideBar';
import { Navigate } from 'react-router-dom';

const ProtectedLayout = ({ children }) => {
  const { auth } = useAuth();

  console.log(auth);
  if (!auth.user) {
    // If there is no user, redirect to the login page
    return <Navigate to='/login' />;
  }

  return (
    <div className='app'>
      <Sidebar />
      <div className='app-content'>{children}</div>
    </div>
  );
};

export default ProtectedLayout;
