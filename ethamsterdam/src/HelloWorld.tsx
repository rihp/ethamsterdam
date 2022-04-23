import { HelloWorld_Query } from './w3';
import React from 'react';
import { ToHex } from './ToHex';
import { ApproveToken } from './ApproveToken'
import { useWeb3ApiClient, useWeb3ApiInvoke } from '@web3api/react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const HelloWorld: React.FC = () => {
  const [message, setMessage] = React.useState('');
  const client = useWeb3ApiClient();

  // Hackathon functions

  /// Approve spending of a token
  // const { data, execute, loading, error } = useWeb3ApiInvoke<String>({
  //   uri: ethersIpfsUri,
  //   module: "query",
  //   method: "toHex",  
  // });

  // async function approveToken() {
  //   const result = await execute{address}
  // };

  // approve(
  //   token: Token! # Token for which to approve the Uniswap router contract to transfer
  //   amount: BigInt # The amount to approve for transfer; defaults to maximum amount if null
  //   gasOptions: GasOptions # Transaction gas configuration
  // ): Ethereum_TxResponse!

  const notify = () => toast('Take a look at your console!');

  const logMsgHandler = async (event: any): Promise<any> => {
    event.preventDefault();
    notify();
    console.info("Invoking Method: logMessage");
    const result = await HelloWorld_Query.logMessage({ message }, client);
    console.info(`Invoke Result: ${JSON.stringify(result, null, 2)}`);
  };

  const onChangeHandler = (event: any): void => {
    setMessage(event?.target.value);
  };

  return (
    <>
      <div className='hello'>
        <div className='hello__heading'>"Hello World" from Polywrap!</div>
        <div className='hello__text'>
          <strong>Test the "Hello World" Polywrapper by:</strong>
{/* 
          <button type='submit' 
          className='approve__btn' onClick={
            () => toHex ("123123")}>
              approveToken
          </button> */}

          <ToHex/>
          <ApproveToken />

          <br />
          1. typing into the input below
          <br />
          2. clicking the submit button
          <br />
          3. viewing the output in{' '}
          <a
            className='hello__link'
            href='https://webmasters.stackexchange.com/a/77337'
            target='_blank'
          >
            the console
          </a>
          <br />
        </div>
        <br />
        <form
          onSubmit={(event) => logMsgHandler(event)}
          className='hello__form'
        >
          <input
            className='hello__input'
            onChange={(event) => onChangeHandler(event)}
          />
          <button type='submit' className='hello__btn'>
            Submit
          </button>
          
          <ToastContainer />
        </form>


        <div className='hello__text'>
          Want to build your own Polywrapper?
          <br />
          <a
            className='hello__link'
            href='https://docs.polywrap.io/'
            target='_blank'
          >
            Check out our documentation
          </a>
        </div>
      </div>
    </>
  );
};
