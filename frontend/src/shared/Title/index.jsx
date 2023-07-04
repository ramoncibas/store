const Title = (props) => (
  <h1
    style={{
      fontSize: props.fontsize || '16px',
      marginBottom: props.marginbottom || "30px",
      textTransform: "uppercase",
    }}
  >
    {props.children}
  </h1>
);

export default Title;
