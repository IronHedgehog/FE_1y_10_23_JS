export function hello(name) {
  return `Hello,${name}`;
}

export function goodbye(name) {
  return `GoodBye,${name}`;
}

// module.exports = {
//   hello,
//   goodbye,
// };

export { goodbye, hello };
