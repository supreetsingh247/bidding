import React, {PropTypes} from 'react';
import {Link} from 'react-router';


const Description = ({product, onSave, updateBid}) => {
    return (
        <div>
            <div className="card" key={product.name} style={{width: 18 + 'rem'}}>
                <img class="card-img-top" src={product.imageSource} alt="Card image cap" style={{maxWidth: 215+'px'}} />
                <div class="card-block">
                    <h4 class="card-title">{product.name}</h4>
                    <h5>Minimum Price - {product.minimumPrice}</h5>
                    <h5>Current Price - {product.currentPrice}</h5>
                </div>
            </div>
            <div className="card" style={{width: 18 + 'rem'}}>
                <div class="card-block" style={{display:'inline'}}>
                    <input
                        type="text"
                        name="currentPrice"
                        onChange={updateBid}
                        className="form-control"
                        placeholder='Your bid amount'
                        />
                    <input
                        type="submit"
                        className="btn btn-primary"
                        value={'Bid'}
                        onClick={onSave}/>
                </div>
            </div>
        </div>
    );
};

Description.propTypes = {
    product : PropTypes.array.isRequired
};

export default Description;
/**
 * Created by z001lfc on 12/25/16.
 */
