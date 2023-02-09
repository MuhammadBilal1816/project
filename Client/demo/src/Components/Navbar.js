import {React,useState} from 'react';
import close from '../assets/xmark-solid.svg';
import logo from '../assets/logo.png';
import menu from '../assets/bars-solid.svg';
import  {Link}  from 'react-router-dom';


const Navbar=()=>
{ const [toggle,setToggle]=useState(false);
    return(
        <nav className=" overflow-hidden w-full flex justify-between  items-center py-6">
            
            <img src={logo} alt="logo" className=" sm:w-[140px] w-[80px] h-[22px] sm:h-[32px] ml-10 bg-white"/>
            
            
                <ul className="list-none font-poppins sm:flex items-start hidden justify-start  bg-white cursor-pointer">
                <Link to="/home"> <li className="mr-10 ml-10  hover:text-blue-700">Home </li> </Link>
                  <li className="mr-10  hover:text-blue-700">About</li> 
                  <li className="mr-10  hover:text-blue-700">Works</li> 
                 <li className="mr-10  hover:text-blue-700"> <Link to="/blog">Blog</Link></li> 
                  <li className="mr-10 hover:text-blue-700">Contact</li> 
               </ul>
           <button className=" cursor-pointer rounded-xl p-1 bg-blue-500 mr-7 justify-between ml-5 sm:justify-end">GET START</button>
            
           <div className="sm:hidden flex flex-1 justify-end mr-10 ">
            <img src={toggle?close:menu}  alt="menu" className=" object-contain w-[50px] h-[50px] ml-10 "
            onClick={()=>setToggle((prev)=> !prev)}/>
           </div>
        </nav>
    )
}
export default Navbar;