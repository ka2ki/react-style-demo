export const InlineStyle = () => {
  const containerStyle = {
    border: "solid 2px #e00",
    borderRadius: "20px",
    padding: "8px",
    margin: "8px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center"
  };
  const titleStyle = {
    margin: "0",
    color: "blue"
  };
  const buttonStyle = {
    backgroundColor: "#abedd8",
    border: "none",
    padding: "8px",
    borderRadius: "8px"
  };
  return (
    <div style={containerStyle}>
      <p style={titleStyle}>- InlineStyle -</p>
      <button style={buttonStyle}>FIGHT</button>
    </div>
  );
};
