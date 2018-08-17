import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom'

const nav = {
    display: "flex",
    padding: "20px",
    width: "11%",
    height: "100px"
}

class Navigation extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            months: []
        }
    }

    render() {
        return (
                <div style={nav}>
                        <Link to='/accounts'>Accounts</Link>
                        <Link to='/transactions'>Transactions</Link>
                </div>
        )
    }
}

//Container
const mapState = state => {
    return {
        state
        }
}

const mapDispatch = dispatch => {
    return {
    }
}

export default connect(mapState, mapDispatch)(Navigation)

