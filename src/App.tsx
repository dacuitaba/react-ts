import { Fragment } from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from '@/pages/route';
export function App() {
  return (
    <Fragment>
      <RouterProvider router={router}></RouterProvider>
    </Fragment>
  );
}
