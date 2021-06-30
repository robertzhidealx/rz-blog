import React, { useRef, useEffect } from "react";
import RzAnimation from "./rzAnimation";

const TypeWriter: React.FC<any> = () => {
  const twRefBlack = useRef<HTMLSpanElement>(null);
  const twRefGray = useRef<HTMLSpanElement>(null);
  const refCursor = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    typeWriter(twRefBlack, twRefGray, refCursor);
  }, []);

  return (
    <div className='flex flex-row items-center justify-center mb-typewriterb mt-typewritert p-10 mobile:p-5 mobile:w-full w-navw h-twcontenth text-twwrapper tracking-typewriter'>
      <RzAnimation />
      <div className='w-full h-auto text-typewriter font-bold'>
        <span ref={twRefBlack}>Hi, I'm Robert Zhang. </span>
        <span ref={twRefGray} className='text-gray-typewriter'>
          Every now and then, I'd spice things up with a dose of full-stack web
          development.
        </span>
        <span ref={refCursor} className='font-normal'></span>
      </div>
    </div>
  );
};

const cursor = (
  twRefBlack: React.RefObject<HTMLSpanElement>,
  twRefGray: React.RefObject<HTMLSpanElement>,
  refCursor: React.RefObject<HTMLSpanElement>
) => {
  let blinkState = 0;
  let timeout: any;

  refCursor.current &&
    (timeout = setTimeout(function blink() {
      if (refCursor.current) {
        refCursor.current.innerHTML = blinkState ? "|" : "";
        blinkState = 1 - blinkState;

        if (
          twRefBlack.current &&
          twRefGray.current &&
          twRefBlack.current.innerHTML.length +
            twRefGray.current.innerHTML.length ===
            166
        ) {
          refCursor.current.innerHTML = "";
          clearTimeout(timeout);
        } else timeout = setTimeout(blink, 300);
      }
    }, 300));
};

const typeWriter = (
  twRefBlack: React.RefObject<HTMLSpanElement>,
  twRefGray: React.RefObject<HTMLSpanElement>,
  refCursor: React.RefObject<HTMLSpanElement>
) => {
  if (twRefBlack.current && twRefGray.current) {
    twRefBlack.current.innerText = "";
    twRefGray.current.innerText = "";
    const blackText = "Hi, I'm Robert Zhang.";
    const grayText =
      " Every now and then, I'd spice things up with a dose of full-stack web development.";

    let posBlack = 0;
    let posGray = 0;
    let switchPoint = 0;

    let init = getRand();
    let speed = getRand(50);
    let progress = 0;

    cursor(twRefGray, twRefGray, refCursor);
    setTimeout(() => {
      let interval: any;

      interval = setTimeout(function typist() {
        if (twRefBlack.current && twRefGray.current) {
          !switchPoint
            ? (twRefBlack.current!.innerHTML += blackText[posBlack++])
            : (twRefGray.current!.innerHTML += grayText[posGray++]);

          progress++;

          if (posBlack === blackText.length) switchPoint = 1;
          if (posBlack === blackText.length && posGray === grayText.length) {
            clearTimeout(interval);
          } else {
            if (speed < progress) {
              init = getRand();
              speed = getRand(50);
              progress = 0;
            }
            interval = setTimeout(typist, init);
          }
        }
      }, init);
    }, 1500);
  }
};

const getRand = (multiplier = 150) => {
  return Math.floor(Math.random() * multiplier);
};

export default TypeWriter;
