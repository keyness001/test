import React from 'react'
import Article from './Article'

class Section3 extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const {
        title,
        subTitle,
        bg,
        items
    } = this.props.data
    return (
        <div className="row justify-content-center section3">
          <div className="col-12 align-self-center">
            <h3 className="title">{title}</h3>
            <h3 className="sub-title">{subTitle}</h3>
            <div class="row">
                {
                    items.map(({title, desc , price, bg, position}) => (
                        <Article 
                            title={title}
                            desc={desc}
                            price={price}
                            bg={bg}
                            position={position}
                        />   
                    ))
                }
            </div>
          </div>
        </div>
    )
  }
}

export default Section3
