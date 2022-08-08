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

![image-20220808092121299](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220808092121299.png)

>注意：path.join（）方法会自动屏蔽错误符号，例如/前的.而+不会
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

#### 2获取路径中的文件名

![image-20220808092328075](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220808092328075.png)

![image-20220808092336629](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220808092336629.png)

```javascript
const path = require('path')

// 定义文件的存放路径
const fpath = '/a/b/c/index.html'

// const fullName = path.basename(fpath)
// console.log(fullName)

const nameWithoutExt = path.basename(fpath, '.html')
console.log(nameWithoutExt)

```

#### 3.获取路径中的文件扩展名

![image-20220808092630595](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220808092630595.png)

![image-20220808092710384](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220808092710384.png)

```javascript
const path = require('path')

// 这是文件的存放路径
const fpath = '/a/b/c/index.html'

const fext = path.extname(fpath)
console.log(fext)

```



#### 4.案例：时钟案例

![image-20220808093004218](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220808093004218.png)

![image-20220808093512777](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220808093512777.png)

![image-20220808093742895](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220808093742895.png)

![image-20220808094028106](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220808094028106.png)

![image-20220808094631266](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220808094631266.png)

![image-20220808095239201](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220808095239201.png)

![image-20220808095556826](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220808095556826.png)

```javascript
// 1.1 导入 fs 模块
const fs = require('fs')
// 1.2 导入 path 模块
const path = require('path')

// 1.3 定义正则表达式，分别匹配 <style></style> 和 <script></script> 标签
const regStyle = /<style>[\s\S]*<\/style>/
const regScript = /<script>[\s\S]*<\/script>/

// 2.1 调用 fs.readFile() 方法读取文件
fs.readFile(path.join(__dirname, '../素材/index.html'), 'utf8', function(err, dataStr) {
  // 2.2 读取 HTML 文件失败
  if (err) return console.log('读取HTML文件失败！' + err.message)
  // 2.3 读取文件成功后，调用对应的三个方法，分别拆解出 css, js, html 文件
  resolveCSS(dataStr)
  resolveJS(dataStr)
  resolveHTML(dataStr)
})

// 3.1 定义处理 css 样式的方法
function resolveCSS(htmlStr) {
  // 3.2 使用正则提取需要的内容
  const r1 = regStyle.exec(htmlStr)
  // 3.3 将提取出来的样式字符串，进行字符串的 replace 替换操作
  const newCSS = r1[0].replace('<style>', '').replace('</style>', '')
  // 3.4 调用 fs.writeFile() 方法，将提取的样式，写入到 clock 目录中 index.css 的文件里面
  fs.writeFile(path.join(__dirname, './clock/index.css'), newCSS, function(err) {
    if (err) return console.log('写入 CSS 样式失败！' + err.message)
    console.log('写入样式文件成功！')
  })
}

// 4.1 定义处理 js 脚本的方法
function resolveJS(htmlStr) {
  // 4.2 通过正则，提取对应的 <script></script> 标签内容
  const r2 = regScript.exec(htmlStr)
  // 4.3 将提取出来的内容，做进一步的处理
  const newJS = r2[0].replace('<script>', '').replace('</script>', '')
  // 4.4 将处理的结果，写入到 clock 目录中的 index.js 文件里面
  fs.writeFile(path.join(__dirname, './clock/index.js'), newJS, function(err) {
    if (err) return console.log('写入 JavaScript 脚本失败！' + err.message)
    console.log('写入 JS 脚本成功！')
  })
}

// 5.1 定义处理 HTML 结构的方法
function resolveHTML(htmlStr) {
  // 5.2 将字符串调用 replace 方法，把内嵌的 style 和 script 标签，替换为外联的 link 和 script 标签
  const newHTML = htmlStr.replace(regStyle, '<link rel="stylesheet" href="./index.css" />').replace(regScript, '<script src="./index.js"></script>')
  // 5.3 写入 index.html 这个文件
  fs.writeFile(path.join(__dirname, './clock/index.html'), newHTML, function(err) {
    if (err) return console.log('写入 HTML 文件失败！' + err.message)
    console.log('写入 HTML 页面成功！')
  })
}

```

案例的两个注意点：

![image-20220808100401647](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220808100401647.png)

>
>
>注意：fs.writeFile()方法只能用来创建文件，不能用来创建文件夹（路径）



## 4.http模块

### 1.初识http模块

![image-20220808100645639](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220808100645639.png)

![image-20220808101113162](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220808101113162.png)

### 2.服务器相关的概念

![image-20220808101926322](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220808101926322.png)

![image-20220808102313312](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220808102313312.png)

![image-20220808102717168](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220808102717168.png)

### 3.创建最基本的web服务器

![image-20220808102849317](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220808102849317.png)

![image-20220808102856190](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220808102856190.png)

![image-20220808102923435](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220808102923435.png)

![image-20220808103111338](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220808103111338.png)

![image-20220808103209565](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220808103209565.png)

```javascript
// 1. 导入 http 模块
const http = require('http')
// 2. 创建 web 服务器实例
const server = http.createServer()
// 3. 为服务器实例绑定 request 事件，监听客户端的请求
server.on('request', function (req, res) {
  console.log('Someone visit our web server.')
})
// 4. 启动服务器
server.listen(8080, function () {  
  console.log('server running at http://127.0.0.1:8080')
})

```



>
>
>注意：服务器启动方法：1.通过powerful窗口运行node命令
>
>2.在vscode新建的中运行node命令 
>
>服务器停止方法：2后ctrl+c即可

了解req请求对象

```javascript
const http = require('http')
const server = http.createServer()
// req 是请求对象，包含了与客户端相关的数据和属性
server.on('request', (req, res) => {
  // req.url 是客户端请求的 URL 地址
  const url = req.url
  // req.method 是客户端请求的 method 类型
  const method = req.method
  const str = `Your request url is ${url}, and request method is ${method}`
  console.log(str)
  // 调用 res.end() 方法，向客户端响应一些内容
  res.end(str)
})
server.listen(80, () => {
  console.log('server running at http://127.0.0.1')
})

```

