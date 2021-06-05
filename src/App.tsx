import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { animateScroll as scroll } from "react-scroll";
import { ParallaxProvider } from "react-scroll-parallax";

const cryptoName = "CHIPTOCURRENCY";

const Behind: React.FC<{ rate: number; max: number; offset: number }> = ({
  rate,
  max,
  offset,
}) => {
  const current = offset / rate;
  return (
    <H1Behind offset={current < max ? current : max}>{cryptoName}</H1Behind>
  );
};

const H1Behind = styled.h1`
  transform: translate3d(
      -5px,
      ${(props: { offset: number }) => props.offset}px,
      0px
    )
    scale(0.99705);
  color: #009fff82;
  margin-bottom: -275px;
`;

function App() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset);
    };
  }, []);
  useEffect(() => {
    setTimeout(() => {
      scroll.scrollToBottom({ duration: 3000 });
    }, 2000);
  }, []);
  return (
    <ParallaxProvider>
      <div className="app">
        <div className="upper-border"></div>

        <div style={{ height: "4em" }} className="container">
          <h1 style={{ zIndex: 2 }}>{cryptoName}</h1>
          <Behind rate={2} max={300} offset={offset} />
          <Behind rate={3} max={200} offset={offset} />
          <Behind rate={4} max={100} offset={offset} />
        </div>
        <div className="bottom-border"></div>
      </div>
      <div className="app">
        <div className="container">
          <div className="circle">C</div>
        </div>
      </div>
    </ParallaxProvider>
  );
}

export default App;
