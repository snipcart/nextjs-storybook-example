/** @jsxImportSource @emotion/react */
import React from "react";
export default function Banner({ variant = "info", children }) {
  const beforeStyles = {
    width: 35,
    height: 35,
    display: "inline-flex",
    justifyContent: "center",
    position: "absolute",
    left: "-1.2rem",
    borderRadius: "50%",
    alignItems: "center",
    top: "-0.8rem",
  };

  const variantStyles = {
    info: {
      borderLeft: "4px solid #b4aaff",
      backgroundColor: "rgba(224, 226, 255, 0.5)",
      color: "#2a2135",
      "&:before": {
        content: '"🔑"',
        backgroundColor: "#b4aaff",
        ...beforeStyles,
      },
    },
    danger: {
      borderLeft: "4px solid #ff7828",
      backgroundColor: "rgb(253, 236, 234)",
      "&:before": {
        content: '"⚠️"',
        backgroundColor: "#ff7828",
        ...beforeStyles,
      },
    },
    congrats: {
      borderLeft: "4px solid #72bc23",
      backgroundColor: "rgb(249, 253, 234)",
      "&:before": {
        content: '"🎉"',
        backgroundColor: "#72bc23",
        ...beforeStyles,
      },
    },
    documentation: {
      borderLeft: "4px solid #44a9ba",
      backgroundColor: "rgb(234, 248, 253);",
      "&:before": {
        content: '"📚"',
        backgroundColor: "#44a9ba",
        ...beforeStyles,
      },
    },
  };
  return (
    <aside
      css={{
        margin: "1.5rem auto",
        borderRadius: "0px 10px 10px 0px",
        padding: "0.8em 1em",
        lineHeight: "1.2",
        textAlign: "center",
        position: "relative",
        clear: "both",
        maxWidth: "500px",
        ...variantStyles[variant],
      }}
      s
    >
      {children}
    </aside>
  );
}

Banner.propTypes = {
  variant: "info" | "congrats" | "documentation" | "danger",
};
