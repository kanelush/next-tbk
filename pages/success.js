import React, { useEffect, useRef } from 'react'
import { WebpayPlus } from 'transbank-sdk'; // ES6 Modules
import { Options, IntegrationApiKeys, Environment, IntegrationCommerceCodes } from 'transbank-sdk'; 
import Navbar from '../components/Navbar';


const Success = () => {
    const token = useRef(null);

    useEffect(() => {
        var url = window.location;
        const access_token = new URLSearchParams(url.search).get('token_ws');
        console.log("token: ", access_token);
        token.current = access_token
        console.log("This is my token:", token.current);
        
        
        async function myG() {
            try {
                var _commerceCode = '597043568497'
                var _apiKey = '42bdb1c2d4175e67bc45257ac14c03e7'
                const jaja = token.current    
                const tx = new WebpayPlus.Transaction(new Options(_commerceCode, _apiKey, Environment.Production));
                const response = await tx.commit(jaja).then(() => response);
                console.log("Wsus", response);
                
            }
            catch(err) {
                console.log("xd",err);
                
            }
        }
        myG();
    
    }, [])
    console.log("This is my token from outside:", token.current);
    const jaja = token.current
    console.log("jajaa: ", jaja);
    

   
    
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

export const configureForProduction = (_commerceCode, _apiKey) => {
    var _commerceCode = '597043568497'
    var _apiKey = '42bdb1c2d4175e67bc45257ac14c03e7'

    WebpayPlus.options = new Options(_commerceCode, _apiKey, Environment.Production);
  };

export default Success