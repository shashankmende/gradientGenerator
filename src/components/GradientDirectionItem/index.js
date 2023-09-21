// Write your code here
import {List, DirectionBtn, DirectionInActive} from './styledComponents'

const GradientDirectionItem = props => {
  const {item, isClicked, updateActiveDirection} = props
  console.log('is clicked', isClicked)
  const {displayText, value} = item

  const onClickDirectionBtn = () => {
    updateActiveDirection(value)
  }

  return (
    <List>
      {isClicked ? (
        <DirectionInActive onClick={onClickDirectionBtn}>
          {displayText}
        </DirectionInActive>
      ) : (
        <DirectionBtn onClick={onClickDirectionBtn}>{displayText}</DirectionBtn>
      )}
    </List>
  )
}

export default GradientDirectionItem
