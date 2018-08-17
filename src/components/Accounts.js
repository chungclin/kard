import React, { Component } from "react";
import { connect } from "react-redux";



class Accounts extends Component {
    constructor(props){
        super(props)
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
        state,
      user: state.user
    }
  }


  export default connect(mapState)(Accounts);