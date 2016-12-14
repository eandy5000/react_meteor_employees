import React from 'react'

const EmployeeDetail = (props) => {
    return (
        <div className="thumbnail">
            <img src={props.employee.avatar} />
            <div className="caption">
                <h3>{props.employee.name}</h3>
                <ul className="list-group">
                    <li className="list-group-item">Email: {props.employee.email}</li>
                    <li className="list-group-item">Phone: {props.employee.phone}</li>
                </ul>
            </div>
        </div>
    )
}

export default EmployeeDetail