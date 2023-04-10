import React from "react";
import Header from "./components/Header";
import Testimonial from "./components/Testimonial"
import reviews from "./data";
const App = () => {
  return(
    <div className="flex flex-col w-[100vw] h-[100vh] justify-center items-center bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-orange-900 via-amber-100 to-orange-900">
      <div className="text-center">
        <Header/>
        <div className="bg-violet-400 h-[4px] w-1/5 mt-1 mx-auto"></div>
        <Testimonial reviews={reviews}/>
      </div>
    </div>
  )
};

export default App;
