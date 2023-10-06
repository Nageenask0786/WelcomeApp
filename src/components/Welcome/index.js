import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {issubscribe: true}

  isSubscribedbtn = () => {
    this.setState(prevState => ({issubscribe: !prevState.issubscribe}))
  }

  getButtontext = () => {
    const {issubscribe} = this.state
    return issubscribe ? 'Subscribe' : 'Subscribed'
  }

  render() {
    const buttonText = this.getButtontext()

    return (
      <div className="container">
        <h1 className="heading">Welcome</h1>
        <p className="para">Thank you! Happy Learning</p>
        <button className="button" type="button" onClick={this.isSubscribedbtn}>
          {buttonText}
        </button>
      </div>
    )
  }
}

export default Welcome
