import styled from "styled-components";
import { Flex } from "grid-styled";

export const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f2f2f2;
`;

export const StyledHeader = styled.div`
  padding: 1%;
  font-size: 3em;
  font-family: serif;
`;

export const StyledCartContainer = styled.div`
  height: 100%;
  margin: 1% 20%;
  background-color: white;
  padding: 2%;
`;

export const StyledTable = styled.table`
  width: 100%;
  margin-left: 1%;
  border-collapse: collapse;
`;

export const StyledTh = styled.th`
  font-weight: normal;
  text-align: ${props => `${props.align}`};
  font-size: 0.8em;
  color: #a4a4a4;
`;

export const Spacer = styled.div`
  width: 100%;
  height: 20px;
`;

export const StyledSummary = styled(Flex)`
  justify-content: flex-end;
  font-size: 0.8em;
  color: #a4a4a4;
  border-top: 1px solid #f2f2f2;
`;

export const StyledSummaryContent = styled(Flex)`
  align-self: flex-start;
  flex-direction: column;
  width: 50%;
`;

export const StyledSummaryRow = styled(Flex)`
  justify-content: space-between;
  padding: 2% 0;
`;
