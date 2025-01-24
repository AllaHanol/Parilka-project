import React from 'react';
import {Route, Routes} from 'react-router-dom'
import  {routes} from './routes'
const AppRouter : React.FC = () => {

    const arr = routes.map(({path, element}) => 
    <Route key={path} path={path} element = {element}/>)

    return (
        <Routes>
        {arr}
        </Routes>
    );
};


export default AppRouter;
