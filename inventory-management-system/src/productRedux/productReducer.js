const initialState = {
    product: [{
        p_code: 'p1',
        p_name: 'test',
        p_quantity: 10
    }]
}

const ProductReducer = (state = initialState, action) => {

    if (action.type === 'ADD_PRODUCT') {

        let flag = false
        state.product.map(item => {
            if (item.p_code === action.payload.p_code) {
                item.p_quantity = Number(item.p_quantity)
                item.p_quantity += Number(action.payload.p_quantity)
                flag = true
                return state
            }      
        })

        if (flag === false) {
            state.product.push(action.payload)
            return state
        }  
    }

    if (action.type === 'REMOVE_PRODUCT') {
        state.product.map(item => {
            if (item.p_code === action.payload.code) {
                if (item.p_quantity > Number(action.payload.quantity)) {
                    item.p_quantity = Number( item.p_quantity)
                    item.p_quantity -= Number(action.payload.quantity)
                }
                else
                    window.alert('Entered quantity is greater than the existing quantity. So, it has to be set to zero')
                    item.p_quantity = 0
            }
        })

        return state
    }

    return state
}

export default ProductReducer