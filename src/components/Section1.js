import React from 'react'

class Section1 extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const {
        title,
        desc,
        bg
    } = this.props.data
    return (
      <div className="row justify-content-center section1">
        <div className="col-6 align-self-center left">
            <p className="title">{title}</p>
            <p className="desc">{desc}</p>
        </div>
        <div className="col-6 right" style={{
            // link img server
            //backgroundImage: `url(${bg})`
        }}></div>        
      </div>
    )
  }
}

export default Section1
