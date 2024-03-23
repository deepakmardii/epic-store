import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ProductCard({ product }) {
  return (
    <Link
      href={`/product/${product.id}`}
      className="border-2 rounded-md group overflow-hidden"
    >
      <div className="relative w-full h-64">
        <Image src={product.image} alt={product.name} fill />
      </div>
    </Link>
  );
}
