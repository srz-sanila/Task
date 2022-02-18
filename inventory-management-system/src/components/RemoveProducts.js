import React, { useState } from 'react'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router'
import { RemoveProductAction } from '../productRedux/productAction'
import './styleComponent/RemoveProducts.css'

const RemoveProducts = (props) => {

    let navigate = useNavigate()
    const [r_code, setRcode] = useState('')
    const [r_quantity, setRquantity] = useState(0)
    const [r_product, setRproduct] = useState(props.product)

    const [counter, setCounter] = useState(1)
    const [noOfItems, setNoOfItems] = useState()
    const [show, setShow] = useState(true)
    const [showForm, setShowForm] = useState(false)

    const HandleClick = () => {
        console.log(noOfItems)
        setShow(false)
        setShowForm(true)
    }

    const HandleSubmit = (e) => {
        e.preventDefault()
    }
    const HandleRemove = () => {
        // let index = props.product.indexOf(r_code)
        // props.product.splice(index,1)
        let flag = true
        r_product.map(item => {
            if (item.p_code === r_code) {
                props.RemoveProductAction(r_code, r_quantity)
                setRcode('')
                setRquantity(0)
                flag = false
            }
            else {
                setRcode('')
                setRquantity(0)

            }
        })
        if (flag === true) {
            window.alert('no matching products')
        }
        setCounter(counter + 1)
        if (counter >= noOfItems) {
            setShowForm(false)
            navigate('/list')
        }

    }

    return (
        <div className='container'>
            {show && <div className=' mb-3 row counterContainer'>
                <label className="col-sm-5 col-form-label">No of Items going to Remove</label>
                <div className='col-sm-7'>
                    <input required type='number' onChange={e => setNoOfItems(e.target.value)} />
                </div>
                <div className='d-flex flex-row justify-content-center'>
                    <button type='button' className="btn btn-success align-self-center" onClick={HandleClick}>OK</button>
                </div>
            </div> }

            <div className='formContainer'>
                {showForm && <form className='form' onSubmit={HandleSubmit} >

                    <div className='main'>
                        <div>
                            <label>Product code :</label>
                        </div>
                        <div>
                            <input required type='text' value={r_code} onChange={e => setRcode(e.target.value)} />
                        </div>
                    </div>
                    <div className='main'>
                        <div>
                            <label>Quantity :</label>
                        </div>
                        <div>
                            <input required type='number' value={r_quantity} onChange={e => setRquantity(e.target.value)} />
                        </div>
                    </div>
                    <div className='d-flex flex-row justify-content-center'>
                        <button type='button' className="btn btn-primary align-self-center" onClick={HandleRemove}>Save</button>
                    </div>

                </form>}
            </div>

        </div>
    )
}

const mapStateToProps = state => {
    return {
        product: state.product
    }
}

const mapDispatchToProps = dispatch => {
    return {
        RemoveProductAction: (r_code, r_quantity) => dispatch(RemoveProductAction(r_code, r_quantity))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(RemoveProducts)

// import React from "react";

// const n = 8;

// export default function App() {
//   return [...Array(n)].map((e, i) => <span key={i}>Hi</span>);
// }