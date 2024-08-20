const identity = <T>(argument: T) => argument;

const mapArray = <T, U>(arr: T[], fn: (value: T) => U) => arr.map(fn);
