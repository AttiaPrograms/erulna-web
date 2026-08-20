import React, { useState } from "react";
import image1 from "../../assets/image1.jpg";
import image2 from "../../assets/image2.jpg";
import image3 from "../../assets/image3.jpg";
import image4 from "../../assets/image4.jpg";
import image5 from "../../assets/image5.jpg";
import image6 from "../../assets/image6.jpg";
import {
  Heart,
  Eye,
  Trash2,
  Lightbulb,
} from "lucide-react";

const savedDesigns = [
  {
    id: 1,
    title: "Modern Living Room",
    room: "Living Room",
    date: "20 Aug 2026",
    image: image1,
  },
  {
    id: 2,
    title: "Warm Bedroom Lighting",
    room: "Bedroom",
    date: "18 Aug 2026",
    image: image2,
  },
  {
    id: 3,
    title: "Luxury Dining Lights",
    room: "Dining Room",
    date: "15 Aug 2026",
    image: image3,
  },
  {
    id: 4,
    title: "Elegant Kitchen Lights",
    room: "Kitchen",
    date: "10 Aug 2026",
    image: image4,
  },
  {
    id: 5,
    title: "Minimal Study Lighting",
    room: "Study Room",
    date: "03 Aug 2026",
    image: image5,
  },
  {
    id: 6,
    title: "Modern Office Lighting",
    room: "Office",
    date: "01 July 2026",
    image: image6,
  },
];

function Saved() {
  const [designs, setDesigns] = useState(savedDesigns);

  // Remove design
  const removeDesign = (id) => {
    setDesigns(
      designs.filter((design) => design.id !== id)
    );
  };

  // View design
  const viewDesign = (title) => {
    alert(`Viewing ${title}`);
  };

  return (
    <div>

      {/* header*/}

      <div className="mb-8">

        <p className="text-xs tracking-[2px] font-medium text-[#D4AF37] uppercase mb-2">
          MY COLLECTION
        </p>

        <h2
          className="text-3xl sm:text-4xl font-semibold text-[#1A1A1A]"
          style={{
            fontFamily: "Playfair Display, serif",
          }}
        >
          Saved Designs
        </h2>

        <p className="text-[#4A4A4A] mt-2">
          View and manage your favorite lighting designs.
        </p>

      </div>


      {/* Empty space*/}

      {designs.length === 0 ? (

        <div className="bg-white border border-gray-200 rounded-xl p-12 text-center">

          <div className="w-16 h-16 mx-auto rounded-full bg-[#FFF8E1] flex items-center justify-center">

            <Heart
              size={28}
              className="text-[#D4AF37]"
            />

          </div>

          <h3 className="text-xl font-semibold mt-5">
            No Saved Designs
          </h3>

          <p className="text-[#4A4A4A] mt-2">
            You have not saved any lighting designs yet.
          </p>

        </div>

      ) : (

  
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">

          {designs.map((design) => (

            <div
              key={design.id}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md hover:border-[#D4AF37] transition"
            >

              {/* Image*/}
              <div className="relative h-56 overflow-hidden group">
                <img src={design.image} alt={design.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"/>

                {/* Heart Button */}

                <button
                  onClick={() =>
                    removeDesign(design.id)
                  }
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-gray-100 transition"
                  title="Remove from saved designs"
                >

                  <Heart
                    size={19}
                    className="text-[#D4AF37]"
                    fill="#D4AF37"
                  />

                </button>


                {/* Room Badge */}

              </div>


              {/* Content*/}

              <div className="p-5">

                <div className="flex items-start justify-between gap-3">

                  <div>

                    <h3 className="text-lg font-semibold text-[#1A1A1A]">
                      {design.title}
                    </h3>

                    <p className="text-sm text-[#4A4A4A] mt-1">
                      Saved on {design.date}
                    </p>

                  </div>


                  {/* Small Icon */}

                  <div className="w-9 h-9 rounded-lg bg-[#FFF8E1] text-[#D4AF37] flex items-center justify-center shrink-0">

                    <Lightbulb size={18} />

                  </div>

                </div>


                {/*Buttons*/}

                <div className="flex gap-3 mt-5">

                  {/* View Design */}

                  <button
                    onClick={() =>
                      viewDesign(design.title)
                    }
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg bg-[#D4AF37] text-[#1A1A1A] text-sm font-medium hover:bg-[#FFB74D] transition"
                  >

                    <Eye size={17} />

                    View Design

                  </button>


                  {/* Remove */}

                  <button
                    onClick={() =>
                      removeDesign(design.id)
                    }
                    className="w-11 flex items-center justify-center rounded-lg border border-gray-200 text-[#4A4A4A] hover:border-red-300 hover:text-red-500 transition"
                    title="Remove"
                  >

                    <Trash2 size={17} />

                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      )}

    </div>
  );
}

export default Saved;