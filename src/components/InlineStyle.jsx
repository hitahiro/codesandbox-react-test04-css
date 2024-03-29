export const InlineStyle = () => {
  const containerStyle = {
    border: "solid 2px blue",
    borderRadius: "20px",
    padding: "8px",
    margin: "8px",
    display: "flex", // 横並び
    justifyContent: "space-around", // 配置
    alignItems: "center"
  };
  const titleStyle = {
    margin: 0,
    color: "#3d84a8"
  };
  const buttonStyle = {
    backgroundColor: "#abedd8",
    border: "none",
    padding: "8px",
    borderRadius: "8px"
  };
  return (
    <div style={containerStyle}>
      <p style={titleStyle}> - Inline Styles - </p>
      <button style={buttonStyle}>FIGHT!!</button>
    </div>
  );
};
