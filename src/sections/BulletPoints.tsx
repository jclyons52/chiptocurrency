import styled from "styled-components";

const Container = styled.div.attrs({
  className: "container",
})`
  justify-content: space-around;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  font-family: monoton;
  align-items: center;
`;

export const BulletPoints = () => {
  return (
    <div style={{ marginTop: "30px" }} className="app">
      <Container>
        <Card>
          <div className="circle">C</div>
          <h2 style={{ marginTop: "30px" }}>Fast</h2>
        </Card>
        <Card>
          <div className="circle">C</div>
          <h2 style={{ marginTop: "30px" }}>Scalable</h2>
        </Card>{" "}
        <Card>
          <div className="circle">C</div>
          <h2 style={{ marginTop: "30px" }}>Secure</h2>
        </Card>
      </Container>
    </div>
  );
};
