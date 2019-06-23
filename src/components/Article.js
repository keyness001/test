import React from 'react'

class Article extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const {
        title,
        desc,
        price,
        bg,
        position
    } = this.props
    return (
        <div className={`col-6 image-${position}`}>
            <div className="background"></div>
            <div className="content">
            <h4 className="title">{title}</h4>
            <p className="desc">{desc}</p>
            <span className="price">{price}</span>
            </div>
        </div>
    )
  }
}

export default Article
