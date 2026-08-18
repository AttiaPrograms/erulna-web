import React from "react";
export const quotes =[
    {
        title: "Living Room Lighting",
        id: "#ER-1024",
        date: "20 Aug 2026",
        status: "In Review",
    },
    {
        title: "Bedroom lighting",
        id: "#ER-1021",
        date: "18 Aug 2026",
        status: "Pending",
    },
    {
        title: "Office Lighting",
        id: "#ER-1018",
        date: "15 Aug 2026",
        status: "Approved",
    },
    {
        title:"Kitchen Ceiling Light",
        id: "#ER-1026",
        date: "10 Aug 2026",
        status: "In Review",
    },
    {
        title: "Dining Room Candilier",
        id: "#ER-1029",
        date: "03 Aug 2026",
        status: "Pending",
    },
    {
        title: "Study room Desk Light",
        id: "#ER-1010",
        date: "01-July 2026",
        status: "Approved",
    },
];
function Quotes(){
    return(
        <div>
            <h2 className="text-3xl font-semibold text-[#1A1A1A] mb-2"
            style={{fontFamily: "Playfair Display, serif"}}>
                Quote Request
            </h2>

            <p className="text-[#4A4A4A] mb-6">
                View all your lighting quote request.
            </p>

            <div className="space-y-4">
                {quotes.map((quote) =>(
                    <div key={quote.id}
                    className="bg-[#FFF8E1] border-l-4 border-[#d4AF37] rounded-lg p-5">
                        <div className="flex justify-between items-center">
                            <div>
                                <h3 className="text-lg font-semibold text-[#1A1A1A]">
                                    {quote.title}
                                </h3>

                                <p className="text-sm text-[#4A4A4A] mt-1">
                                    {quote.id} .{quote.date}
                                </p>
                            </div>
                            <span className="bg-[#D4AF37] text-[#1A1A1A] px-3 py-2 rounded-lg text-sm">
                                {quote.status}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default Quotes;