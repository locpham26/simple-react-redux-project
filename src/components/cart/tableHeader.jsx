import React from "react";

function TableHeader({ columns }) {
  return (
    <thead>
      <tr>
        {columns.map((column) => (
          <th>{column.label}</th>
        ))}
      </tr>
    </thead>
  );
}

export default TableHeader;
