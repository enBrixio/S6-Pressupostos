import React from 'react';
import { Link, Route } from 'react-router-dom';


function Header() {
  return (
<header className='fixed top-0 left-0 right-0 z-50 bg-white shadow'>
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between items-center py-3 md:justify-start md:space-x-10">
      <div className="flex justify-start lg:w-0 lg:flex-1">
        <img className="h-8 w-auto sm:h-10" src='./src/assets/mktdigitak.webp' alt="Logo"/>
      </div>
      <nav className="hidden md:flex space-x-10">
        <Link to="/" className="text-base font-medium text-gray-500 hover:text-gray-900">
          Inicio
        </Link>
        <Link to="/presupuestos" className="text-base font-medium text-gray-500 hover:text-gray-900">
          Presupuestos
        </Link>
      </nav>
    </div>
  </div>
</header>
  );
}   

export default Header;

