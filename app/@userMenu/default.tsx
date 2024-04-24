/**
 *
 * @fileoverview 当 404 可以查询对应无默认平行路由的展示,官网案例算是比较费解的，因为它把平行路由嵌在根布局里
 * @export
 * @return {*} 
 */
export default function DefaultSlot () {
  return <p>
    硬导航会丢失插槽状态，所以会展示 default 插槽对应的 UI 或者使用 默认 404 页面 
  </p>;
}