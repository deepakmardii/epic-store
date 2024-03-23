import React from "react";
import Logo from "./Logo";

export default function Header() {
  return (
    <header className="sticky top-0 bg-white z-10 shadow">
      <div className="container mx-auto p-6 flex justify-between">
        <Logo />
      </div>
    </header>
  );
}
