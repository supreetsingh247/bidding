import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import Header from './common/Header';

class App extends React.Component{
    render() {
        return (
            <div className="container-fluid">
                <Header />
                {this.props.children}
    </div>
    );
    }
}

function mapStateToProps(state, ownProps) {
}
App.PropTypes = {
    children: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(App);
