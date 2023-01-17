import calendarIcon from './../../images/calendar.png'
import './Calculator.css'

const Calculator = () => {
  return (
    <div className="calculator">
      <div className="calculator-div">
        <h4 className="calculator-title">Calculator</h4>
        <form className="calculator-form">
          <div className="calculator-form-div">
            <div className="form-input form-label">
              <div>
                <label htmlFor="cartValue">Cart Value</label>
              </div>
              <div>
                <label htmlFor="deliveryDistance">Delivery distance</label>
              </div>
              <div>
                <label htmlFor="amountOfItems">Amount of items</label>
              </div>
              <div>
                <label htmlFor="time">Time</label>
              </div>
            </div>
            <div className="form-input">
              <div>
                <input type="number" id="cartValue"  inputMode="numeric" pattern="[0-9]*" onWheel={({ target }) => {
                  console.log('asdfasdf', target)
                }} />
                <span>€</span>
              </div>
              <div>
                <input type="number" id="deliveryDistance" />
                <span>m</span>
              </div>
              <div>
                <input type="number" id="amountOfItems" />
              </div>
              <div>
                <input type="date" id="time" />
                <img src={calendarIcon} alt="Calendar" />
              </div>
            </div>
          </div>
          <button type="submit" className="submit-btn">Calculate delivery price</button>
        </form>

        <div className="delivery-price">
          <p>Delivery price: 0 € </p>
        </div>
      </div>
    </div>
  )
}

export default Calculator