// Write your code hear

import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import CryptocurrenciesList from '../CryptocurrenciesList'

import './index.css'

class CryptocurrencyTracker extends Component {
  state = {isLoading: true}

  render() {
    const {isLoading} = this.state

    return (
      <div className="bg-container">
        {!isLoading ? (
          <Loader type="Rings" color="#ffffff" height={80} width={80} />
        ) : (
          <CryptocurrenciesList />
        )}
      </div>
    )
  }
}

export default CryptocurrencyTracker
