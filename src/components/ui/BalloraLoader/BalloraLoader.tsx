import { useEffect } from "react";
import "./BalloraLoader.css";

const BalloraLoader = () => {
  useEffect(() => {
    const petals = document.querySelectorAll(".petal");
    let currentPhase = "appear";
    let currentPetal = 0;
    const animationSpeed = 150;

    const animateLoop = () => {
      if (currentPhase === "appear") {
        if (currentPetal < petals.length) {
          petals[currentPetal].classList.add("show");
          currentPetal++;
          setTimeout(animateLoop, animationSpeed);
        } else {
          setTimeout(() => {
            currentPhase = "disappear";
            currentPetal = 0;
            animateLoop();
          }, 100);
        }
      } else {
        if (currentPetal < petals.length) {
          petals[currentPetal].classList.remove("show");
          currentPetal++;
          setTimeout(animateLoop, animationSpeed);
        } else {
          setTimeout(() => {
            currentPhase = "appear";
            currentPetal = 0;
            animateLoop();
          }, 500);
        }
      }
    };

    animateLoop();
  }, []);

  return (
    <div className="loader-container fixed inset-0 w-screen h-screen z-[1000000000] m-auto rounded-2xl backdrop-blur-sm">
      <div className="flower-loader">
        {[...Array(8)].map((_, index) => (
          <div className="petal" key={index}></div>
        ))}
        <div className="center-circle"></div>
      </div>
    </div>
  );
};

export default BalloraLoader;
