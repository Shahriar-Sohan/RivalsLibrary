import React, { useRef, useEffect, useState } from "react";


function ParticleBoom({children}){
  const elementRef = useRef(null)

  useEffect(() => {
    if (elementRef) main(elementRef.current)

  }, [])

  function main(element) {
    if (!element) return;

    const startTime = performance.now()
    const duration = 800
    const duration2 = 100

    const startPosX = -1000
    const startHeight = 1
    const startWidth = 1

    const endPosX = 0
    const endHeight = 50
    const endWidth = 80

    const easeInOutCubic = (x) => {
      if (x < 0.5) {
        return 4 * x * x * x
      } else {
        return 1 - Math.pow(-2 * x + 2, 3) / 2
      }
    }



    function Animate(time) {
      let elapsedTime = time - startTime
      let progress = Math.min((elapsedTime / duration), 1)
      element.style.transform = `translateX(${startPosX + (endPosX - startPosX) * easeInOutCubic(progress)}px)`
      element.style.border = '4px solid white'


      if (progress < 1) { requestAnimationFrame(Animate) }
      else{ requestAnimationFrame(()=>Animate2(performance.now())) }

    }
    requestAnimationFrame(Animate)




    function Animate2(startTimex) {
      function step(startTimey) {
        let elapsedTime = startTimey - startTimex
        let progress = Math.min((elapsedTime / duration2), 1)
        element.style.height = `${startHeight + (endHeight - startHeight) * easeInOutCubic(progress)}vh`
        element.style.width = `${startWidth + (endWidth - startWidth) * easeInOutCubic(progress)}vw`
        element.style.border = '2px solid white'
        if (progress < 1) {
          requestAnimationFrame(step)
          console.log(progress)
        }
      }
      requestAnimationFrame(step)
    }
  }
return(
  <div ref={elementRef} style={{
    border: '2px solid white', display: 'flex',
    borderRadius: '40px', boxShadow: '0 0px 20px 2px rgb(250, 247, 247)',
  }}>
    {children}
  </div>
)
  
}



export default ParticleBoom