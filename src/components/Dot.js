import React from 'react'

class Dot extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const {
        num
    } = this.props
    const newArr = [...Array(num).keys()];
    return (
        <div className="dots">
            {
                newArr.map(() => <span className="dot-item"></span>)
            }
        </div>
    )
  }
}

export default Dot
