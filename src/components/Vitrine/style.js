import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  flex-direction: row;
  width: ${({ mobile }) => (mobile ? "90%" : "")};
  max-width: ${({ mobile }) => (mobile ? "" : "63vw")};
  min-width: ${({ mobile }) => (mobile ? "" : "63vw")};
  flex-wrap: ${({ mobile }) => (mobile ? "no-wrap" : "wrap")};
  overflow-x: ${({ mobile }) => (mobile ? "auto" : "")};
  align-items: flex-start;
  margin-top: 29px;
  margin-left: ${({ mobile }) => (mobile ? "3.8vw" : "7vw")};
  margin-bottom: ${({ mobile }) => (mobile ? "" : "36px")};
  gap: 20px;
`;

export const Card = styled.li`
  width: 300px;
  height: 346px;

  background: #ffffff;
  border: 2px solid #e0e0e0;
  border-radius: 5px;
  flex: none;

  img {
    height: 51%;
    max-width: 100%;
    margin-left: 20%;
  }

  h3 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    color: #333333;
    margin-top: 15px;
    margin-left: 21px;
  }

  p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    color: #828282;
    margin-top: 20px;
    margin-left: 21px;
  }

  h4 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    color: #27ae60;
    margin-top: 14px;
    margin-bottom: 24px;
    margin-left: 21px;
  }

  button {
    margin-left: 21px;
  }
`;
