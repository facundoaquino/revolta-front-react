import React from 'react'
import UserProvider from './context/UserContext'
import AppRouter from './routers/AppRouter'

import './styles/App.css'

const App = () => {
    return (
        <UserProvider>
            <AppRouter/>
        </UserProvider>
    )
}

export default App
