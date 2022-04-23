import { uniIpfsUri} from './constants'
import { useWeb3ApiClient, useWeb3ApiInvoke } from '@web3api/react';
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
interface Props {
  user: {
      name: string,
      email: Email
  }
}

export const ApproveToken: React.FC = () => {  
    const client = useWeb3ApiClient();
  
    // Hackathon functions
    /// Using the invoke syntax
    const { data, execute, loading, error } = useWeb3ApiInvoke<String>({
      uri: uniIpfsUri,
      module: "query",
      method: "toHex",  
    });
  
    /// Creating the  function for the Button's onClick 
    async function approveToken(token:string, amount:string) {
      //const hexify = () => toast('Turning your number into hex!');
      //hexify();
      const result = await execute({token, amount})
      console.log(result)
    };

    // approve(
    //     token: Token! # Token for which to approve the Uniswap router contract to transfer
    //     amount: BigInt # The amount to approve for transfer; defaults to maximum amount if null
    //     gasOptions: GasOptions # Transaction gas configuration
    //   ): Ethereum_TxResponse!

    return (
            <>
            <button type='submit' className='hello__btn'
                onClick={ () => approveToken ("0xasdjkl", "234786")}>
                Approve Token
            </button>
            <ToastContainer /></>
        );


}