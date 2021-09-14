import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../../styles/Navbar.css'




class Navbar extends Component {
   render() {
      return (
         <nav className='nav-wrapper purple'>
            <div className='container'>
               <Link to='/' className="brand-logo left">Vocab</Link>
               <ul className='right'>
                  <li>
                     <NavLink activeClassName='Navbar-active' exact to='/'>
                     <div class="searchBox">

<input class="searchInput"type="text" name="" placeholder="Search"/>
<button class="searchButton" href="#">
    <i class="material-icons">
        search
    </i>
</button>
</div>



                     </NavLink>
                  </li>
                  
               </ul>
            </div>
         </nav>
      )
   }
}


export default Navbar
