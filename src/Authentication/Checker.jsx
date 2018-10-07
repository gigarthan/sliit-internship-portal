import React from 'react';
import { connect } from 'react-redux';
import { compose } from "redux";
import { firebaseConnect } from "react-redux-firebase";

class Checker extends React.Component {

    componentWillMount() {
       

        console.log('dsadasdsa', this.props.firebase.auth());
        console.log('fb', this.props.auth);
        if(this.props.firebase) {
            let auth = this.props.firebase.auth();

            if(auth && auth.currentUser)
                if(auth.currentUseremail.indexOf !== -1) {
                    this.props.history.push('/students');
                } else {
                    this.props.history.push('/company');
                }
        } 
      }

      auth = () => {
        console.log('dsadasdsa', this.props.firebase.auth());
      }
    
  
    render() {
        { this.auth() }
        return (<div>Logging you in please wait....</div>);
    }
}

function mapStateToProps({ firebase }) {
    return ( { auth : firebase.auth } );
}


// export default compose(
//     firebaseConnect(),
//     connect(mapStateToProps)
//   )(Checker);

  export default firebaseConnect()(Checker);
