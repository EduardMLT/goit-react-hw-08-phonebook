import { Suspense } from 'react';

import { Outlet } from 'react-router-dom';
import { AppBar } from './AppBar/AppBar';
import { Toaster } from 'react-hot-toast';
import { Loader } from './Loader/Loader';

export const Layout = () => {
  return (
    <div>
      <AppBar />
      <Suspense fallback={<div><Loader /></div>}>       
        <Outlet />
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};


