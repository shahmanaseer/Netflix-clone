import React, { useState, useEffect, useRef }  from 'react'
import "./NavBa.css"

function NavBar() {
  const [scrolling, setScrolling] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  
  const handleSearchButtonClick = () => {
    setIsSearchOpen(!isSearchOpen);
  };


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };


    window.addEventListener('scroll', handleScroll);


    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className={`navbar ${isSearchOpen ? "search-open" : ""}  ${scrolling ? 'scrolling' : ''}`}>
      <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Netflix logo" />
              
        <div className="list">
          <ul>
            <li >Home</li>
            <li >Tv Shows</li>
            <li >Movies</li>
            <li  >New & Popular</li>
            <li>My List</li>
            <li>Browse by Language</li>
          </ul>
        </div>
        
        <div className="search-container">
            <input
              className={`search-input ${isSearchOpen ? "show" : ""}`}
              type="text"
              placeholder="Search..."
            />
            <button
          className="search-button"
          type="button"
          onClick={handleSearchButtonClick}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="search-icon ltr-4z3qvp e1svuwfo1"
            data-name="MagnifyingGlass"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10ZM15.6177 17.0319C14.078 18.2635 12.125 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10C19 12.125 18.2635 14.078 17.0319 15.6177L22.7071 21.2929L21.2929 22.7071L15.6177 17.0319Z"
              fill="currentColor"
            />
          </svg>
        </button>
        </div>
        
        <img
        className="avatar"
        src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
        alt=""
      />
    </div>
  )
}

export default NavBar

// import React from 'react';
// import {ArrowDropDown,Notifications,Search} from "@material-ui/icons";
// import { useState } from 'react';
// import "./navbar.css"

// const Navbar = () => {
//   const[isScrolled, setIsScrolled] = useState(false);
//   window.onscroll = () => {
//     setIsScrolled(window.pageYoffset === 0 ? false : true);
//     return() => {window.onscroll = null};
//   }
//   return(
//     <div className={isScrolled ? "navbar scrolled" : "navbar"}>
//       <div className="container">
//       <div className="left">
//             <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Netflix logo" />
//             <span>Homepage</span>
//             <span>Series</span>
//             <span>Movies</span>
//             <span>New and Popular</span>
//             <span>My List</span>
//         </div>
        
//         <div className="right">
//           <Search className='icon'/>
//           <span>ABC</span>
//           <Notifications className="icon"/>
//           <img className='avatar' src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="Avatar" />
//           <div className="profile">
//             <ArrowDropDown className="icon"/>
//             <div className="options">
//               <span>Settings</span>
//               <span>Logout</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }
// export default Navbar;