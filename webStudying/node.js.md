# Node.js

## 1.初始node.js和内置模块



![image-20220807141736042](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220807141736042.png)

![image-20220807141825917](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220807141825917.png)

![image-20220807141704391](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220807141704391.png)

![image-20220807142329131](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220807142329131.png)

![image-20220807142614293](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220807142614293.png)

![image-20220807142839950](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220807142839950.png)

### 1.初识Node.js

![image-20220807143029760](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220807143029760.png)

![image-20220807143605851](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220807143605851.png)

![image-20220807144111469](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220807144111469.png)

![image-20220807144318162](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220807144318162.png)

![image-20220807144825010](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220807144825010.png)

![image-20220807145022652](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220807145022652.png)

![image-20220807145352754](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220807145352754.png)

![image-20220807151346664](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220807151346664.png)

>
>
>注意：简便方式（推荐）：在所要执行的js文件所在的目录空白处按住shift键并右击鼠标，点击打开powershell窗口选项



#### 1.终端快捷键（important）

![image-20220807200218441](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220807200218441.png)



### 2.fs文件系统模块

#### 1.fs模块概述

![image-20220807200456985](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220807200456985.png)

#### 2.读取指定文件中的内容

![image-20220807200723626](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220807200723626.png)

![image-20220807200749192](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220807200749192.png)

![image-20220807210559226](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220807210559226.png)

1.读取文件内容

```javascript
// 1. 导入 fs 模块，来操作文件
const fs = require('fs')

// 2. 调用 fs.readFile() 方法读取文件
//    参数1：读取文件的存放路径
//    参数2：读取文件时候采用的编码格式，一般默认指定 utf8
//    参数3：回调函数，拿到读取失败和成功的结果  err  dataStr
fs.readFile('./files/11.txt', 'utf8', function(err, dataStr) {
  // 2.1 打印失败的结果
  // 如果读取成功，则 err 的值为 null
  // 如果读取失败，则 err 的值为 错误对象，dataStr 的值为 undefined
  console.log(err)
  console.log('-------')
  // 2.2 打印成功的结果
  console.log(dataStr)
})

```

2.判断文件是否读取成功

```javascript
const fs = require('fs')

fs.readFile('./files/11.txt', 'utf8', function(err, dataStr) {
  if (err) {
    return console.log('读取文件失败！' + err.message)
  }
  console.log('读取文件成功！' + dataStr)
})

```

>
>
>注意：if条件语句的判断条件的意思是当err不为null时可以转换成true，此时表示文件读取失败



#### 3.向指定的文件中写入内容

![image-20220807205413112](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220807205413112.png)

![image-20220807205424111](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220807205424111.png)

![image-20220807210528373](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220807210528373.png)

1.向文件写入内容并判断文件是否写入成功

```javascript
// 1. 导入 fs 文件系统模块
const fs = require('fs')

// 2. 调用 fs.writeFile() 方法，写入文件的内容
//    参数1：表示文件的存放路径
//    参数2：表示要写入的内容
//    参数3：回调函数
fs.writeFile('./files/3.txt', 'ok123', function(err) {//监听写入结果
  // 2.1 如果文件写入成功，则 err 的值等于 null
  // 2.2 如果文件写入失败，则 err 的值等于一个 错误对象
  // console.log(err)

  if (err) {
    return console.log('文件写入失败！' + err.message)
  }
  console.log('文件写入成功！')
})

```

#### 4.案例：整理成绩

![image-20220807210753900](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220807210753900.png)

```javascript
// 1. 导入 fs 模块
const fs = require('fs')

// 2. 调用 fs.readFile() 读取文件的内容
fs.readFile('../素材/成绩.txt', 'utf8', function(err, dataStr) {
  // 3. 判断是否读取成功
  if (err) {
    return console.log('读取文件失败！' + err.message)
  }
  // console.log('读取文件成功！' + dataStr)

  // 4.1 先把成绩的数据，按照空格进行分割
  const arrOld = dataStr.split(' ')
  // 4.2 循环分割后的数组，对每一项数据，进行字符串的替换操作
  const arrNew = []
  arrOld.forEach(item => {
    arrNew.push(item.replace('=', '：'))//把每一项中的=替换成：
  })
  // 4.3 把新数组中的每一项，进行合并，得到一个新的字符串
  const newStr = arrNew.join('\r\n')//windows中"/r/n"表示换行

  // 5. 调用 fs.writeFile() 方法，把处理完毕的成绩，写入到新文件中
  fs.writeFile('./files/成绩-ok.txt', newStr, function(err) {
    if (err) {
      return console.log('写入文件失败！' + err.message)
    }
    console.log('成绩写入成功！')
  })
})

```



#### 5.路径动态拼接的问题

![image-20220807213335906](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220807213335906.png)

```javascript
const fs = require('fs')

// 出现路径拼接错误的问题，是因为提供了 ./ 或 ../ 开头的相对路径
// 如果要解决这个问题，可以直接提供一个完整的文件存放路径就行
/* fs.readFile('./files/1.txt', 'utf8', function(err, dataStr) {
  if (err) {
    return console.log('读取文件失败！' + err.message)
  }
  console.log('读取文件成功！' + dataStr)
}) */

// 移植性非常差、不利于维护,因为如果目标文件路径更换，路径就会错误
/* fs.readFile('C:\\Users\\escook\\Desktop\\Node.js基础\\day1\\code\\files\\1.txt', 'utf8', function(err, dataStr) {
  if (err) {//一个/表示转义，所以必须要两个/
    return console.log('读取文件失败！' + err.message)
  }
  console.log('读取文件成功！' + dataStr)
}) */

// __dirname 表示当前文件所处的目录
// console.log(__dirname)

fs.readFile(__dirname + '/files/1.txt', 'utf8', function(err, dataStr) {
  if (err) {
    return console.log('读取文件失败！' + err.message)
  }
  console.log('读取文件成功！' + dataStr)
})

```





## 3.path路径模块

![image-20220807214048954](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220807214048954.png)

### 1.路径拼接

#### 1.path.join()方法的使用

![image-20220807214515660](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220807214515660.png)

![image-20220807214530546](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220807214530546.png)

>
>
>注意：只有"../"会抵消前面最近的一条路径

```javascript
const path = require('path')
const fs = require('fs')

// 注意：  ../ 会抵消前面的路径
// const pathStr = path.join('/a', '/b/c', '../../', './d', 'e')
// console.log(pathStr)  // \a\b\d\e

// fs.readFile(__dirname + '/files/1.txt')

fs.readFile(path.join(__dirname, './files/1.txt'), 'utf8', function(err, dataStr) {
  if (err) {
    return console.log(err.message)
  }
  console.log(dataStr)
})

```

