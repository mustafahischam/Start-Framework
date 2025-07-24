import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Components/Layout/Layout.jsx';
import Home from './Components/Home/Home.jsx';
import About from './Components/About/About.jsx';
import Portfolio from './Components/Portfolio/Portfolio.jsx';
import Contact from './Components/Contact/Contact.jsx';
import NotFound from './Components/Not-Found/NotFound.jsx';

const router = createBrowserRouter([
    {
        path: '/', element: <Layout />, children: [
            { index: true, element: <Home /> },
            { path: 'about', element: <About /> },
            { path: 'portfolio', element: <Portfolio /> },
            { path: 'contact', element: <Contact /> },
            { path: '*', element: <NotFound /> },
        ],
    },
], { basename: import.meta.env.MODE === 'production' ? "/Route-Projects/Start-Framework/" : "/" });

export default function App() {
    return <RouterProvider router={router} />;
} 