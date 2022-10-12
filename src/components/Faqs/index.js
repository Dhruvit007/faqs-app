import {Component} from 'react'
import FaqItem from '../FaqItem'
import './index.css'

class Faqs extends Component {
  render() {
    const {faqsList} = this.props
    return (
      <div className="container">
        <div className="contain-container">
          <div className="main-faq-container">
            <h1 className="main-heading">FAQS</h1>
            <ul className="list-item-container">
              {faqsList.map(eachFaq => (
                <FaqItem key={eachFaq.id} eachFaq={eachFaq} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Faqs
