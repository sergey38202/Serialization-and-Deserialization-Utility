Serialization and Deserialization Utility
Overview
This TypeScript utility provides a simple mechanism for serializing and deserializing arrays of integers into compact strings and vice versa. The serialization process encodes alphabetic characters (A-Z) and numeric characters beyond a specified range.

Usage
Installation
To use this utility in your TypeScript project, simply include the provided serialization.ts file.

typescript
Copy code
// Include the utility in your TypeScript file
import { serialize, deserialize } from './serialization';
Serialization
The serialize function converts an array of integers into a compact string representation.

typescript
Copy code
const nums: number[] = [1, 2, 3, 4, 5];
const serialized: string = serialize(nums);

console.log(`Serialized: ${serialized}`);
Deserialization
The deserialize function converts a serialized string back into an array of integers.

typescript
Copy code
const serialized: string = 'ABCDE';
const deserialized: number[] = deserialize(serialized);

console.log(`Deserialized: ${JSON.stringify(deserialized)}`);
Constants
The utility uses the following constants for encoding:

ALPHABET_START: The ASCII value for the starting uppercase letter ('A').
ALPHABET_SIZE: The size of the alphabet (26).
NUMERIC_OFFSET: The offset for numeric characters beyond the alphabet size (26).
Examples
Explore the provided example tests in the index.ts file to see how the utility can be used with various input scenarios.

Tests
To run the tests, ensure you have Jest installed:

bash
Copy code
npm install --save-dev jest ts-jest @types/jest
Then, run the tests using:

bash
Copy code
npm test
Contributing
Feel free to contribute to the development of this utility. Fork the repository, make your changes, and submit a pull request.