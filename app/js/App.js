'use strict';

import {Component, PropTypes, cloneElement} from 'react'

import Header             from './components/Header'
import Footer             from './components/Footer'
import TokenBanner         from './components/TokenBanner'


const propTypes = {
  params: PropTypes.object,
  query: PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object
  ])
}

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  renderChildren() {
    return cloneElement(this.props.children, {
      params: this.props.params,
      query: this.props.query
    })
  }

  render() {
    let specialHeader = false
    if (location.pathname === '/' ||
        location.pathname === '/token') {
      specialHeader = true
    }

    return (
      <div className={specialHeader ? 'app-landing' : 'app-common'}>
        { !specialHeader ?
        <div>
          <TokenBanner />
          <Header />
        </div>
        : null }
        {this.renderChildren()}
        <Footer />
      </div>
    )
  }

}

App.propTypes = propTypes

export default App
