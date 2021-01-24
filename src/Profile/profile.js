import React from 'react';
import propTypes from "prop-types";

const profile = (props) => {
    const {
        fullName, 
        bio, 
        profession,
        children,
        handleName 
    } = props

    return (
        <div>
            
            <p>{children}</p>
            <h4 style ={{color:"blue",fontSize:"20px",  fontWeight:"500"}}>{fullName}</h4>
            <h4 style ={{color:"blue", fontSize:"20px",fontWeight:"500"}}>{bio}</h4>
            <h4 style ={{color:"blue",fontSize:"20px", fontWeight:"500"}}>{profession}</h4>
            <a href="/" onClick={()=> handleName ( fullName)} style ={{ fontWeight:"500" }} > Click me to alert</a>
        </div>
    )
}

profile.defaultProps = {
    fullName:"Aymen Ben Youssef",
    bio:"i like web dev",
    profession:"Web devlopper" 
}

profile.propTypes = {
    fullName : propTypes.string.isRequired,
    bio : propTypes.string.isRequired,
    profession : propTypes.string.isRequired
}

export default profile
