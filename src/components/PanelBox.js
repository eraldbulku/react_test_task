import React from 'react';

var PanelBox = React.createClass({
	getDefaultProps: function() {
		return {
			classElement: 'col-md-offset-4 col-md-4',
			titlePanel: 'Panel Title'
		}
	},
	render: function() {
		return(
			<div className={this.props.classElement} style={{'marginTop': '50px'}}>
				<div className="panel panel-default">
					<div className="panel-heading">
						<h3 className="panel-title content-box-header">
							<center>
								{this.props.titlePanel}
							</center>
						</h3>
					</div>
					<div className="panel-body">
						{this.props.children}
					</div>
				</div>
			</div>
		);
	}
});

export default PanelBox;