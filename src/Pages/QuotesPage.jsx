import React from "react";
import Quotes from "../components/dashboard/Quotes";
function QuotesPage(){
    return (
        <div className="min-h-screen bg-[#FEFEFE]">

            {/*Header*/}
            <header className="bg-[#1A1A1A] px-8 py-5">
                <h1 className="text-2xl text-[#D4AF37] font-semibold"
                style={{fontFamily: "Playfair Display, serif"}}>
                    Erulna
                </h1>
            </header>

            {/*Page*/}
            <main className="max-w-5xl mx-auto px-6 py-10">
                <Quotes/>
            </main>
        </div>
    );
}
export default QuotesPage;