import React from 'react'
import Section1 from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'

class MainContent extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const {
      sections
    } = this.props;
    return (
      <div>
        {
          sections.map(({data, type}) => {
            switch(type) {
              case 1:
                return <Section1  data={data}/>
              case 2:
                return <Section2  data={data.items}/>
              case 3:
                return <Section3  data={data}/>
            }
          })
        }
        {/* <div className="row justify-content-center section3">
          <div className="col-12 align-self-center">
            <h3 className="title">India</h3>
            <h3 className="sub-title">On your plate</h3>
            <div class="row">
              <div className="col-6 image-left">
                <div className="background"></div>
                <div className="content">
                  <h4 className="title">Tikka chicken</h4>
                  <p className="desc">Lorem ipsum dolor 
                  sit amet, consectetur
                  adipisicing elit sed do</p>
                  <span className="price">$14.95</span>
                </div>
              </div>
              <div className="col-6 image-left">
                <div className="background"></div>
                <div className="content">
                  <h4 className="title">Tikka chicken</h4>
                  <p className="desc">Lorem ipsum dolor 
                  sit amet, consectetur
                  adipisicing elit sed do</p>
                  <span className="price">$14.95</span>
                </div>
              </div>
              <div className="col-6 image-right">
                <div className="content">
                  <h4 className="title">Tikka chicken</h4>
                  <p className="desc">Lorem ipsum dolor 
                  sit amet, consectetur
                  adipisicing elit sed do</p>
                  <span className="price">$14.95</span>
                </div>
                <div className="background"></div>
              </div>
              <div className="col-6 image-right">
                <div className="content">
                  <h4 className="title">Tikka chicken</h4>
                  <p className="desc">Lorem ipsum dolor 
                  sit amet, consectetur
                  adipisicing elit sed do</p>
                  <span className="price">$14.95</span>
                </div>
                <div className="background"></div>
              </div>
              <div className="col-6 image-left">
                <div className="background"></div>
                <div className="content">
                  <h4 className="title">Tikka chicken</h4>
                  <p className="desc">Lorem ipsum dolor 
                  sit amet, consectetur
                  adipisicing elit sed do</p>
                  <span className="price">$14.95</span>
                </div>
              </div>
              <div className="col-6 image-left">
                <div className="background"></div>
                <div className="content">
                  <h4 className="title">Tikka chicken</h4>
                  <p className="desc">Lorem ipsum dolor 
                  sit amet, consectetur
                  adipisicing elit sed do</p>
                  <span className="price">$14.95</span>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    )
  }
}

export default MainContent
