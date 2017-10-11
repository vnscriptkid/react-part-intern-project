import React, { Component } from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
 
class FunctionalComponent extends Component {
	constructor(props){
		super(props);
		this.state = {
			tabValue = "gainers"
		}
	}

	handleTabChange(newValue){
		this.setState({value : newValue});
	}

	render(){
		return (						
			<Tabs
				value={this.state.tabValue}
          		onChange={this.handleTabChange}
			>
			  <Tab label="Gainers" value="gainers"></Tab>
			  <Tab label="Losers" value="loosers"></Tab>
			</Tabs>					
		)
	}	 	
}

export default FunctionalComponent;
