import RouteInterceptor from './RouteInterceptor'
import React from 'react'
import { Route } from 'react-router-dom'


export const renderRoutes = ( routes ) => {
    return routes.map((route, index) => {
        console.log(route.path);
        return <RouteInterceptor component={route.component} path={route.path} key={index} hi={route.path}/>
    })
}