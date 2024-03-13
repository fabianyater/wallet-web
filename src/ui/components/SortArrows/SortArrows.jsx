import PropTypes from "prop-types";
import React from "react";
import { ChevronDown, ChevronUp } from "../../../utilities/icons/SvgIcon";

const SortArrows = ({ sortOrder }) => {
  const getIconColor = (order) => {
    if (sortOrder === order) {
      return "green"; // Color cuando el orden está activo
    }
    return "gray"; // Color cuando el orden no está activo o está cancelado
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <ChevronUp
        style={{ color: getIconColor("ascend"), width: 15, height: 15 }}
      />
      <ChevronDown
        style={{ color: getIconColor("descend"), width: 15, height: 15 }}
      />
    </div>
  );
};

SortArrows.propTypes = {
  sortOrder: PropTypes.string,
};

export default SortArrows;
