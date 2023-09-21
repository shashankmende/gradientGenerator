import {Component} from 'react'
import GradientDirectionItem from '../GradientDirectionItem'
import {
  GradientContainer,
  Heading,
  DirectionPara,
  DirectionList,
  ColorsContainer,
  IndividualColorsContainer,
  ColorInput,
  GenerateButton,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here
class GradientGenerator extends Component {
  state = {
    activeDirection: gradientDirectionsList[0].value,
    color1: '#8ae323',
    color2: '#014f7b',
    c1: '#8ae323',
    c2: '#014f7b',
  }

  onChangeColor1 = event => {
    console.log('color1=', event.target.value)
    this.setState({
      c1: event.target.value,
    })
  }

  onChangeColor2 = event => {
    console.log('color2=', event.target.value)
    this.setState({
      c2: event.target.value,
    })
  }

  onClickGenerate = () => {
    const {c1, c2} = this.state
    this.setState({
      color1: c1,
      color2: c2,
    })
  }

  updateActiveDirection = value => {
    this.setState({
      activeDirection: value,
    })
  }

  render() {
    const {activeDirection, color1, color2, c1, c2} = this.state
    return (
      <GradientContainer
        data-testid="gradientGenerator"
        activeDirection={activeDirection}
        color1={color1}
        color2={color2}
      >
        <Heading>Generate a CSS Color Gradient</Heading>
        <DirectionPara>Choose Direction</DirectionPara>
        <DirectionList>
          {gradientDirectionsList.map(each => (
            <GradientDirectionItem
              key={each.directionId}
              item={each}
              isClicked={each.value === activeDirection}
              updateActiveDirection={this.updateActiveDirection}
            />
          ))}
        </DirectionList>
        <DirectionPara>Pick the Colors</DirectionPara>
        <ColorsContainer>
          <IndividualColorsContainer>
            <DirectionPara>{c1}</DirectionPara>
            <ColorInput
              type="color"
              color={color1}
              onChange={this.onChangeColor1}
            />
          </IndividualColorsContainer>
          <IndividualColorsContainer>
            <DirectionPara>{c2}</DirectionPara>
            <ColorInput
              type="color"
              color={color2}
              onChange={this.onChangeColor2}
            />
          </IndividualColorsContainer>
        </ColorsContainer>
        <GenerateButton type="button" onClick={this.onClickGenerate}>
          Generate
        </GenerateButton>
      </GradientContainer>
    )
  }
}

export default GradientGenerator
