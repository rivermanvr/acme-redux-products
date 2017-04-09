const addProduct = (name) => {
    return {
        type: 'ADD_PRODUCT',
        name: name
    }
};

const deleteProduct = (id) =>{
    return {
        type: 'DELETE_PRODUCT',
        id: id
    }
}

export {addProduct, deleteProduct};
