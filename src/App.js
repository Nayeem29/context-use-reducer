// import { createContext, useContext, useEffect, useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import ProductProvider from './context/ProductProvider';
import routes from './routes/Routes';


function App() {


  return (
    <div>
      <ProductProvider>
        <RouterProvider router={routes} />
      </ProductProvider>
    </div>
  );
}

export default App;
