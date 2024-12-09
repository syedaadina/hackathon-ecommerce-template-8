import Image from 'next/image';
import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai'; // Heart icon
import { FiTrash } from 'react-icons/fi'; // Delete icon

export default function BuyingProduct() {
  return (
    <div className="container mx-auto p-4 md:p-8 lg:px-24 lg:py-12">
      <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-10">
        {/* Products Section */}
        <div className="w-full md:w-3/5">
          <h1 className="text-2xl md:text-xl font-bold mb-6">Bags</h1>
          <div className="flex flex-col gap-6">
            {/* Product Item */}
            <div className="flex flex-col md:flex-row items-center md:justify-between p-4 bg-white shadow rounded-lg">
              <div className="flex items-center gap-6">
                <Image
                  src="/newstyle/main.png"
                  alt="Product Image"
                  className="rounded-lg"
                  width={150}
                  height={150}
                  sizes="(max-width: 768px) 100px, 150px"
                />
                <div>
                  <h1 className="font-semibold text-xl md:text-lg">Library Stool Chair</h1>
                  <h2 className="text-base md:text-sm text-gray-700 mt-1">Asthen Slate / Cobait Bliss</h2>
                  <div className="text-sm md:text-xs text-gray-600 mt-2">
                    <p>Size: L</p>
                    <p>Quantity: 1</p>
                  </div>
                  <div className="flex gap-4 mt-4 text-gray-800">
                    <AiOutlineHeart className="text-2xl cursor-pointer hover:text-red-500" />
                    <FiTrash className="text-2xl cursor-pointer hover:text-gray-500" />
                  </div>
                </div>
              </div>
              <div className="text-xl md:text-lg font-semibold mt-4 md:mt-0">MRP: $99</div>
            </div>

            {/* Duplicate Product Item */}
            <div className="flex flex-col md:flex-row items-center md:justify-between p-4 bg-white shadow rounded-lg">
              <div className="flex items-center gap-6">
                <Image
                  src="/newstyle/first.png"
                  alt="Product Image"
                  className="rounded-lg"
                  width={150}
                  height={150}
                  sizes="(max-width: 768px) 100px, 150px"
                />
                <div>
                  <h1 className="font-semibold text-xl md:text-lg">Library Stool Chair</h1>
                  <h2 className="text-base md:text-sm text-gray-700 mt-1">Asthen Slate / Cobait Bliss</h2>
                  <div className="text-sm md:text-xs text-gray-600 mt-2">
                    <p>Size: L</p>
                    <p>Quantity: 1</p>
                  </div>
                  <div className="flex gap-4 mt-4 text-gray-800">
                    <AiOutlineHeart className="text-2xl cursor-pointer hover:text-red-500" />
                    <FiTrash className="text-2xl cursor-pointer hover:text-gray-500" />
                  </div>
                </div>
              </div>
              <div className="text-xl md:text-lg font-semibold mt-4 md:mt-0">MRP: $99</div>
            </div>
          </div>
        </div>

        {/* Summary Section */}
        <div className="w-full md:w-1/3 flex flex-col justify-center items-center gap-6 bg-white shadow rounded-lg p-6">
          <h1 className="text-2xl md:text-xl font-bold mb-4">Summary</h1>
          <div className="w-full space-y-4">
            <div className="flex justify-between text-lg md:text-base">
              <span>Sub Total</span>
              <span>$198.00</span>
            </div>
            <div className="flex justify-between text-lg md:text-base">
              <span>Estimate Delivery & Handling</span>
              <span>Free</span>
            </div>
            <div className="flex justify-between text-xl md:text-lg font-semibold">
              <span>Total</span>
              <span>$198.00</span>
            </div>
          </div>
          <button className="w-full text-lg md:text-base font-semibold text-white bg-cyan-500 rounded-full py-3 mt-6 hover:bg-cyan-600 transition">
            Member Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
