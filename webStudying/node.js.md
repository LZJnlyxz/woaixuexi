# Node.js

## 初始node.js和内置模块



![image-20220807141736042](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220807141736042.png)

![image-20220807141825917](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220807141825917.png)

![image-20220807141704391](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220807141704391.png)

![image-20220807142329131](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220807142329131.png)

![image-20220807142614293](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220807142614293.png)

![image-20220807142839950](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220807142839950.png)

### 初识Node.js

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



#### 终端快捷键（important）

![image-20220807200218441](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220807200218441.png)



### fs文件系统模块

#### fs模块概述

![image-20220807200456985](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220807200456985.png)

#### 读取指定文件中的内容

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



#### 向指定的文件中写入内容

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

#### 案例：整理成绩

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



#### 路径动态拼接的问题

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





## path路径模块

![image-20220807214048954](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220807214048954.png)

### 路径拼接

#### 1.path.join()方法的使用

![image-20220807214515660](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220807214515660.png)

![image-20220808092121299](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220808092121299.png)

>注意：path.join（）方法会自动屏蔽错误符号，例如/前的.而+不会,所以前面的./可加可不加
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

#### 获取路径中的文件名

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

#### 获取路径中的文件扩展名

![image-20220808092630595](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220808092630595.png)

![image-20220808092710384](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220808092710384.png)

```javascript
const path = require('path')

// 这是文件的存放路径
const fpath = '/a/b/c/index.html'

const fext = path.extname(fpath)
console.log(fext)

```



#### 案例：时钟案例

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



## http模块

### 初识http模块

![image-20220808100645639](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220808100645639.png)

![image-20220808101113162](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220808101113162.png)

### 服务器相关的概念

![image-20220808101926322](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220808101926322.png)

![image-20220808102313312](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220808102313312.png)

![image-20220808102717168](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220808102717168.png)

### 创建最基本的web服务器

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
>
>浏览器只能默认的GET请求



#### 了解req请求对象和res相应对象

![image-20220808112317190](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220808112317190.png)



![image-20220808112611094](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220808112611094.png)

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



#### 解决中文乱码的问题

![image-20220808113744065](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220808113744065.png)

```javascript
const http = require('http')
const server = http.createServer()

server.on('request', (req, res) => {
  // 定义一个字符串，包含中文的内容
  const str = `您请求的 URL 地址是 ${req.url}，请求的 method 类型为 ${req.method}`
  // 调用 res.setHeader() 方法，设置 Content-Type 响应头，解决中文乱码的问题
  res.setHeader('Content-Type', 'text/html; charset=utf-8')//注意设置玩后需要重启服务器才能正常运行
  // res.end() 将内容响应给客户端
  res.end(str)
})

server.listen(80, () => {
  console.log('server running at http://127.0.0.1')
})

```



#### 根据不同url响应不同的htm内容

![image-20220808160740963](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220808160740963.png)

![image-20220808160842508](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220808160842508.png)

```javascript
const http = require('http')
const server = http.createServer()

server.on('request', (req, res) => {
  // 1. 获取请求的 url 地址
  const url = req.url
  // 2. 设置默认的响应内容为 404 Not found
  let content = '<h1>404 Not found!</h1>'
  // 3. 判断用户请求的是否为 / 或 /index.html 首页
  // 4. 判断用户请求的是否为 /about.html 关于页面
  if (url === '/' || url === '/index.html') {
    content = '<h1>首页</h1>'
  } else if (url === '/about.html') {
    content = '<h1>关于页面</h1>'
  }
  // 5. 设置 Content-Type 响应头，防止中文乱码
  res.setHeader('Content-Type', 'text/html; charset=utf-8')
  // 6. 使用 res.end() 把内容响应给客户端
  res.end(content)
})

server.listen(80, () => {
  console.log('server running at http://127.0.0.1')
})

```



#### 案例：实现clock时钟的web服务器

![image-20220808172257368](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220808172257368.png)

![image-20220808172335127](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220808172335127.png)

![image-20220808180428055](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220808180428055.png)

![image-20220808180443747](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220808180443747.png)

![image-20220808180946308](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220808180946308.png)

![image-20220808204122694](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220808204122694.png)

```javascript
// 1.1 导入 http 模块
const http = require('http')
// 1.2 导入 fs 模块
const fs = require('fs')
// 1.3 导入 path 模块
const path = require('path')

// 2.1 创建 web 服务器
const server = http.createServer()
// 2.2 监听 web 服务器的 request 事件
server.on('request', (req, res) => {
  // 3.1 获取到客户端请求的 URL 地址
  //     /clock/index.html
  //     /clock/index.css
  //     /clock/index.js
  const url = req.url
  // 3.2 把请求的 URL 地址映射为具体文件的存放路径
  // const fpath = path.join(__dirname, url)
  // 5.1 预定义一个空白的文件存放路径
  let fpath = ''
  if (url === '/') {
    fpath = path.join(__dirname, './clock/index.html')
  } else {
    //     /index.html
    //     /index.css
    //     /index.js
    fpath = path.join(__dirname, '/clock', url)
  }

  // 4.1 根据“映射”过来的文件路径读取文件的内容
  fs.readFile(fpath, 'utf8', (err, dataStr) => {
    // 4.2 读取失败，向客户端响应固定的“错误消息”
    if (err) return res.end('404 Not found.')
    // 4.3 读取成功，将读取成功的内容，响应给客户端
    res.end(dataStr)
  })
})
// 2.3 启动服务器
server.listen(80, () => {
  console.log('server running at http://127.0.0.1')
})

```



## 模块化

![image-20220808204552072](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220808204552072.png)

![image-20220808204643108](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220808204643108.png)

### 模块化的基本概念

![image-20220808204725227](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220808204725227.png)

![image-20220808204941018](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220808204941018.png)

![image-20220808205141778](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220808205141778.png)



### Node.js中的模块的分类

#### 模块分类

![image-20220808205501903](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220808205501903.png)



#### 加载模块

![image-20220808205723230](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220808205723230.png)



#### 模块作用域

![image-20220808210318726](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220808210318726.png)

![image-20220808210701287](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220808210701287.png)

>
>
>注意：模块化文件访问另一个模块化文件中的私有成员及变量和函数时，会由于模块作用域的存在导致返回空对象{}



#### 向外共享模块作用域中的成员

##### module对象

![image-20220808211718755](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220808211718755.png)

>
>
>注意：在自定义模块中，module.exports对象默认是空对象



##### .module.exports对象

![image-20220808212228786](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220808212228786.png)

![image-20220808212458376](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220808212458376.png)

![image-20220808212612090](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220808212612090.png)



##### exports对象

![image-20220808212841896](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220808212841896.png)

>
>
>注意：exports===module.exports



##### 使用误区

![image-20220808213432456](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220808213432456.png)

![image-20220808213442635](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220808213442635.png)

![image-20220808213600059](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220808213600059.png)

![image-20220808213809981](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220808213809981.png)

![image-20220808213753915](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220808213753915.png)





### Node.js中的模块化规范

![image-20220808213917564](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220808213917564.png)



### npm和包

#### npm概述

![image-20220808214120684](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220808214120684.png)

![image-20220808214143432](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220808214143432.png)

![image-20220808214457527](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220808214457527.png)

![image-20220808214659311](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220808214659311.png)

![image-20220808214828310](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220808214828310.png)

>
>
>注意：npm -v中间有一个空格



#### npm初体验

![image-20220808215306007](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220808215306007.png)

```javascript
// 1. 定义格式化时间的方法
function dateFormat(dtStr) {
  const dt = new Date(dtStr)

  const y = dt.getFullYear()
  const m = padZero(dt.getMonth() + 1)
  const d = padZero(dt.getDate())

  const hh = padZero(dt.getHours())
  const mm = padZero(dt.getMinutes())
  const ss = padZero(dt.getSeconds())

  return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
}

// 定义补零的函数
function padZero(n) {
  return n > 9 ? n : '0' + n
}

module.exports = {
  dateFormat
}

```



![image-20220808215819425](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220808215819425.png)

![image-20220808220045171](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220808220045171.png)

1.下载包

![image-20220808220358426](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220808220358426.png)

```javascript
// 1. 导入需要的包
// 注意：导入的名称，就是装包时候的名称
const moment = require('moment')

const dt = moment().format('YYYY-MM-DD HH:mm:ss')
console.log(dt)

```

![image-20220808221739894](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220808221739894.png)

![image-20220808221805317](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220808221805317.png)

![image-20220808223715377](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220808223715377.png)

![image-20220808223931654](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220808223931654.png)



#### 包管理配置文件

![image-20220808224240142](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220808224240142.png)

![image-20220808224353151](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220808224353151.png)

![image-20220808224456946](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220808224456946.png)

![image-20220808224616304](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220808224616304.png)

>
>
>注意：必须在安装npm包之前创建该文件才有用

![image-20220808225103998](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220808225103998.png)

![image-20220808225352407](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220808225352407.png)

![image-20220808225539617](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220808225539617.png)

![image-20220808225704837](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220808225704837.png)



#### 解决下包慢的问题

![image-20220808225917969](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220808225917969.png)

![image-20220808230032390](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220808230032390.png)

![image-20220808230116177](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220808230116177.png)

![image-20220808230415541](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220808230415541.png) 



#### 包的分类

![image-20220809124756716](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220809124756716.png)

![image-20220809124812290](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220809124812290.png)

![image-20220809124825936](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220809124825936.png)

![image-20220809124935829](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220809124935829.png)

![image-20220809125243932](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220809125243932.png)

#### 规范的包的结构

![image-20220809131821217](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220809131821217.png)



#### 开发属于自己的包

![image-20220809131921945](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220809131921945.png)

![image-20220809132015044](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220809132015044.png)

![image-20220809132159336](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220809132159336.png)

![image-20220809132212053](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220809132212053.png)

![image-20220809132429797](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220809132429797.png)

![image-20220809132742733](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220809132742733.png)

![image-20220809132916090](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220809132916090.png)

```javascript
// 定义格式化时间的函数
function dateFormat(dateStr) {
  const dt = new Date(dateStr)

  const y = dt.getFullYear()
  const m = padZero(dt.getMonth() + 1)
  const d = padZero(dt.getDate())

  const hh = padZero(dt.getHours())
  const mm = padZero(dt.getMinutes())
  const ss = padZero(dt.getSeconds())

  return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
}

// 定义一个补零的函数
function padZero(n) {
  return n > 9 ? n : '0' + n
}

module.exports = {
  dateFormat
}

```



>
>
>注意：如果在另一文件中导入自定义模块式，require方法的参数中的url不一定要写到具体的执行模块文件，因为require会自动去找package.json文件下的main属性去找该模块的入口文件

![image-20220809133922805](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220809133922805.png)

![image-20220809134436196](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220809134436196.png)

```javascript
// 定义转义 HTML 字符的函数
function htmlEscape(htmlstr) {
  return htmlstr.replace(/<|>|"|&/g, match => {
    switch (match) {
      case '<':
        return '&lt;'
      case '>':
        return '&gt;'
      case '"':
        return '&quot;'
      case '&':
        return '&amp;'
    }
  })
}

// 定义还原 HTML 字符串的函数
function htmlUnEscape(str) {
  return str.replace(/&lt;|&gt;|&quot;|&amp;/g, match => {
    switch (match) {
      case '&lt;':
        return '<'
      case '&gt;':
        return '>'
      case '&quot;':
        return '"'
      case '&amp;':
        return '&'
    }
  })
}

module.exports = {
  htmlEscape,
  htmlUnEscape
}

```

测试文件

```javascript
const itheima = require('./itheima-tools')

// 格式化时间的功能
const dtStr = itheima.dateFormat(new Date())
console.log(dtStr)
console.log('-----------')

const htmlStr = '<h1 title="abc">这是h1标签<span>123&nbsp;</span></h1>'
const str = itheima.htmlEscape(htmlStr)
console.log(str)
console.log('-----------')

const str2 = itheima.htmlUnEscape(str)
console.log(str2)

```



![image-20220809134741052](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220809134741052.png)

 ![image-20220809135033930](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220809135033930.png)

index.js文件

```javascript
// 这是包的入口文件

const date = require('./src/dateFormat')
const escape = require('./src/htmlEscape')

// 向外暴露需要的成员
module.exports = {
  ...date,//...扩展运算符可以使展开data的全部属性包括dataFormat方法
  ...escape//同上
}

```





![image-20220809135333725](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220809135333725.png)

README.md文件

````javascript
## 安装
```
npm install itheima-tools
```

## 导入
```js
const itheima = require('itheima-tools')
```

## 格式化时间
```js
// 调用 dateFormat 对时间进行格式化
const dtStr = itheima.dateFormat(new Date())
// 结果  2020-04-03 17:20:58
console.log(dtStr)
```

## 转义 HTML 中的特殊字符
```js
// 带转换的 HTML 字符串
const htmlStr = '<h1 title="abc">这是h1标签<span>123&nbsp;</span></h1>'
// 调用 htmlEscape 方法进行转换
const str = itheima.htmlEscape(htmlStr)
// 转换的结果 &lt;h1 title=&quot;abc&quot;&gt;这是h1标签&lt;span&gt;123&amp;nbsp;&lt;/span&gt;&lt;/h1&gt;
console.log(str)
```

## 还原 HTML 中的特殊字符
```js
// 待还原的 HTML 字符串
const str2 = itheima.htmlUnEscape(str)
// 输出的结果 <h1 title="abc">这是h1标签<span>123&nbsp;</span></h1>
console.log(str2)
```

## 开源协议
ISC
````



#### 发布包

![image-20220809135735715](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220809135735715.png)

![image-20220809135926295](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220809135926295.png)

![image-20220809140344100](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220809140344100.png)

![image-20220809140453599](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220809140453599.png)





#### 模块的加载机制

![image-20220809140617191](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220809140617191.png)

![image-20220809141137952](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220809141137952.png)

![image-20220809141151705](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220809141151705.png)

![image-20220809141640900](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220809141640900.png)

![image-20220809141742953](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220809141742953.png)







## Express

![image-20220809203258755](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220809203258755.png)

![image-20220809203440364](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220809203440364.png)

### 初始Express 

![image-20220809203601487](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220809203601487.png)

![image-20220809203649642](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220809203649642.png)

![image-20220809203739569](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220809203739569.png)



#### 1.Express的基本使用

![image-20220809203817598](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220809203817598.png)

![image-20220809203846036](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220809203846036.png)

![image-20220809204442145](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220809204442145.png)

![image-20220809204642984](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220809204642984.png)

![image-20220809204753517](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220809204753517.png)

![image-20220809205116448](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220809205116448.png)

>
>
>注意：客户端使用查询字符串发送到服务器的参数会被解析到res.query对象中成为其属性
>
>测试服务器推荐使用postman软件

![image-20220809205717644](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220809205717644.png)

![image-20220809205641929](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220809205641929.png)

![image-20220809205832054](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220809205832054.png)

>
>
>注意：可以在url的:id位置处写任意值以便访问资源
>
>且id的键名不一定，可以任意写
>
>且动态参数可以不止一个，具体格式见下详细代码

![image-20220809210028877](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220809210028877.png)

```javascript
// 1. 导入 express
const express = require('express')
// 2. 创建 web 服务器
const app = express()

// 4. 监听客户端的 GET 和 POST 请求，并向客户端响应具体的内容
app.get('/user', (req, res) => {
  // 调用 express 提供的 res.send() 方法，向客户端响应一个 JSON 对象
  res.send({ name: 'zs', age: 20, gender: '男' })
})
app.post('/user', (req, res) => {
  // 调用 express 提供的 res.send() 方法，向客户端响应一个 文本字符串
  res.send('请求成功')
})//注意：更新代码后，必须要重启服务器才可以执行新代码
app.get('/', (req, res) => {
  // 通过 req.query 可以获取到客户端发送过来的 查询参数
  // 注意：默认情况下，req.query 是一个空对象
  console.log(req.query)
  res.send(req.query)
})
// 注意：这里的 :id 是一个动态的参数
app.get('/user/:ids/:username', (req, res) => {
  // req.params 是动态匹配到的 URL 参数，默认也是一个空对象
  console.log(req.params)
  res.send(req.params)
})

// 3. 启动 web 服务器
app.listen(80, () => {
  console.log('express server running at http://127.0.0.1')
})

```



#### 托管静态资源

1.托管单个静态资源服务器

![image-20220809210721799](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220809210721799.png)

>
>
>原理是托管静态资源文件为静态资源服务器

```javascript
//注意：下列代码所在的模块文件需要和clock模块文件处于同一根目录下
const express = require('express')
const app = express()

// 在这里，调用 express.static() 方法，快速的对外提供静态资源
app.use('/files', express.static('./files'))
app.use(express.static('./clock'))

app.listen(80, () => {
  console.log('express server running at http://127.0.0.1')
})

```



2.托管多个静态资源服务器

![image-20220809211549151](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220809211549151.png)

![image-20220809211753415](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220809211753415.png)

>
>
>注意：路径前缀是随意的，故也可以通过挂载不同的路径前缀来改变访问的文件的访问顺序





#### 3.nodemon

![image-20220809212046977](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220809212046977.png)

![image-20220809212058718](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220809212058718.png)

![image-20220809212720863](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220809212720863.png)

>
>
>注意：上图中的app.js是指执行的文件的具体路径
>
>一般只需要人为保存即ctrl+s即可重启服务器





### Express路由

![image-20220809213127326](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220809213127326.png)

>
>
>注意：映射关系即对应关系

![image-20220809213112326](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220809213112326.png)

![image-20220809213318471](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220809213318471.png)

![image-20220809213331132](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220809213331132.png)

![image-20220809213719815](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220809213719815.png)



2.路由的使用

![image-20220809213807987](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220809213807987.png)

>
>
>注意：首先必须先使用特定命令创建package.json文件，然后在下载Express模块，最后才能写文件代码

```javascript
const express = require('express')
const app = express()

// 挂载路由
app.get('/', (req, res) => {
  res.send('hello world.')
})
app.post('/', (req, res) => {
  res.send('Post Request.')
})

app.listen(80, () => {
  console.log('http://127.0.0.1')
})

```



![image-20220809214519839](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220809214519839.png)

![image-20220809214532341](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220809214532341.png)

前四步

```javascript
// 这是路由模块
// 1. 导入 express
const express = require('express')
// 2. 创建路由对象
const router = express.Router()

// 3. 挂载具体的路由
router.get('/user/list', (req, res) => {
  res.send('Get user list.')
})
router.post('/user/add', (req, res) => {
  res.send('Add new user.')
})

// 4. 向外导出路由对象
module.exports = router

```





![image-20220809215400270](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220809215400270.png)

注册模块

```javascript
const express = require('express')
const app = express()

// app.use('/files', express.static('./files'))

// 1. 导入路由模块
const router = require('./03.router')
// 2. 注册路由模块
app.use('/api', router)

// 注意： app.use() 函数的作用，就是来注册全局中间件

app.listen(80, () => {
  console.log('http://127.0.0.1')
})

```

>
>
>注意： app.use() 函数的作用，就是来注册全局中间件及路由模块





![image-20220809215847566](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220809215847566.png)







### Express中间件

#### 中间件的概述

![image-20220809220005194](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220809220005194.png)

![image-20220809220050349](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220809220050349.png)

![image-20220809220424538](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220809220424538.png)

![image-20220809220555869](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220809220555869.png)

![image-20220809220740400](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220809220740400.png)

#### Express中间件的初体验

![image-20220809220839378](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220809220839378.png)

![image-20220809221239787](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220809221239787.png)

![image-20220810093042202](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220810093042202.png)

![image-20220810093255813](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220810093255813.png)

>
>
>注意：中间件和路由都存在上下游关系

```javascript
const express = require('express')
const app = express()

// 这是定义全局中间件的简化形式
app.use((req, res, next) => {
  // 获取到请求到达服务器的时间
  const time = Date.now()
  // 为 req 对象，挂载自定义属性，从而把时间共享给后面的所有路由
  req.startTime = time
  next()
})

app.get('/', (req, res) => {
  res.send('Home page.' + req.startTime)
})
app.get('/user', (req, res) => {
  res.send('User page.' + req.startTime)
})

app.listen(80, () => {
  console.log('http://127.0.0.1')
})

```





![image-20220810093849883](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220810093849883.png)

```javascript
const express = require('express')
const app = express()

// 定义第一个全局中间件
app.use((req, res, next) => {
  console.log('调用了第1个全局中间件')
  next()
})
// 定义第二个全局中间件
app.use((req, res, next) => {
  console.log('调用了第2个全局中间件')
  next()
})

// 定义一个路由
app.get('/user', (req, res) => {
  res.send('User page.')
})

app.listen(80, () => {
  console.log('http://127.0.0.1')
})

```





![image-20220810094013424](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220810094013424.png)

```javascript
// 导入 express 模块
const express = require('express')
// 创建 express 的服务器实例
const app = express()

// 1. 定义中间件函数
const mw1 = (req, res, next) => {
  console.log('调用了局部生效的中间件')
  next()
}

// 2. 创建路由
app.get('/', mw1, (req, res) => {
  res.send('Home page.')
})
app.get('/user', (req, res) => {
  res.send('User page.')
})

// 调用 app.listen 方法，指定端口号并启动web服务器
app.listen(80, function () {
  console.log('Express server running at http://127.0.0.1')
})

```





![image-20220810094239462](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220810094239462.png)

```javascript
// 导入 express 模块
const express = require('express')
// 创建 express 的服务器实例
const app = express()

// 1. 定义中间件函数
const mw1 = (req, res, next) => {
  console.log('调用了第一个局部生效的中间件')
  next()
}

const mw2 = (req, res, next) => {
  console.log('调用了第二个局部生效的中间件')
  next()
}

// 2. 创建路由
app.get('/', [mw1, mw2], (req, res) => {
  res.send('Home page.')
})
app.get('/user', (req, res) => {
  res.send('User page.')
})

// 调用 app.listen 方法，指定端口号并启动web服务器
app.listen(80, function () {
  console.log('Express server running at http://127.0.0.1')
})

```





![image-20220810095928161](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220810095928161.png)

#### 中间件的分类

![image-20220810100115058](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220810100115058.png)

![image-20220810100202916](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220810100202916.png)

![image-20220810100317588](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220810100317588.png)

![image-20220810101029835](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220810101029835.png)

```javascript
// 导入 express 模块
const express = require('express')
// 创建 express 的服务器实例
const app = express()

// 1. 定义路由
app.get('/', (req, res) => {
  // 1.1 人为的制造错误
  throw new Error('服务器内部发生了错误！')
  res.send('Home page.')
})

// 2. 定义错误级别的中间件，捕获整个项目的异常错误，从而防止程序的崩溃
app.use((err, req, res, next) => {
  console.log('发生了错误！' + err.message)
  res.send('Error：' + err.message)
})

// 调用 app.listen 方法，指定端口号并启动web服务器
app.listen(80, function () {
  console.log('Express server running at http://127.0.0.1')
})

```



![image-20220810101350425](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220810101350425.png)

```javascript
// 导入 express 模块
const express = require('express')
// 创建 express 的服务器实例
const app = express()

// 注意：除了错误级别的中间件，其他的中间件，必须在路由之前进行配置
// 通过 express.json() 这个中间件，解析表单中的 JSON 格式的数据
app.use(express.json())
// 通过 express.urlencoded() 这个中间件，来解析 表单中的 url-encoded 格式的数据
app.use(express.urlencoded({ extended: false }))

app.post('/user', (req, res) => {
  // 在服务器，可以使用 req.body 这个属性，来接收客户端发送过来的请求体数据
  // 默认情况下，如果不配置解析表单数据的中间件，则 req.body 默认等于 undefined
  console.log(req.body)
  res.send('ok')
})

app.post('/book', (req, res) => {
  // 在服务器端，可以通过 req,body 来获取 JSON 格式的表单数据和 url-encoded 格式的数据
  console.log(req.body)
  res.send('ok')
})

// 调用 app.listen 方法，指定端口号并启动web服务器
app.listen(80, function () {
  console.log('Express server running at http://127.0.0.1')
})

```





![image-20220810102624610](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220810102624610.png)

```javascript
// 导入 express 模块
const express = require('express')
// 创建 express 的服务器实例
const app = express()

// 1. 导入解析表单数据的中间件 body-parser
const parser = require('body-parser')
// 2. 使用 app.use() 注册中间件
app.use(parser.urlencoded({ extended: false }))
// app.use(express.urlencoded({ extended: false }))

app.post('/user', (req, res) => {
  // 如果没有配置任何解析表单数据的中间件，则 req.body 默认等于 undefined
  console.log(req.body)
  res.send('ok')
})

// 调用 app.listen 方法，指定端口号并启动web服务器
app.listen(80, function () {
  console.log('Express server running at http://127.0.0.1')
})

```

#### 自定义中间件

![image-20220810102738969](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220810102738969.png)

![image-20220810102757238](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220810102757238.png)

![image-20220811110330801](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220811110330801.png)

![image-20220811110559337](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220811110559337.png)

![image-20220811110918246](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220811110918246.png)

![image-20220811111123766](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220811111123766.png)

```javascript
// 导入 express 模块
const express = require('express')
// 创建 express 的服务器实例
const app = express()
// 导入 Node.js 内置的 querystring 模块
const qs = require('querystring')

// 这是解析表单数据的中间件
app.use((req, res, next) => {
  // 定义中间件具体的业务逻辑
  // 1. 定义一个 str 字符串，专门用来存储客户端发送过来的请求体数据
  let str = ''
  // 2. 监听 req 的 data 事件
  req.on('data', (chunk) => {
    str += chunk
  })
  // 3. 监听 req 的 end 事件
  req.on('end', () => {
    // 在 str 中存放的是完整的请求体数据
    // console.log(str)
    // TODO: 把字符串格式的请求体数据，解析成对象格式
    const body = qs.parse(str)
    req.body = body
    next()
  })
})

app.post('/user', (req, res) => {
  res.send(req.body)
})

// 调用 app.listen 方法，指定端口号并启动web服务器
app.listen(80, function () {
  console.log('Express server running at http://127.0.0.1')
})

```



![image-20220811111447384](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220811111447384.png)

自定义中间件函数模块

```javascript
// 导入 Node.js 内置的 querystring 模块
const qs = require('querystring')

const bodyParser = (req, res, next) => {
  // 定义中间件具体的业务逻辑
  // 1. 定义一个 str 字符串，专门用来存储客户端发送过来的请求体数据
  let str = ''
  // 2. 监听 req 的 data 事件
  req.on('data', (chunk) => {
    str += chunk
  })
  // 3. 监听 req 的 end 事件
  req.on('end', () => {
    // 在 str 中存放的是完整的请求体数据
    // console.log(str)
    // TODO: 把字符串格式的请求体数据，解析成对象格式
    const body = qs.parse(str)
    req.body = body
    next()
  })
}

module.exports = bodyParser

```

index.js

```javascript
// 导入 express 模块
const express = require('express')
// 创建 express 的服务器实例
const app = express()

// 1. 导入自己封装的中间件模块
const customBodyParser = require('./14.custom-body-parser')
// 2. 将自定义的中间件函数，注册为全局可用的中间件
app.use(customBodyParser)

app.post('/user', (req, res) => {
  res.send(req.body)
})

// 调用 app.listen 方法，指定端口号并启动web服务器
app.listen(80, function () {
  console.log('Express server running at http://127.0.0.1')
})

```



## 使用express写接口

### 编写GET接口

![image-20220811112320289](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220811112320289.png)

![image-20220811112412135](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220811112412135.png)

![image-20220811113305596](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220811113305596.png)

### 请求POST接口

![image-20220811113838718](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220811113838718.png)

>
>
>注意：如果不配置中间件就无法获取请求体数据

### CORS跨域资源共享

![image-20220811114136574](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220811114136574.png)

![image-20220811114353702](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220811114353702.png)

![image-20220811114443760](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220811114443760.png)

![image-20220811114810660](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220811114810660.png)

![image-20220811114852684](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220811114852684.png)

![image-20220811115236647](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220811115236647.png)

![image-20220811115256336](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220811115256336.png)

![image-20220811115329683](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220811115329683.png)

![image-20220811115459520](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220811115459520.png)

![image-20220811115617597](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220811115617597.png)

![image-20220811115625840](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220811115625840.png)

![image-20220811115741915](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220811115741915.png)

![image-20220811115836810](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220811115836810.png)

### JSONP接口

![image-20220811120518256](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220811120518256.png)

![image-20220811120644485](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220811120644485.png)

>
>
>注意：JSONP接口没有包括在router路由模块中，所以需要在接口前添加api前缀

![image-20220811120934513](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220811120934513.png)

![image-20220811121300840](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220811121300840.png)

![image-20220811121555214](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220811121555214.png)

后端服务器综合代码

路由模块代码

```javascript
const express = require('express')
const router = express.Router()

// 在这里挂载对应的路由
router.get('/get', (req, res) => {
  // 通过 req.query 获取客户端通过查询字符串，发送到服务器的数据
  const query = req.query
  // 调用 res.send() 方法，向客户端响应处理的结果
  res.send({
    status: 0, // 0 表示处理成功，1 表示处理失败
    msg: 'GET 请求成功！', // 状态的描述
    data: query, // 需要响应给客户端的数据
  })
})

// 定义 POST 接口
router.post('/post', (req, res) => {
  // 通过 req.body 获取请求体中包含的 url-encoded 格式的数据
  const body = req.body
  // 调用 res.send() 方法，向客户端响应结果
  res.send({
    status: 0,
    msg: 'POST 请求成功！',
    data: body,
  })
})

// 定义 DELETE 接口
router.delete('/delete', (req, res) => {
  res.send({
    status: 0,
    msg: 'DELETE请求成功',
  })
})

module.exports = router

```



index.js

```javascript
// 导入 express
const express = require('express')
// 创建服务器实例
const app = express()

// 配置解析表单数据的中间件
app.use(express.urlencoded({ extended: false }))

// 必须在配置 cors 中间件之前，配置 JSONP 的接口
app.get('/api/jsonp', (req, res) => {
  // TODO: 定义 JSONP 接口具体的实现过程
  // 1. 得到函数的名称
  const funcName = req.query.callback
  // 2. 定义要发送到客户端的数据对象
  const data = { name: 'zs', age: 22 }
  // 3. 拼接出一个函数的调用
  const scriptStr = `${funcName}(${JSON.stringify(data)})`
  // 4. 把拼接的字符串，响应给客户端
  res.send(scriptStr)
})

// 一定要在路由之前，配置 cors 这个中间件，从而解决接口跨域的问题
const cors = require('cors')
app.use(cors())

// 导入路由模块
const router = require('./16.apiRouter')
// 把路由模块，注册到 app 上
app.use('/api', router)

// 启动服务器
app.listen(80, () => {
  console.log('express server running at http://127.0.0.1')
})

```

>
>
>注意：模板字符串的用法

前端网页代码

```javascript
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <script src="https://cdn.staticfile.org/jquery/3.4.1/jquery.min.js"></script>
  </head>
  <body>
    <button id="btnGET">GET</button>
    <button id="btnPOST">POST</button>
    <button id="btnDelete">DELETE</button>
    <button id="btnJSONP">JSONP</button>

    <script>
      $(function () {
        // 1. 测试GET接口
        $('#btnGET').on('click', function () {
          $.ajax({
            type: 'GET',
            url: 'http://127.0.0.1/api/get',
            data: { name: 'zs', age: 20 },
            success: function (res) {
              console.log(res)
            },
          })
        })
        // 2. 测试POST接口
        $('#btnPOST').on('click', function () {
          $.ajax({
            type: 'POST',
            url: 'http://127.0.0.1/api/post',
            data: { bookname: '水浒传', author: '施耐庵' },
            success: function (res) {
              console.log(res)
            },
          })
        })

        // 3. 为删除按钮绑定点击事件处理函数
        $('#btnDelete').on('click', function () {
          $.ajax({
            type: 'DELETE',
            url: 'http://127.0.0.1/api/delete',
            success: function (res) {
              console.log(res)
            },
          })
        })

        // 4. 为 JSONP 按钮绑定点击事件处理函数
        $('#btnJSONP').on('click', function () {
          $.ajax({
            type: 'GET',
            url: 'http://127.0.0.1/api/jsonp',
            dataType: 'jsonp',
            success: function (res) {
              console.log(res)
            },
          })
        })
      })
    </script>
  </body>
</html>

```





## 数据库与身份验证

![image-20220811122140738](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220811122140738.png)

![image-20220811122207340](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220811122207340.png)

### 数据库的基本概念

![image-20220811122536869](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220811122536869.png)

![image-20220811122717952](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220811122717952.png)

![image-20220811122819422](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220811122819422.png)

![image-20220811122937396](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220811122937396.png)

![image-20220811123047984](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220811123047984.png)

![image-20220811123230289](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220811123230289.png)

### 安装并配置MySQL

![image-20220811123419197](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220811123419197.png)

![image-20220811123433305](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220811123433305.png)

![image-20220811132234232](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220811132234232.png)





### MySQL的基本使用

![image-20220811132616189](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220811132616189.png)

![image-20220811132628221](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220811132628221.png)

![image-20220811133143069](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220811133143069.png)

>
>
>注意：数据库名称不要中文且空格用下划线代替

![image-20220811134400252](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220811134400252.png)

![image-20220811134833859](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220811134833859.png)



### 使用SQL管理数据库

#### SQL概述

![image-20220811135150904](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220811135150904.png)



![image-20220811135234333](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220811135234333.png)

![image-20220811135303897](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220811135303897.png)

#### SQL基本语法

##### select语句

![image-20220811135502451](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220811135502451.png)

>
>
>注意：大小写不敏感哦

![image-20220811135545557](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220811135545557.png)

![image-20220811135727659](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220811135727659.png)

##### insert into语句

![image-20220811151304489](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220811151304489.png)



##### update语句

![image-20220811152031983](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220811152031983.png)

![image-20220811152159758](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220811152159758.png)

>
>
>注意：如果不指定where属性 则会默认修改所有数据

![image-20220811152415721](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220811152415721.png)



```sql
-- users表中把所有列数据全部查询出来
-- select * from users

-- 从users表中把username列和password列对应的数据查询出来
-- select username,password from users

-- 向users表中，插入新数据，username的值为tony stark password的值为098123
-- insert into users(username,password) values ('tony stark','098123')
-- select * from users

-- 将users表中的id=2列中的username值改为sc
-- update users set username='sc' where id=2
-- select * from users
```



##### delete语句

![image-20220811153142079](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220811153142079.png)

![image-20220811153155023](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220811153155023.png)



##### where子句

![image-20220811153315494](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220811153315494.png)

>
>
>理解：子句是因为是限制条件，主句是前面的基本语句

![image-20220811153647060](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220811153647060.png)

![image-20220811153746689](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220811153746689.png)



##### and和or运算符

![image-20220811154038498](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220811154038498.png)

![image-20220811154105359](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220811154105359.png)



![image-20220811154206165](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220811154206165.png)



##### order by语句(排序)

![image-20220811154435581](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220811154435581.png)

![image-20220811154516288](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220811154516288.png)

>
>
>注意：asc可以不写   因为默认是升序排序

![image-20220811154605219](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220811154605219.png)

![image-20220811154725705](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220811154725705.png)



>
>
>注意：多重排序的顺序





#### count（*）函数

![image-20220811155009324](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220811155009324.png)

![image-20220811155041544](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220811155041544.png)

![image-20220811155158921](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220811155158921.png)



```sql
-- 通过 * 把 users 表中所有的数据查询出来
-- select * from users

-- 从 users 表中把 username 和 password 对应的数据查询出来
-- select username, password from users

-- 向 users 表中，插入新数据，username 的值为 tony stark  password 的值为 098123
-- insert into users (username, password) values ('tony stark', '098123')
-- select * from users

-- 将 id 为 4 的用户密码，更新成 888888
-- update users set password='888888' where id=4
-- select * from users

-- 更新 id 为 2 的用户，把用户密码更新为 admin123  同时，把用户的状态更新为 1
-- update users set password='admin123', status=1 where id=2
-- select * from users

-- 删除 users 表中， id 为 4 的用户
-- delete from users where id=4
-- select * from users

-- 演示 where 子句的使用
-- select * from users where status=1
-- select * from users where id>=2
-- select * from users where username<>'ls'
-- select * from users where username!='ls'

-- 使用 AND 来显示所有状态为0且id小于3的用户
-- select * from users where status=0 and id<3

-- 使用 or 来显示所有状态为1 或 username 为 zs 的用户
-- select * from users where status=1 or username='zs'

-- 对users表中的数据，按照 status 字段进行升序排序
-- select * from users order by status

-- 按照 id 对结果进行降序的排序  desc 表示降序排序   asc 表示升序排序（默认情况下，就是升序排序的）
-- select * from users order by id desc

-- 对 users 表中的数据，先按照 status 进行降序排序，再按照 username 字母的顺序，进行升序的排序
-- select * from users order by status desc, username asc

-- 使用 count(*) 来统计 users 表中，状态为 0 用户的总数量
-- select count(*) from users where status=0

-- 使用 AS 关键字给列起别名
-- select count(*) as total from users where status=0
-- select username as uname, password as upwd from users
```



#### 在项目中操作MySQL数据库

![image-20220811161221159](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220811161221159.png)

![image-20220811161250473](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220811161250473.png)

![image-20220811161346518](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220811161346518.png)

![image-20220811162150479](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220811162150479.png)

![image-20220811162417759](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220811162417759.png)

![image-20220811162601317](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220811162601317.png)

![image-20220811163302412](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220811163302412.png)

>
>
>注意：每次执行js代码后在MySQL数据库中需要先点击闪电标识执行后才能看到效果变化

![image-20220811165231065](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220811165231065.png)

![image-20220811165359197](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220811165359197.png)



![image-20220811165836935](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220811165836935.png)



>
>
>注意：新增的数据id=5是因为id=4的数据被创建过



![image-20220811170745279](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220811170745279.png)



![image-20220811170913426](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220811170913426.png)



![image-20220811171247072](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220811171247072.png)

```javascript
// 1. 导入 mysql 模块
const mysql = require('mysql')
// 2. 建立与 MySQL 数据库的连接关系
const db = mysql.createPool({
  host: '127.0.0.1', // 数据库的 IP 地址
  user: 'root', // 登录数据库的账号
  password: 'admin123', // 登录数据库的密码
  database: 'my_db_01', // 指定要操作哪个数据库
})

// 测试 mysql 模块能否正常工作
/* db.query('select 1', (err, results) => {
  // mysql 模块工作期间报错了
  if(err) return console.log(err.message)
  // 能够成功的执行 SQL 语句
  console.log(results)
}) */

// 查询 users 表中所有的数据
/* const sqlStr = 'select * from users'
db.query(sqlStr, (err, results) => {
  // 查询数据失败
  if (err) return console.log(err.message)
  // 查询数据成功
  // 注意：如果执行的是 select 查询语句，则执行的结果是数组
  console.log(results)
}) */

// 向 users 表中，新增一条数据，其中 username 的值为 Spider-Man，password 的值为 pcc123
/* const user = { username: 'Spider-Man', password: 'pcc123' }
// 定义待执行的 SQL 语句
const sqlStr = 'insert into users (username, password) values (?, ?)'
// 执行 SQL 语句
db.query(sqlStr, [user.username, user.password], (err, results) => {
  // 执行 SQL 语句失败了
  if (err) return console.log(err.message)
  // 成功了
  // 注意：如果执行的是 insert into 插入语句，则 results 是一个对象
  // 可以通过 affectedRows 属性，来判断是否插入数据成功
  if (results.affectedRows === 1) {
    console.log('插入数据成功!')
  }
}) */

// 演示插入数据的便捷方式
/* const user = { username: 'Spider-Man2', password: 'pcc4321' }
// 定义待执行的 SQL 语句
const sqlStr = 'insert into users set ?'
// 执行 SQL 语句
db.query(sqlStr, user, (err, results) => {
  if (err) return console.log(err.message)
  if (results.affectedRows === 1) {
    console.log('插入数据成功')
  }
}) */

// 演示如何更新用户的信息
/* const user = { id: 6, username: 'aaa', password: '000' }
// 定义 SQL 语句
const sqlStr = 'update users set username=?, password=? where id=?'
// 执行 SQL 语句
db.query(sqlStr, [user.username, user.password, user.id], (err, results) => {
  if (err) return console.log(err.message)
  // 注意：执行了 update 语句之后，执行的结果，也是一个对象，可以通过 affectedRows 判断是否更新成功
  if (results.affectedRows === 1) {
    console.log('更新成功')
  }
}) */

// 演示更新数据的便捷方式
/* const user = { id: 6, username: 'aaaa', password: '0000' }
// 定义 SQL 语句
const sqlStr = 'update users set ? where id=?'
// 执行 SQL 语句
db.query(sqlStr, [user, user.id], (err, results) => {
  if (err) return console.log(err.message)
  if (results.affectedRows === 1) {
    console.log('更新数据成功')
  }
}) */

// 删除 id 为 5 的用户
/* const sqlStr = 'delete from users where id=?'
db.query(sqlStr, 5, (err, results) => {
  if (err) return console.log(err.message)
  // 注意：执行 delete 语句之后，结果也是一个对象，也会包含 affectedRows 属性
  if (results.affectedRows === 1) {
    console.log('删除数据成功')
  }
}) */

// 标记删除
const sqlStr = 'update users set status=? where id=?'
db.query(sqlStr, [1, 6], (err, results) => {
  if (err) return console.log(err.message)
  if (results.affectedRows === 1) {
    console.log('标记删除成功')
  }
})

```





## 前后端的身份验证

### Web开发模式

![image-20220811191700647](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220811191700647.png)

![image-20220811191801692](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220811191801692.png)

![image-20220811191904616](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220811191904616.png)

![image-20220811191937305](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220811191937305.png)

![image-20220811192047230](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220811192047230.png)



![image-20220811192235696](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220811192235696.png)





### 身份认证

![image-20220811192334490](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220811192334490.png)

![image-20220811192416584](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220811192416584.png)

![image-20220811192430764](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220811192430764.png)



### Session认证机制

![image-20220811192517849](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220811192517849.png)

![image-20220811192833660](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220811192833660.png)

![image-20220811193251578](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220811193251578.png)



![image-20220811193422826](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220811193422826.png)

![image-20220811193727175](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220811193727175.png)

![image-20220811193948484](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220811193948484.png)



![image-20220811194103512](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220811194103512.png)







### 在Express中使用Session认证

![image-20220811194303320](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220811194303320.png)

![image-20220811194326715](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220811194326715.png)

![image-20220811194829980](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220811194829980.png)

![image-20220811195049038](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220811195049038.png)



![image-20220811195318658](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220811195318658.png)

>
>
>注意：调用destory（）函数只会清空当前用户的session数据，不会清空其他用户的数据

```javascript
// 导入 express 模块
const express = require('express')
// 创建 express 的服务器实例
const app = express()

// TODO_01：请配置 Session 中间件
const session = require('express-session')
app.use(
  session({
    secret: 'itheima',
    resave: false,
    saveUninitialized: true,
  })
)

// 托管静态页面
app.use(express.static('./pages'))
// 解析 POST 提交过来的表单数据
app.use(express.urlencoded({ extended: false }))

// 登录的 API 接口
app.post('/api/login', (req, res) => {
  // 判断用户提交的登录信息是否正确
  if (req.body.username !== 'admin' || req.body.password !== '000000') {
    return res.send({ status: 1, msg: '登录失败' })
  }

  // TODO_02：请将登录成功后的用户信息，保存到 Session 中
  // 注意：只有成功配置了 express-session 这个中间件之后，才能够通过 req 点出来 session 这个属性
  req.session.user = req.body // 用户的信息
  req.session.islogin = true // 用户的登录状态

  res.send({ status: 0, msg: '登录成功' })
})

// 获取用户姓名的接口
app.get('/api/username', (req, res) => {
  // TODO_03：请从 Session 中获取用户的名称，响应给客户端
  if (!req.session.islogin) {
    return res.send({ status: 1, msg: 'fail' })
  }
  res.send({
    status: 0,
    msg: 'success',
    username: req.session.user.username,
  })
})

// 退出登录的接口
app.post('/api/logout', (req, res) => {
  // TODO_04：清空 Session 信息
  req.session.destroy()
  res.send({
    status: 0,
    msg: '退出登录成功',
  })
})

// 调用 app.listen 方法，指定端口号并启动web服务器
app.listen(80, function () {
  console.log('Express server running at http://127.0.0.1:80')
})

```









### JWT认证机制

![image-20220811195758870](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220811195758870.png)

![image-20220811195815502](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220811195815502.png)



![image-20220811195930454](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220811195930454.png)



![image-20220811200032748](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220811200032748.png)



![image-20220811200125118](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220811200125118.png)



![image-20220811200247993](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220811200247993.png)

### 在Express中使用JWT

![image-20220811200355061](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220811200355061.png)

![image-20220811200413409](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220811200413409.png)



>
>
>注意：可以在一行npm命令中安装两个及以上的包，只需在每个包之间加上空格

![image-20220811200601177](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220811200601177.png)

![image-20220811200803128](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220811200803128.png)

>
>
>注意：sign（）方法的最后一个参数是指token 的有效期

![image-20220811201119582](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220811201119582.png)

![image-20220811201208438](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220811201208438.png)

>
>
>注意：使用postman发起get请求时 提交token时必须在前面加上Bearer 

![image-20220811202131399](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220811202131399.png)

```javascript
// 导入 express 模块
const express = require('express')
// 创建 express 的服务器实例
const app = express()

// TODO_01：安装并导入 JWT 相关的两个包，分别是 jsonwebtoken 和 express-jwt
const jwt = require('jsonwebtoken')
const expressJWT = require('express-jwt')

// 允许跨域资源共享
const cors = require('cors')
app.use(cors())

// 解析 post 表单数据的中间件
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))

// TODO_02：定义 secret 密钥，建议将密钥命名为 secretKey
const secretKey = 'itheima No1 ^_^'

// TODO_04：注册将 JWT 字符串解析还原成 JSON 对象的中间件
// 注意：只要配置成功了 express-jwt 这个中间件，就可以把解析出来的用户信息，挂载到 req.user 属性上
app.use(expressJWT({ secret: secretKey }).unless({ path: [/^\/api\//] }))

// 登录接口
app.post('/api/login', function (req, res) {
  // 将 req.body 请求体中的数据，转存为 userinfo 常量
  const userinfo = req.body
  // 登录失败
  if (userinfo.username !== 'admin' || userinfo.password !== '000000') {
    return res.send({
      status: 400,
      message: '登录失败！',
    })
  }
  // 登录成功
  // TODO_03：在登录成功之后，调用 jwt.sign() 方法生成 JWT 字符串。并通过 token 属性发送给客户端
  // 参数1：用户的信息对象
  // 参数2：加密的秘钥
  // 参数3：配置对象，可以配置当前 token 的有效期
  // 记住：千万不要把密码加密到 token 字符中
  const tokenStr = jwt.sign({ username: userinfo.username }, secretKey, { expiresIn: '30s' })
  res.send({
    status: 200,
    message: '登录成功！',
    token: tokenStr, // 要发送给客户端的 token 字符串
  })
})

// 这是一个有权限的 API 接口
app.get('/admin/getinfo', function (req, res) {
  // TODO_05：使用 req.user 获取用户信息，并使用 data 属性将用户信息发送给客户端
  console.log(req.user)
  res.send({
    status: 200,
    message: '获取用户信息成功！',
    data: req.user, // 要发送给客户端的用户信息
  })
})

// TODO_06：使用全局错误处理中间件，捕获解析 JWT 失败后产生的错误
app.use((err, req, res, next) => {
  // 这次错误是由 token 解析失败导致的
  if (err.name === 'UnauthorizedError') {
    return res.send({
      status: 401,
      message: '无效的token',
    })
  }
  res.send({
    status: 500,
    message: '未知的错误',
  })
})

// 调用 app.listen 方法，指定端口号并启动web服务器
app.listen(8888, function () {
  console.log('Express server running at http://127.0.0.1:8888')
})

```





## 项目事件--大事件p77以后--学完vue再来











































































































































































































































































































