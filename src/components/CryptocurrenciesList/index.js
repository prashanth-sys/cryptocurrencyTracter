// Write your JS code here
import {Component} from 'react'

import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

class CryptocurrenciesList extends Component {
  state = {blogsData: []}

  componentDidMount() {
    this.getCryptocurrencyData()
  }

  getCryptocurrencyData = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = response.json()
    const formatedData = data.map(eachItem => ({
      id: eachItem.id,
      usdValue: eachItem.usd_value,
      euroValue: eachItem.euro_value,
      currencyName: eachItem.currencyName,
      currencyLogo: eachItem.currency_logo,
    }))
    this.setState({blogsData: formatedData})
  }

  render() {
    const {blogsData} = this.state
    return (
      <div className="bg-container">
        <h1 className="main-heading">Cryptocurrencies Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
        />
        <div className="card-container">
          {blogsData.map(eachData => (
            <CryptocurrencyItem blogData={eachData} key={eachData.id} />
          ))}
        </div>
      </div>
    )
  }
}

export default CryptocurrenciesList
