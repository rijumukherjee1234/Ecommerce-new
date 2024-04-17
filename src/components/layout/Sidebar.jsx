import { useState } from "react";
import { ListGroup , ListGroupItem } from 'react-bootstrap';
import menuItems from "../common/menuItems";

export default function Sidebar(){
return(
<div className="sidebar">
<ul class="text-10">
    {
       menuItems.map((each, index)=>{
         return <li key={index} action >{each}</li>
       })
    }
</ul>
</div>
)

}