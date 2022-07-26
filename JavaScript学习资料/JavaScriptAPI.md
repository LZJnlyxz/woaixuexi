# JavaScriptAPI

## DOM

![image-20220723162511701](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220723162511701.png)

### 一. 自定义属性的操作

#### 1. **获取内置属性值**

- ` element.attribute`

#### 2. **获取自定义属性值**

- ` element.getAttritute('attribute')`

```javascript
<div index='1'>...</div>
...
console.log<div.getAttribute('index')>;
...
```

-----------

#### 3. **设置内置属性值**

- ` element.attribute=''`

#### 4. **设置自定义属性值**

- ` element.setAttribute('Attribute','value')`

----

#### 5. **移除属性**

- ` element.removeAttribute('Attribute')` 

#### 6. <u>案例：Tab栏切换</u>

![image-20220722112237578](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220722112237578.png)

#### 7. **H5自定义属性**

- H5新增命名自定义属性规范：` data-Attribute`
- H5新增获取自定义属性的两种方法(它只能获取data-开头的自定义属性)，其中dataset中存放了所有以data开头的自定义属性
- 如果自定义属性中又多个以-链接的单词，我们获取的时候采取驼峰命名法，

​                 ` element.dataet.Attribute`

```javascript
	  `element.dataet['Attribute']`
```

![image-20220722112153941](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220722112153941.png)



### 二. 节点操作

#### 1.节点简介

- 节点：按照类型分为元素节点(HTML元素),属性节点，文本节点

#### 2.节点概述

![image-20220722121631158](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220722121631158.png)   

#### 3.节点层级

##### 1. 子节点

- ` parentNode.firstChild`返回第一个节点(包括元素节点，文本节点等一切节点)
- ` parentNode.firstElementChild`返回第一个子元素节点内容，找不到则返回null,有兼容问题
- ` parentNode.lastElementChild`返回最后一个子元素节点内容，找不到则返回null，有兼容问题
- 实际开发中，既没有兼容问题，又可以返回第一个子元素节点

 

![image-20220722123503305](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220722123503305.png)



##### 2. 兄弟节点

<img src="C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220722124319708.png" alt="image-20220722124319708" style="zoom:150%;" />

![image-20220722124534163](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220722124534163.png)

#### 4. 创建，添加，删除节点(增删改)

![image-20220722124753392](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220722124753392.png)

![image-20220722125134277](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220722125134277.png)

![image-20220722125657114](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220722125657114.png)

![image-20220722131515000](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220722131515000.png)

#### 5.案例：删除留言案例

![image-20220722132738724](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220722132738724.png)

```javascript
 <style>
     li {
        background-color: pink;
     }
     a {
        float: right;
     }
    </style>
</head>
<body>
    <textarea name="" id="" cols="30" rows="10"></textarea>
    <button>commit</button>
    <ul></ul>
    <script>
        var btn=document.querySelector('button');
        var text=document.querySelector('textarea');
        var ul=document.querySelector('ul');
        btn.onclick = function() {
            if(text.value=='') {
                alert('您没有输入内容');
                return false;
            }else {
                var li=document.createElement('li');
            li.innerHTML=text.value+"<a href='javascript:;'>delete</a>";//只有字符串常量需要用单引号括起来
            //ul.appendChild(li);
            ul.insertBefore(li,ul.children[0]);
            var as=document.querySelector('a');
            as.onclick = function() {
                ul.removeChild(this.parentNode);//两者区别与联系
            }
        //    for(var i=0;i<as.length-1;i++) {
        //     as[i].onclick = function() {
        //         ul.removeChild(this.parentNode);
        //     }
        //    }
        }
        }
    </script>
</body>
```





#### 6.案例：动态生成表格并实现增删改 

```javascript
  <style>
    * {
        margin: 0;
        padding: 0;
    }
    table {
        margin:100px auto ;
    }
    td {
        width: 40px;
        background-color: pink;
        border: black solid 1px;
    }
    </style>
</head>
<body>
    <table>
        <thead>
           <tr>
            <td>姓名</td>
            <td>科目</td>
            <td>成绩</td>
            <td>操作</td>
           </tr>
        </thead>
        <tbody>

        </tbody>
    </table>
    <script>
      var datas=[
        {
            name:'liu',
            subject:'javascript',
            score:100
        },
        {
            name:'li',
            subject:'javascript',
            score:98
        },
        {
            name:'lu',
            subject:'javascript',
            score:96
        },
        {
            name:'qiao',
            subject:'javascript',
            score:94
        }
      ];
      var tb=document.querySelector('tbody');
      for(var i=0;i<datas.length;i++) {
        var tr=document.createElement('tr');
        for(var k in datas[i]) {
            td=document.createElement('td');
            td.innerHTML=datas[i][k];
            tr.appendChild(td);
        }
        tb.appendChild(tr);
        var tda=document.createElement('td');
        tda.innerHTML='<a href="javasricpt:;">delete</a>';
        tr.appendChild(tda);
        var a=document.querySelector('a');
        a.onclick = function() {
            tb.removeChild(this.parentNode.parentNode);
        }//为什么只有循环才行
        //var as=document.querySelectorAll('a');
        // for(var i=0;i<as.length;i++) {
        //     as[i].onclick = function() {
        //     tb.removeChild(this.parentNode.parentNode);
        // }
        // }
      }
      
    </script>
</body>
```

#### 7. 改总结

![image-20220722195010024](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220722195010024.png)

>
>
>注意：改的值都需要用单引号引起来

#### 8. 三种动态创建元素的区别

![image-20220722192726487](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220722192726487.png)

- 效率最高的方式：innerHTML创建多个元素采用数组形式拼接,如下例中的arr数组

![image-20220722194519200](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220722194519200.png)



### 三. 事件高级

![image-20220722201641915](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220722201641915.png)

#### 1.注册事件

![image-20220722201842817](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220722201842817.png)

![image-20220722201854123](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220722201854123.png)

>
>
>注意：type参数处输入事件类型型字符串且不加on，故需加上单引号，如'click'

#### 2.删除事件

![image-20220722203400394](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220722203400394.png)

应用：例如我们要求在点击一个盒子后触发弹框警告而以后的点击无法触发弹框

![image-20220722203418428](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220722203418428.png)

#### 3.DOM事件流

![image-20220722205447966](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220722205447966.png)

![image-20220722205640550](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220722205640550.png)

![image-20220722211534233](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220722211534233.png)

#### 4.事件对象

![image-20220722212620656](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220722212620656.png)

![image-20220722212629299](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220722212629299.png)

![image-20220722212736873](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220722212736873.png)

![image-20220722212647197](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220722212647197.png)

#### 5.常见事件对象属性和方法

![image-20220723094303307](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220723094303307.png)

##### 1. e.target和this的区别

![image-20220723094056340](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220723094056340.png)

兼容性问题解决方案

![image-20220723094138826](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220723094138826.png)

![image-20220723094231184](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220723094231184.png)

##### 2. 阻止默认行为(事件)

![image-20220723095225014](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220723095225014.png)



##### 3. 阻止事件冒泡

![image-20220723100453469](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220723100453469.png)

![image-20220723100504378](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220723100504378.png)



##### 4. 事件委托

![image-20220723101059612](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220723101059612.png)

![image-20220723102409453](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220723102409453.png)

>
>
>注意事项：深入理解DOM事件流，明白事件冒泡的原理：事件按一定顺序传递

#### 5.常见的鼠标事件

##### 1.常见鼠标事件

![image-20220723103016414](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220723103016414.png)

解决方案：F12

![image-20220723103100945](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220723103100945.png)



##### 2.鼠标事件对象

![image-20220723103304023](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220723103304023.png)

![image-20220723110205621](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220723110205621.png)

##### 3.案例：跟随鼠标的天使

![image-20220723111120020](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220723111120020.png)

![image-20220723111146373](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220723111146373.png)

>
>
>注意：改变坐标后必须加上‘px’



#### 6.常见的键盘事件

##### 1.常用键盘事件

![image-20220723111857027](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220723111857027.png)

![image-20220723111910302](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220723111910302.png)



##### 2.键盘事件对象

1.keyCode属性判断用户按下哪个键

![image-20220723114207132](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220723114207132.png)

![image-20220723114312065](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220723114312065.png)

案例：模拟京东按键输入内容

![image-20220723115909058](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220723115909058.png)

```javascript
<body>
    <input type="text">
    <script>
     var search=document.querySelector('input');
     document.addEventListener('keyup',function(e) {//注意是在页面内按下c键就会自动聚焦而不是在search对象内
        if(e.keyCode===67) {
            search.focus();
        }
     })
      
    </script>
</body>
```

##### 3.案例：模拟京东快递单号查询

![image-20220723142809202](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220723142809202.png)

```javascript
<style>
   .con {
    font-size: 20px;
    display: none;
    width: 175px;
    height: 30px;
    background-color: #fff;
    border: 1px solid black;
   }
   .all {
    margin:200px 200px;
   }
    </style>
</head>
<body>
    <div class="all">
        <div class="con"></div>
        <input type="text">
    </div>
    <script>
        var input=document.querySelector('input');
        var con=document.querySelector('.con');
        input.addEventListener('keyup',function() {
            if(this.value=='') {
                con.style.display='none';
            }else {
                con.innerHTML=this.value;
                con.style.display='block';
            }
        })
        input.addEventListener('blur',function() {
            con.style.display='none';
        })
        input.addEventListener('focus',function() {
           if(this.value=='') {
            con.style.display='none';
           }else {
            con.style.display='block';
           }
        })
    </script>
</body>

```







## BOM

![image-20220723162429889](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220723162429889.png)

### 1.BOM概述

![image-20220723163058409](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220723163058409.png)

![image-20220723163117487](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220723163117487.png)

>
>
>BOM比DOM大

![image-20220723163615945](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220723163615945.png)

![image-20220723163701175](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220723163701175.png)



### 2.window对象的常见事件

![image-20220723222133674](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220723222133674.png)



![image-20220723222300861](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220723222300861.png)

![image-20220723222422276](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220723222422276.png)



### 3.定时器

![image-20220724094236004](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220724094236004.png)

#### 1.setTimeout（）定时器



![image-20220724094921580](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220724094921580.png)

![image-20220724094907494](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220724094907494.png)

![image-20220724102332372](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220724102332372.png)

![image-20220724103314128](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220724103314128.png)

![image-20220724103326200](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220724103326200.png)



#### 2.setInterval（）定时器



![image-20220724103450689](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220724103450689.png)



#### 3.案例：倒计时效果

![image-20220724104411170](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220724104411170.png)

+new Date(time)返回的是time时间距离初始时间的总毫秒数，不写time时默认时间是当前调用函数的时间

```javascript
 <style>
    span {
        background-color: black;
        color: white;
    }
    div {
        width: 400px;
        margin: 100px auto;
    }
   </style>
   
</head>
<body>
   <div>
    <span class="hour">hour</span>
    <span class="minute">minute</span>
    <span class="second">second</span>
</div>
    <script>
       var h=document.querySelector('.hour');
       var m=document.querySelector('.minute');
       var s=document.querySelector('.second');
       var inputTime=+new Date('2022-7-24 13:00:00');//全局变量
       conutdown();
       setInterval(conutdown,1000);//等一秒后才会调用countdown，所以前面需单独调用一次countdown
       function conutdown() {//因为存在变量提升和函数提升原则，故函数定义可以放在函数调用的后面
        var nowTime=+new Date();
        var remainder=parseInt((inputTime-nowTime)/1000);
        var hour=parseInt(remainder/60/60);
        hour=hour<10?'0'+hour:hour;
        h.innerHTML=hour+'时:';
        var minute=parseInt(remainder%3600/60);
        minute=minute<10?'0'+minute:minute;
        m.innerHTML=minute+'分：';
        var second=parseInt(remainder%60);
        second=second<10?'0'+second:second;
        s.innerHTML=second+'秒';
       }
       
    </script>
</body>
```







![image-20220724104957518](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220724104957518.png)

![image-20220724104927121](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220724104927121.png)

#### 4.案例：发送短信

![image-20220724110340411](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220724110340411.png)

```javascript
<body>
    <input type="text">
    <button class="btn">发送</button>
    <script>
     var btn=document.querySelector('.btn');
     var time=3;//申请全局变量节省内存空间
     btn.addEventListener('click',function() {
        this.disabled=true;
        this.innerHTML='还需等待'+time+'秒';
        var timer=setInterval(function() {
            if(time==0) {
                clearInterval(timer);
                btn.disabled=false;
                btn.innerHTML='发送';
                time=3;
            }else {
                time--;
                btn.innerHTML='还需等待'+time+'秒';
            }
        },1000)
     })
       
    </script>
</body>
```



#### 5.this指向的问题

![image-20220724131808665](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220724131808665.png)



- 全局作用域或者普通函数中this指向全局对象window（注意定时器中的this指向window，因为window.setTimeout()中window省略了）
- 方法中调用谁调用this就向谁
- 构造函数中this指向构造函数的实例对象

![image-20220724151054216](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220724151054216.png)

![image-20220724151120610](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220724151120610.png)

![image-20220724151143005](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220724151143005.png)



### 4.JS执行队列

![image-20220724151904243](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220724151904243.png)

![image-20220724152651037](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220724152651037.png)

![image-20220724152801058](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220724152801058.png)



![image-20220724153114323](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220724153114323.png)

![image-20220724153059602](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220724153059602.png)

![image-20220724153154520](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220724153154520.png)

![image-20220724153653964](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220724153653964.png)

![image-20220724153815404](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220724153815404.png)



### 5.location对象

#### 1.location对象常见属性

![image-20220724154105550](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220724154105550.png)

![image-20220724161715723](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220724161715723.png)

案例：5秒钟后跳转页面

![image-20220724163609302](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220724163609302.png)



#### 2.获取URL参数

案例：获取URL参数

![image-20220724164010166](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220724164010166.png)

![image-20220724164459369](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220724164459369.png)



#### 3.location常见的方法

![image-20220724164629122](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220724164629122.png)

### 6.navigator对象

![image-20220724165306849](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220724165306849.png)

### 7.history对象

![image-20220724170207869](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220724170207869.png)

## PC端网页特效

![image-20220724170828236](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220724170828236.png)

![image-20220724171027420](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220724171027420.png)

### 1.元素偏移量offset系列

![image-20220724201727012](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220724201727012.png)

![image-20220724202135375](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220724202135375.png)

![image-20220724202440842](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220724202440842.png)





![image-20220724202551695](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220724202551695.png)

案例：获取鼠标在盒子内的坐标

![image-20220724204333002](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220724204333002.png)

案例：拖动模态框

![image-20220724204956352](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220724204956352.png)

![image-20220724205846336](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220724205846336.png)

案例：仿京东放大镜效果

![image-20220725092515414](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220725092515414.png)

![image-20220725092807436](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220725092807436.png)

![image-20220725093150416](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220725093150416.png)

### 2.元素可视区client系列

![image-20220724214136738](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220724214136738.png)

### 3.立即执行函数

![image-20220724215829267](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220724215829267.png)

![image-20220724215539689](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220724215539689.png)



![image-20220724215848084](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220724215848084.png)



>
>
>注意:凡是跟px相关的属性在赋值或更改时需在数值后+‘px’ ，常数项比如300px，则直接写'300px'



案例：淘宝flexibleJS源码分析

- 核心原理
- pageshow事件

![image-20220725094505887](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220725094505887.png)

![image-20220725094612377](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220725094612377.png)

![image-20220725094629809](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220725094629809.png)



### 4.元素滚动scroll系列

![image-20220725094719012](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220725094719012.png)

![image-20220725095459030](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220725095459030.png)

>
>
>` overflow:auto;`为超出父级盒子设置滚动条

scorlltop距离

![image-20220725095813582](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220725095813582.png)

![image-20220725095948544](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220725095948544.png)

案例：仿淘宝固定侧边栏

![image-20220725100557676](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220725100557676.png)

![image-20220725105338293](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220725105338293.png)

### 5.三大系列总结

![image-20220725110230712](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220725110230712.png)

![image-20220725110305307](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220725110305307.png)

### 6.mouseover和mouseenter区别

![image-20220725110802141](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220725110802141.png)

>
>
>注意：事件冒泡再理解：只在父盒子注册事件，但在子盒子处通过冒泡仍可以触发父盒子的注册事件，例如点击子盒子可以触发父盒子的点击事件

### 7.动画函数封装

#### 1.动画实现原理

![image-20220725185901099](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220725185901099.png)

>
>
>注意：一定要给此元素添加定位，因为要使用element.styleleft

#### 2.简单动画函数封装

![image-20220725191238764](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220725191238764.png)



优化

- 给不同元素记录不同定时器，以实现内存节省和区别同名不同义定时器

- 清除前一个定时器，避免多次触发事件设置多个定时器

![image-20220725192108799](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220725192108799.png)



#### 3.缓动动画

##### 1.原理：

![image-20220725192709010](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220725192709010.png)

![image-20220725193257952](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220725193257952.png)



##### 2.缓动动画多个目标值之间的移动

核心原理：移动距离为正向上取整，移动距离为负向下取整

![image-20220725194033522](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220725194033522.png)



##### 3.给动画函数添加回调函数

原理：等待定时器结束后再调用函数

![image-20220725194757164](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220725194757164.png)

![image-20220725194813595](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220725194813595.png)



##### 4.动画函数的使用(封装及回调函数的使用)

![image-20220725195725379](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220725195725379.png)



### 8.常见网页特效案例

#### 1.网页轮播图

![image-20220725204824522](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220725204824522.png)

###### 1.鼠标经过显示左右按钮

![image-20220725204849210](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220725204849210.png)

###### 2.动态生成小圆圈

![image-20220725205012211](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220725205012211.png)

###### 3.小圆圈的排他思想

![image-20220725205419273](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220725205419273.png)

###### 4.点击小圆圈滚动图片

![image-20220725210601449](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220725210601449.png)

![image-20220725210635891](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220725210635891.png)

![image-20220725210652680](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220725210652680.png)

>
>
>vscode使用技巧：ctrl+f快速查找元素

###### 5.右侧无缝滚动

![image-20220725211652797](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220725211652797.png)

###### 6.克隆第一张图片

![image-20220725212106346](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220725212106346.png)

![image-20220725212128512](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220725212128512.png)

###### 7.点击右侧按钮小圆圈跟着一起变化

![image-20220725212513377](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220725212513377.png)

![image-20220725212533689](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220725212533689.png)

###### 8.两个bug的解决

![image-20220725213059306](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220725213059306.png)

###### 9.左侧按钮制作及代码优化

###### 10.自动播放功能

![image-20220725214147211](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220725214147211.png)

![image-20220725214005792](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220725214005792.png)



![image-20220725214056719](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220725214056719.png)

###### 11.节流阀以及逻辑中断应用

![image-20220725214404703](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220725214404703.png)

![image-20220725214619520](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220725214619520.png)

![image-20220725214633647](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220725214633647.png)

逻辑中断应用

![image-20220725214738409](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220725214738409.png)





##### 2.案例：返回顶部

![image-20220725223342860](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220725223342860.png)

>
>
>最顶端是` window.scroll（0,0）；`

![image-20220725223842011](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220725223842011.png)

![image-20220725223920545](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220725223920545.png)

![image-20220725223926898](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220725223926898.png)





##### 3.案例：筋斗云

![image-20220725224124738](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220725224124738.png)

![image-20220725224726201](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220725224726201.png)

![image-20220725225044621](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220725225044621.png)



## 移动端网页特效

![image-20220725225146585](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220725225146585.png)

![image-20220725225154327](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220725225154327.png)

### 1.触碰事件

#### 1.触屏事件概述

![image-20220725230104999](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220725230104999.png)

#### 2.触摸事件对象(TouchEvent)

![image-20220726083141776](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220726083141776.png)

![image-20220726084026724](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220726084026724.png)

>
>
>` e.targetTouches[0]`会得到正在触摸dom元素的第一个手指的相关信息，如手指的坐标等

#### 3.移动端拖动元素

![image-20220726084603161](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220726084603161.png)

![image-20220726084948015](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220726084948015.png)

##### ![image-20220726085001548](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220726085001548.png)



#### 4.移动端常见特效

##### 1.案例：移动端轮播图

>
>
>注意点：1. 清除浮动可以用overflow：hidden 

自动播放功能

![image-20220726092358348](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220726092358348.png)

![image-20220726092341836](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220726092341836.png)

>
>
>注意:CSS3transform的用法以及过渡效果

无缝滚动

![image-20220726093416994](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220726093416994.png)

![image-20220726093353017](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220726093353017.png)



classList类名操作

![image-20220726095336676](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220726095336676.png)

![image-20220726095400305](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220726095400305.png)

![image-20220726095249577](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220726095249577.png)



小圆圈跟随变化效果

![image-20220726095557917](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220726095557917.png)

![image-20220726095826267](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220726095826267.png)

手指滑动轮播图

![image-20220726100652434](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220726100652434.png)

![image-20220726100620310](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220726100620310.png)

手指滑动播放上一张或者下一张

![image-20220726101308956](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220726101308956.png)

![image-20220726101249270](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220726101249270.png)



回弹效果

思路：加过渡效果，加标志变量判断触摸后是否滑动

![image-20220726101917102](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220726101917102.png)

返回顶部效果

![image-20220726102238514](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220726102238514.png)

![image-20220726102254924](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220726102254924.png)



移动端click事件300ms延时问题解决方案

![image-20220726111851806](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220726111851806.png)

![image-20220726111836996](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220726111836996.png)

#### 5.移动端常用开发插件

![image-20220726112141351](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220726112141351.png)

>
>
>注意：必须按照插件使用规范

##### 1.fastclick插件使用

![image-20220726113502404](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220726113502404.png)





##### 2.swiper插件使用

1.官网下载文件

2.在democ文件中寻找需要的网页特效按照网页源码引入文件

3.按照源码改写自己的代码文件（不要更改结构和内容以及类名）

4.根据官网API文档修改参数



##### 3.其他移动端常见插件

![image-20220726115748916](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220726115748916.png)

##### 4.视频插件zy.media.js的使用

![image-20220726123620111](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220726123620111.png)

##### 5.移动端常用开发框架

###### 1.bootstrap轮播图

![image-20220726140250984](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220726140250984.png)

>
>
>注意：先引进css文件再引入jQuery文件最后引入bootstrap.js文件

###### 2.阿里百秀轮播图制作

#### 6.本地存储

![image-20220726141148451](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220726141148451.png)



##### 1.本地存储之sessionStorage

![image-20220726141735103](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220726141735103.png)

![image-20220726142958885](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220726142958885.png)

>
>
>注意：键值对中的键一般需要用单引号引起来
>
>生命周期为单个窗口





##### 2.本地存储之localStorage

![image-20220726144254373](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220726144254373.png)

>
>
>注意：第二弹可以实现同浏览器比如chrome数据共享



##### 3.案例：记住用户名

![image-20220726145006819](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220726145006819.png)







## jQuery

![image-20220726145201365](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220726145201365.png)

![image-20220726145210659](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220726145210659.png)

### 1.jQuery概述

![image-20220726145358835](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220726145358835.png)

![image-20220726145409899](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220726145409899.png)

>
>
>注意：区别：原生js和jquery（JavaScript库）

![image-20220726145637700](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220726145637700.png)

![image-20220726145648126](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220726145648126.png)

![image-20220726145755193](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220726145755193.png)

### 2.jquery的基本使用

#### 1.jquery的入口函数

![image-20220726150717706](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220726150717706.png)

![image-20220726150657811](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220726150657811.png)



#### 2.jquery的顶级对象$

![image-20220726183358425](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220726183358425.png)

#### 3.jquery对象和DOM对象

![image-20220726183902505](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220726183902505.png)

![image-20220726183929442](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220726183929442.png)

![image-20220726183836039](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220726183836039.png)



DOM对象和jquery对象相互转换

![image-20220726184515678](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220726184515678.png)

![image-20220726184534032](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220726184534032.png)





### 4.jquery常用API

![image-20220726184635709](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220726184635709.png)

![image-20220726185818881](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220726185818881.png)

1.jquery选择器

![image-20220726190233754](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220726190233754.png)



![image-20220726190950660](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220726190950660.png)

隐式迭代

![image-20220726192709324](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220726192709324.png)

![image-20220726192740311](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220726192740311.png)





筛选选择器

![image-20220726192809410](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220726192809410.png)

![image-20220726193231759](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220726193231759.png)





筛选方法

![image-20220726193354984](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220726193354984.png)
