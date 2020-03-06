import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class AreaHome extends Component {
  constructor() {
    super();
    this.state = {
      currentObj: [],
      isLoading: true
    };
  }

  setCurrentObj = () => {
    let currentObj = this.props.names.filter(
      item => item.state === this.props.match.params.parkpage
    );
    return currentObj;
  };
  //This one will happen if the one below cannot because the props have not come in yet. as the props come in and prevprops no longer equals props, the state will be set to the correct object
  componentDidUpdate(prevProps) {
    if (this.props.names !== prevProps.names) {
      let currentObj = this.setCurrentObj();
      this.setState({ currentObj: currentObj, isLoading: false });
      console.log(this.state);
    }
  }
  //This one will happen if the props have fully come in or loaded, and the names array is greater than 1. If it needs to load the above function will run
  componentDidMount() {
    if (this.props.names.length > 1) {
      let currentObj = this.setCurrentObj();
      this.setState({ currentObj: currentObj, isLoading: false });
      console.log(this.state);
    }
  }
  render() {
    if (!this.state.isLoading) {
      return (
        <div>
          <h2>{this.state.currentObj[0].name}</h2>
          <div class="modal" tabindex="-1" role="dialog">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title">Modal title</h5>
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <p>Modal body text goes here.</p>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" class="btn btn-primary">
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return <div>Loading</div>;
    }
  }
}

export default AreaHome;
