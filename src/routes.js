/**
 * Created by z001lfc on 12/24/16.
 */
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import Products from './components/Products/Products';
import ProductDetails from './components/Products/ProductDetails';

export default (
<Route path="/" component={App}>
    <IndexRoute component={Products}/>
    <Route path="/productDetails/:productName" component={ProductDetails} />
</Route>
);