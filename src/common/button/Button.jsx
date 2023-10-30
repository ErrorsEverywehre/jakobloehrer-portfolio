import PropTypes from "prop-types";
import React, { useReducer } from "react";
import { Icon } from "./Icon";
import { IconComponentNode } from "./IconComponentNode";
import { NamecandidateNameIconScore01 } from "./NamecandidateNameIconScore01";
import "./style.css";

export const Button = ({ text = "button", stateProp, className }) => {
  const [state, dispatch] = useReducer(reducer, {
    state: stateProp || "default",
  });

  return (
    <button
      className={`button ${state.state} ${className}`}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onClick={() => {
        dispatch("click");
      }}
    >
      {state.state === "default" && <Icon className="icon-instance" />}

      {state.state === "hover" && <IconComponentNode className="instance-node" />}

      {state.state === "click" && <NamecandidateNameIconScore01 className="instance-node" />}

      {["click", "hover"].includes(state.state) && <div className="text-wrapper">{text}</div>}
    </button>
  );
};

function reducer(state, action) {
  if (state.state === "default") {
    switch (action) {
      case "click":
        return {
          state: "click",
        };

      case "mouse_enter":
        return {
          state: "hover",
        };
    }
  }

  if (state.state === "hover") {
    switch (action) {
      case "mouse_leave":
        return {
          state: "default",
        };
    }
  }

  return state;
}

Button.propTypes = {
  text: PropTypes.string,
  stateProp: PropTypes.oneOf(["click", "hover", "default"]),
};
