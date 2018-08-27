import React from 'react';
import {Link} from 'react-router';

// define App component as main Router component
var Nav = React.createClass({
	render: function() {
		return(
			<div className="row" style={{'marginTop': '50px'}}>
				<div className="col-md-offset-2 col-md-8 router-component">
					<ul className="nav nav-pills pull-left">
					  <li role="presentation"><Link to="/products">Products</Link></li>
					  <li role="presentation"><Link to="/new">Add new</Link></li>
					</ul>
					<h4 className="pull-right" style={{'width': '30%'}}>
						<i>
							ReactJS Application
						</i>
					</h4>
				</div>
				{this.props.children}
			</div>
		)
	}
});

export default Nav;