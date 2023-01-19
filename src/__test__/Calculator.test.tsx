import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'
import Calculator from '../components/calculator/Calculator'
import {
  handleCartValue,
  handleDeliveryDistance,
  handleNumberOfItems,
  handleTime,
} from './../utils/utils'

describe('Calculator component test', () => {
  let wrapper: any

  beforeEach(() => {
    wrapper = shallow(<Calculator />)
  })

  it('Render correctly initial document', () => {
    const tree = renderer.create(<Calculator />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should render the calculator form', () => {
    expect(wrapper.find(".calculator-form")).toHaveLength(1)
  })

  it('should render the 4 input fields', () => {
    expect(wrapper.find("input")).toHaveLength(4)
  })

  it('should render the submit button', () => {
    expect(wrapper.find(".submit-btn")).toHaveLength(1)
  })

  it('should render the delivery price element', () => {
    expect(wrapper.find(".delivery-price")).toHaveLength(1);
  })

  describe('handleCartValue', () => {
    test("should return 1.1 if value is less than 10", () => {
      expect(handleCartValue(5)).toEqual(1.1)
    })

    test('should return 0 if value is greater than 10', () => {
      expect(handleCartValue(11)).toEqual(0)
    })
  })

  describe('handleDeliveryDistance', () => {
    test("should return 1 if value is less than 500", () => {
      expect(handleDeliveryDistance(499)).toEqual(1);
    })

    test('should return 2 if value is between 500 and 1000', () => {
      expect(handleDeliveryDistance(750)).toEqual(2);
    })
    test('should return 3 if value is greater than 1000', () => {
      expect(handleDeliveryDistance(1001)).toEqual(3);
    })
  })

  describe('handleNumberOfItems', () => {
    it('should return 0 if items is less than or equal to 4', () => {
      expect(handleNumberOfItems(4)).toEqual(0)
    })

    it('should return 1 if items is greater than 4', () => {
      expect(handleNumberOfItems(5)).toEqual(0.5)
    })
  })

  describe('handleTime', () => {
    it('should return false if day is not Friday or time is not between 15 and 19', () => {
      expect(handleTime('Sat Aug 29 2020 14:00:00 GMT-0500')).toBe(false);
    })
  })
})