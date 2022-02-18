export const AddProductAction = (product) => {
    console.log("inside action", product)
    return {
        type: "ADD_PRODUCT",
        payload : product 
    }
}

export const GetProduct = () => {
    return {
        type: "GET_PRODUCT"
    }
}

export const RemoveProductAction = (Pcode,Pquantity) => {
    console.log("inside action", Pcode,Pquantity )
    return {
        type: "REMOVE_PRODUCT",
        payload: {
            code:Pcode,
         quantity:Pquantity
        }
    }
}