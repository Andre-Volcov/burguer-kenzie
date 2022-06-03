import styled from "styled-components";

export const HeaderStyle = styled.header`
  display: flex;
  flex-direction: ${({ mobile }) => (mobile ? "column" : "row")};

  align-items: ${({ mobile }) => (mobile ? "center" : "space-between")};
  justify-content: ${({ mobile }) => (mobile ? "center" : "space-between")};
  text-align: center;

  gap: ${({ mobile }) => (mobile ? "14px" : "0px")};
  margin-top: 14px;

  width: ${({ mobile }) => (mobile ? "" : "83%")};

  .logo {
    width: 158px;
  }

  nav {
    display: flex;
    flex-direction: row;

    align-items: center;
    justify-content: space-between;

    width: 345px;
    height: 60px;
    padding: 0px 10px 0px 15px;

    border: 2px solid #e0e0e0;
    border-radius: 8px;
  }

  nav > input {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    color: #828282;
    border: none;
  }

  nav > input::placeholder {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    color: #e0e0e0;
    border: none;
  }
`;
