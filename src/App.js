import {Component} from 'react'
import {FaBold, FaItalic} from 'react-icons/fa'
import {BiUnderline} from 'react-icons/bi'
import {TextArea, Button, Button1, Button2} from './styledComponents'
import './App.css'

// Replace your code here
class App extends Component {
  state = {bolds: false, italics: false, underlines: false}

  gotoBold = () => {
    this.setState(prev => ({bolds: !prev.bolds}))
  }

  gotoItalic = () => {
    this.setState(prev => ({italics: !prev.italics}))
  }

  gotounder = () => {
    this.setState(prev => ({underlines: !prev.underlines}))
  }

  render() {
    const {bolds, italics, underlines} = this.state

    return (
      <div>
        <div>
          <div>
            <h1>Text Editor</h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </div>
          <div>
            <ul>
              <li>
                <Button
                  isbold={bolds}
                  type="button"
                  className="btn"
                  onClick={this.gotoBold}
                  data-testid="bold"
                >
                  <FaBold />
                </Button>
              </li>
              <li>
                <Button1
                  isItalic={italics}
                  type="button"
                  className="btn"
                  onClick={this.gotoItalic}
                  data-testid="italic"
                >
                  <FaItalic />
                </Button1>
              </li>
              <li>
                <Button2
                  isUnder={underlines}
                  type="button"
                  className="btn"
                  onClick={this.gotounder}
                  data-testid="underline"
                >
                  <BiUnderline />
                </Button2>
              </li>
            </ul>
            <hr />
            <div>
              <TextArea isbold={bolds} isItalic={italics} isUnder={underlines}>
                s
              </TextArea>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
