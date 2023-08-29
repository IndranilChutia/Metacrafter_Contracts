# TikuCircuit Circom Logic

The repository contains a Circom circuit designed by Indranil Chutia, also known as Tiku. The purpose of this circuit is to generate an output `f` based on two inputs, `a` and `b`, with the condition that `f` is 0 when `a` is 0 and `b` is 1.

## Circuit Overview

Developed using Circom version 2.0.0, the circuit consists of three core components: `andGate1`, `notGate`, and `andGate2`. These components are orchestrated within the main circuit template called `TikuCircuit` to achieve the desired logic.

### Component Functions

1. `andGate1`: Performs a logical AND operation on inputs `a` and `b`, generating an output named `c`.
2. `notGate`: Produces the logical negation of input signal `c`, yielding an output signal named `d`.
3. `andGate2`: Executes another logical AND operation, this time on inputs `d` and `a`, generating the final output signal `f`.

### Circuit Logic Flow

1. The inputs `a` and `b` are fed into the first AND gate (`andGate1`).
2. The output `c` from `andGate1` is channeled into the NOT gate (`notGate`).
3. The resulting output `d` from `notGate` is routed into the second AND gate (`andGate2`).
4. The second AND gate combines inputs `d` and `a` to produce the ultimate circuit output, represented as `f`.

## Contract Deployment

The circuit is currently deployed on the Mumbai test network using the appropriate tooling. Comprehensive deployment details, including the contract's address and pertinent transaction information, are accessible within the deployment logs.

## Utilizing the Circuit

Adapting the `TikuCircuit` template permits the circuit's use with alternative inputs or diverse logical operations. By adjusting gate logic and interconnections, the circuit's functionality can be extended to accommodate an array of computations based on input conditions.

## Author

- Circuit Designed by: Indranil Chutia
