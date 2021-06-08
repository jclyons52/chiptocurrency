import { FC, useEffect, useState, useRef } from "react";
import styled from "styled-components";

const Behind: FC<{
  rate: number;
  max: number;
  offset: number;
  cryptoName: string;
}> = ({ rate, max, offset, cryptoName }) => {
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

export const Title: FC<{ cryptoName: string }> = ({ cryptoName }) => {
  const [offset, setOffset] = useState(0);

  const ref = useRef<HTMLHeadingElement>(null);
  let height = ref?.current?.clientHeight ?? 50;
  console.log(ref)

  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset);
    };
  }, []);

  return (
    <div style={{ zIndex: 3, position: "relative" }} className="app cyber">
      <div className="upper-border"></div>
      <div style={{ height: "4em" }} className="container">
        <h1 ref={ref} style={{ zIndex: 2 }}>{cryptoName}</h1>
        <Behind cryptoName={cryptoName} rate={1} max={3 * height} offset={offset} />
        <Behind cryptoName={cryptoName} rate={1.5} max={2 * height} offset={offset} />
        <Behind cryptoName={cryptoName} rate={2} max={height} offset={offset} />
      </div>
      <div className="bottom-border"></div>
    </div>
  );
};
