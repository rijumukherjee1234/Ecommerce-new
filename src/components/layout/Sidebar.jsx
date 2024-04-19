import { useState } from "react";
import { ListGroup , ListGroupItem } from 'react-bootstrap';
import menuItems from "../common/menuItems";
import {Link} from "react-router-dom"

export default function Sidebar(){
  
return(
<div className="sidebar" >
  <img src="https://w7.pngwing.com/pngs/256/867/png-transparent-zomato-logo-thumbnail.png" alt="logo1" style={{ width: '200px' , borderRadius:'20px',margin:'10px 0 0 20px' }} />
<ul className="sidebarlist">
    {
       menuItems.map((each, index)=>{
         return <li key={index} action className="listItem" >
         <Link to={each.path} className="links"> <span className="sidebarIcons" >{each.icon}</span>{each.name}</Link></li>
       })
    }
</ul>
</div>
)

}