import React from 'react'
import { Redirect, Route } from 'react-router'

const PrivateRoute = ({ isAutheticated, component: Component, ...rest }) => {

    /*---------------------- recordando la ultima pagina visitada ---------------------*/
     //aca estan todas las props del router
    //  console.log(rest.location.pathname);
    localStorage.setItem('lastpath',rest.location.pathname)

    /*---------------------- recordando la ultima pagina visitada ---------------------*/

	return (
		<Route
			{...rest}
            //no entiendo porque el component se llama con el callback pero tiene el mismo uso que el setState cuando con un callback pasa el valor anterior
			component={(props) => (isAutheticated ? <Component {...props} /> : <Redirect to="/login" />)}
		/>
	)
}

export default PrivateRoute
