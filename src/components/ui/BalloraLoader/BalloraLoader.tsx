import { useEffect } from "react";
import "./BalloraLoader.css";

import { motion, AnimatePresence } from "framer-motion";
const BalloraLoader = ({ isOpen }: { isOpen: boolean }) => {
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
    <AnimatePresence>
      {isOpen && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="loader-container fixed inset-0 z-[1000000000] m-auto h-screen w-screen rounded-2xl bg-[#f6f1e9]"
        >
          <div className="flower-loader">
            {[...Array(8)].map((_, index) => (
              <div className="petal" key={index}></div>
            ))}
            <div className="center-circle"></div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BalloraLoader;
