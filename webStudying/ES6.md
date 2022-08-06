# ES6

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
  function Phone(brand,price){
      this.brand=brand;
      this.price=price;
  }
  Phone.prototype.call=function (){
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

