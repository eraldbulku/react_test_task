import React from 'react';
import {LoadRawSessionStorage} from '../modules/Init';

var ProductForm = React.createClass({
	getDefaultProps: function() {
		return {
			id: '',
			price: '',
			name: '',
			description: ''
		};
	},
	postItem: function(e) {
		e.preventDefault();
		var price = document.getElementById('price').value.trim();
		var name = document.getElementById('name').value.trim();
		var desc = document.getElementById('desc').value.trim();
		
		if(!price || !name || !desc) {
			alert('The fields cannot be empty!');
			return;
		}

		if(isNaN(price)) {
			alert('Price field must be a number!');
			return;
		}

		var storedItems = LoadRawSessionStorage(true);
		var insertedId = storedItems.length ? parseInt(storedItems[0].id) + 1 : 1;
		
		// check if is 'add' or 'edit' case
		insertedId = this.props.id ? this.props.id : insertedId;
		
		var itemProduct = {
			id: insertedId, 
			price: price, 
			name: name, 
			description: desc, 
			date: moment().format("YYYY-MM-DD")
		};

		window.sessionStorage.setItem(insertedId, JSON.stringify(itemProduct));
		window.location.href = "#/products";
	},
	render: function() {
		return(
			<form onSubmit={this.postItem}>
				<div className="form-group">
					<label for="price">Price</label>
					<input type="text" defaultValue={this.props.price} className="form-control" id="price" placeholder="Price" />
				</div>
				<div className="form-group">
					<label for="name">Name</label>
					<input type="text" defaultValue={this.props.name} className="form-control" id="name" placeholder="Name" />
				</div>
				<div className="form-group">
					<label for="desc">Description</label>
					<input type="text" defaultValue={this.props.description} className="form-control" id="desc" placeholder="Description" />
				</div>
				<input type="submit" className="btn btn-primary pull-right" value="Save" />
				<a type="button" href="#/products" className="btn btn-danger ">Cancel</a>
			</form>
		);
	}
});

export default ProductForm;