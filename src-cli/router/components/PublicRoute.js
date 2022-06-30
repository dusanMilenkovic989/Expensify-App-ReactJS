import React from 'react'
import { Navigate } from 'react-router-dom'
import { connect } from 'react-redux'

export const PublicRoute = ({ child, isAuthenticated }) => isAuthenticated ? ( <Navigate to="/dashboard" /> ) : child

const mapStateToProps = (state) => ({ isAuthenticated: !!state.authenticated.id })

export default connect(mapStateToProps)(PublicRoute)