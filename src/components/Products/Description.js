import React, {PropTypes} from 'react';
import {Link} from 'react-router';


const Description = ({products}) => {
    console.log(products);
    return (
        <div>
            {products.map(product =>
                <div className="card" key={product.name} style={{width: 18 + 'rem'}}>
                    <img class="card-img-top" src={product.imageSource} alt="Card image cap" style={{maxWidth: 215+'px'}} />
                    <div class="card-block">
                        <h4 class="card-title">{product.name}</h4>
                        <Link to ={'/productDetails/' + product.name} class="btn btn-primary">Bid</Link>
                    </div>
                </div>
            )}
        </div>
    );
};

Description.propTypes = {
    products : PropTypes.array.isRequired
};

export default Description;
