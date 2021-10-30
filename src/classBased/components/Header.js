import React from "react";

// same as function Header() {}
const Header = () => {
  // inline styles can be passed by variables
  const headerStyle = {
    padding: "20px 0",
    lineHeight: "1.5em",
  }
  return (
    <header style={headerStyle}>
      <h1
        // inline styles as JSX will add JS object to attribute
        // JSX objects within {{}} and keys are camelCase
        style={{
          fontSize: "6rem",
          fontWeight: "600",
          marginBottom: "2rem",
          lineHeight: "1em",
          color: "#ecece",
          textTransform: "lowercase",
          textAlign: "center",
        }}
      >
        todos
      </h1>
    </header>
  )
}

export default Header