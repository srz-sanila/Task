import React from 'react'
import { connect } from 'react-redux'
import './styleComponent/ListProducts.css'

const ListProducts = (props)=> {
    return (
        <div className='d-flex justify-content-center'>
            <table className="table">
                <thead>
                    <tr className='tablehead'>
                        <th>Product Code</th>
                        <th>Product Name</th>
                        <th>Product Quantity</th>
                    </tr>
                </thead>
                <tbody>
                {props.product.map((item, i=0) => {
                return(
                    <tr key={i++}>
                        <td>{item.p_code}</td>
                        <td>{item.p_name}</td>
                        <td>{item.p_quantity}</td>
                    </tr>
                )
            })}
                </tbody>
            </table>
            
        </div>
    )
}

const mapStateToProps = state => {
    return {
        product: state.product
    }
}
export default connect(mapStateToProps) (ListProducts)
