import { uniIpfsUri} from './constants'
import { useWeb3ApiClient, useWeb3ApiInvoke } from '@web3api/react';
import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export const ToHex: React.FC = () => {  
    const client = useWeb3ApiClient();
  
    // Hackathon functions
    /// Using the invoke syntax
    const { data, execute, loading, error } = useWeb3ApiInvoke<String>({
      uri: uniIpfsUri,
      module: "query",
      method: "toHex",  
    });
  
    /// Creating the  function for the Button's onClick 
    async function toHexQuery(value:string) {
      const hexify = () => toast('Turning your number into hex!');
      hexify();
      const result = await execute({value})
      console.log(result)
    };


    return (

        <button type='submit' 
        className='toHex__btn' onClick={
          () => toHexQuery ("123123")}>
            toHex
        </button>
    );


}