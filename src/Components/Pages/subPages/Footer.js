import React from "react";

export default function Footer(props) {
  return (
    <div className="topnav">
      <a
        href="#"
        onClick={() => {
          props.page > 1 && props.setPage(props.page - 1);
        }}
      >
        &laquo; Previous
      </a>
      <a
        href="#"
        className="next"
        onClick={() => {
          props.setPage(props.page + 1);
        }}
      >
        Next &raquo;
      </a>
    </div>
  );
}
