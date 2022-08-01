#  AJAX学习

![image-20220728090400060](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220728090400060.png)

![image-20220728090803442](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220728090803442.png)

## 1.客户端和服务器相关的概念

### 1.客户端

![image-20220728091449195](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220728091449195.png)



### 2.URL地址

![image-20220728091850443](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220728091850443.png)

![image-20220728091902294](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220728091902294.png)



### 3.客户端和服务器的通信过程

![image-20220728091923637](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220728091923637.png)

![image-20220728092217417](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220728092217417.png)

>
>
>注意：选中doc标签后需选中name框中的某个项目 才可看到response选项



### 4.服务器对外提供了哪些资源

![image-20220728093113691](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220728093113691.png)

![image-20220728093124267](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220728093124267.png)

![image-20220728093137389](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220728093137389.png)![image-20220728093149257](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220728093149257.png)

![5](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220728093051981.png)

### 5.了解Ajax

![image-20220728093820490](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220728093820490.png)

![image-20220728093837128](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220728093837128.png)

![image-20220728093848632](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220728093848632.png)

![image-20220728093857122](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220728093857122.png)

![image-20220728093907708](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220728093907708.png)

![image-20220728093916581](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220728093916581.png)

### 6.jquery中的Ajax

![image-20220728094103990](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220728094103990.png)

#### 1.$.get()发起get请求

![image-20220728094208078](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220728094208078.png)

![image-20220728094413736](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220728094413736.png)

![image-20220728095408781](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220728095408781.png)

![image-20220728095424574](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220728095424574.png)



#### 2.$.post()函数发起post请求

![image-20220728095506443](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220728095506443.png)

![image-20220728095802877](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220728095802877.png)

![image-20220728095815984](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220728095815984.png)

#### 3.$.ajax()函数发起请求

![image-20220728095920623](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220728095920623.png)

![image-20220728100214407](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220728100214407.png)

![image-20220728100403439](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220728100403439.png)

### 7.接口

#### 1.接口相关概念

![image-20220730170208641](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220730170208641.png)

![image-20220730170238048](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220730170238048.png)



#### 2.接口测试工具postman

1.使用postman测试get接口

![image-20220730150848396](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220730150848396.png)

2.使用postman测试post接口

![image-20220730150942881](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220730150942881.png)





#### 3.接口文档

![image-20220728110617186](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220728110617186.png)

![image-20220728110717780](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220728110717780.png)

![image-20220728110734854](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220728110734854.png)

![image-20220728110742024](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220728110742024.png)



### 8.案例：图书管理

![image-20220730211946083](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220730211946083.png)

![image-20220730205132459](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220730205132459.png)

```javascript
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
	<script src="./js/jquery.js"></script>
	<link rel="stylesheet" href="./css/bootstrap.css">
</head>
<body style="padding: 15px;">
	
	//bs3-pannel-primary创建面板
	<div class="panel panel-primary" >
		  <div class="panel-heading">
				<h3 class="panel-title">图书管理</h3>
		  </div>
		  <div class="panel-body form-inline">
				//bs3-input-addon创建表格
				<div class="input-group">
					<div class="input-group-addon">书名</div>
					<input type="text" class="form-control" id="iptbookname" placeholder="请输入书名">
				</div>
				<div class="input-group">
					<div class="input-group-addon">作者</div>
					<input type="text" class="form-control" id="iptbookauthor" placeholder="请输入作者">
				</div>
				<div class="input-group">
					<div class="input-group-addon">出版社</div>
					<input type="text" class="form-control" id="iptbookpublisher" placeholder="请输入出版社 ">
				</div>
				
				<button id="iptbtn" class="btn btn-primary">添加</button>
		  </div>
		  
		  <table class="table table-bordered table-hover">
			<thead>
				<tr>
					<th>Id</th>
					<th>书名</th>
					<th>作者</th>
					<th>出版社</th>
					<th>操作</th>
				</tr>
			</thead>
			<tbody class="tb">
			</tbody>
		  </table>
		  
	</div>
	<script>
		$(function() {
			function getBookList() {
				$.get('http://www.liulongbin.top:3006/api/getbooks', function(res) {
					if(res.status!=200) return alert("请求数据失败");
					var rows=[];
					$.each(res.data, function(i,item) {
						rows.push('<tr><td>'+item.id+'</td><td>'+item.bookname+'</td><td>'+item.author+'</td><td>'+item.publisher+'</td><td><a href="javascript:;"class="del" data-id="'+item.id+'">删除</a></td></tr>')
					})//动态添加元素
					$('.tb').empty().append(rows.join(''));

				})

			}
			getBookList();
			$('#iptbtn').on('click',function() {
				var bookname=$('#iptbookname').val().trim();
				var bookauthor=$('#iptbookauthor').val().trim();
				var bookpublisher=$('#iptbookpublisher').val().trim();
				$.post('http://www.liulongbin.top:3006/api/addbook',{
					bookname:bookname, author:bookauthor, publisher:bookpublisher//根据接口文档看是否传参数，传什么参数
				},function(res){
					if(bookname.length<=0||bookauthor.length<=0||bookpublisher.length<=0) {
						$('#iptbookname').val('');
						$('#iptbookauthor').val('');
						$('#iptbookpublisher').val('');
						return alert('请输入正确的图书信息');
					}
					if(res.status!=201) return alert('添加失败');
					getBookList();
					$('#iptbookname').val('');
					$('#iptbookauthor').val('');
					$('#iptbookpublisher').val('');
					alert('添加成功');
				})
			})
			$('.tb').on('click','.del',function() {//动态添加的元素只能通过on方法+事件委派绑定事件
				var id=$(this).attr('data-id');//设置自定义属性获取要删除的图书id
				$.get('http://www.liulongbin.top:3006/api/delbook',{
					id:id
				},function(res) {
					if(res.status!=200)  return alert('删除失败');
					getBookList();
					alert('删除成功');
					

				})
			})
		})
	</script>
	
	
</body>
</html>
```



### 9.案例：聊天机器人

![image-20220731134054501](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220731134054501.png)

![image-20220731135703210](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220731135703210.png)

![image-20220731141838155](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220731141838155.png)

```javascript
 <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" href="css/reset.css" />
    <link rel="stylesheet" href="css/main.css" />
    <script type="text/javascript" src="js/jquery-1.12.4.min.js"></script>
    <script type="text/javascript" src="js/jquery-ui.min.js"></script>
    <script type="text/javascript" src="js/jquery.mousewheel.js"></script>
    <title>聊天机器人</title>
  </head>

  <body>
    <div class="wrap">
      <!-- 头部 Header 区域 -->
      <div class="header">
        <h3>小思同学</h3>
        <img src="img/person01.png" alt="icon" />
      </div>
      <!-- 中间 聊天内容区域 -->
      <div class="main">
        <ul class="talk_list" style="top: 0px;">
          <li class="left_word">
            <img src="img/person01.png" /> <span>嗨,最近过得怎么样？</span>
          </li>
        </ul>
        <div class="drag_bar" style="display: none;">
          <div
            class="drager ui-draggable ui-draggable-handle"
            style="display: none; height: 412.628px;"
          ></div>
        </div>
        <audio src="" autoplay class="video" display="none">你好</audio>
      </div>
      <!-- 底部 消息编辑区域 -->
      <div class="footer">
        <img src="img/person02.png" alt="icon" />
        <input type="text" placeholder="说的什么吧..." class="input_txt" id="send" />
        <input type="button" value="发 送" class="input_sub" id="btnSend" />
      </div>
    </div>
    <script type="text/javascript" src="js/scroll.js"></script>
    <script src="./js/chat.js">
    </script>
  </body>
</html>

```

>
>
>注意：chat.js文件

```javascript
$(function(){
    // 初始化右侧滚动条
    // 这个方法定义在scroll.js中
    //将用户输入的内容渲染到聊天窗口
    $('#btnSend').on('click',function() {
        var text=$('#send').val().trim();
        var ul=$('.talk_list');
        if(text.length<=0) return $('#send').val('');
        ul.append('<li class="right_word"><img src="img/person02.png" /> <span>'+text+'</span></li>');
        $('#send').val('');
        resetui();//显示最新消息并生成滚动条
        getMsg(text);
    })
    //发起请求获取聊天消息
    function getMsg(text) {
        $.ajax({
            method:'GET',
            url:'http://ajax.frontend.itheima.net:3006/api/robot',
            data:{
                spoken:text
            },
            success:function(res) {
                if(res.message==='success') {
                    var msg=res.data.info.text;
                    ul.append('<li class="left_word"><img src="img/person01.png" /> <span>'+msg+'</span></li>');
                    resetui();
                    //调用语言
                    getVoice(text);
                }
            }
        })
    }
    //将机器人的聊天内容转为语音
    function getVoice(text) {
        $.ajax({
            type:'GET',
            url:'http://ajax.frontend.itheima.net:3006/api/synthesize',
            data:{
                text:text
            },
            success:function(res) { 
                // 如果请求成功，则 res.voiceUrl 是服务器返回的音频URL地址    
                if(res.status===200) $('.video').attr('src',res.voiceUrl);
            }
        })
    }
    //使用回车发送消息
    $('send').on('keyup',function(e) {
        if(e.keyCode===13) {
            $('btnSend').click();
        }
    })
   
  })
```





## 2.form表单和模板引擎

![image-20220731152426154](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220731152426154.png)

![image-20220731152438052](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220731152438052.png)

### 1.form表单的基本使用

![image-20220731152827841](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220731152827841.png)

![image-20220731152944266](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220731152944266.png)

![image-20220731153050599](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220731153050599.png)



#### 1.action属性

![image-20220731153331896](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220731153331896.png)

#### 2.target属性

![image-20220731153614373](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220731153614373.png)

#### 3.method属性



![image-20220731154239449](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220731154239449.png)

#### 4.enctype属性

![image-20220731154416608](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220731154416608.png)

![image-20220731154501589](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220731154501589.png)

![image-20220731154856454](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220731154856454.png)

![image-20220731154931483](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220731154931483.png)



### 2.通过Ajax提交表单数据

#### 1.监听表单提交事件

![image-20220731155257617](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220731155257617.png)

#### 2.阻止表单默认提交行为

![image-20220731155422223](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220731155422223.png)

#### 3.快速获取表单中的数据

![image-20220731155619271](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220731155619271.png)

#### 4.案例：评论列表

```javascript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="./js/jquery.js"></script>
    <link rel="stylesheet" href="./css/bootstrap.css">
</head>
<body>
    
    <form class="panel panel-primary" id="panel">
          <div class="panel-heading">
                <h3 class="panel-title">发布评论</h3>
          </div>
          <div class="panel-body">
               <div>评论人:</div>
               <input type="text" class="form-control" name="username" id="username">
               <div>评论内容:</div>
               <textarea name="content" id="content" class="form-control"></textarea>
               <button type="submit" class="btn btn-primary" id="btn">发表评论</button>
          </div>
    </form>
    
    <ul class="list-group">
        <li class="list-group-item">
            <span class="badge">评论时间：</span>
            <span class="badge">评论人：</span>
            评论内容
        </li>
    </ul>
    
    
</body>
<script src="./js/cmt.js"></script>
</html>
```



```javascript
    function getCmts() {
        $.get('http://www.liulongbin.top:3006/api/cmtlist',function(res) {
    // console.log(res);
    if(res.status!=200) return alert('获取评论列表失败');
    var rows=[];
    $.each(res.data,function(i,item) {
        rows.push('<li class="list-group-item"><span class="badge">'+item.time+'</span><span class="badge">'+item.username+'</span>'+item.content+'</li>')
    })
    $('.list-group').empty().append(rows.join(''));
    })
    }
    getCmts();
   $(function() {
    $('btn').submit(function(e) {
        e.preventDefault();
        var data=$('#panel').serialize();
        // console.log(data);
        $.post('http://www.liulongbin.top:3006/api/addcmt',data,function(res) {
            // console.log(res);
            if(res.status!=201) return alert('发表评论失败');
            getCmts();
            $('#panel')[0].reset();
            return alert('评论发表成功');
        })
        
    })
   }) 
    

```



### 3.模板引擎

#### 1.模板引擎概述

![image-20220801103356582](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220801103356582.png)

![image-20220801103409965](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220801103409965.png)



#### 2.模板引擎的基本使用

![image-20220801103428677](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220801103428677.png)

#### 3.模板引擎的常用语法

![image-20220801104904276](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220801104904276.png)

![image-20220801104920593](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220801104920593.png)

![image-20220801104933265](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220801104933265.png)

![image-20220801104948198](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220801104948198.png)

![image-20220801105017640](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220801105017640.png)

![image-20220801105636122](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220801105636122.png)

![image-20220801110041072](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220801110041072.png)

#### 4.案例:新闻列表

![image-20220801112118303](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220801112118303.png)

>
>
>==代码见exercise==

#### 5.模板引擎的实现原理



## 3.Ajax加强

![image-20220801213536217](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220801213536217.png)

![image-20220801213549782](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220801213549782.png)



### 1.XmlHttpRequest的基本使用

![image-20220801213715626](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220801213715626.png)

#### 1.使用xhr对象发起GET数据请求

![image-20220801214823269](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220801214823269.png)





#### 2.了解xhr对象的readyState属性

![image-20220801214936747](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220801214936747.png)



#### 3.使用xhr对象发起带参数的GET请求



![image-20220801215345744](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220801215345744.png)

#### 4.查询字符串

![image-20220801215635445](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220801215635445.png)

![image-20220801215740289](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220801215740289.png)

![image-20220801220338365](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220801220338365.png)

![image-20220801220845799](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220801220845799.png)

![image-20220801220906699](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220801220906699.png)
