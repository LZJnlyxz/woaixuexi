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