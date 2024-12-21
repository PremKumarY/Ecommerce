import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect,useState } from "react";
import Banner from "./components/banner/banner";

function App() {
  const[orderPopup,setOrderPopup]=useState(false);
  const handelOrderPopup=() =>{
    setOrderPopup(!orderPopup);
  };
  useEffect(()=>{
    Aos.init({
      offset:100,
      duration:800,
      easing:"ease-in-sine",
      delay:100,
    });
    Aos.refresh();
  },[]);
  return(
    <>
    <Banner/>
    <div className="bg-white dark:bg-gray-900 dark;text-white duration-200">
      
      
    </div>
    </>
  );
}
  

export default App