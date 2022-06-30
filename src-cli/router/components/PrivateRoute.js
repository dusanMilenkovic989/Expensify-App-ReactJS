import React from 'react'
import { Navigate } from 'react-router-dom'
import { connect } from 'react-redux'
import Header from '../../components/Header'

export const PrivateRoute = ({ child, isAuthenticated }) => (
    isAuthenticated ? (
        <div>
            <Header />
            {child}
        </div>
    ) : (
        <Navigate to="/" />
    )
)

const mapStateToProps = (state) => ({ isAuthenticated: !!state.authenticated.id })

export default connect(mapStateToProps)(PrivateRoute)