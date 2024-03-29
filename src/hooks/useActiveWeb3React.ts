import { useEffect, useState, useRef } from "react";
import { useWeb3React } from "@web3-react/core";
import { Web3Provider, StaticJsonRpcProvider } from "@ethersproject/providers";
import { simpleRpcProvider } from "../utils/providers";
import { Web3ReactContextInterface } from "@web3-react/core/dist/types";

/**
 * Provides a web3 provider with or without user's signer
 * Recreate web3 instance only if the provider change
 * 
 */

export default function useActiveWeb3React() {
 const { account, library, active, deactivate, error, setError } = useWeb3React<Web3Provider>();

   return {
   active,
   account,
  library,
  deactivate,
  error, 
  setError,
  };
  }
  
  
// const useActiveWeb3React = (): Web3ReactContextInterface<Web3Provider | StaticJsonRpcProvider> => {
//   const { library, chainId, ...web3React } = useWeb3React<Web3Provider>();
//   const refEth = useRef(library);
//   const [provider, setProvider] = useState(library || simpleRpcProvider);

//   useEffect(() => {
//     if (library !== refEth.current) {
//       setProvider(library || simpleRpcProvider);
//       refEth.current = library;
//     }
//   }, [library]);

//   return {
//     library: provider,
//     chainId: chainId ?? parseInt(process.env.GATSBY_CHAIN_ID!, 10),
//     ...web3React,
//   };
// };

// export default useActiveWeb3React;
