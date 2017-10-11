import React from 'react';
import {  
  TableHeaderColumn,
  TableRow  
} from 'material-ui/Table';

function TitleComponent(){
	return (
		<TableRow>
	        <TableHeaderColumn>Code</TableHeaderColumn>
	        <TableHeaderColumn>Company</TableHeaderColumn>
	        <TableHeaderColumn>Price</TableHeaderColumn>
	        <TableHeaderColumn>Value</TableHeaderColumn>
	        <TableHeaderColumn>Change</TableHeaderColumn>
	        <TableHeaderColumn>% Change</TableHeaderColumn>
	    </TableRow>	
	) 	
}

export default TitleComponent;
