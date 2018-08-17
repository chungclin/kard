import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchTransactions } from "../store"


class Transactions extends Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.getTransactions()
    }



    render(){
        return (
            <div>
            </div>
        )
    }

}


const mapState = state => {
    return {
        state
    //   user: state.user
    }
  }

const mapDispatch = dispatch => {
    return {
        getTransactions(){
            dispatch(fetchTransactions())
        }
    }
}


  export default connect(mapState, mapDispatch)(Transactions);
