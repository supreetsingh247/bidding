import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Description from './Description';
import * as productActions from '../../actions/productActions';
import iphone from '../../resources/images/iphone7.png';
import galaxy from '../../resources/images/s7edge.png';


class Products extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
        };
        const store = this.context.store;
        //store.dispatch(loadAuthors());
    }

    render() {
        return (
            <Description
                products = {this.props.products}
            />
        );
    }
}

Products.contextTypes = {
    router : PropTypes.object,
    store: React.PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        products: state.products
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(productActions, dispatch)
    };
}

export default connect(mapStateToProps)(Products);