import React, { useEffect, useRef } from "react";
import { gsap } from "gsap"

function Image() {
  let image = useRef(null);

  useEffect(() => {

    gsap.from(image, 2, {
      delay: 0.8,
      ease: "bounce3.out",
      duration: 2.5,
      fade: .9,
      opacity: 0,
      y: 65,

    })

  }, [image])


  return (
    <div ref={el => image = el} >
      <img className="apt-image" src="./images/apt.png" alt="Apartment" height="420" width="600"></img>
      <p>"No Place Like Home"</p>
    </div>
  );
}

export default Image;