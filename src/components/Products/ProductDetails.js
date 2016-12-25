import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ProductDescription from './ProductDescription';
import iphone from '../../resources/images/iphone7.png';
import galaxy from '../../resources/images/s7edge.png';


class ProductDetails extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
        };
        const store = this.context.store;
        //store.dispatch(loadAuthors());
    }

    render() {
        let arr;
        return (
            <ProductDescription
                product = {this.props.product}
            />
        );
    }
}

ProductDetails.contextTypes = {
    router : PropTypes.object,
    store: React.PropTypes.object.isRequired
};

function getProductByName(products, productName) {
    const product = products.filter(product => product.name == productName);
    if(product.length) return product[0];
    return null;
}
function mapStateToProps(state, ownProps) {
    const productName = ownProps.params.productName; //from Path
    let product = {name: '', imageSource: ''};
    if(productName && state.products.length > 0) {
        product = getProductByName(state.products, productName);
    }
    return {
        product: product,
    };
}

export default connect(mapStateToProps)(ProductDetails);