declare const vluau: Vluau;
export = vluau;

/* eslint-disable @typescript-eslint/no-explicit-any */
interface Vluau {
  /**
   * Compiles the provided Luau source code into bytecode.
   * @param source - The Luau source code to compile.
   * @param chunkname - Optional name for the chunk, used in error messages.
   * @returns The compiled bytecode as a string.
   * @throws Will throw an error if the compilation fails.
   */
  luau_compile: (source: string, chunkname?: string) => string;

  /**
   * Loads the provided compiled Luau bytecode and returns a function.
   * @param bytecode - The compiled Luau bytecode.
   * @param env - Optional environment table to use.
   * @returns A function that executes the bytecode.
   * @throws Will throw an error if the bytecode is invalid or if the environment is not a table or undefined.
   */
  luau_load: (
    bytecode: string,
    env?: { [key: string]: any }
  ) => (...args: any[]) => any;

  /**
   * Executes the provided Luau source code or bytecode.
   * @param source - The Luau source code or bytecode to execute.
   * @param env - Optional environment table to use.
   * @param chunkname - Optional name for the chunk, used in error messages.
   * @returns A function that executes the code.
   */
  luau_execute: (
    source: string,
    env?: { [key: string]: any },
    chunkname?: string
  ) => (...args: any[]) => any;
}
