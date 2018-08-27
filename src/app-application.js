// import modules
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import {ConfListBox, RawProducts, LoadSessionStorage} from './modules/Init.js';

// import components
import Nav from './components/Nav';
import PanelBox from './components/PanelBox';
import ListBox from './components/ListBox';
import New from './components/New';
import ProductPrint from './components/ProductPrint'; 
import EditPanel from './components/EditPanel';

// update session storage
LoadSessionStorage(RawProducts);

var ContentBox = React.createClass({
	render: function() {
		return(
			<PanelBox classElement="col-md-offset-2 col-md-8" titlePanel="Products Inventory">
				<ListBox conf={ConfListBox} data={RawProducts} />
			</PanelBox>
		);
	}
});

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={Nav}>
      <Route path="products" component={ContentBox} />
	  <Route path="new" component={New} />
	  <Route path="print/:id" component={ProductPrint} />
	  <Route path="edit/:id" component={EditPanel} />
    </Route>
  </Router>
), document.getElementById('content'))

