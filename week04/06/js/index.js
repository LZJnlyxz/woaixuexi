$(function () {
  // 使用 ajax 获取 userList.json 数据并渲染到页面
  getData();

  // 为按钮添加事件
  $("#add").click(function () {
      // TODO：补充代码，实现功能

      // 获取选中的option
      let option = $("#leftSelect option:selected");

      // jQ方法：each() 遍历jQ获取的节点
      option.each((index, item) => {
          // 删除左侧对应的option
          $(`#leftSelect option[value=${item.value}]`).remove();
          // 向右侧添加option
          $("#rightSelect")[0].add(new Option(item.value, item.value));
      });

      changeAccess("管理员", option);
  });

  $("#addAll").click(function () {
      // TODO：补充代码，实现功能
      let option = $("#leftSelect option");
      option.each((index, item) => {
          $(`#leftSelect option[value=${item.value}]`).remove();
          $("#rightSelect")[0].add(new Option(item.value, item.value));
      });
      changeAccess("管理员", option);
  });

  $("#remove").click(function () {
      // TODO：补充代码，实现功能
      let option = $("#rightSelect option:selected");
      option.each((index, item) => {
          $(`#rightSelect option[value=${item.value}]`).remove();
          $("#leftSelect")[0].add(new Option(item.value, item.value));
      });
      changeAccess("普通用户", option);
  });
  $("#removeAll").click(function () {
      // TODO：补充代码，实现功能
      let option = $("#rightSelect option");
      option.each((index, item) => {
          $(`#rightSelect option[value=${item.value}]`).remove();
          $("#leftSelect")[0].add(new Option(item.value, item.value));
      });
      changeAccess("普通用户", option);
  });
});

/**
* 修改权限
* @param {Object} right 要修改的权限
* @param {Object} changeList 要修改权限的用户列表
*/
function changeAccess(right, changeList) {
  // TODO：补充代码，实现功能
  changeList.each((index, item) => {
      // 将option.value与tr.name对应，找到对应的td并修改其内容
      // jQ方法：:last 获取最后个元素
      $(`#userList tr[name=${item.value}] td:last`).html(right);
  });
}
// 异步获取数据
function getData() {
  // TODO：补充代码，实现功能
  $.ajax("./js/userList.json").then((res) => {
      res.forEach((item) => {
          // jQ方法：html() 设置html内容
          $("#userList tbody").html(
              $("#userList tbody").html() +
                  ` <tr name=${item.name}>
                       <td>${item.name}</td>
                       <td>${item.right ? "管理员" : "普通用户"}</td> 
                    </tr>`
          );
      });
  });
}

