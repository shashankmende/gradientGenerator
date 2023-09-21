// Style your elements here
import styled from 'styled-components'

export const List = styled.li`
  background-color: #ffffff;
  list-style-type: none;
  margin-right: 10px;
  border-radius: 8px;
  padding: 10px;
  opacity: 1;
`

export const DirectionBtn = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  outline: none;
  color: #334155;
  font-family: 'Roboto';
  font-weight: 'bold';
  opacity: 0.5;
`

export const DirectionInActive = styled(DirectionBtn)`
  opacity: 1;
`
