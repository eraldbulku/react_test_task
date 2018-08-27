import React from 'react';
import PanelBox from './PanelBox';

var ProductPrint = React.createClass({
	render: function() {
		var product = JSON.parse(window.sessionStorage.getItem(this.props.params.id));
		return(
			<PanelBox titlePanel="Product Details">
				<form>
					<div className="form-group">
						<label>Id: {product.id}</label>
					</div>
					<div className="form-group">
						<label>Name: {product.name}</label>
					</div>
					<div className="form-group">
						<label>Price: {product.price} $</label>
					</div>
					<div className="form-group">
						<label>Description: {product.description}</label>
					</div>
					<div className="form-group">
						<label>Created date: {product.date}</label>
					</div>
				</form>
			</PanelBox>
		);
	}
});

export default ProductPrint;