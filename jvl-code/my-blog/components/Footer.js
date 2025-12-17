import React from "react";

const Footer = () => {
  return (
    <footer
      className="fixed inset-x-0 bottom-0 flex flex-col items-center bg-neutral-900 text-center text-white p-2"
      style={{ backgroundColor: "rgba(0,0,0,0.2)" }}
    >
      <p>&copy; 2025 Nimas</p>
    </footer>
  );
};

export default Footer;
