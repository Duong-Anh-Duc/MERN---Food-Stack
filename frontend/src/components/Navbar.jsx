import React, { useState } from 'react'

const Navbar = ({containerStyles, header, menuOpened}) => {
    const [isActive, setIsActive] = useState("home")
    return (
       <nav className={containerStyles}>
        {['home', 'menu', 'foods', 'contact'].map((link) => (
            
            <a href={`#${link}`} key = {link} onClick={() => setIsActive(link)}
            className={header || menuOpened ?
                isActive === link ? "text-secondary" : "text-tertiary" 
                : isActive === link ? "text-tertiary" : "text-white"
            }>
                <div>{link.charAt(0).toUpperCase() + link.slice(1)}</div>
            </a>
        ))}
       </nav>
    )
}

export default Navbar