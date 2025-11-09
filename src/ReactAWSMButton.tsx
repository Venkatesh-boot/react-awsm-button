import React from "react";

export interface ReactAwesomeButtonProps {
  label: string;
}

export const ReactAWSMButton: React.FC<ReactAwesomeButtonProps> = ({ label }) => {
  return <button style={{ backgroundColor: "#4CAF50", color: "#fff", padding: "10px 25px" }}>{label}</button>;
};