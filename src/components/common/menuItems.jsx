import { IoMdHome } from "react-icons/io";
import { FaList } from "react-icons/fa";
import { CiMoneyBill } from "react-icons/ci";
import { FaGear } from "react-icons/fa6";
import { FaAddressBook } from "react-icons/fa";

const menuItems = [
    {
      name:'Dashboard',
      path:'/dashboard',
      icon:<IoMdHome/>,
    },
    {
      name:'Order',
      path:'/orders',
      icon:<FaList/>,
    },
    {
      name:'Promotion',
      path:'/promotion',
      icon:<CiMoneyBill/>,
    },
    {
      name:'Settings',
      path:'/settings',
      icon:<FaGear/>,
    },
    {
      name:'Contact',
      path:'/contact-us',
      icon:<FaAddressBook/>,
    },
  ];
  
  export default menuItems;
  