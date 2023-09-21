// Style your elements here
import styled from 'styled-components'

export const GradientContainer = styled.div`
  background-image: linear-gradient(
    to ${props => props.activeDirection},
    ${props => props.color1},
    ${props => props.color2}
  );
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Heading = styled.h1`
  font-family: 'Roboto';
  color: #ffffff;
`

export const DirectionPara = styled.p`
  font-family: 'Roboto';
  color: #ededed;
`

export const DirectionList = styled.ul`
  display: flex;
  flex-direction: row;
`

export const ColorsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 400px;
  padding: 10px;
`
export const IndividualColorsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: ${props => props.color};
  width: 200px;
`

export const ColorInput = styled.input`
  width: 50%;
`

export const GenerateButton = styled.button`
  border: none;
  background-color: #00c9b7;
  color: #014f7b;
  border-radius: 8px;
  padding: 10px;
  font-family: 'Roboto';
  font-weight: 'bold';
  cursor: pointer;
  outline: none;
`
