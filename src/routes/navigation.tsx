import React, { Suspense } from 'react';
import { BrowserRouter, NavLink, Navigate, Route, Routes } from 'react-router-dom';
import logo from '../logo.svg';
import { ROUTES } from './routes';



const Navigation = () => {
  return (
  <Suspense fallback={null}>
  <BrowserRouter>
      <div className='main-layout'>
        <nav>
          <img src= {logo} alt = "logo" />
          <ul>
          {
            ROUTES.map((route ) => {
              return (
                <li key={route.to}>
                <NavLink  to={route.path} className={({isActive}) => isActive ? 'nav-active' : '' }>{route.name}</NavLink>
              </li>
              )
            }
            )
          }
          </ul>
      
        </nav>
        <Routes>
          {
            ROUTES.map((route) => {
              return <Route key={route.to} path={route.path} element={<route.Component/>} />
            }
            )
          }

          <Route path="*" element={<Navigate to="/lazy1" replace/>} />
        </Routes>
      </div>

  </BrowserRouter>
  </Suspense>
  );
}


export default Navigation;