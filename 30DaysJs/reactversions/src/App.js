import styled from "@emotion/styled";
import { useRef } from "react";
import React from "react";

const CssClock = () => {
  const StyledHtml = styled.div`
    background: #018ded url(https://unsplash.it/1500/1000?image=881&blur=5);
    background-size: cover;
    font-family: "helvetica neue";
    text-align: center;
    font-size: 10px;
  `;

  const StyledBody = styled.div`
    margin: 0;
    font-size: 2rem;
    display: flex;
    flex: 1;
    min-height: 100vh;
    align-items: center;
  `;

  const StyledClock = styled.div`
    width: 30rem;
    height: 30rem;
    border: 20px solid white;
    border-radius: 50%;
    margin: 50px auto;
    position: relative;
    padding: 2rem;
    box-shadow: 0 0 0 4px rgba(0, 0, 0, 0.1), inset 0 0 0 3px #efefef,
      inset 0 0 10px black, 0 0 10px rgba(0, 0, 0, 0.2);
  `;

  const StyledClockFace = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    transform: translateY(-3px);
  `;

  const StyledHand = styled.div`
    width: 50%;
    height: 6px;
    background: black;
    position: absolute;
    top: 50%;
    transform-origin: 100%;
    transform: rotate(90deg);
    transition: all 0.05s;
    transition-timing-function: cubic-bezier(0.1, 2.7, 0.58, 1);
  `;

  const hourRef = useRef();
  const minRef = useRef();
  const secRef = useRef();

  function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const mins = now.getMinutes();
    const hour = now.getHours();

    if (hourRef.current) {
      const secondsDegrees = (seconds / 60) * 360 + 90;
      hourRef.current.style.transform = `rotate(${secondsDegrees}deg)`;
    }

    if (minRef.current) {
      const minsDegrees = (mins / 60) * 360 + (seconds / 60) * 6 + 90;
      minRef.current.style.transform = `rotate(${minsDegrees}deg)`;
    }

    if (secRef.current) {
      const hourDegrees = (hour / 12) * 360 + (mins / 60) * 30 + 90;
      secRef.current.style.transform = `rotate(${hourDegrees}deg)`;
    }
  }

  setInterval(setDate, 1000);

  setDate();

  return (
    <StyledHtml>
      <StyledBody>
        <StyledClock>
          <StyledClockFace>
            <StyledHand ref={hourRef}></StyledHand>
            <StyledHand ref={minRef}></StyledHand>
            <StyledHand ref={secRef}></StyledHand>
          </StyledClockFace>
        </StyledClock>
      </StyledBody>
    </StyledHtml>
  );
};

export const Drum = () => {
  const StyledKeyContainer = styled.div`
    display: flex;
    flex: 1;
    min-height: 100vh;
    align-items: center;
    justify-content: center;
  `;

  const StyledKey = styled.div`
    border: 0.4rem solid black;
    border-radius: 0.5rem;
    margin: 1rem;
    font-size: 1.5rem;
    padding: 1rem 0.5rem;
    transition: all 0.07s ease;
    width: 10rem;
    text-align: center;
    color: white;
    background: rgba(0, 0, 0, 0.4);
    text-shadow: 0 0 0.5rem black;

    &playing {
      transform: scale(1.1);
      border-color: #ffc600;
      box-shadow: 0 0 1rem #ffc600;
    }
    &kbd {
      display: block;
      font-size: 4rem;
    }
    &span {
      font-size: 1.2rem;
      text-transform: uppercase;
      letter-spacing: 0.1rem;
      color: #ffc600;
    }
  `;

  const FunctionalKey = ({ keyToUse, sound, text }) => {
    const audioRef = useRef();

    const playSound = () => {
      if (audioRef.current) {
        audioRef.current.currentTime = 0;
        audioRef.current.play();
        console.log(audioRef.current);
      }
    };

    return (
      <StyledKey onClick={playSound}>
        <kbd>{keyToUse}</kbd>
        <span>{text}</span>
        <audio ref={audioRef} src={sound}></audio>
      </StyledKey>
    );
  };

  return (
    <StyledKeyContainer>
      <FunctionalKey keyToUse="65" sound="sounds/clap.wav" text="clap" />
      <FunctionalKey keyToUse="83" sound="sounds/hihat.wav" text="hihat" />
      <FunctionalKey keyToUse="68" sound="sounds/kick.wav" text="kick" />
      <FunctionalKey keyToUse="70" sound="sounds/openhat.wav" text="openhat" />
      <FunctionalKey keyToUse="71" sound="sounds/boom.wav" text="boom" />
      <FunctionalKey keyToUse="72" sound="sounds/ride.wav" text="ride" />
      <FunctionalKey keyToUse="74" sound="sounds/snare.wav" text="snare" />
      <FunctionalKey keyToUse="75" sound="sounds/tom.wav" text="tom" />
    </StyledKeyContainer>
  );
};

function App() {
  return (
    <div className="App">
      <h1>30 Days of React</h1>
      <h2>Drums</h2>
      <Drum />

      <h2>CLOCK</h2>
      <CssClock />
    </div>
  );
}

export default App;
