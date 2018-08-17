import React, { Component } from "react";
import PlaidLink from "react-plaid-link";
import { connect } from "react-redux";
import { fetchTransactions } from '../store'



class Transactions extends Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        console.log('mounted transactions')
        this.props.getTransactions()
    }

    render(){
        console.log(this.props.state)
        return (
            <div>
            </div>
        )
    }
}


const mapState = state => {
    return {
        state
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

