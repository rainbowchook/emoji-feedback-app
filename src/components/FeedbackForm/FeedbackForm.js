import {Component} from 'react'
import HappinessPicker from "../HappinessPicker/HappinessPicker"

class FeedbackForm extends Component {
  state = {
    foodScore: 0,
    serviceScore: 0,
    valueForMoneyScore: 0
  }

  getTotal = () => {
    const {foodScore, serviceScore, valueForMoneyScore} = this.state
    return [foodScore, serviceScore, valueForMoneyScore].reduce((acc, curr) => acc + curr, 0)
  }

  updateFoodScore = (e) => {
    this.setState({foodScore: Number.parseInt(e.target.value)})
  }

  updateServiceScore = (e) => {
    this.setState({serviceScore: Number.parseInt(e.target.value)})
  }

  updateValueForMoneyScore = (e) => {
    this.setState({valueForMoneyScore: Number.parseInt(e.target.value)})
  }

  render() {
    const {foodScore, serviceScore, valueForMoneyScore} = this.state
    const {getTotal, updateFoodScore, updateServiceScore, updateValueForMoneyScore} = this
    return (
      <div className='border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto mt-4'>
        <h1 className='text-center font-bold text-3xl my-3'>Let us know how we did!</h1>
        <div className='flex flex-col items-start'>
          <label className='text-lg mr-2 my-2'>Food</label>
          <HappinessPicker currentScore={foodScore} handleClick={updateFoodScore}/>
          <label className='text-lg mr-2'>Service</label>
          <HappinessPicker currentScore={serviceScore} handleClick={updateServiceScore}/>
          <label className='text-lg mr-2'>Value for Money</label>
          <HappinessPicker currentScore={valueForMoneyScore} handleClick={updateValueForMoneyScore}/>
        </div>
        <p className='my-4 mx-2 font-bold text-2xl'>Total Score: {getTotal()}/12</p>
      </div>
    )
  }
}

export default FeedbackForm
