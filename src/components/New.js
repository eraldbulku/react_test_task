import React from 'react';
import ProductForm from './ProductForm';
import PanelBox from './PanelBox';
import {LoadRawSessionStorage} from '../modules/Init.js';

var New = React.createClass({
	render: function() {
		return(
			<PanelBox titlePanel="Add new product">
				<ProductForm />
			</PanelBox>
		);
	}
});

export default New;