import React from 'react';
import { Outlet, Link } from 'react-router';
// import './PublicLayout.css'; // Import the CSS file

const PublicLayout = () => {
  return (
    <div>
      <Link to="/" className="text-xl font-bold">
        Docto-Bahnhof
      </Link>
      <main className="layout-content">
        <p>public layout</p>
        <Outlet />
      </main>
    </div>
  );
};

export default PublicLayout;
