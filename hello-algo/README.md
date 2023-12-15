# algorithm: 在有限的时间内解决特定问题的一组指令或者操作步骤。
特性：
-问题是明确的，包含清晰的输入和输出定义。
-具有可行性，能够在有限步骤、时间和内存空间下完成。
-各步骤都有确定的含义，在相同的输入和运行条件下，输出始终相同。

对于data structure 就简单的复习整理一下

## data structure: 是计算机中组织和存储数据的方式。
设计的目标：
-空间占用尽量少，以节省计算机内存。
-数据操作尽可能快速，涵盖数据访问、添加、删除、更新等。
-提供简洁的数据表示和逻辑信息，以便算法高效运行。

## The relationship between data structure and algorithms 
-数据结构是算法的基石。数据结构为算法提供了结构化存储的数据，以及操作数据的方法。
-算法是数据结构发挥作用的舞台。数据结构本身仅存储数据信息，结合算法才能解决特定问题。
-算法通常可以基于不同的数据结构实现，但执行效率可能相差很大，选择合适的数据结构是关键。

## Two metrics are used to measure the algorithm:
时间复杂度(Time complexity)： 算法运行时间.
空间复杂度(Spatial complexity)：算法占用内存空间的大小.

### Common types of time complexity：

#### 常数阶`O(1)`：
常数阶的操作数量与输入数据大小`n`无关，即不随着`n`的变化而变化。
但由于其与输入数据大小`n`无关，因此时间复杂度仍为`O(1)`：
```js
/* 常数阶 */
function constant(){
    let count = 0;
    for(let i = 0; i < size; i++) count++;
    return count;
}
//该算法的时间复杂度为 O(1)
```

#### 线性阶`O(n)`:
线性阶的操作数量相对于输入数据大小`n`以线性级别增长。线性阶一般出现在单层循环中:
```js
/* 线性阶 */
function linear(n){
    let count = 0;
    for(let i = 0; i < n; i++) count++;
    return count;
}
```

#### 平方阶`O(n^2)`
平方阶的操作数量相对于输入数据大小`n`以平方级别增长。平方阶通常出现在嵌套循环中，外层循环和内层循环的时间复杂度都为`O(n)`，因此总体的时间复杂度为`O(n^2)`：

```javascript
function quadratic(n){
    let count = 0; 
    for(let i = 0; i < n; i++){
        for(let j = 0; j < n， j++) count ++;
    }
    return countl;
}
```
目前涉及到的三种复杂度分析相对来说比较简单，也很好分析。

#### 指数阶`O(2^n)`
生物学的“细胞分裂”是指数阶增长的典型例子：初始状态为`2^0`个细胞，分裂一轮后变为`2^1`个，分裂两轮后变为`2^2`个，以此类推，分裂轮后有`2^n`个细胞。

```javascript
/* 指数阶 */
function exponential(n){
    let [count, base] = [0, 1];
    // 每循环一轮，base就会成指数增加
    // base 变化 2^0, 2^1, 2^2, ..., 2^(n-1)
    for(let i = 0; i < n; i++){
        for(let j = 0; j < base; j++) count++;
        base *=2;
    }
    return count;
}
```

在实际算法中，指数阶常出现于递归函数中。例如在以下代码中，其递归地一分为二，经过`n`次分裂后停止：

```javascript 
function exRecur(n){
    if(n === 1) return 1;
    return exRecure(n - 1) + exRecure(n - 1) + 1
}
```

指数阶增长非常迅速，在穷举法（暴力搜索、回溯等）中比较常见。对于数据规模较大的问题，指数阶是不可接受的，通常需要使用动态规划或贪心算法等来解决。

