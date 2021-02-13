import React from 'react'

const Contact = (props) => {
    const name = props.name;
    const phone = props.phone;
    const email = props.email;
    return (
        <div>
            <h4>{ name }</h4>
            <ul>
                <li>{ phone }</li>
                <li>{ email }</li>
            </ul>            
        </div>
    )
}

export default Contact
