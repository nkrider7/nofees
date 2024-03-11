import React from "react";

export default function Stats() {
  return (
    <>
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-xl px-4 md:px-8">
          <div className="mb-10 md:mb-16">
            <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
              Our Team by the numbers
            </h2>
            <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
              This is a section of some simple filler text, also known as
              placeholder text. It shares some characteristics of a real written
              text but is random or otherwise generated.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-0 md:divide-x">
            <div className="flex flex-col items-center md:p-4">
              <div className="text-xl font-bold text-red-500 sm:text-2xl md:text-3xl">
                200
              </div>
              <div className="text-sm font-semibold sm:text-base">People</div>
            </div>

            <div className="flex flex-col items-center md:p-4">
              <div className="text-xl font-bold text-red-500 sm:text-2xl md:text-3xl">
                500+
              </div>
              <div className="text-sm font-semibold sm:text-base">People</div>
            </div>

            <div className="flex flex-col items-center md:p-4">
              <div className="text-xl font-bold text-red-500 sm:text-2xl md:text-3xl">
                1000+
              </div>
              <div className="text-sm font-semibold sm:text-base">
                Customers
              </div>
            </div>

            <div className="flex flex-col items-center md:p-4">
              <div className="text-xl font-bold text-red-500 sm:text-2xl md:text-3xl">
                A couple
              </div>
              <div className="text-sm font-semibold sm:text-base">
                Coffee breaks
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
