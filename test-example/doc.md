# assert断言模块

断言模块用于为应用编写单元测试，可以通过require('assert')对该模块进行调用

### assert.fail(actual, expected, message, operator)

使用指定操作符测试 actual(真实值)是否和expected(期望值)一致


### assert.ok(value, [message])

测试实际值是否为true，和assert.equal(true, value, message);作用一致


### assert.equal(actual, expected, [message])

使用等值比较操作符( == )测试真实值是否浅层地（shallow），强制性地（coercive）和预期值相等。


### assert.notEqual(actual, expected, [message])

使用不等比较操作符( != )测试真实值是否浅层地（shallow），强制性地（coercive）和预期值不相等。


### assert.deepEqual(actual, expected, [message])

测试真实值是否深层次地和预期值相等。


### assert.notDeepEqual(actual, expected, [message])

测试真实值是否深层次地和预期值不相等。


### assert.strictEqual(actual, expected, [message])

使用严格相等操作符 ( === )测试真实值是否严格地（strict）和预期值相等。


### assert.notStrictEqual(actual, expected, [message])

使用严格不相等操作符 ( !== )测试真实值是否严格地（strict）和预期值不相等。


### assert.throws(block, [error], [message])

预期block时抛出一个错误（error）， error可以为构造函数，正则表达式或者其他验证器。

```
//
 assert.throws(
  function() {
    throw new Error("Wrong value");
  },
  Error);

 //
 assert.throws(
   function() {
     throw new Error("Wrong value");
   },
   /value/);

 //
 assert.throws(
   function() {
     throw new Error("Wrong value");
   },
   function(err) {
     if ( (err instanceof Error) && /value/.test(err) ) {
       return true;
     }
   },
   "unexpected error");
```

### assert.doesNotThrow(block, [error], [message])

预期block时不抛出错误


### assert.ifError(value)

测试值是否不为false，当为true时抛出。常用于回调中第一个参数error的测试。



