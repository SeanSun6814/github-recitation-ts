// Endpoint for querying the fibonacci numbers

// const fibonacci = require("./fib");
import fibonacci from "./fib";

export default (req: { params: { num: string } }, res: { send: (res: string) => void }) => {
  const { num } = req.params;

  const fibN: number = fibonacci(parseInt(num));
  let result = `fibonacci(${num}) is ${fibN}`;

  if (fibN < 0) {
    result = `fibonacci(${num}) is undefined`;
  }

  res.send(result);
};
