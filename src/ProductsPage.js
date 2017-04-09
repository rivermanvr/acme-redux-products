import React, { Component } from 'react';
import store from './store';
import ProductList from './ProductList';
import ProductForm from './ProductForm';
import {deleteProduct} from './constants';

class ProductsPage extends Component{
  constructor(props){
    super();
    this.state = {products: store.getState().products};
    this.onDelete = this.onDelete.bind(this);
  }
  componentDidMount(){
    this.unsubscribe = store.subscribe(()=>this.setState({products: store.getState().products}));
  }
  componentWillUnmount(){
    this.unsubscribe();
  }
  onDelete(id){
    store.dispatch(deleteProduct(id));
  }
  render(){
    return (
      <div className='well'>
        <ProductForm />
        <ProductList products={ this.state.products } onDelete={this.onDelete} />
      </div> 
    );
  }
}

export default ProductsPage;