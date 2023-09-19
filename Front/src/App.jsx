import { createBrowserRouter, RouterProvider } from 'react-router-dom'


import Index from './pages/Index';
import Detalle from './pages/Detalle';
import Alta from './pages/Alta';
import Contacto from './pages/Contacto';
import Nosotros from './pages/Nosotros';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Index />
    },
    {
        path: '/detalle/:id',
        element: <Detalle />
    },
    {
        path: '/alta',
        element: <Alta />
    },
    {
        path: '/contacto',
        element: <Contacto />
    },
    {
        path: '/nosotros',
        element: <Nosotros />
    },
]);

const App = () => 
        <RouterProvider 
            router={router}
            fallbackElement={<Index />}/>

export default App;
