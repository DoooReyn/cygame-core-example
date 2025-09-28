# 固定点数运算指南

## 什么是固定点数？

固定点数是一种表示小数的方法，它通过将整数部分和小数部分分别存储在不同的位上，从而避免了浮点数运算中的精度问题。

## 为什么使用固定点数？

在游戏开发中，浮点数运算可能会导致精度丢失，特别是在需要重复计算的场景中。固定点数可以提供更可预测和一致的结果。

## 使用示例

```typescript
import { Fixed } from '../src/fixed-point/fixed';

// 创建固定点数
const a = new Fixed(10.5);
const b = new Fixed(3.25);

// 执行运算
const sum = a.add(b);        // 13.75
const product = a.mul(b);    // 34.125
const difference = a.sub(b); // 7.25
const quotient = a.div(b);   // 3.2307692307692307692
```

## API 参考

### 构造函数

- `new Fixed(value: number | string | Fixed)` - 创建一个新的固定点数

### 方法

- `add(other: Fixed): Fixed` - 加法
- `sub(other: Fixed): Fixed` - 减法
- `mul(other: Fixed): Fixed` - 乘法
- `div(other: Fixed): Fixed` - 除法
- `toString(): string` - 转换为字符串
- `toNumber(): number` - 转换为数字