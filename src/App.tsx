import React from "react";
import Testimonials from "./Components/Testimonials";

const App = () => {
  return (
    <div className="h-full w-full bg-orange-500">
      <div className="main-container -2 flex h-[100vh] items-center justify-center border-2 border-black">
        <Testimonials />
      </div>
    </div>
  );
};

export default App;
