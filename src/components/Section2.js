import React from 'react'
import Dot from './Dot'

class Section2 extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const {
        data
    } = this.props

    return (
        <div className="row justify-content-center section2">
            {
                data.map(({title, desc}, index) => {
                    return (
                        <div className={`col-${12 / data.length}`}>
                            <Dot num={index + 1} />
                            <p className="title">{title}</p>
                            <p className="desc">{desc}
                            </p>
                        </div>
                    )
                })
            }
            {/* <div className="col-4">
            <div className="dots">
                <span className="dot-item"></span>
            </div>
            <p className="title">New tastes</p>
            <p className="desc">
                Lorem ipsum dolor sit amet, consecte
                sectetur adipisicing elit, tation omne 
                ullamco laboris nisi ut aliqolore.
            </p>
            </div> */}
      </div>
    )
  }
}

export default Section2
