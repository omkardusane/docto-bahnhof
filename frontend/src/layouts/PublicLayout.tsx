import React from 'react';
import { Outlet } from 'react-router';

const PublicLayout = () => {
  return (
    <div>
      public layout
        <Outlet />    
    </div>
  );
};

export default PublicLayout;
