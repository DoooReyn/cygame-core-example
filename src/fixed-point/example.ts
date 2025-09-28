/**
 * 固定点数运算示例
 * 这个示例展示了如何使用固定点数进行精确计算
 */

import { Fixed } from './fixed';

// 创建固定点数
const a = new Fixed(10.5);
const b = new Fixed(3.25);

// 执行运算
const sum = a.add(b);
const product = a.mul(b);
const difference = a.sub(b);
const quotient = a.div(b);

console.log(`a = ${a.toString()}`);
console.log(`b = ${b.toString()}`);
console.log(`a + b = ${sum.toString()}`);
console.log(`a * b = ${product.toString()}`);
console.log(`a - b = ${difference.toString()}`);
console.log(`a / b = ${quotient.toString()}`);

export { a, b, sum, product, difference, quotient };