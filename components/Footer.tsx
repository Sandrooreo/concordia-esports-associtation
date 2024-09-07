import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-concordia-burgundy text-white py-4">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Concordia Esports Association. All rights
          reserved.
        </p>
        <p className="text-xs mt-2">
          Designed and developed by Alessandro Iorio and Nick Stewart
        </p>
      </div>
    </footer>
  );
};

export default Footer;
