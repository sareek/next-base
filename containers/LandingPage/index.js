import React, { Component } from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import * as action from "utils/api";
import * as actionAdmin from "utils/apiAdmin";
import "c3/c3.css";
import { imgURL } from "utils/constants";

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  static async getInitialProps() {
    //Note that api calls made here in getInitialprops is first rendered in server and then sent to client 
    //so if server sends slow response or is timeout is there is server no page is rendered, 
    //you can use lifecycle hooks in those cases
    let data =
      (await action
        .getData("beacon/get_current_chain_state/dummy")
        .then((res) => res)) || [];

    return {
      data,
    };
  }

  render() {
    const { data } = this.props;

    return (
      <div className="main-wrapper">
         {/* All the base code goes her, the parent component to this can be layout in component folder  */}
        {data && data.length > 0 ? 
        <div>
          Data goes here
        </div>
         : 
         <div className="no-data-container container">
            <div className="row">
              <div className="col-md-8 offset-md-2 ">
                <div className="error-message">
                  <h1>Oops!! Data not found</h1>
                  <h5>
                    The data you're looking for isn't available yet. Please try
                    again later.
                  </h5>
                </div>
              </div>
            </div>
          </div>
        }
      </div>
    );
  }
}

export default LandingPage;
