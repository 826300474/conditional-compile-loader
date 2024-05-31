import React from "react";

const Foo = (props) => {
  return (
    <div>
      {/* #ifdef aaa */}
      <h4>aaa</h4>
      {/* #end */}
      {/* #ifdef bbb */}
      <h4>bbb</h4>
      {/* #end */}
    </div>
  );
};

export default Foo;
