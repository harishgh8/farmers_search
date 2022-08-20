import styled from "styled-components";

export const StyledTable = styled.table`
  font: normal 14px Open Sans;
  text-align: left;
  width: 100%;
  border: 1px solid #a7adb1;
  border-collapse: collapse;
  letter-spacing: 0px;
  color: #303e47;
  opacity: 1;
  tbody {
    text-transform: uppercase;
    td {
      padding-top: 11px;
      padding-bottom: 11px;
      padding-left: 20px;
      border-bottom: 1px solid #a7adb1;
    }
  }
  thead {
    font-weight: bold;
    font-size: 14px;
    td {
      border-bottom: 1px solid #707070;
      padding-top: 7px;
      padding-bottom: 7px;
      padding-left: 20px;
    }
  }
`;
