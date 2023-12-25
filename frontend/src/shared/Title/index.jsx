const Title = (props) => (
  <p
    style={{
      fontSize: props.fontsize || '18px',
      fontWeight: "bold",
      marginBottom: props.marginbottom || "30px",
      textTransform: "uppercase",
    }}
  >
    {props.children}
  </p>
);

export default Title;
