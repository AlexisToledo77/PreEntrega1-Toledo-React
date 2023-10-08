import { collection, serverTimestamp, addDoc } from 'firebase/firestore'
import React, { useContext, useState } from 'react'
import { db } from '../../Services/firebase'
import { CartContext } from '../../context/CartContext'

const Checkout = () => {
    const[user, setUser]=useState({})
    const[valiteEmail, setValidateemail]=useState('')
    const[orderId, setOrderId]= useState('')
    const{cart, total, clear} = useContext(CartContext)
    const datosComprador = (e) =>{
        setUser({
            ...user,
            [e.target.name]:e.target.value
        })
    }

    const finalizarCompra = (e) =>{
        e.preventDefault()
        if (!user.name && !user.telefono){
            alert('Complete todo los campos por favor')
          } else{
            let order = {
                user,
                item:cart,
                total:total(),
                date:serverTimestamp()
            }
            const ventas = collection(db, "orders");
            addDoc(ventas,order)
            .then((res)=> {
                setOrderId(res.id)
                clear()
            })
            .catch((error)=> console.log(error))
          }
        }

    return (
        <div>
            {orderId !== ''
            ?<div>
                <h2>Felicitaciones tu orden fue generada</h2>
                <h5>Su Numero de orden es: {orderId} </h5>
            </div>
              :<div>
                <h2> Terminar Compra</h2>
                <h5>Por Favor completar sus datos</h5>
                <form onSubmit={finalizarCompra}>
                    <div className='mb-3'>
                        <label className='form-label'> Nombre Completo</label>
                        <input className='form-control' onChange={datosComprador} type='text' placeholder='Nombre y Apellido' name='name'/>
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'> Numero de Telefono</label>
                        <input className='form-control' onChange={datosComprador} type='number' placeholder='+54911111111' name='telefono'/>
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'> E-mail</label>
                        <input className='form-control' onChange={datosComprador} type='email' placeholder='redeluces@gmail.com' name='mail'/>
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'> Repita su Email</label>
                        <input className='form-control' type='email' placeholder='redeluces@gmail.com' name='valid mail' onChange={((e)=>setValidateemail(e.target.value))}/>
                    </div>
                    <button className='btn btn-dark' type='submit' disabled={valiteEmail !== user.mail}>Generar Orden</button>
                </form>
            </div>  
          }
        </div>
    )
}

export default Checkout