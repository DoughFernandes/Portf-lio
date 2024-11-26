import React from "react";

type ErrorSpanProps = {
  message: string;
};

const ErrorSpan: React.FC<ErrorSpanProps> = ({ message }) => {
  return <span>{message}</span>;
};

export default ErrorSpan;
