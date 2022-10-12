import {Component} from 'react'
import './index.css'

class FaqItem extends Component {
  constructor(props) {
    super(props)
    this.state = {isSelected: false}
  }

  onSelect = () => {
    this.setState(prevState => ({isSelected: !prevState.isSelected}))
  }

  render() {
    const {isSelected} = this.state
    const {eachFaq} = this.props
    const {questionText, answerText} = eachFaq
    const imgUrl = isSelected
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
    const altText = isSelected ? 'minus' : 'plus'
    return (
      <li className="list-item">
        <div className="question-container">
          <h1 className="question">{questionText}</h1>
          <button className="select-btn" onClick={this.onSelect} type="button">
            <img src={imgUrl} alt={altText} />
          </button>
        </div>
        {isSelected && (
          <div>
            <hr />
            <p className="answer">{answerText}</p>
          </div>
        )}
      </li>
    )
  }
}

export default FaqItem
