import { FloatingDockDemo } from "@/components/ui/home/FloatingDockDemo";
import React from 'react';

const App = () => {
  const handleClick = () => {
    console.log("Card clicked!");
  };

  return (
    <div className="w-full h-screen overflow-x-hidden bg-gradient-to-l from-[#1800CD] to-[#100028]">
  <FloatingDockDemo />
</div>

  );
};

export default App;

