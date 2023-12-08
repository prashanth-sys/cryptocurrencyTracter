// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {blogData} = props
  const {usdValue, currencyName, currencyLogo, euroValue} = blogData

  return (
    <div className="list-container">
      <h1 className="heading">Cryptocurrencies Tracker</h1>
      <ul>
        <li>{currencyLogo}</li>
        <li>{currencyName}</li>
        <li>{usdValue}</li>
        <li>{euroValue}</li>
      </ul>
    </div>
  )
}
export default CryptocurrencyItem
