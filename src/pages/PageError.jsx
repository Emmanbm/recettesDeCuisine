import React from 'react'
import { Link } from 'react-router-dom'

const PageError = () => {
    return (
        <div
            style={{
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
            <h1
                style={{ color: 'white', backgroundColor: 'rgba (0, 0, 0, 0.325)' }}
            >
                Vous semblez perdu, veuillez retourner sur la page <Link to='/'>Home</Link>
            </h1>
        </div>
    )
}

export default PageError