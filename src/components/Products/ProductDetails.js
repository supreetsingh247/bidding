import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ProductDescription from './ProductDescription';
import  {saveBids} from '../../actions/productActions';
import iphone from '../../resources/images/iphone7.png';
import galaxy from '../../resources/images/s7edge.png';
import toastr from 'toastr';


class ProductDetails extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            product: Object.assign({}, this.props.product),
            saving: false
        };
        const store = this.context.store;
        this.updateBid = this.updateBid.bind(this);
        this.saveBid = this.saveBid.bind(this);
        //store.dispatch(loadAuthors());
    }

    updateBid(event) {
        const field = event.target.name;
        let product = this.state.product;
        product[field] = event.target.value;
        return this.setState({product: product});
    }

    saveBid(event) {
        console.log(event);
        event.preventDefault();
        this.props.actions.saveBids(this.state.product);
        if(parseInt(this.props.product.currentPrice) < parseInt(this.state.product.currentPrice)){
            toastr.success('Bid Saved');
        }
        else{
            toastr.error('Bid amount should be more than the current price');
        }
    };

    render() {
        let arr;
        return (
            <ProductDescription
                product = {this.props.product}
                onSave = {this.saveBid}
                updateBid = {this.updateBid}
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

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({saveBids}, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);