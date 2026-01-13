import React from "react";

function Error404() {
  const styles = {
    container: {
      height: "100vh",
      background: "#e6e6e6",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
    },
    code: {
      fontSize: "140px",
      color: "#bfbfbf",
      margin: 0,
    },
    msg: {
      fontSize: "28px",
      fontWeight: "bold",
      marginTop: "-10px",
    },
    sub: {
      color: "#555",
      marginTop: "5px",
    },
    button: {
      marginTop: "20px",
      padding: "10px 25px",
      background: "black",
      color: "white",
      border: "none",
      borderRadius: "25px",
      cursor: "pointer",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.code}>404</h1>
      <p style={styles.msg}>Sorry, Page Not Found</p>
    </div>
  );
}

export default Error404;
