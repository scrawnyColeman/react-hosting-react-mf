import React, { FunctionComponent, useState, useRef, useEffect } from "react";

const LocalCard: FunctionComponent = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((prevState) => prevState + 1);
  };

  useEffect(() => {
    if (!buttonRef.current) return;

    buttonRef.current.addEventListener("mouseover", () => {
      buttonRef.current!.style.opacity = "75%";
    });
    buttonRef.current.addEventListener("mouseout", () => {
      buttonRef.current!.style.opacity = "100%";
    });
  }, [buttonRef]);

  return (
    <div
      style={{
        width: "100%",
        height: "250px",
        borderRadius: "20px",
        padding: "20px",
        boxSizing: "border-box",
        backgroundColor: "#a1d940",
        color: "#17111c",
      }}
    >
      <h4 style={{ margin: "0 0 1rem" }}>
        A local card defined within the host React App
      </h4>
      <button
        ref={buttonRef}
        type="button"
        style={{
          padding: "0.5rem",
          borderRadius: "0.375rem",
          backgroundColor: "rgb(180, 233, 135)",
          color: "#17111c",
          fontWeight: 600,
          cursor: "pointer",
        }}
        onClick={handleClick}
      >
        Click count: {count}
      </button>
    </div>
  );
};

export default LocalCard;
