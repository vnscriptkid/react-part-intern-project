import React, { Component } from 'react';
import TitleComponent from './TitleComponent';
import RowComponent from './RowComponent';
// import FunctionalComponent from './FunctionalComponent';
import axios from 'axios';
import {
  Table,
  TableBody,
  TableHeader  
} from 'material-ui/Table';
import {Tabs, Tab} from 'material-ui/Tabs';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class TableComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
      data : null,
      gainers : null,
      losers : null,
      tabValue : 'gainers'     
    }    
    this.handleTabChange = this.handleTabChange.bind(this);
    this.setLosers();
    this.setGainers();
  }

  setGainers(){
    axios.get('https://aqueous-harbor-13028.herokuapp.com/api/top-gainers')
      .then( (res) => {
        this.setState({gainers : res.data});        
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  setLosers(){
    axios.get('https://aqueous-harbor-13028.herokuapp.com/api/top-losers')
      .then( (res) => {
        this.setState({losers : res.data});          
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  componentDidMount() {
    setInterval(() => {
      this.setGainers();
      this.setLosers();
    }, 5000);
  }

  handleTabChange (newValue) {   
    this.setState({tabValue : newValue});      
  }

  dataForTab (tabValue) {
    console.log(tabValue);
    console.log(this.state[tabValue]);
    if(this.state[tabValue])
      return this.state[tabValue].map((stock) => <RowComponent stock={stock} />);
    else
      return <h1> Waiting for Data </h1>;
  }

  render() {    
    var tableBody = this.dataForTab(this.state.tabValue);    

    return (
      <MuiThemeProvider> 
        <Tabs
          value={this.state.value}
          onChange={this.handleTabChange}
        >
          <Tab label="Gainers" value="gainers">
          </Tab>
          <Tab label="Losers" value="losers">
          </Tab>

        </Tabs>       
          
        <Table>
          <TableHeader>            
            <TitleComponent></TitleComponent>            
          </TableHeader>

          <TableBody>                     
            {tableBody}
          </TableBody>                    
        </Table>        
      </MuiThemeProvider>
    )    
  }
}

export default TableComponent;
