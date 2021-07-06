import React, {useEffect, useState} from 'react';
import {useWindowScroll} from 'react-use'


export default function ScrollToTop() {
const {y: pageYOffset} = useWindowScroll();
  useEffect(() => {
    if(pageYOffset > 200){
      setVisbility(true)
    }else{
      setVisbility(false)
    }
  }, [pageYOffset])
  const[visible, setVisbility] = useState(false);
  const scrollToTop = () => window.scrollTo({top: 0, behavior:"smooth"})
  if(!visible){
    return false;
  }
    return (
        <div className="scroll-to-top text-right" style={{cursor:"pointer"}} onClick={scrollToTop}>
             <i className="fa fa-angle-up"></i>
        </div>
    )
}
