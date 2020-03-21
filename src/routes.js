import React from 'react'
import { Route } from 'react-router-dom'
import Index from 'pages/Index'
import SamplePage from 'pages/SamplePage'

const Routes = () => {
    return (
        <>
            <Route exact path='/' component={Index} />
            <Route path='/sample-page' component={SamplePage} />
        </>

    )
}

export default Routes
