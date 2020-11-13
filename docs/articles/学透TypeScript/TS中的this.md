---
title: TS中的this
date: 2020-07-27
categories:
  - Typescript
tags:
  - Typescript
---

::: tip
1. T
2. 上下文类型
:::

<!-- more -->

在 JS 中，this 可以用来获取全局对象、类实例对象、构建函数实例等引用。在 TS 中，this 也是一种类型。

具体例子：

```typescript
let info = {
  name: 'zhangsan',
  getName () {
      return this.name // "zhangsan" 这里this的类型为 { name: string; getName(): string; }
  }
}
```

上面例子如果显示地指定了 this 的类型，this 的类型就会发生改变：

```typescript
let info = {
  name: "Lison",
  getName(this: { age: number }) {
    this; // 这里的this的类型是{ age: number }
  }
};
```

**注意：在 tsconfig.json 里的`noImplicitThis`设为 true 的话，会有下面两种情况**



对象字面量具有 `ThisType<T>`指定类型，此时 this 的类型为 T

```typescript
type ObjectDescriptor<D, M> = { // 使用类型别名定义一个接口，这里用了泛型，两个泛型变量D和M
  data?: D; // 这里指定data为可选字段，类型为D
  // 这里指定methods为可选字段，类型为M和ThisType<D & M>组成的交叉类型；
  // ThisType是一个内置的接口，用来在对象字面量中键入this，这里指定this的类型为D & M
  methods?: M & ThisType<D & M>;
}

// 这里定义一个mackObject函数，参数desc的类型为ObjectDescriptor<D, M>
function makeObject<D, M>(desc: ObjectDescriptor<D, M>): D & M {
  let data: object = desc.data || {};
  let methods: object = desc.methods || {};
  // 这里通过...操作符，将data和methods里的所有属性、方法都放到了同一个对象里返回，这个对象的类型自然就      是D & M，因为他同时包含D和M两个类型的字段
  return { ...data, ...methods } as D & M;
}

let obj = makeObject({
  data: { x: 0, y: 0 }, // 这里data的类型就是我们上面定义ObjectDescriptor<D, M>类型中的D
  methods: { // 这里methods的类型就是我们上面定义ObjectDescriptor<D, M>类型中的M
    moveBy(dx: number, dy: number) {
      this.x += dx;  // 所以这里的this是我们通过ThisType<D & M>指定的，this的类型就是D & M
      this.y += dy;
    }
  }
});

obj.x = 10;
obj.y = 20;
obj.moveBy(5, 5);
```

不包含 `ThisType<T>` 指定的上下文类型，那么此时 this 具有上下文类型，也就是普通的情况。
