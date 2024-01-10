const ALPHABET_START: number = 64;
const ALPHABET_SIZE: number = 26;
const NUMERIC_OFFSET: number = 26;

function serialize(nums: number[]): string {
    return nums.map(num => {
        if (num <= ALPHABET_SIZE) {
            return String.fromCharCode(num + ALPHABET_START);
        } else {
            return (num - ALPHABET_SIZE).toString();
        }
    }).join('');
}

function deserialize(serialized: string): number[] {
    const nums: number[] = [];
    let i = 0;

    while (i < serialized.length) {
        const char = serialized[i];

        if (char >= 'A' && char <= 'Z') {
            nums.push(char.charCodeAt(0) - ALPHABET_START);
        } else if (char >= '0' && char <= '9') {
            let num = parseInt(char, 10);

            while (i + 1 < serialized.length && serialized[i + 1] >= '0' && serialized[i + 1] <= '9') {
                num = num * 10 + parseInt(serialized[i + 1], 10);
                i++;
            }

            nums.push(num + NUMERIC_OFFSET);
        }

        i++;
    }

    return nums;
}

const tests: number[][] = [
    [1, 2, 3, 4, 5],
    [10, 20, 30, 40, 50],
    [100, 200, 300, 400, 500],
    Array.from({ length: 50 }, (_, i) => i + 1),
    Array.from({ length: 100 }, (_, i) => i + 1),
    Array.from({ length: 500 }, (_, i) => i + 1),
    Array.from({ length: 1000 }, (_, i) => i + 1),
    Array.from({ length: 100 }, () => 1),
    [11, 22, 33, 44, 55],
    [111, 222, 333, 444, 555],
    Array.from({ length: 900 }, (_, i) => (i % 300) + 1),
];

for (const test of tests) {
    const serialized = serialize(test);
    const deserialized = deserialize(serialized);
    const compressionRatio = serialized.length / JSON.stringify(test).length;
    
    console.log(`Original: ${JSON.stringify(test)}\nSerialized: ${serialized}\nDeserialized: ${JSON.stringify(deserialized)}\nCompression Ratio: ${compressionRatio.toFixed(2)}\n`);
}
