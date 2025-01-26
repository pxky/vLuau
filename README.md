# vLuau (TS)

Typescript typings for [vluau](https://github.com/kosuke14/vLuau).

## Usage

```ts
import vluau from "@poky/vluau";

const code = "print('hello world')";
const compiled = vluau.luau_compile(command); // returns bytecode
const executable = vluau.luau_load(compiled); // returns a function
executable(); // prints: "hello world"
```
