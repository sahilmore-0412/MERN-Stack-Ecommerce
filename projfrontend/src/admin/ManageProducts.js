import React from 'react'
import Base from '../core/Base'
import { Link } from 'react-router-dom'
export default function ManageProducts() {
    const goBack = () => {
        return(
            <Link className = "btn btn-sm btn-info mb-3" to="/admin/dashboard">
                Admin Home
            </Link>
        )
    }
    return (
        <div>
            <Base>
            <h1>Manage Products Here</h1>
            {goBack()}
            </Base>
        </div>
    )
}
