export default function () {
  return (
    <dl>
      <dt>使用客户端组件有什么用</dt>
      <dd onClick={() => console.log("可以直接使用对象")}>点击对象</dd>
      <dd onClick={() => console.clear()}>清理控制台</dd>
    </dl>
  );
}
