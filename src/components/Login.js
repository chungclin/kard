import React, { Component } from "react";
import PlaidLink from "react-plaid-link";
import { connect } from "react-redux";
import { fetchInformation } from '../store/index'

class Plaid extends Component {
    render() {
      const { handleOnSuccess, handleOnExit } = this.props;
      return (
        <div>
          <PlaidLink
            clientName="Kard"
            env='sandbox'
            product={["auth", "transactions"]}
            publicKey='bf36c686764634d92bbaad5ed624b7'
            onExit={handleOnExit}
            onSuccess={handleOnSuccess}
            //   onLoad={getData}
          >
            Login with your bank account
          </PlaidLink>
        </div>
      );
    }
}
  

  const mapState = state => {

  }

  const mapDispatch = dispatch => {
    return {
      handleOnExit(metadata) {
        //user cancel to add bank to account
        // console.log(error, metadata)
      },
      handleOnSuccess(token, metadata) {
        console.log(token, 'here!')
        dispatch(fetchInformation(token, metadata));
      }
    };
  };
  
  export default connect(mapState, mapDispatch)(Plaid);