let AboutTemplateCount = 0;

// template 定义的时候 layout 默默是 template
function AboutTemplate({
  children,
}: {
  children: React.ReactNode;
}) {

  return <div>
    <h2 className="text-green-500">Tempalte {AboutTemplateCount++}</h2>
    {children}
  </div>
};

export default AboutTemplate;