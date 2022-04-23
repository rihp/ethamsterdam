export const schema: string = `### Web3API Header START ###
scalar UInt
scalar UInt8
scalar UInt16
scalar UInt32
scalar Int
scalar Int8
scalar Int16
scalar Int32
scalar Bytes
scalar BigInt
scalar BigNumber
scalar JSON
scalar Map

directive @imported(
  uri: String!
  namespace: String!
  nativeType: String!
) on OBJECT | ENUM

directive @imports(
  types: [String!]!
) on OBJECT

directive @capability(
  type: String!
  uri: String!
  namespace: String!
) repeatable on OBJECT

directive @enabled_interface on OBJECT

directive @annotate(type: String!) on FIELD

### Web3API Header END ###

### Imported Queries START ###

type HelloWorld_Query @imported(
  uri: "ens/helloworld.web3api.eth",
  namespace: "HelloWorld",
  nativeType: "Query"
) {
  logMessage(
    message: String!
  ): Boolean!
}

### Imported Queries END ###

### Imported Objects START ###

### Imported Objects END ###
`;
