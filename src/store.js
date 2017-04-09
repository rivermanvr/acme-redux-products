import { createStore } from 'redux';

const initialState = { 
    products: [
        {
            id: 1,
            name: 'foo'
        }, 
        {
            id: 2,
            name: 'bar'
        },{
            id: 3,
            name: 'baz'
        }
    ]};

const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'ADD_PRODUCT':
            const number = state.products.reduce((max, product)=>{
                if(max<product.id)max=product.id
                    return max;
                },0) + 1;
            const newArray = state.products.concat([{id: number, name: action.name}])
            state= Object.assign({}, state, { products: newArray })
            break;
        case 'DELETE_PRODUCT':
            const newState = state.products.filter(product => {
                return product.id !== action.id;
            })
            state= Object.assign({}, state, { products: newState} );
            break;    
    }
    return state;
};


const store = createStore(reducer);

export default store;
