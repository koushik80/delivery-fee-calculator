import { useState } from 'react'
import calendarIcon from './../../images/calendar.png'
import './Calculator.css'

const Calculator = () => {
  const [cartValue, setCartValue] = useState<number>()
  const [deliveryDistance, setDeliveryDistance] = useState<number>()
  const [amountOfItems, setAmountOfItems] = useState<number>()
  const [time, setTime] = useState<Date>()
  const [deliveryCharge, setDeliveryCharge] = useState<number>(0)

  const handleCartValue = (value: number) => {
    let surcharge = 0

    if (value < 10) {
      surcharge = 1.1 //when cart value is less than 10€ surcharge will be 1.10€
    }

    return surcharge
  }

  const handleDeliveryDistance = (value: number) => {
    let deliveryFee = 0
    let extraMeter

    if (value < 500) {
      deliveryFee = 1 //when distance is shorter than 500m
    } else if (500 < value && value < 1000) {
      deliveryFee = 2 //distance is shorter than 1km
    } else if (value > 1000) {
      extraMeter = value - 1000 // counted additional meter

      deliveryFee = 2 + Math.ceil(extraMeter / 500) * 1 // fee will be base charge 2€ + 1€ more for every 500m
    }

    return deliveryFee
  }

  const handleNumberOfItems = (items: number) => {
    let surcharge = 0

    if (items <= 4) {
      surcharge = 0 // number of item is 4 or less than that no extra charge
    } else if (items > 4) {
      surcharge = (items - 4) * 0.5 // 50 cents will be added if number of item is 5
    }

    return surcharge
  }

  const handleTime = (time: string) => {
    const inputDate = new Date(time)
    const getDay = inputDate.getDay()
    const getTime = inputDate.getHours()

    if (getDay === 5 && getTime >= 15 && getTime <= 19) { // rush time during 3pm-7pm
      return true
    } else {
      return false
    }
  }

  const handleDeliveryCharge = (e: any) => {
    e.preventDefault()
    let surCharge = handleCartValue(Number(cartValue))
    let deliveryCharge = handleDeliveryDistance(Number(deliveryDistance))
    let itemsSurCharge = handleNumberOfItems(Number(amountOfItems))
    const isRushTime = handleTime(String(time))

    let finalDeliveryCharge = surCharge + deliveryCharge + itemsSurCharge


    if (isRushTime) {
      finalDeliveryCharge = finalDeliveryCharge * 1.2 //during rush time delivery 1.2 times higher than the regular total delivery fee
    }

    if (Number(cartValue) === 100 || Number(cartValue) > 100) {
      finalDeliveryCharge = 0  // when the cart value is 100€ or more than that
    }

    if(finalDeliveryCharge > 15) {
      finalDeliveryCharge = 15 //delivery charge can't be more than 15€
    }

    setDeliveryCharge(finalDeliveryCharge)
  }

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
                <input
                  required
                  type="number"
                  id="cartValue"
                  min="0"
                  onChange={({ target }) => setCartValue(Number(target.value))}
                  onBlur={({ target }) => setCartValue(Number(target.value))}
                />
                <span>€</span>
              </div>
              <div>
                <input
                  required
                  type="number"
                  id="deliveryDistance"
                  onChange={({ target }) =>
                    setDeliveryDistance(Number(target.value))
                  }
                  onBlur={({ target }) =>
                    setDeliveryDistance(Number(target.value))
                  }
                />
                <span>m</span>
              </div>
              <div>
                <input
                  required
                  type="number"
                  min="0"
                  id="amountOfItems"
                  onChange={({ target }) =>
                    setAmountOfItems(Number(target.value))
                  }
                  onBlur={({ target }) =>
                    setAmountOfItems(Number(target.value))
                  }
                />
              </div>
              <div>
                <input
                  type="datetime-local"
                  id="time"
                  onChange={({ target }) => setTime(new Date(target.value))}
                  onBlur={({ target }) => setTime(new Date(target.value))}
                  required
                />
                <img src={calendarIcon} alt="Calendar" />
              </div>
            </div>
          </div>
          <button
            onClick={handleDeliveryCharge}
            type="submit"
            className="submit-btn"
          >
            Calculate delivery price
          </button>
        </form>

        <div className="delivery-price">
          <p>Delivery price: {deliveryCharge} € </p>
        </div>
      </div>
    </div>
  )
}

export default Calculator