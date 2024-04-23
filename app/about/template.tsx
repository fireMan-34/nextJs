let AboutTemplateCount = 0;

// 每一次页面 hard route 的时候会更新，一般用于用户级别更新
async function AboutTemplate({ children }: { children: React.ReactNode }) {

  await new Promise((resolve) => {
    setTimeout(() => {
      AboutTemplateCount++;
      resolve(null);
    });
  });

  return (
    <div className="mx-auto w-screen max-w-screen-xl">
      <h2 className="text-center font-extrabold text-5xl">Tempalte Load Count {AboutTemplateCount}</h2>
      {children}
    </div>
  );
}

export default AboutTemplate;
