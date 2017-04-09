import React, { Component } from 'react';
import store from './store';
import { addProduct } from './constants';

class ProductForm extends Component{
    constructor(props) {
        super(props);
        this.state = { value: '' };
        this.onInputChange = this.onInputChange.bind(this);
        this.onSaveProduct = this.onSaveProduct.bind(this);
    }

    onInputChange(ev) {
        this.setState({value: ev.target.value});
    }

    onSaveProduct() {
        store.dispatch( addProduct(this.state.value) )
        this.setState({ value: '' });
    }

    render(){
        return (
            <form className="form-group" onSubmit={ this.onSaveProduct } >
                <input className="form-control" name="" value={ this.state.value } onChange={ this.onInputChange } />
                <button className="btn btn-primary" type="submit">Add Product</button>
            </form>
        )
    }
}

export default ProductForm;