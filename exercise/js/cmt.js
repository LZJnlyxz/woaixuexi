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
    
