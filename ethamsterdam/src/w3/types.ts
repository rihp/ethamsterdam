// @ts-ignore
import * as Types from "./";

// @ts-ignore
import {
  Client,
  InvokeApiResult
} from "@web3api/core-js";

export type UInt = number;
export type UInt8 = number;
export type UInt16 = number;
export type UInt32 = number;
export type Int = number;
export type Int8 = number;
export type Int16 = number;
export type Int32 = number;
export type Bytes = Uint8Array;
export type BigInt = string;
export type BigNumber = string;
export type Json = string;
export type String = string;
export type Boolean = boolean;

/// Imported Queries START ///

/* URI: "ens/helloworld.web3api.eth" */
interface HelloWorld_Query_Input_logMessage extends Record<string, unknown> {
  message: Types.String;
}

/* URI: "ens/helloworld.web3api.eth" */
export const HelloWorld_Query = {
  logMessage: async (
    input: HelloWorld_Query_Input_logMessage,
    client: Client,
    uri: string = "ens/helloworld.web3api.eth"
  ): Promise<InvokeApiResult<Types.Boolean>> => {
    return client.invoke<Types.Boolean>({
      uri,
      module: "query",
      method: "logMessage",
      input
    });
  }
}

/// Imported Queries END ///
