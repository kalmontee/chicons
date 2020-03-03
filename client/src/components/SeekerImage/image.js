import React, {useEffect, useRef} from "react";
import{gsap} from "gsap"

function Image() {
    let image = useRef(null);

    useEffect(() => {
       
gsap.from(image, 2,{
    delay: 0.8,
    ease: "bounce3.out",
    duration: 2.5,
    fade: .9,
    opacity: 0,
    y: 65, 

})

    }, [image])
    

  return (
    <div ref={el => image = el} className="apt-image">
        <img src="./images/apt.png" alt="Apartment" height="400" width="400"></img>
    </div>
  );
}

export default Image;