import React from 'react';
import {Link} from 'react-router'

var Product = React.createClass({
	// delete handler function
	deleteItem: function(e) {
		var _this = e.target;
		var idElement = _this.parentNode.id;
		var confAction = confirm("Do you really want to delete this item?");
		
		if(!confAction) return;
		
		window.sessionStorage.removeItem(idElement);
		this.props.callbackDelete();
	},
	
	render: function() {
		return(
			<tr>
				<td>
					<center>
						{this.props.data.id}
					</center>
				</td>
				<td>
					<center>
						{this.props.data.name}
					</center>
				</td>
				<td>
					<center>
						{this.props.data.price} $
					</center>
				</td>
				<td>
					<center>
						{this.props.data.description}
					</center>
				</td>
				<td>
					<center>
						{this.props.data.date}
					</center>
				</td>
				<td>
					<center>
						<Link 
							to={`/print/${this.props.data.id}`}
						>
								<span className="glyphicon glyphicon-eye-open"></span>
						</Link> { }
						<Link 
							to={`/edit/${this.props.data.id}`}
						>
							<span className="glyphicon glyphicon-pencil"></span>
						</Link> { }
						<a 
							href="javascript:void(0)" 
							id={this.props.data.id}
							onClick={this.deleteItem}
						>
							<span className="glyphicon glyphicon-trash"></span>
						</a>
					</center>
				</td>
			</tr>
		);
	}
});

export default Product;