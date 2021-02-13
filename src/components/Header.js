import React from 'react';


//we access this.props in the class component
const Header = props => {
    const branding = props.branding;
    return (
        <div>
            <h1>PaperWork - { branding } </h1>            
        </div>
    )
}

export default Header
