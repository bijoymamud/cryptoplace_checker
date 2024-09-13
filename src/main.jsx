import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'


import {
  RouterProvider,
} from "react-router-dom";
import { router } from './Router/routes.jsx';
import CoinContextProvider from './Context/CoinContext.jsx';

createRoot(document.getElementById('root')).render(
  <div className=''>
    
    
<React.StrictMode>
<CoinContextProvider>
             <RouterProvider router={router} />
        </CoinContextProvider>
    </React.StrictMode>
       
  
</div>
)
