import React from "react";
import Saved from "../components/dashboard/Saved";

function SavedPage() {
  return (
    <div className="min-h-screen bg-[#FEFEFE]">

      {/* header*/}
      <header className="bg-[#1A1A1A] px-6 sm:px-8 py-5">
        <div className="max-w-[1500px] mx-auto">
          <h1
            className="text-2xl sm:text-3xl font-semibold text-[#D4AF37]"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Erulna
          </h1>

          <p className="text-xs text-gray-400 mt-1">
            Beautiful design deserves beautiful lighting
          </p>
        </div>
      </header>

      {/*page*/}
      <main className="max-w-[1500px] mx-auto px-5 sm:px-8 py-8">
        <Saved />
      </main>

    </div>
  );
}

export default SavedPage;