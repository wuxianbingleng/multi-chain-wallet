export const crossAbI = [
  {
    inputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint8',
        name: 'purpose',
        type: 'uint8',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'anchor',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'reward',
        type: 'uint256',
      },
    ],
    name: 'AccumulateRewards',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint8',
        name: 'purpose',
        type: 'uint8',
      },
    ],
    name: 'AddAnchors',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'bytes32',
        name: 'txId',
        type: 'bytes32',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
    ],
    name: 'MakerFinish',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'bytes32',
        name: 'txId',
        type: 'bytes32',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'destValue',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'from',
        type: 'string',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'to',
        type: 'string',
      },
      {
        indexed: false,
        internalType: 'uint8',
        name: 'purpose',
        type: 'uint8',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: 'payload',
        type: 'bytes',
      },
    ],
    name: 'MakerTx',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint8',
        name: 'purpose',
        type: 'uint8',
      },
    ],
    name: 'RemoveAnchors',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint8',
        name: 'purpose',
        type: 'uint8',
      },
    ],
    name: 'SetAnchorStatus',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'bytes32',
        name: 'txId',
        type: 'bytes32',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'taker',
        type: 'string',
      },
      {
        indexed: false,
        internalType: 'uint8',
        name: 'purpose',
        type: 'uint8',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: 'payload',
        type: 'bytes',
      },
    ],
    name: 'TakerTx',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint8',
        name: 'purpose',
        type: 'uint8',
      },
    ],
    name: 'UpdateRouter',
    type: 'event',
  },
  {
    constant: false,
    inputs: [
      {
        internalType: 'uint8',
        name: 'purpose',
        type: 'uint8',
      },
      {
        internalType: 'address payable',
        name: 'anchor',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'reward',
        type: 'uint256',
      },
    ],
    name: 'accumulateRewards',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        internalType: 'uint8',
        name: 'purpose',
        type: 'uint8',
      },
      {
        internalType: 'address[]',
        name: 'anchors',
        type: 'address[]',
      },
    ],
    name: 'addAnchors',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        internalType: 'uint8',
        name: 'purpose',
        type: 'uint8',
      },
      {
        internalType: 'address',
        name: 'router',
        type: 'address',
      },
    ],
    name: 'addRouter',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        internalType: 'uint64',
        name: 'n',
        type: 'uint64',
      },
    ],
    name: 'bitCount',
    outputs: [
      {
        internalType: 'uint64',
        name: '',
        type: 'uint64',
      },
    ],
    payable: false,
    stateMutability: 'pure',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        internalType: 'uint8',
        name: 'purpose',
        type: 'uint8',
      },
      {
        internalType: 'uint256',
        name: 'maxValue',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'networkId',
        type: 'uint256',
      },
      {
        internalType: 'uint8',
        name: 'signConfirmCount',
        type: 'uint8',
      },
      {
        internalType: 'address[]',
        name: 'anchors',
        type: 'address[]',
      },
      {
        internalType: 'address[]',
        name: 'routers',
        type: 'address[]',
      },
    ],
    name: 'chainRegister',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        internalType: 'uint8',
        name: '',
        type: 'uint8',
      },
    ],
    name: 'crossChains',
    outputs: [
      {
        internalType: 'uint8',
        name: 'purpose',
        type: 'uint8',
      },
      {
        internalType: 'uint8',
        name: 'signConfirmCount',
        type: 'uint8',
      },
      {
        internalType: 'uint256',
        name: 'maxValue',
        type: 'uint256',
      },
      {
        internalType: 'uint64',
        name: 'anchorsPositionBit',
        type: 'uint64',
      },
      {
        internalType: 'uint64',
        name: 'delsPositionBit',
        type: 'uint64',
      },
      {
        internalType: 'uint8',
        name: 'delId',
        type: 'uint8',
      },
      {
        internalType: 'uint256',
        name: 'reward',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'totalReward',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'signerId',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'count',
        type: 'uint256',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        internalType: 'uint8',
        name: 'purpose',
        type: 'uint8',
      },
      {
        internalType: 'address',
        name: 'router',
        type: 'address',
      },
    ],
    name: 'delRouter',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        internalType: 'uint8',
        name: 'purpose',
        type: 'uint8',
      },
      {
        internalType: 'address',
        name: 'anchor',
        type: 'address',
      },
    ],
    name: 'getAnchorWorkCount',
    outputs: [
      {
        internalType: 'uint256',
        name: 'signCount',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'finishCount',
        type: 'uint256',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        internalType: 'uint8',
        name: 'purpose',
        type: 'uint8',
      },
    ],
    name: 'getAnchors',
    outputs: [
      {
        internalType: 'address[]',
        name: 'anchors',
        type: 'address[]',
      },
      {
        internalType: 'uint8',
        name: 'count',
        type: 'uint8',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        internalType: 'uint8',
        name: 'purpose',
        type: 'uint8',
      },
    ],
    name: 'getChainReward',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        internalType: 'uint8',
        name: 'purpose',
        type: 'uint8',
      },
      {
        internalType: 'address',
        name: 'anchor',
        type: 'address',
      },
    ],
    name: 'getDelAnchorSignCount',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        internalType: 'bytes32',
        name: 'txId',
        type: 'bytes32',
      },
      {
        internalType: 'uint8',
        name: 'purpose',
        type: 'uint8',
      },
    ],
    name: 'getMakerTx',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        internalType: 'uint8',
        name: 'purpose',
        type: 'uint8',
      },
    ],
    name: 'getMaxValue',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        internalType: 'uint8',
        name: 'purpose',
        type: 'uint8',
      },
    ],
    name: 'getRouter',
    outputs: [
      {
        internalType: 'address[]',
        name: 'routers',
        type: 'address[]',
      },
      {
        internalType: 'uint8',
        name: 'count',
        type: 'uint8',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        internalType: 'bytes32',
        name: 'txId',
        type: 'bytes32',
      },
      {
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        internalType: 'uint8',
        name: 'purpose',
        type: 'uint8',
      },
    ],
    name: 'getTakerTx',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        internalType: 'uint8',
        name: 'purpose',
        type: 'uint8',
      },
    ],
    name: 'getTotalReward',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        components: [
          {
            internalType: 'bytes32',
            name: 'txId',
            type: 'bytes32',
          },
          {
            internalType: 'bytes32',
            name: 'txHash',
            type: 'bytes32',
          },
          {
            internalType: 'string',
            name: 'from',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'to',
            type: 'string',
          },
          {
            internalType: 'address payable',
            name: 'taker',
            type: 'address',
          },
          {
            internalType: 'uint8',
            name: 'origin',
            type: 'uint8',
          },
          {
            internalType: 'uint8',
            name: 'purpose',
            type: 'uint8',
          },
          {
            internalType: 'bytes',
            name: 'data',
            type: 'bytes',
          },
        ],
        internalType: 'struct CrossStruct.Recept',
        name: 'rtx',
        type: 'tuple',
      },
    ],
    name: 'makerFinish',
    outputs: [],
    payable: true,
    stateMutability: 'payable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        internalType: 'uint256',
        name: 'destValue',
        type: 'uint256',
      },
      {
        internalType: 'uint8',
        name: 'purpose',
        type: 'uint8',
      },
      {
        internalType: 'string[2]',
        name: 'arg',
        type: 'string[2]',
      },
      {
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
    ],
    name: 'makerStart',
    outputs: [],
    payable: true,
    stateMutability: 'payable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'owner',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        internalType: 'uint8',
        name: 'purpose',
        type: 'uint8',
      },
      {
        internalType: 'address[]',
        name: 'anchors',
        type: 'address[]',
      },
    ],
    name: 'removeAnchors',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        internalType: 'uint8',
        name: 'purpose',
        type: 'uint8',
      },
      {
        internalType: 'address',
        name: 'anchor',
        type: 'address',
      },
      {
        internalType: 'bool',
        name: 'status',
        type: 'bool',
      },
    ],
    name: 'setAnchorStatus',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        internalType: 'uint8',
        name: 'purpose',
        type: 'uint8',
      },
      {
        internalType: 'uint256',
        name: 'maxValue',
        type: 'uint256',
      },
    ],
    name: 'setMaxValue',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        internalType: 'uint8',
        name: 'purpose',
        type: 'uint8',
      },
      {
        internalType: 'uint256',
        name: 'reward',
        type: 'uint256',
      },
    ],
    name: 'setReward',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        internalType: 'uint8',
        name: 'purpose',
        type: 'uint8',
      },
      {
        internalType: 'uint8',
        name: 'count',
        type: 'uint8',
      },
    ],
    name: 'setSignConfirmCount',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        components: [
          {
            internalType: 'bytes32',
            name: 'txId',
            type: 'bytes32',
          },
          {
            internalType: 'bytes32',
            name: 'txHash',
            type: 'bytes32',
          },
          {
            internalType: 'bytes32',
            name: 'blockHash',
            type: 'bytes32',
          },
          {
            internalType: 'uint256',
            name: 'value',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'charge',
            type: 'uint256',
          },
          {
            internalType: 'address payable',
            name: 'from',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'to',
            type: 'address',
          },
          {
            internalType: 'uint8',
            name: 'origin',
            type: 'uint8',
          },
          {
            internalType: 'uint8',
            name: 'purpose',
            type: 'uint8',
          },
          {
            internalType: 'bytes',
            name: 'payload',
            type: 'bytes',
          },
          {
            internalType: 'uint256[]',
            name: 'v',
            type: 'uint256[]',
          },
          {
            internalType: 'bytes32[]',
            name: 'r',
            type: 'bytes32[]',
          },
          {
            internalType: 'bytes32[]',
            name: 's',
            type: 'bytes32[]',
          },
        ],
        internalType: 'struct CrossStruct.Order',
        name: 'ctx',
        type: 'tuple',
      },
      {
        internalType: 'string',
        name: 'to',
        type: 'string',
      },
      {
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
    ],
    name: 'taker',
    outputs: [],
    payable: true,
    stateMutability: 'payable',
    type: 'function',
  },
];
