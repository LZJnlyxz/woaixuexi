# 一.ES6

es6官方文档地址：https://www.w3cschool.cn/escript6/escript6-pm6z37es.html

## 1.ES6简介

![image-20220803112912709](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220803112912709.png)

![image-20220803112929148](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220803112929148.png)



## 2.let和const变量声明

![image-20220803205502981](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220803205502981.png)

![image-20220803211453439](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220803211453439.png)

![image-20220805094408220](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220805094408220.png)

![image-20220805094546837](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220805094546837.png)

![image-20220805104141913](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220805104141913.png)

>
>
>注意：const变量值不变实质是变量申请的地址中保存的数据不变，当const变量被赋值了数组时，实质是在变量中保存了数组的地址

![image-20220805104823187](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220805104823187.png)





## 3.模板字符串

![image-20220805110954234](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220805110954234.png)

![image-20220805112011680](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220805112011680.png)

## 4.箭头函数

![image-20220805162546487](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220805162546487.png)

>
>
>this指针问题遵循原则：1.谁调用就指向谁
>
>2.非箭头普通函数调用指向window
>
>3.箭头函数本身不存在this指针，函数体内的this指针指向函数创建时函数所在作用域空间的this，所以call，apply方法不会改变箭头函数中的this指向
>
>4.call方法会改变执行主体

![image-20220805162611332](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220805162611332.png)

![image-20220805162721620](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220805162721620.png)

![ ](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220805162755312.png)

![image-20220805162815310](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220805162815310.png)



箭头函数this指针强化

1. ![image-20220806164638696](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220806164638696.png)

2. ![image-20220806163736372](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220806163736372.png)当对象obj创建时，f方法foo才创建，故外层作用域是全局作用域

3. ![image-20220806164129990](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220806164129990.png)

   调用print函数时才会打印this，而print函数的创建是在printthis函数被调用时才完成

   4.

   ![image-20220806164853497](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220806164853497.png)

   总结：作用域：对象=方法>方法下的箭头函数

   方法下的不在箭头函数中的this指向本对象

案例：

![image-20220805163848392](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220805163848392.png)

![image-20220805165206795](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220805165206795.png)

>
>
>注意：filter（）方法的使用

## 5.函数参数默认值设置

![image-20220805170606665](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220805170606665.png)



## 6.rest参数

![image-20220805171416552](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220805171416552.png)



## 7.扩展运算符

概述：扩展运算符是能将数组转换为逗号分隔的参数序列

```javascript
const tfboys=['AA','BB','CC']
function chunwan(){
    console.log(arguments);
}
chunwan(...tfboys);  //0:'AA' 1:'BB' 2:'CC'

```



![image-20220805171849047](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220805171849047.png)

>
>
>注意：扩展运算符与rest区别
>
>扩展运算符用于函数调用处传递实参，rest参数则用于定义形参



应用：

```javascript
1.数组的合并
const A = ['aa','bb'];
const B = ['cc','dd'];
const C = [...A,...B];
console.log(C)   //[aa,bb,cc,dd]

2.数组的克隆
const A = ['a','b','c'];
const B = [...A];
console.log(B)   //[a,b,c]

3.将伪数组转换为真正的数组
const A = documents.querySelectorAll('div');
const B = [...A];
console.log(B) // [div,div,div]

```



![image-20220805172637481](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220805172637481.png)





## 8.Symple

Symple安全创建对象属性

![image-20220805201649196](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220805201649196.png)

![image-20220805201726398](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220805201726398.png)



symple内置值

![image-20220805201818251](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220805201818251.png)



## 9.迭代器

![image-20220805203102460](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220805203102460.png)

![image-20220805203223225](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220805203223225.png)

>
>
>注意：done属性是指是否完成遍历，未完成就返回false否则是TRUE



案例：迭代器自定义遍历数据

```javascript
<script>
        const banji= {
            name:"yiban",
            stus:['xiaoming','xiaohong','xiaotian'],
            [Symbol.iterator]() {
                let index=0;
                // let _this=this;
                return {
                    next:()=> {
                        if(index<this.stus.length) {
                            const result={value:this.stus[index],done:false};
                            index++;
                            return result;
                        }else {
                            return {value:undefined,done:true};
                        }
                    }
                }
            }

        }
        for(let v of banji) {
            console.log(v);
        }
    </script>
```



## 10.生成器

### 1.生成器概述：

生成器函数：生成器函数是ES6提供的一种异步编程解决方案，语法行为与传统函数完全不同，是一种特殊的函数

```javascript
function * gen (){    //函数名和function中间有一个 * 
    yield '耳朵'；     //yield是函数代码的分隔符
    yield '尾巴'；
    yield '真奇怪'；
}
let iterator = gen();
console.log(iteretor.next()); 
//{value:'耳朵',done:false} next（）执行第一段，并且返回yield后面的值
console.log(iteretor.next()); //{value:'尾巴',done:false}
console.log(iteretor.next()); //{value:'真奇怪',done:false}

```



### 2.生成器解决回调地狱案例：

1.

回调地狱：在使用JavaScript时，为了实现某些逻辑经常会写出层层嵌套的回调函数，如果嵌套过多，会极大影响代码可读性和逻辑，这种情况也被成为回调地狱

![image-20220806170904570](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220806170904570.png)

解决方案：

```javascript
function one(){
    setTimeout(()=>{
        console.log('111')
        iterator.next()
    },1000)
}
function two(){
    setTimeout(()=>{
        console.log('222')
        iterator.next();
    },2000)
}
function three(){
    setTimeout(()=>{
        console.log('333')
        iterator.next();
    },3000)
}

function * gen(){
    yield one();
    yield two();
    yield three();
}
//调用生成器函数
let iterator = gen();
iterator.next();

```



2.模拟异步获取数据

```javascript
function one(){
    setTimeout(()=>{
        let data='用户数据';
        iterator.next(data)//第二次调用，返回第一个
    },1000)
}
function two(){
    setTimeout(()=>{
        let data='订单数据';
        iterator.next(data)
    },2000)
}
function three(){
    setTimeout(()=>{
        let data='商品数据';
        iterator.next(data)
    },3000)
}

function * gen(){
    let users=yield one();
    console.log(users)
    let orders=yield two();
    console.log(orders)
    let goods=yield three();
    console.log(goods)
}

let iterator = gen();
iterator.next();

```

>
>
>注意：实际开发中一般不利于异步编程解决问题，即通过依次调用函数，因为实际中三组数据一般有联系不能孤立调用，只能利用生成器函数解决



## 11.Promise 

### 1.promise概述

Promise是ES6引入的异步编程的新解决方案。语法上 Promise是一个构造函数，用来封装异步操作并可以获取其成功或失败的结果

```javascript
<script>
    const p =new Promise((resolve, reject)=>{
        setTimeout(()=>{
            let data='数据库数据'
            // resolve(data);表示数据获取成功
            reject(data);//表示数据获取失败
        })
    })

    p.then(function (value){         //成功则执行第一个回调函数，失败则执行第二个
        console.log(value)
    },function (reason){
        console.error(reason)
    })
</script>

```

>
>
>注意：promise实质是利用promise对象封装了异步回调任务

### 2.promise封装Ajax请求

```javascript
<script>
    const p =new Promise((resolve, reject) =>{
        setTimeout(()=>{
            resolve('用户数据');
        })
    });

//then（）函数返回的实际也是一个Promise对象
//1.当回调后，返回的是非Promise类型的属性时，状态为fulfilled，then（）函数的返回值为对象的成功值，如reutnr 123，返回的Promise对象值为123，如果没有返回值，是undefined

//2.当回调后，返回的是Promise类型的对象时，then（）函数的返回值为这个Promise对象的状态值

//3.当回调后，如果抛出的异常，则then（）函数的返回值状态也是rejected
    let result = p.then(value => {
        console.log(value)
        // return 123;
        // return new Promise((resolve, reject) => {
        //     resolve('ok')
        // })
        throw 123
    },reason => {
        console.log(reason)
    })
    console.log(result);
</script>
<script>
    //ajax请求返回一个promise
    
        const p= new Promise((resolve, reject) => {

            //创建对象
            const xhr =new XMLHttpRequest();

            //初始化
            xhr.open('GET',url);

            //发送
            x.send();

            //时间绑定
           xhr.onreadystatechange = ()=>{
                if(xhr.readyState === 4 ){
                    if(xhr.status >= 200 && xhr.status < 300){
                        //成功
                        resolve(xhr.response)
                    }else {
                        //失败
                        reject(xhr.status)
                    }
                }
            }
        })
    }

    //测试
    p.then(function(value) {
        console.log(value)
    },function(reason) {
        consol.log(reson)<script>
    const p =new Promise((resolve, reject) =>{
        setTimeout(()=>{
            resolve('用户数据');
        })
    });


```

### 3.promise.then（）方法

```javascript
//then（）函数返回的实际也是一个Promise对象
//1.当回调后，返回的是非Promise类型的属性时，状态为fulfilled，then（）函数的返回值为对象的成功值，如reutnr 123，返回的Promise对象值为123，如果没有返回值，是undefined

//2.当回调后，返回的是Promise类型的对象时，then（）函数的返回值为这个Promise对象的状态值

//3.当回调后，如果抛出的异常，则then（）函数的返回值状态也是rejected
    let result = p.then(value => {
        console.log(value)
        // return 123;
        // return new Promise((resolve, reject) => {
        //     resolve('ok')
        // })
        throw 123
    },reason => {
        console.log(reason)
    })
    console.log(result);
</script>

    });

</script>

//4.链式调用解决回调地狱
p.then(value=>{
    
},reason=>{
    
}).then(value=>{
    
},reason=>{
    
}).
```

### 4.promise封装读取文件（node.js）

### 5.promise案例：多个文件内容读取（node.js）

### 6.promise.catch（）方法

```javascript
//catch（）函数只有一个回调函数，意味着如果Promise对象状态为失败就会调用catch（）方法并且调用回调函数
<script>
    const p = new Promise((resolve, reject) => {
        setTimeout(()=>{
            reject('出错啦')
        },1000)
    })

    p.catch(reason => {
        console.log(reason)
    })
</script>

```



## 12.set

### 1.set概述

![image-20220806210715594](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220806210715594.png)

>
>
>注意：set实质是一个object

```javascript
<script>
    let s = new Set();
    let s2 = new Set(['A','B','C','D','D'])
    console.log(s2)//set(4){'A','B','C','D'}
//set类似于数学中的集合，故元素具有唯一性，自带去重效果
    //元素个数
    console.log(s2.size);

    //添加新的元素
    s2.add('E');

    //删除元素
    s2.delete('A')

    //检测
    console.log(s2.has('C'));//没有则输出false，反之是true

    //清空
    s2.clear()

    console.log(s2);
</script>

```

### 2.set案例

```javascript
<script>
    let arr = [1,2,3,4,5,4,3,2,1]

    //1.数组去重
    let result = [...new Set(arr)]
    console.log(result);
    //2.交集
    let arr2=[4,5,6,5,6]
    //完整代码：
    //let result=[...new Set(arr)].filter(item=>{
    //let s2=new Set(arr2);
	//if(s2.has(item)) {
        //return true;
    //}else {
        //reutrn false;
    //}
    //})
    //简写代码
    let result2 = [...new Set(arr)].filter(item => new Set(arr2).has(item))
    console.log(result2);
    //3.并集
    let result3=[new Set([...arr,...arr2])]
    console.log(result3);
    //4.差集
    let result4= [...new Set(arr)].filter(item => !(new Set(arr2).has(item)))
    console.log(result4);

</script>

```



## 13.Map

### 1.map概述:(升级版对象)

![image-20220806213349792](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220806213349792.png)



```javascript
<script>
    let m = new Map();
    m.set('name','ran');
    m.set('change',()=>{
        console.log('改变！')
    })
    let key={
        school:'atguigu'
    }
    m.set(key,['成都','西安']);

    //size
    console.log(m.size);

    //删除
    m.delete('name');

    //获取
    console.log(m.get('change'));

    // //清空
    // m.clear()

    //遍历
    for(let v of m){
        console.log(v);
    }
</script>

```



## 14.calss类

### 1.class概述

![image-20220806213746720](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220806213746720.png)

### 2.class类的创建

1.es5创建及实例化对象写法

![image-20220806214341897](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220806214341897.png)

2.es6创建及实例化对象写法

```javascript
<script>
    class shouji {
        constructor(brand,price) {
            this.brand=brand;
            this.price=price
        }

        call(){
            console.log('我可以打电话')
        }
    }

    let A = new shouji('1+',1999);
    console.log(A)
</script>

```



### 3.class静态成员

```javascript
<script>
  class Person{
      static name='手机';
      static function(){
          console.log("我是帅哥");
      }
  }
  let nokia = new Person();
  console.log(nokia.name);
</script>

```



### 4.ES5类继承

```javascript
<script>
  function Phone(brand,price){
      this.brand=brand;
      this.price=price;
  }
  Phone.prototype.call=function (){//原型
      console.log("我可以打电话");
  }
  function SmartPhone(brand,price,color,size){
      Phone.call(this,brand,price);
      this.color=color;
      this.size=size;
  }

  //设置子级构造函数原型
  SmartPhone.prototype=new Phone;
  SmartPhone.prototype.constructor=SmartPhone;

  //声明子类方法
  SmartPhone.prototype.photo = function (){
      console.log('我可以玩游戏');
  }
  const chuizi = new SmartPhone('锤子',2499,'黑色','5.5inch')
  console.log(chuizi);
</script>

```

### 5.ES6类继承

```javascript
<script>
    class Phone{
        constructor(brand,price) {
            this.brand=brand;
            this.price=price;

        }
        //父类的成员属性
        call(){
            console.log('我可以打电话')
        }
    }
    class SmartPhone extends Phone{
        constructor(brand,price,color,size) {
            super(brand,price);
            this.color=color;
            this.size=size;
        }
        photo(){
            console.log('拍照');
        }

        playGame(){
            console.log('打游戏');
        }
    }
    const xiaomi=new SmartPhone('小米',1999,'黑色','4.7inch')
    xiaomi.call();
    xiaomi.photo();
    xiaomi.playGame();
</script>

```

### 6.ES6子类对父类方法的重写

```javascript
<script>
    class Phone{
        constructor(brand,price) {
            this.brand=brand;
            this.price=price;

        }
        //父类的成员属性
        call(){
            console.log('我可以打电话')
        }
    }
    class SmartPhone extends Phone{
        constructor(brand,price,color,size) {
            super(brand,price);
            this.color=color;
            this.size=size;
        }
        photo(){
            console.log('拍照');
        }

        playGame(){
            console.log('打游戏');
        }

        //重写！
        call(){
            console.log('我可以进行视频通话')
        }
    }
    const xiaomi=new SmartPhone('小米',1999,'黑色','4.7inch')
    xiaomi.call();
    xiaomi.photo();
    xiaomi.playGame();
</script>

```

### 7.ES6class中getter和setter设置

```
<script>
  class Phone{
      get price(){
          console.log("价格属性被读取了")
          return 'I LOVE YOU'
      }

      set price(val){//Val参数是必须写的
          console.log('价格属性被修改了')
          return val;
      }
  }

    //实例化对象
    let s = new Phone();
    s.price=12  //实质是给price属性赋值，此时会调用price后面的函数，打印出“价格属性被修改了”
    // console.log(s.price)   //其实是调用price方法
</script>

```



### 8.ES6数值的扩展

```javascript
<script>
   // Number.EPSILON是 JavaScript的最小精度，属性的值接近于 2.22044...E-16
   function equal(a,b){
       if(Math.abs(a-b) < Number.EPSILON){
           return true;
       }else {
           return false;
       }
   }

   console.log(equal(0.1 + 0.2 === 0.3))  //false
   console.log(equal(0.1+0.2,0.3))  //true

   //二进制和八进制
   let b = 0b1010; //2进制
   let o = 0o777;  //8进制
   let d = 100;    //10进制
   let x = 0xff;   //16进制
   console.log(x)   //255

   //Number.isFinite（）检测一个数是否为有限数
   console.log(Number.isFinite(100));  //true
   console.log(Number.isFinite(100/0));  //false
   console.log(Number.isFinite(Infinity));  //false

   //Number.isNaN（）检测一个数值是否为NaN
   console.log(Number.isNaN(123))  //false

   //Number.parseInt/parseFloat（）字符串转整数
   console.log(Number.parseInt('5213123love')); //5213123
   console.log(Number.parseFloat('5.123123神器')); //5.123123

   //Number.isInteger（）判断是否为整数
   console.log(Number.isInteger(5));  //true
   console.log(Number.isInteger(2.5)); //false
   
   //Math.trunc（）将小数部分抹除
   console.log(Math.trunc(3.45345345345)) //3

   //Math.sign（）检测一个数到底是正数、负数、还是0
   console.log(Math.sign(100)) //1
   console.log(Math.sign(0))  //0
   console.log(Math.sign(-123)) //-1
</script>

```

>
>
>注意：浮点数运算有误差，原因是



### 9.ES6对象方法的扩展

```javascript
<script>
    //1.Object.is ()判断两个值是否完全相等
    console.log(Object.is(120,120))  //true
	console.log(Object.is(NaN,NaN))  //false

    //2.Object.assign 对象的合并
    const a = {
        name:'ran',
        age:12
    }
    const b = {
        pass:'i love you'
        age:13
    }
    console.log(Object.assign(a,b))   //{name:'ran',age:'13',pass:'i love you'}//如果存在同名属性，后面的会覆盖前面的

    //3.Object.setPrototypeOf 设置原型对象     Object.getPrototypeof获取原型对象
    const school = {
        name:'尚硅谷'
    }
    const cities = {
        xiaoqu:['北京','上海']
    }
    Object.setPrototypeOf(school,cities)//设置cities为school原型
    console.log(Object.getPrototypeOf(school))  //{xiaoqu: Array(2)}
    console.log(school)  //{name: "尚硅谷"}
</script>

```





## 15.模块化

### 1.模块化概述：

1.模块化是指将一个大的程序文件,拆分成许多小的文件，然后将小文件组合起来。

2.模块化的好处：

- 防止命名冲突
- 代码复用
- 高维护性
- 
  模块化规范产品

3.ES6之前的模块化规范有：

CommonJS ====> NodeJS、Browserify
AMD ====> requireJS
CMD ====> seaJS

### 2.语法

模块功能主要有两个命令构成：export和import

- export命令用于规定模块的对外接口
- import命令用于输入其他模块提供的功能

```javascript
export let school = '尚硅谷'//export命令使变量school得以暴露
export function teach(){//同上
    console.log('教技能')
}

<script type="module">
    //引入m1.js模块内容
    import * as m1 from "./src/js/m1.js";//将m1.js文件中的暴露内容全部引入m1变量中
	console.log(m1);
</script

```

### 3.暴露语法汇总

```javascript
//1.统一暴露
let school = '尚硅谷';
function findjob(){
    console.log('找工作吧');
}
export {school,findjob};//统一暴露

//2.默认暴露
//默认暴露
export default {
    school:'ATGUIGU',
    change:function(){
        console.log('我们可以改变你')
    }
}

```

![image-20220807104031690](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220807104031690.png)



### 4.引入语法汇总

```javascript
//1.通用导入方式
import * as m1 from "./src/js/m1.js"
import * as m2 from "./src/js/m2.js"
import * as m3 from "./src/js/m3.js"

//2.解构赋值方式
import {school,teach} from "./src/js/m1.js"//针对单一暴露
import {school as guigu,findJob} from "./src/js/m2.js"//as+其他名可以避免重名冲突  针对统一暴露
import {default as m3 } from "./src/js/m3.js"//针对默认暴露   default是属性，为了避免重名 使用as语法

//3.简便形式（只针对默认暴露）
import m3 from "./src/js/m3.js"

```

模块化文件引入方式二

```javascript
<script src="./src//js/app.js" type=modeule></script>
//创建app.js文件作为所有模块化文件js代码的入口文件
```

![image-20220807105507760](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220807105507760.png)



### 5.ES6-babel对ES6模块化代码转换





# 二.ES7

### 1.概述

1. Array.prototype.includes：用来检测数组中是否包含某个元素，返回布尔类型值
2. 在ES7中引入指数操作符**，用来实现幂运算，功能与Math.pow结果相同

### 2.应用

```javascript
<script>
    //include
   const mingzhu = ['西游记','红楼梦','水浒传','三国演义']
   console.log(mingzhu.includes('西游记'))  //true
   console.log(mingzhu.includes('金瓶梅'))  //false

    //**
    console.log(2**10) // 1024
</script>

```



# 三.ES8

介绍：async和await两种语法结合可以让异步代码像同步代码一样

## 1.async函数

async函数：

- async函数的返回值为promise对象
- async返回的promise对象的结果值由async函数执行的返回值决定

特性：

```javascript
async function fn(){
   //1.如果返回的是一个非Promise的对象，则fn（）返回的结果就是成功状态的Promise对象，值为返回值
   //2.如果返回的是一个Promise对象，则fn（）返回的结果与内部Promise对象的结果一致
   //3.如果返回的是抛出错误，则fn（）返回的就是失败状态的Promise对象
   return new Promise((resolve,reject)=>{
       resolve('成功的数据');
   });
}
const result = fn();
result.then(value=>{
   console.log(value)  //成功的数据
},reason=>{
   console.log(reason)
})

```



## 2.await表达式

### 1.概述

1. await必须放在async函数中
2. await右侧的表达式一般为promise对象

3. await可以返回的是右侧promise成功的值(promisevalue)
4. await右侧的promise如果失败了，就会抛出异常，需要通过try…catch捕获处理

### 2.特性

```javascript
<script>
    //创建Promise对象
    const p = new Promise((resolve, reject) => {
        // resolve("成功的值")
        reject("失败了")
    })

    //await 必须放在async函数中
    async function main() {
        try {
            let res = await p;
            console.log(res);
        } catch (e) {
            console.log(e);
        }
    }

    //调用函数
    main()  //失败了
</script>

```

### 3应用：发送AJAX请求

```javascript
<script>
    //ajax请求返回一个promise
    function sendAjax(url){
        return new Promise((resolve, reject) => {

            //创建对象
            const x =new XMLHttpRequest();

            //初始化
            x.open('GET',url);

            //发送
            x.send();

            //时间绑定
            x.onreadystatechange = ()=>{
                if(x.readyState === 4 ){
                    if(x.status >= 200 && x.status < 300){
                        //成功
                        resolve(x.response)//这里是成功的值value
                    }else {
                        //失败
                        reject(x.status)
                    }
                }
            }
        })
    }
	//promise then 方法测试
        sendAjax("https://api.apiopen.top/getJoke").then(value=>		 	        {console.log(value);
                                                                                    },reason=>{})

   //async 与 await 测试
    async function main(){
        let result = await sendAjax("https://api.apiopen.top/getJoke")
        console.log(result);
    }
    main()

</script>

```

### 4.async和await结合读取文件

```javascript
```



## 3.ES8对象方法扩展

```javascript
<script>
    const school = {
        name:'尚硅谷',
        cities:['北京','上海','深圳'],
        xueke:['前端','Java','大数据','运维']
    };

    //获取对象所有的键
    console.log(Object.keys(school));

    //获取对象所有的值
    console.log(Object.values(school));

    //entries,用来创建map
    console.log(Object.entries(school));
    console.log(new Map(Object.entries(school)))

    //对象属性的描述对象
    console.log(Object.getOwnPropertyDescriptor(school))
    
    const obj = Object.create(null,{
        name:{
            value:'尚硅谷',
            //属性特性
            writable:true,
            configurable:true,
            enumerable:true,
        }
    })
</script>

```



# 四.ES9

## 1.运算扩展符与rest参数

```javascript
<script>
    function connect({host,port,...user}){
        console.log(host);
        console.log(port);
        console.log(user)
    }
    connect({
        host:'127.0.0.1',
        port:3306,
        username:'root',
        password:'root',
        type:'master'
    })  //127.0.0.1  3306  {username: "root", password: "root", type: "master"}

</script>

<script>
    const AA={
        username:'ran'
    }
    const BB={
        password:'lyyrhf'
    }
    const CC={
        job:'Java'
    }
    const D={...AA,...BB,...CC};
    console.log(D) //{username: "ran", password: "lyyrhf", job: "Java"}
</script>

```



# 五.ES10

## 1.对象扩展方法

```javascript
<script>
   //二维数组
   const res = Object.fromEntries([
       ['name','RHF'],
       ['cities','成都','武汉']
   ])
   console.log(res) //{name: "RHF", cities: "成都"}

   //Map
   const m = new Map();
   m.set('name','ranhaifeng')
   const result = Object.fromEntries(m)
   console.log(result); //{name: "ranhaifeng"}
</script>

```



## 2.字符串扩展方法

```javascript
<script>
   //trim
   let str= ' asd  '
   console.log(str) //asd
   console.log(str.trimStart()) //asd  清空头空格
   console.log(str.trimEnd()) //  asd  清空尾空格
</script>

```



## 3.flat与flatMap

```javascript
<script>
    const arr = [1,2,3,[4,5,6,[7,8,9]]]
    //参数为深度，是一个数字
    console.log(arr.flat(2)) //[1,2,3,4,5,6,7,8,9]

	const arr2=[1,2,3,4]
    const result = arr2.flatmap(item => [item * 10]); //如果map的结果是一个多维数组可以进行flat 是两个操作的结合
	
</script>

```



## 4.Symbol的description

概述：用来获取Symbol的字符串描述

实例：

```javascript
let s = Symbol('尚硅谷');
console.log(s.description) //尚硅谷

```

## 5.私有属性

```javascript
<script>
    class Person {
        //公有属性
        name;
        //私有属性
        #age;
        #weight;

        //构造方法
        constructor(name, age, weight) {
            this.name = name;
            this.#age = age;
            this.#weight = weight;
        }
        intro(){
            console.log(this.name);
            console.log(this.#age);
            console.log(this.#weight);
        }
    }

    //实例化
    const girl = new Person('陈', 18, '45kg');
    console.log(girl.#age) //error
    console.log(girl); //Person{name: "陈", #age: 18, #weight: "45kg"}
    girl.intro(); // 陈 18  45kg
</script>

```

## 6.Promise

```javascript
<script>
    //声明两个promise对象
    const p1 = new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve('商品数据-1')
        },1000)
    })

    const p2 = new Promise((resolve, reject) => {
        setTimeout(()=>{
            reject('出错了！')
        },1000)
    })

    //调用allsettled方法:返回的结果始终是一个成功的，并且异步任务的结果和状态都存在
    const res = Promise.allSettled([p1,p2]);
    console.log(res)

    // Promise {<pending>}
    //     __proto__: Promise
    //     [[PromiseState]]: "fulfilled"
    //     [[PromiseResult]]: Array(2)

    //调用all方法：返回的结果是按照p1、p2的状态来的，如果都成功，则成功，如果一个失败，则失败，失败的结果是失败的Promise的结果
    const result = Promise.all([p1,p2])
    console.log(result)

</script>

```



## 7. 可选链操作符

```javascript
//相当于一个判断符，如果前面的有，就进入下一层级
function main(config){
    const dbHost = config?.db?.host
    console.log(dbHost) //192.168.1.100
}

main({
    db:{
        host:'192.168.1.100',
        username:'root'
    },
    cache：{
    	host:'192.168.1.200',
    	username:'admin'
	}
})

```



## 8.动态import

```javascript
btn.onclick = function(){
    //使用之前并未引入，动态引入，返回的其实是一个Promise对象
    import('./hello.js').then(module=>{
        module.hello();
    })
}

```



## 9. BigInt类型

```javascript
//大整型
let n = 521n;
console.log(n,typeof(n))  // 521n  n 

//函数
let n = 123;
console.log(BigInt(n)) // 123n  //不要使用浮点型，只能用int

//大数值运算
let max = Number.MAX_SAFE_INTEGER; // 9007199254740991
console.log(max +1) // 9007199254740992
console.log(max +2) // 9007199254740992 出问题了
console.log(BigInt(max)+BigInt(1)) 9007199254740992n
console.log(BigInt(max)+BigInt(2)) 9007199254740993n

```



## 10.绝对全局对象globalThis

```javascript
console.log(globalThis) //window  //适用于复杂环境下直接操作window

```

