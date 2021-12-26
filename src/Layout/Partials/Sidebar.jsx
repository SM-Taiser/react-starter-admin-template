import React from "react";
import { Link, useLocation } from "react-router-dom";


function Sidebar (){
  const location = useLocation();
  
  return(
    <nav id="sidebar" className="sidebar js-sidebar">
     <div className="sidebar-content js-simplebar" data-simplebar="init"><div className="simplebar-wrapper" style={{margin: 0}}><div className="simplebar-height-auto-observer-wrapper"><div className="simplebar-height-auto-observer" /></div><div className="simplebar-mask"><div className="simplebar-offset" style={{right: 0, bottom: 0}}><div className="simplebar-content-wrapper" tabIndex={0} role="region" aria-label="scrollable content" style={{height: '100%', overflow: 'hidden scroll'}}><div className="simplebar-content" style={{padding: 0}}>
         <a className="sidebar-brand" href="index.html">
           <span className="align-middle">FairEx | DMS</span>
         </a>
         <ul className="sidebar-nav">
           {/* <li className="sidebar-header">
             Pages
           </li> */}
            <li className={"sidebar-item " + (location.pathname == '/dashboard' ? 'active' : '')}>
                <Link to="/dashboard" className="sidebar-link">Dashboard</Link>
            </li>
            <li className={"sidebar-item " + (location.pathname == '/profile' ? 'active' : '')}>
              <Link to="/profile" className="sidebar-link">Profile</Link>
            </li>
            <li className={"sidebar-item " + (location.pathname == '/warehouse' ? 'active' : '')}>
              <Link to="/warehouse" className="sidebar-link">Warehouse</Link>
            </li>
         </ul>
         
       </div></div></div></div><div className="simplebar-placeholder" style={{width: 'auto', height: 948}} /></div><div className="simplebar-track simplebar-horizontal" style={{visibility: 'hidden'}}><div className="simplebar-scrollbar" style={{width: 0, display: 'none'}} /></div><div className="simplebar-track simplebar-vertical" style={{visibility: 'visible'}}><div className="simplebar-scrollbar" style={{height: 129, transform: 'translate3d(0px, 0px, 0px)', display: 'block'}} /></div></div>
    </nav>
   )
}


export default Sidebar;