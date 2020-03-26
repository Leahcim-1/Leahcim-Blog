import RouteInterceptor from './RouteInterceptor'
import React from 'react'
import { Route } from 'react-router-dom'


export const renderRoutes = ( routes ) => {
    return routes.map((route) => {
        const props = {
            component: route.component,
            path: route.path,
            key: route.path
        }
        return RouteInterceptor({...props})
    })
}