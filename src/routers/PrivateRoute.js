import React from 'react'
import { Redirect, Route } from 'react-router'

const PrivateRoute = ({ isAutheticated, component: Component, ...rest }) => {
	return (
		<Route
			{...rest}
			//no entiendo porque el component se llama con el callback pero tiene el mismo uso que el setState cuando con un callback pasa el valor anterior
			component={(props) => (isAutheticated ? <Component {...props} /> : <Redirect to="/" />)}
		/>
	)
}

export default PrivateRoute
