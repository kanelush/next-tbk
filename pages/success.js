import axios from 'axios';
import React, { useEffect, useRef } from 'react'
import { WebpayPlus } from 'transbank-sdk'; // ES6 Modules
import { Options, IntegrationApiKeys, Environment, IntegrationCommerceCodes } from 'transbank-sdk'; 
import Navbar from '../components/Navbar';



const Success = ({ producto }) => {
    const token = useRef(null);

    // useEffect(() => {
    //     var url = window.location;
    //     const token_ws = new URLSearchParams(url.search).get('token_ws');
    //     console.log("token: ", token_ws);
    //     token.current = token_ws
    //     console.log("This is my token:", token.current);
    //     put_url = 'http://127.0.0.1:8000/api/productos' + producto.id
    //     console.log(put_url)
        
    //     axios
    //     .put(, token_ws)
    //     .then((resp) => {
    //     console.log(resp);
    //     setIsPending(false)
    //     console.log(isPending)
        
    //     })
    //     .catch((err) => {
    //     console.log(err);
    //     });
    //     console.log("added!")
        
        
    
    // }, [])
    // console.log("This is my token from outside:", token.current);
    // const jaja = token.current
    // console.log("jajaa: ", jaja);
    

   
    
    console.log("This is my token from outside jaja:", jaja);
    
    
    
    return (
        <>
        
        <div className='py-40'>
            <h1 className='text-8xl'>Pago Exitoso</h1>
            <h1 className='text-8xl'>{token.current}</h1>

        </div>
        </>
    )
}



export default Success

