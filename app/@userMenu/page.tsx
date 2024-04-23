const fetchLocalState = () => {
  return {
    isEdit: false,
    splitTag: ":",
  };
};

const renderReadInput = ({
  label,
  value,
  text,
  splitTag,
}: {
  label: string;
  value: any;
  text: string;
  splitTag: React.ReactNode;
}) => {
  return (
    <p className="flex items-center">
      <span className="font-bold min-w-24 inline-block overflow-hidden text-right">{label}</span>
      {splitTag}
      <span className="font-bold min-w-24 inline-block overflow-hidden text-start">{text}</span>
    </p>
  );
};

export default function UserMenu() {
  const { isEdit, splitTag } = fetchLocalState();

  let splitTagComputed =
    typeof splitTag === "string" ? (
      <span className="font-semibold m-4">{splitTag}</span>
    ) : (
      splitTag
    );

  return (
    <div className="m-auto w-fit text-center">
      <h3>用户面板</h3>
      {!isEdit && (
        <>
          {renderReadInput({
            label: "用户名",
            value: "fireMan34",
            text: "fireMan34",
            splitTag: splitTagComputed,
          })}
          {renderReadInput({
            label: "货币",
            value: 34,
            text: 34 + "元",
            splitTag: splitTagComputed,
          })}
        </>
      )}
    </div>
  );
}
