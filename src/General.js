import styled from "styled-components";

export const GeneralButton = styled.button`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 20px;
  gap: 10px;
  background: #27ae60;
  border: 2px solid #27ae60;
  border-radius: 8px;
  height: 40px;
  width: 107px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;

  color: #ffffff;
`;

export const FlexDiv = styled.div`
  display: flex;
  flex-direction: ${({ mobile }) => (mobile ? "column" : "row")};
  width: 100%;
  justify-content: flex-start;
  align-content: flex-start;
`;
