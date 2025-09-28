/**
 * 固定点数运算测试
 */

import { Fixed } from '../../src/fixed-point/fixed';

describe('Fixed Point Arithmetic', () => {
  test('should correctly add two fixed point numbers', () => {
    const a = new Fixed(10.5);
    const b = new Fixed(3.25);
    const result = a.add(b);
    
    expect(result.toString()).toBe('13.75');
  });

  test('should correctly multiply two fixed point numbers', () => {
    const a = new Fixed(10.5);
    const b = new Fixed(3.25);
    const result = a.mul(b);
    
    expect(result.toString()).toBe('34.125');
  });

  test('should correctly subtract two fixed point numbers', () => {
    const a = new Fixed(10.5);
    const b = new Fixed(3.25);
    const result = a.sub(b);
    
    expect(result.toString()).toBe('7.25');
  });

  test('should correctly divide two fixed point numbers', () => {
    const a = new Fixed(10.5);
    const b = new Fixed(3.25);
    const result = a.div(b);
    
    expect(result.toString()).toBe('3.2307692307692307692');
  });
});