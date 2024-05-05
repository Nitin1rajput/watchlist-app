import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import ProtectedLayout from './ProtectedLayout';
import { useAuth } from './context/AuthContext';

import './App.css';

import { routes } from './routes';

function App() {
  const { auth } = useAuth();
  return (
    <Router>
      <Routes>
        {routes.map((route, idx) => {
          if (route.isPublic) {
            return (
              <Route
                key={idx}
                path={route.path}
                element={auth.user ? <Navigate to='/' /> : <route.component />}
              />
            );
          }
          return (
            <Route
              key={idx}
              path={route.path}
              element={<ProtectedLayout>{<route.component />}</ProtectedLayout>}
            />
          );
        })}
      </Routes>
    </Router>
  );
}

export default App;
