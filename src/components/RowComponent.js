import React, { Component } from 'react';
import {  
  TableRowColumn,
  TableRow  
} from 'material-ui/Table';
 
class RowComponent extends Component {
	render(){		
		return (						
			<TableRow>
				<TableRowColumn>{this.props.stock.code}</TableRowColumn>
				<TableRowColumn>{this.props.stock.company}</TableRowColumn>
				<TableRowColumn>{this.props.stock.originalPrice}</TableRowColumn>
				<TableRowColumn>{this.props.stock.value}</TableRowColumn>
				<TableRowColumn>{this.props.stock.priceChange}</TableRowColumn>
				<TableRowColumn>{this.props.stock.priceChangePercent} %</TableRowColumn>
			</TableRow>						
		)
	}	 	
}

export default RowComponent;
