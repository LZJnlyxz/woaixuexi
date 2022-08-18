# Vue2&&Vue3

学习流程

![image-20220811203846103](pictureStore/image-20220811203846103.png)

![image-20220811203902258](pictureStore/image-20220811203902258.png)

![image-20220811203916012](pictureStore/image-20220811203916012.png)

![image-20220811203934359](pictureStore/image-20220811203934359.png)

![image-20220811203956459](pictureStore/image-20220811203956459.png)

![image-20220811204021353](pictureStore/image-20220811204021353.png)

![image-20220811204046864](pictureStore/image-20220811204046864.png)

![image-20220811204100825](pictureStore/image-20220811204100825.png)







## 前端工程化和webpack

![image-20220812101107067](pictureStore/image-20220812101107067.png)

![image-20220811204145742](pictureStore/image-20220811204145742.png)

### 前端工程化

![image-20220812101133147](pictureStore/image-20220812101133147.png)



![image-20220812100928011](pictureStore/image-20220812100928011.png)



### webpack的基本使用

![image-20220812101812066](pictureStore/image-20220812101812066.png)

![image-20220812101923716](pictureStore/image-20220812101923716.png)

 

#### 安装和配置webpack

![image-20220812104939093](pictureStore/image-20220812104939093.png)

![image-20220812105522933](pictureStore/image-20220812105522933.png)

>
>
>注意：不明确是哪种类型可以去npmjs官网上去搜索

![image-20220812105627388](pictureStore/image-20220812105627388.png)

>
>
>注意：必须在根目录下运行npm命令行
>
>运行上述命令后，webpack就自动在main.js中解决了兼容性问题，故此时引入html文件的应该是main.js文件而不是index.js

![image-20220818201621688](C:/Users/HP/Desktop/holiday study/WebStudying/webStudying/pictureStore/image-20220818201621688.png)

>
>
>注意：重新配置config文件后，如上例中的mode节点改变，需要重新运行script节点下的脚本，才能实现压缩文件的功能

![image-20220818202056129](C:/Users/HP/Desktop/holiday study/WebStudying/webStudying/pictureStore/image-20220818202056129.png)

![image-20220818202229106](C:/Users/HP/Desktop/holiday study/WebStudying/webStudying/pictureStore/image-20220818202229106.png)

![image-20220818202558826](C:/Users/HP/Desktop/holiday study/WebStudying/webStudying/pictureStore/image-20220818202558826.png)

>
>
>注意：__dirname指的是config文件所在的文件夹路径，即上一级路径

### webpack中的插件

![image-20220818203553365](C:/Users/HP/Desktop/holiday study/WebStudying/webStudying/pictureStore/image-20220818203553365.png)

![image-20220818203726869](C:/Users/HP/Desktop/holiday study/WebStudying/webStudying/pictureStore/image-20220818203726869.png)

![image-20220818203737224](C:/Users/HP/Desktop/holiday study/WebStudying/webStudying/pictureStore/image-20220818203737224.png)

![image-20220818212132884](C:/Users/HP/Desktop/holiday study/WebStudying/webStudying/pictureStore/image-20220818212132884.png)

![image-20220818212146263](C:/Users/HP/Desktop/holiday study/WebStudying/webStudying/pictureStore/image-20220818212146263.png)

> 注意：运行插件后每次修改源代码后只需要保存后即可自动进行打包
>
> 该插件会把例子中的bundle.js放入内存中，便于快速读取，故引入文件时需要/bundle.js即可
>
> 且访问浏览器时，浏览器会自动访问文件夹中的index.html，每次修改代码并访问浏览器时，需要手动进入src文件， 比较麻烦，故可以使用以下插件



插件功能：1.将src文件下的index.html文件自动赋值到根目录下，便于直接访问浏览器页面

   				 2.自动为html文件引入内存中的bundle.js文件

![image-20220818212214663](C:/Users/HP/Desktop/holiday study/WebStudying/webStudying/pictureStore/image-20220818212214663.png)

![image-20220818205321507](C:/Users/HP/Desktop/holiday study/WebStudying/webStudying/pictureStore/image-20220818205321507.png)

![image-20220818205419603](C:/Users/HP/Desktop/holiday study/WebStudying/webStudying/pictureStore/image-20220818205419603.png)

![image-20220818210506830](C:/Users/HP/Desktop/holiday study/WebStudying/webStudying/pictureStore/image-20220818210506830.png)

>
>
>插件使用小结：先引入插件模块，再实例化插件对象并用常量接受，最后暴露以键值对的形式在exports中，即挂载到module对象上



>
>
>注意：手动配置webpack较为繁琐，故可以通过vue-cli（vue脚手架）插件去帮助我们自动配置webpack



![image-20220818210955359](C:/Users/HP/Desktop/holiday study/WebStudying/webStudying/pictureStore/image-20220818210955359.png)

注意：config文件修改后想要达到修改网页效果必须重启服务器，即两次ctrl+c



![image-20220818212245668](C:/Users/HP/Desktop/holiday study/WebStudying/webStudying/pictureStore/image-20220818212245668.png)

![image-20220818212310088](C:/Users/HP/Desktop/holiday study/WebStudying/webStudying/pictureStore/image-20220818212310088.png)

![image-20220818212330067](C:/Users/HP/Desktop/holiday study/WebStudying/webStudying/pictureStore/image-20220818212330067.png)

![image-20220818212344517](C:/Users/HP/Desktop/holiday study/WebStudying/webStudying/pictureStore/image-20220818212344517.png)

![image-20220818212356612](C:/Users/HP/Desktop/holiday study/WebStudying/webStudying/pictureStore/image-20220818212356612.png)

![image-20220818212411453](C:/Users/HP/Desktop/holiday study/WebStudying/webStudying/pictureStore/image-20220818212411453.png)





![image-20220818212422939](C:/Users/HP/Desktop/holiday study/WebStudying/webStudying/pictureStore/image-20220818212422939.png)

![image-20220818212446531](C:/Users/HP/Desktop/holiday study/WebStudying/webStudying/pictureStore/image-20220818212446531.png)
