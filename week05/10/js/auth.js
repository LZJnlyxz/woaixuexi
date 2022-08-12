// menuList 仅为示例数据，非实际使用数据，实际使用数据层级不确定（可能是四级五级六级等），数据结构与 menuList 一致
// 1. `parentId` 如果为 `-1`，则表示此条数据为顶级数据。
// 2. `parentId` 为该条数据的父级数据的 `id`。

let menuList = [
  { parentId: -1, name: "添加管理员", id: 10, auth: "admin" },
  { parentId: 10, name: "管理员权限分配", id: 11, auth: "admin-auth" },
  { parentId: -1, name: "商品管理", id: 1, auth: "product" },
  // { parentId: 6, name: "赤门网络暗杀速度还等哈说", id: 12, auth: "product" },
  { parentId: 1, name: "商品列表", id: 4, auth: "productList" },
  { parentId: 4, name: "商品分类", id: 5, auth: "category" },
  { parentId: 5, name: "添加分类", id: 8, auth: "addClassification" },
  { parentId: 4, name: "商品上架", id: 6, auth: "product" },
  { parentId: -1, name: "评论管理", id: 2, auth: "comments" },
  { parentId: -1, name: "个人中心", id: 3, auth: "profile" },
];

/**
* @param {*} menuList 传入的数据
* @return {*} menus 转化后的树形结构数据，auths 转化后的权限列表数组
*/

const getMenuListAndAuth = (menuList) => {
  // TODO：待补充代码
  let menus = [],
      auths = [],
      // emenus存放那些还未找到上级（未被push的项）
      emenus = [],
      // 项是否被落下（是否未被push）
      isDiscard = true;

  // 创建一个能够递归查找push的函数
  function addChildren(fat, chil) {
      fat.forEach((fatItem) => {
          if (fatItem.id === chil.parentId) {
              fatItem.children.push(chil);
              // 只要项被push了，说明它没有被落下，立即修改isDiscard
              isDiscard = false;
              return;
          } else {
              // 递归
              addChildren(fatItem.children, chil);
          }
      });
  }

  // 遍历原数据
  menuList.forEach((item) => {
      // 每一次遍历数据时都提前默认isDiscard为true，因为此时数据还未被push
      isDiscard = true;
      item.children = [];

      auths.push(item.auth);

      if (item.parentId === -1) {
          menus.push(item);
          isDiscard = false;
      } else {
          addChildren(menus, item);
          // 一次遍历结束了，如果isDiscard还为true，即还未被push
          // 说明这一项的父级还没有出现，为了防止这一项丢失，将它暂存到emenus中
          if (isDiscard) {
              emenus.push(item);
          }
      }
  });

  // 转换的过程结束了，如果emenus不为空，说明有项被丢弃落下了
  // 项被落下的原因是：它的父级比它出现的晚，在顺序遍历到它时，因前面没有它的父级，导致它无法被接收
  if (emenus.length !== 0) {
      // 这时其它项已经全部加入menus，此时再次将emenus中被落下的项向menus中添加肯定能加上
      emenus.forEach((item) => {
          addChildren(menus, item);
      });
  }

  return { menus, auths }; // menus 转化后的树形结构数据，auths 转化后的权限列表数组
};

// 请勿删除和修改以下代码
try {
  module.exports = { getMenuListAndAuth };
} catch (e) {}

