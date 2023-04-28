import {Component} from 'react'

const emojiScores = ['😦', '😞', '😐', '🙂', '😁']

class HappinessPicker extends Component {
  render() {
    const {currentScore, handleClick} = this.props
    return (
      <div className='inline min-w-fit min-h-fit outline-0 hover:shadow-lg my-2' role="button">
        {
          emojiScores.map((emoji, index) => <button key={index} className={`text-4xl p-2 border-2 border-t-slate-400 border-l-slate-400 border-r-black border-b-black ${index === currentScore ? 'bg-sky-700' : 'bg-slate-100'}`} onClick={handleClick} value={index}>{emoji}</button>)
        }
      </div>
    )
  }

}

export default HappinessPicker
