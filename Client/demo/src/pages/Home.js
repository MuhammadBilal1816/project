import {React,useEffect} from "react";
// import Navbar from "../Components/Navbar";
import $ from 'jquery';
import "../index.css";

const Home =()=>
{  
    useEffect(()=>{
        var velocity=5;
        var height,pos;
        $(window).on("load resize scroll", function() {
            $(".bg-static").each(function() {
              var windowTop = $(window).scrollTop();
              var elementTop = height = $(this).offset().top;
              var leftPosition= pos = windowTop - elementTop;
                $(this)
                  .find(".bg-move")
                  .css({ left: leftPosition,right:"200px"},'backgroundPosition', '50% ' + Math.round((height - pos) * velocity) +  'px' );
            });
          });
        },[]);
    return(
        
        <div>
        <div className="bg-blue-gradient font-poppins justify-between ml-10 w-[150px] text-center  h-[32px] py-1 rounded-xl mt-10">Welcome</div>
       <div className="w-[]">
        <div class="section bg-static">
        <div class="bg-move"></div>
        </div>
        </div>
        <div className="h-[5000px]"></div>
    
        </div>
    );
}
export default Home;