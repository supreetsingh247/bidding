/**
 * Created by z001lfc on 12/24/16.
 */
import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';

const Header = () => {
    return (
        <nav>
            <IndexLink to="/" activeClassName="active">Products</IndexLink>
            {" | "}
            <Link to="/" activeClassName="active">test</Link>
        </nav>
    );
};

Header.propTypes = {
};

export default Header;