const Card = (props) => {
  return (
    <div
      style={{
        flex: "1",
        minWidth: "238px",
        margin: "0px 0px 15px 12px",
        borderRadius: "8px",
        transition: "all ease 0.3s"
      }}
    >
      <div
        style={{
          padding: "12px",
          borderRadius: "8px",
          boxShadow:
            "rgba(0, 0, 0, 0.1) 0px 1px 2px 0px, rgba(0, 0, 0, 0.08) 0px 2px 8px 0px"
        }}
      >
        {props.children}
      </div>
    </div>
  );
};

export default Card;
