import React, { useState } from 'react'
import { connect } from 'react-redux'
import './styleComponent/AddProducts.css'
import { AddProductAction } from '../productRedux/productAction'
import { useNavigate } from 'react-router'
import './styleComponent/AddProducts.css'

const AddProducts = (props) => {

    let navigate = useNavigate()

    const [counter, setCounter] = useState(1)
    const [noOfItems, setNoOfItems] = useState()
    const [show, setShow] = useState(true)
    const [showForm, setShowForm] = useState(false)
    const [product, setProduct] = useState({
        p_code: '',
        p_name: '',
        p_quantity: 0
    })

    const HandleClick = () => {
        console.log(noOfItems)
        setShow(false)
        setShowForm(true)
    }

    const HandleSubmit = (e) => {
        e.preventDefault()
        navigate('/list')
    }

    const HandleChange = (e) => {
        const name = e.target.name
        setProduct(
            {
                ...product,
                [name]: e.target.value
            }
        )
    }

    const HandleAdd = () => {
        props.AddProductAction(product)
        setCounter(counter + 1)
        setProduct({
            p_code: '',
            p_name: '',
            p_quantity: 0
        })
        if (counter >= noOfItems) {
            setShowForm(false)
            navigate('/list')
        }
    }

    return (
        <div className='container'>
            {show && <div className=' mb-3 row ctrContainer'>
                <label className="col-sm-5 col-form-label">No of Items going to Add : </label>
                <div className='col-sm-7'>
                    <input required type='number' onChange={e => setNoOfItems(e.target.value)} />
                </div>
                <div className='d-flex flex-row justify-content-center'>
                    <button type="button" className="btn btn-success align-self-center" onClick={HandleClick}>OK</button>
                </div>
            </div>}

            <div className='formContainer'>
                {showForm && <form className='form' onSubmit={HandleSubmit}>
                    <div className='main'>
                        <div>
                            <label>Product Code :</label>
                        </div>
                        <div>
                            <input required type='text' name='p_code' value={product.p_code} onChange={HandleChange} />
                        </div>
                    </div>
                    <div className='main'>
                        <div>
                            <label>Product Name :</label>
                        </div>
                        <div>
                            <input required type='text' name='p_name' value={product.p_name} onChange={HandleChange} />
                        </div>
                    </div>
                    <div className='main'>
                        <div>
                            <label>Quantity :</label>
                        </div>
                        <div>
                            <input required type='number' name='p_quantity' value={product.p_quantity} onChange={HandleChange} />
                        </div>
                    </div>
                    <div className='d-flex flex-row justify-content-center'>
                        <button type='button' className="btn btn-primary align-self-center" onClick={HandleAdd}>SAVE</button>
                    </div>
                </form>}
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        AddProductAction: (product) => dispatch(AddProductAction(product))
    }
}

export default connect(null, mapDispatchToProps)(AddProducts)

// {[...Array(Number(noOfItems))].map((e, i = 0) =>
//     (
//         )
//         )}