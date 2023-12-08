// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {blogData} = props
  const {usdValue, currencyName, currencyLogo, euroValue} = blogData

  return (
    <div className="list-container">
      <div className="list-items">
        <img src={currencyLogo} alt="currency_name" />
        <p>{currencyName}</p>
        <p>{usdValue}</p>
        <p>{euroValue}</p>
      </div>
    </div>
  )
}
export default CryptocurrencyItem
