---
title: TypeScript数据类型
date: 2020-07-06
categories:
  - Typescript
tags:
  - Typescript
---

::: tip
1. 布尔类型
2. 数值类型
3. 字符串
4. 数组
5. null 和 undefined
6. object
7. symbol
8. 元组
9. 枚举
10. Any
11. void
12. never
13. unknown
:::

<!-- more -->

## TypeScript 是什么

[TypeScript](https://www.typescriptlang.org/) 是一种由微软开发的自由和开源的编程语言。它是 JavaScript 的一个超集，而且本质上向这个语言添加了可选的静态类型和基于类的面向对象编程。

## 与 JavaScript 对比

|                   TypeScript                   |                 JavaScript                 |
| :--------------------------------------------: | :----------------------------------------: |
| JavaScript 的超集用于解决大型项目的代码复杂性  |      一种脚本语言，用于创建动态网页。      |
|          可以在编译期间发现并纠正错误          |  作为一种解释型语言，只能在运行时发现错误  |
|           强类型，支持静态和动态类型           |          弱类型，没有静态类型选项          |
| 最终被编译成 JavaScript 代码，使浏览器可以理解 |           可以直接在浏览器中使用           |
|              支持模块、泛型和接口              |           不支持模块，泛型或接口           |
|          支持 ES3，ES4，ES5 和 ES6 等          |  不支持编译其他 ES3，ES4，ES5 或 ES6 功能  |
|       社区的支持仍在增长，而且还不是很大       | 大量的社区支持以及大量文档和解决问题的支持 |

## TypeScript 数据类型

### 1.布尔类型

```typescript
let bool: boolean = false;
bool = true;
bool = 123; // error 不能将类型"123"分配给类型"boolean"
```

### 2.数值类型

`TypeScript`支持`ES6`中新增的二进制和八进制数字字面量

```typescript
let num: number;
num = 123;
num = "123"; // error 不能将类型"123"分配给类型"number"
num = 0b1111011; //  二进制的123
num = 0o173; // 八进制的123
num = 0x7b; // 十六进制的123
```

### 3.字符串

可以使用单引号和双引号包裹内容

```typescript
let str: string = "zhang";
str = "san";
const first = "zhang";
const last = "san";
str = `${first} ${last}`;
console.log(str); // 打印结果为:zhang san
```

### 4.数组

- 通过 `number[]`的形式来指定这个类型元素均为 number 类型的数组类型
- 通过 `Array<number>`的形式来指定这个类型元素均为 number 类型的数组类型

```typescript
let list1: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];
```

### 5.null 和 undefined

- 在`TS`中，这两者都有各自的类型即`undefined`和`null`，也就是说它们既是实际值，也是类型
- 默认情况下 `undefined` 和`null`可以赋值给任意类型的值

```typescript
let u: undefined = undefined; // 这里可能会报一个tslint的错误：Unnecessary initialization to 'undefined'，就是不能给一个值赋undefined，但我们知道这是可以的，所以如果你的代码规范想让这种代码合理化，可以配置tslint，将"no-unnecessary-initializer"设为false即可
let n: null = null;
```

### 6.object

希望一个变量或者函数的参数的类型是一个对象的时候使用这个类型

```typescript
let strInit = "abc";
let strClone = strInit;
strClone = "efg";
console.log(strInit); // 'abc'

let objInit = { a: "aa" };
let objClone = objInit;
console.log(objClone); // {a:"aa"}
objInit.a = "bb";
console.log(objClone); // { a: 'bb' }
```

### 7.symbol

### 8.元组

- 可以看到是数组的扩展，它表示已知元素数量和类型的数组
- 通过`let tuple:[string,number,boolean]`方式定义
- 各个位置上的元素类型都要对应，元素个数也要一致

```typescript
let tuple: [string, number, boolean];
tuple = ["a", 2, false];
tuple = [2, "a", false]; // error 不能将类型“number”分配给类型“string”。 不能将类型“string”分配给类型“number”。
tuple = ["a", 2]; // error Property '2' is missing in type '[string, number]' but required in type '[string, number, boolean]'
```

### 9.枚举

- TS 在`ES`原有类型基础上加入枚举类型
- 定义一组角色，每一个角色用一个数字代表，就可以使用枚举类型

```typescript
enum Roles {
  SUPER_ADMIN,
  ADMIN,
  USER,
}
```

### 10.Any

- 程序有时也是多变的，有时在编写代码的并不能清楚的一个值到底是什么类型，这时就需要用到`any`类型
- 在定义数组类型时使用`any`来指定数组中的元素类型为任意类型
- 不要滥用`any`，如果任何值都指定为`any`类型，那么`TS`就失去意义

```typescript
let value: any;
value = 123;
value = "abc";
value = false;
```

### 11.void

- `void`和`any`相反，`any`是表示任意类型，而`void`是表示没有任意类型
- 定义函数，函数没有返回值时会用到
- `void`类型的变量只能赋值为 undefined 和 null，其他类型不能赋值给`void`类型的变量

```typescript
const consoleText = (text: string): void => {
  console.log(text);
};
```

### 12.never

- `never`类型指那些永不存在的值的类型
- 除它自身外任何类型都不能赋值给`never`类型

```typescript
const errorFunc = (message: string): never => {
  throw new Error(message);
};
```

### 13.unknown

- `unknown`和 any 很像，但`unknown`相对于`any`是安全的

```typescript
let value: any;
console.log(value.name);
console.log(value.toFixed());
console.log(value.length);
```
