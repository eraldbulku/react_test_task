import React from 'react';
import PanelBox from './PanelBox';
import ProductForm from './ProductForm';

var EditPanel = React.createClass({
	render: function() {
		var product = JSON.parse(window.sessionStorage.getItem(this.props.params.id));
		return(
			<PanelBox titlePanel='Edit Product'>
				<ProductForm 
					id={product.id} 
					price={product.price} 
					name={product.name} 
					description={product.description} />
			</PanelBox>
		);
	}
});

export default EditPanel;