import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Map from './pages/Map'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Landing} />
                <Route path='/map' component={Map} />
            </Switch>
        </BrowserRouter>
    )
}
