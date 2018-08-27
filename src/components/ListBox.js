import React from 'react';
import Product from './Product';
import {LoadRawSessionStorage} from '../modules/Init.js';

/**
 * This component will use this.props.conf to render itself
 * this.props.conf = {fields: table_columns(array), type: type_of_table(string)}
 */

var ListBox = React.createClass({
	// set initial state for the component
	getInitialState: function() {
		return {
			productList: []
		};
	},
	
	// resolve table type on configuration object
	getTableType: function() {
		// sufixs for table type based on twitter-bootstrap framework
		var tableTypeDefault = ['bordered', 'striped'];
		// table type provided by the user
		var typeProvided = this.props.conf.type;
		// define sufix
		var type = tableTypeDefault.indexOf(typeProvided) != -1 ? typeProvided : 'bordered';
		
		// update class name of the table
		return "table table-" + type;
	},
	
	// update state with stored values
	updateListData: function() {
		var callbackDelete = this.updateListData; 
		this.setState({
			productList: LoadRawSessionStorage().map(function(product) {
				return (
					<Product 
						key={product.id} 
						data={product} 
						callbackDelete={callbackDelete} />
				);
			})
		})
	},
	
	// set task on component mount
	componentDidMount: function() {
		this.updateListData();
	},
	
	render: function() {
		// render header element for ListBox table
		var tableHead = this.props.conf.fields.map(function(field) {
			return (
				<th key={field.key}>
					<center>
						{field.name}
					</center>
				</th>
			);
		});
		
		return(
			<table className={this.getTableType()}>
				<thead>
					<tr>
						{tableHead}
					</tr>
				</thead>
				<tbody>
					{this.state.productList}
				</tbody>
			</table>
		);
	}
});

export default ListBox;