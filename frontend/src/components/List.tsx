import React from "react";

const List = ({ children }: { children?: React.ReactNode }) => (
  <ul className="list-group list-group-flush">{children}</ul>
);

export default List;
