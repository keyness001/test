import React from 'react'

class Navbar extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const {
      data
    } = this.props;

    return (
      <div className="col-12 navbar" >
        <div className="row">
            <div className="col-5 logo">
                <a href="/">Brunch</a>
            </div>
            <div className="col-7 links">
                <ul className="link-wrapper">
                  {
                    data.map(({url, title}) => <li><a href={url}>{title}</a></li>)
                  }
                </ul>
            </div>
        </div>
      </div>
    )
  }
}

export default Navbar
