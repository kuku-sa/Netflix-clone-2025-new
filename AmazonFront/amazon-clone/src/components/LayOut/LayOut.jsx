import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';

function LayOut() {
  return (
    <div>
      <Header />
      <Outlet /> {/* This renders nested routes */}
    </div>
  );
}

export default LayOut;
