import logo from './logo.svg';
import './App.css';
import Header from './Header.js';
import Products from "./Products.js"

import React, { Component } from 'react';

class App extends Component {

  constructor(){
    super();

    this.state={
      productlist:[],
    }


  }

  componentDidMount(){
    this.getProducts();
  }

  getProducts = async () =>{

    const res= await fetch("https://fakestoreapi.com/products");
    const json= await res.json();
    console.log(json);
    this.setState({
      productlist:json,
    })

  }
  render() {

    return (
      <>
       <div className="App">

        <Header />

        <Products  items={this.state.productlist} />


       </div>
      
      
      
      </>
     
    );
  }
}

export default App;
