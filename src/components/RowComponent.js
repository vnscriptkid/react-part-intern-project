import React, { Component } from 'react';
import {  
  TableRowColumn,
  TableRow  
} from 'material-ui/Table';

function pickColor(num){
	return num >= 0 ? {color:'#41f47d'} : {color:'#f44242'};
}

class RowComponent extends Component {
	render(){		
		return (						
			<TableRow>
				<TableRowColumn 
					style={{color:'#03A9F4'}}
				>
					{this.props.stock.code}
				</TableRowColumn>
				<TableRowColumn>{this.props.stock.company}</TableRowColumn>
				<TableRowColumn>{this.props.stock.originalPrice}</TableRowColumn>
				<TableRowColumn>{this.props.stock.value}</TableRowColumn>
				<TableRowColumn
					style={pickColor(this.props.stock.priceChange)}
				>
					{this.props.stock.priceChange}
				</TableRowColumn>
				<TableRowColumn
					style={pickColor(this.props.stock.priceChangePercent)}
				>
					{this.props.stock.priceChangePercent} %
				</TableRowColumn>
			</TableRow>						
		)
	}	 	
}

export default RowComponent;
