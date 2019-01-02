import React from 'react';
import styled from 'styled-components/native';

const NotationRow = styled.View`
  flex-direction: row;
`;

const SpreadsheetCell = styled.Text`
  height: 40;
  width: 75;
  border-width: 1;
  color: ${({ theme: { text } }) => text};
  background-color: ${({ theme: { primaryGradient2 } }) => primaryGradient2};
`;


const HeaderNotationCell = styled(SpreadsheetCell)`
  width: 150;
`;

const HeaderRow = () => (
    <NotationRow>
        <HeaderNotationCell>Notation</HeaderNotationCell>
        <SpreadsheetCell>Speed</SpreadsheetCell>
        <SpreadsheetCell>On Block</SpreadsheetCell>
        <SpreadsheetCell>On Hit</SpreadsheetCell>
        <SpreadsheetCell>Counter Hit</SpreadsheetCell>
        <SpreadsheetCell>Hit Level(s)</SpreadsheetCell>
        <SpreadsheetCell>Damage</SpreadsheetCell>
    </NotationRow>
);

export default HeaderRow;