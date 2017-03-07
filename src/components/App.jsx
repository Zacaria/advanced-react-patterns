import React from 'react'

import withWidth, { LARGE } from './patterns/HigherOrderComponents/exercise/withWidth'
import Question1 from './questions/Question1'
import Question2 from './questions/Question2'
import Question3 from './questions/Question3'
import Question4 from './questions/Question4'
import MenuItem from './patterns/CompoundComponents/exercise/MenuItem'
import Menu from './patterns/CompoundComponents/exercise/Menu'
import Accordion from './patterns/Context/exercise/Accordion'
import Modal from './patterns/Context/example/Modal'
import TopVoucher from './vouchers/TopVoucher'
import BottomVoucher from './vouchers/BottomVoucher'
import '../assets/main.css'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      menu: { open : false }
    }
  }

  toggleMenu = () => {
    if (this.props.width !== LARGE) {
      this.setState({ menu : { open: !this.state.menu.open } })
    }
  }

  render() {
    let isMenuOpen = this.state.menu.open
    const styles = {
      paddingRight: '20px',
      paddingLeft: '20px'
    }

    if (this.props.width === LARGE) {
      isMenuOpen = true
      styles.paddingLeft = 320
    }

    return (
      <Modal>
        <div id="page-wrap">
          <Menu
             isOpen={ isMenuOpen }
             toggleMenu={ this.toggleMenu }
          >
           <TopVoucher />
           <MenuItem link="#1" toggleMenu={ this.toggleMenu }>1. Higher-Order Components</MenuItem>
           <MenuItem link="#2" toggleMenu={ this.toggleMenu }>2. Render Callback</MenuItem>
           <MenuItem link="#3" toggleMenu={ this.toggleMenu }>3. Compound Components</MenuItem>
           <Accordion header="I'm an accordion">
              <MenuItem link="#4" toggleMenu={ this.toggleMenu }>4. Context</MenuItem>
           </Accordion>
           <BottomVoucher />
          </Menu>
          <div style={ styles } className="view-container">
            <h1>Advanced React Patterns</h1>
            <Question1 />
            <Question2 />
            <Question3 />
            <Question4 />
          </div>
       </div>
     </Modal>
    )
  }
}

export default withWidth({largeWidth: 1200, mediumWidth: 805})(App)
