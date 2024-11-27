import { useEffect, useState } from "react";

export default function (){
  const [ mobile, setMobile ] = useState(false);

  useEffect(()=>{
    const handleResize = ()=>{
      setMobile(window.innerWidth < 650)
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return ()=>{
      window.removeEventListener("resize", handleResize);
    };

  },[]);

  return mobile;
};
