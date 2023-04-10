import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () =>{
    return(
        <div style={{display:"flex", gap:"20px"}}>
            <div><Link to="/">Home</Link></div>
            <div><Link to="/pageone">Page 1</Link></div>
            <div><Link to="/pagetwo">Page 2</Link></div>
        </div>
    )
}


export default Navbar