import React from "react";
import { MapPin, Clock3, CheckCircle2, Circle } from "lucide-react";

const trackQuotes = [
  {
    id: "#ER-1024",
    title: "Living Room Lighting",
    date: "20 Aug 2026",
    status: "In Review",
    progress: 60,
  },
  {
    id: "#ER-1021",
    title: "Bedroom Lighting",
    date: "18 Aug 2026",
    status: "Pending",
    progress: 30,
  },
  {
    id: "#ER-1018",
    title: "Office Lighting",
    date: "15 Aug 2026",
    status: "Approved",
    progress: 100,
  },
  {
        title:"Kitchen Ceiling Light",
        id: "#ER-1026",
        date: "10 Aug 2026",
        status: "In Review",
        progress: 50,
    },
    {
        title: "Dining Room Candilier",
        id: "#ER-1029",
        date: "03 Aug 2026",
        status: "Pending",
        progress: 55,
    },
    {
        title: "Study room Desk Light",
        id: "#ER-1010",
        date: "01-July 2026",
        status: "Approved",
        progress: 85,
    },
];

function Track() {
  return (
    <div>
      {/* Heading */}
      <div className="mb-8">
        <h2
          className="text-3xl font-semibold text-[#1A1A1A]"
          style={{ fontFamily: "Playfair Display, serif" }}
        >
          Track Quote
        </h2>

        <p className="text-[#4A4A4A] mt-2">
          Track the current status of your lighting quote requests.
        </p>
      </div>

      {/* Quotes */}
      <div className="space-y-6">
        {trackQuotes.map((quote) => (
          <div
            key={quote.id}
            className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm"
          >
            {/* Top */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#FFF8E1] text-[#D4AF37] flex items-center justify-center">
                  <MapPin size={22} />
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-[#1A1A1A]">
                    {quote.title}
                  </h3>

                  <p className="text-sm text-[#4A4A4A] mt-1">
                    {quote.id} • {quote.date}
                  </p>
                </div>
              </div>

              {/* Status */}
              <span className="w-fit px-4 py-2 rounded-full bg-[#FFF8E1] text-[#1A1A1A] text-sm font-medium">
                {quote.status}
              </span>
            </div>

            {/* Progress */}
            <div className="mt-7">
              <div className="flex justify-between mb-2">
                <span className="text-sm text-[#4A4A4A]">
                  Quote Progress
                </span>

                <span className="text-sm font-semibold text-[#D4AF37]">
                  {quote.progress}%
                </span>
              </div>

              <div className="w-full h-2 bg-gray-100 rounded-full">
                <div
                  className="h-2 bg-[#D4AF37] rounded-full"
                  style={{ width: `${quote.progress}%` }}
                />
              </div>
            </div>

            {/* Steps */}
            <div className="grid grid-cols-3 gap-3 mt-8">
              <div className="text-center">
                <CheckCircle2
                  size={22}
                  className="mx-auto text-[#D4AF37]"
                />
                <p className="text-xs mt-2 font-medium">Request Sent</p>
              </div>

              <div className="text-center">
                {quote.progress >= 60 ? (
                  <CheckCircle2
                    size={22}
                    className="mx-auto text-[#D4AF37]"
                  />
                ) : (
                  <Clock3
                    size={22}
                    className="mx-auto text-gray-400"
                  />
                )}

                <p className="text-xs mt-2 font-medium">Under Review</p>
              </div>

              <div className="text-center">
                {quote.progress === 100 ? (
                  <CheckCircle2
                    size={22}
                    className="mx-auto text-[#D4AF37]"
                  />
                ) : (
                  <Circle
                    size={22}
                    className="mx-auto text-gray-300"
                  />
                )}

                <p className="text-xs mt-2 font-medium">Approved</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Track;