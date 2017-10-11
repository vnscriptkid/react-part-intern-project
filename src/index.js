import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TableComponent from './components/TableComponent';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(

	<div>		
		<TableComponent />
	</div>,
	
	document.getElementById('root'));

registerServiceWorker();
