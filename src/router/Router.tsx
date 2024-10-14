import { createBrowserRouter } from 'react-router-dom'
import  { lazy, Suspense } from 'react';
import HomePage from '../components/SectionsHome/homepage/HomePage';
// import App from '../App'

// const CuidadoDePiel = lazy(() => import('../SectionsHome/nav/CuidadoDePiel'))
// const Dermocosmetica = lazy(() => import('../SectionsHome/nav/Dermocosmetica'))
// const Maquillaje = lazy(() => import('../SectionsHome/nav/Maquillaje'))
// const PerfumeriasYFragancia = lazy(() => import('../SectionsHome/nav/PerfumeriasYFragancia'))
// const Superofertas = lazy(() => import('../SectionsHome/nav/Superofertas'))
const App = lazy(() => import('../App'))
const router = createBrowserRouter([
    {   
        path: "/",
        element:(
            <Suspense fallback={<div>Loading...</div>}>
                <App />
            </Suspense>
        ) ,
        children: [
            {
                path: "/",
                element: <HomePage/>,
            },
            {
                path: "/Cuidado de Piel",
                element: "Cuidado de piel",
            },
            {
                path: "/Dermocosmetica",
                element: "Dermocosmetica",
            },
            {
                path: "/Maquillaje",
                element: "Maquillaje",
            },
            {
                path: "/Perfumerias y Fragancias",
                element: "Perfumerias y fragancias",
            },
            {
                path: "/Superofertas",
                element: "Superofertas",
            },
        ]
    },
])

export default router