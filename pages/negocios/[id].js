import { useState } from 'react';
import Link from 'next/link';
import { Contact } from '../../components/Contact';
import { Navbar } from '../../components/Navbar';
import { WebpayPlus } from 'transbank-sdk'; // ES6 Modules
import { Options, IntegrationApiKeys, Environment, IntegrationCommerceCodes } from 'transbank-sdk'; 

export const getStaticPaths = async () => {
      const res = await fetch('https://chillin.cl/api/negocios');
      const data = await res.json();
      console.log("Data: ", data);
      
      const paths = data.map(negocios => {
          return {
              params: { id: negocios.id.toString()}
          }
      })
      return {
          paths,
          fallback: false,
      }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch('https://chillin.cl/api/negocios/' + id);
    const res1 = await fetch('https://chillin.cl/api/productos/sorted/' + id);
    const data = await res.json()
    const dato = await res1.json()
    // var commerceCode = '597043568497'
    // var apiKey = '42bdb1c2d4175e67bc45257ac14c03e7'
    // var returnUrl = "https://crypton.cl/success"
     
    
    // let tbk_response = []
    
    // for (const a of dato){
    //     var buyOrder = a.buy_order
    //     var amount = a.price
    //     var sessionId = a.session_id
    //     const tx = new WebpayPlus.Transaction(new Options(commerceCode, apiKey, Environment.Production));
    //     const response = await tx.create(buyOrder, sessionId, amount, returnUrl);
    //     tbk_response.push(response)
        
        
    // }

    return {
        props: {
            negocio: data,
            productos: dato,
        }
    }
}
const SingleNegocioPage = ({ negocio, productos }) => {
    return(
        <>
        <div className="flex justify-center mt-10">
            <div key={negocio.id} className="cursor-pointer rounded-lg shadow-lg pb-4 mt-10 bg-white max-w-sm hover:bg-slate-200">
              <Link href="/negocios/[id]" as={`/negocios/${negocio.id}`}>
              <img className="rounded-t-lg object-cover max-h-64 w-full" src={`https://chillin.cl/${negocio.image}`} alt=""/></Link>
              <div className="p-6">
              <h3 className="text-gray-900 text-xl font-medium mb-2 text-center">{negocio.name}</h3>
              <h3 className="text-gray-900 text-xl font-medium mb-2 text-center">{negocio.catName}</h3>
              <h3 className="text-gray-900 text-lg font-medium mb-2 text-center">{negocio.description}</h3>
              </div>
              
            </div>
            
        </div>
        <div className=" grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 mx-10 p-10">
              { productos.map((producto, index) => {
                  
                  return (
                      <>
                      <div className="max-w-sm rounded overflow-hidden shadow-lg">
                        <img className="w-full" src={`https://chillin.cl/${negocio.image}`} alt=""/>
                        <div className=" justify-center mx-auto items-center">
                            <h1 className="font-bold text-xl mb-2 ">{ producto.name }</h1>
                            <p className="text-gray-700 text-base">
                            { producto.description }
                            { producto.buy_order }
                            { producto.session_id }
                            </p>
                            
                        </div>
                        <div className="items-center mx-20 py-4">
                                    <form method="post" action={producto.url}>
                                    <input type="hidden" name="token_ws" value={producto.token} />
                                    <input className="cursor-pointer inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-md leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" type="submit" value={`Ir a pagar $${producto.price}`} />
                                    </form>
                        </div>
                    </div>
                      </>
                  )
              })}
            </div>
        </>
    )
}

export default SingleNegocioPage;

