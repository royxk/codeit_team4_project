import React from "react";
import Input from "./Input";

const Test = () => {
  return (
    <div>
      <Input error={false} disabled={false} />
      <Input error={true} disabled={false} />
      <Input error={false} disabled={true} />
    </div>
  );
};

export default Test;
