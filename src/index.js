import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './i18n'; // подключение многоязычности
import App from './Components/App/App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { UserProvider } from './contexts/user.context';
import { Dashboard, Home, LoginPage, PrivateRoute, Signup } from './Pages';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: '/signup',
    element: <Signup />
  },
  {
    path: '/dashboard',
    // element: <PrivateRoute><Dashboard /></PrivateRoute>
    element: <Dashboard />
  },
  {
    path: '/',
    element: <Home />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
