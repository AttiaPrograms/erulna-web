import React, { useState } from "react";
import {quotes} from "../components/dashboard/Quotes";
import Quotes from "../components/dashboard/Quotes";
import {
  LayoutDashboard,
  FileText,
  MapPin,
  Heart,
  Bot,
  Lightbulb,
  User,
  LogOut,
  Bell,
  ArrowRight,
  Clock3,
  CheckCircle2,
} from "lucide-react";

export default function DashboardPage() {
  const [activePage, setActivePage] = useState("Dashboard");

  const menuItems = [
    { name: "Dashboard", icon: LayoutDashboard },
    { name: "Quote Requests", icon: FileText },
    { name: "Track Quote", icon: MapPin },
    { name: "Saved Designs", icon: Heart },
    { name: "AI Chatbot", icon: Bot },
    { name: "AI Lighting Simulator", icon: Lightbulb },
    { name: "Profile", icon: User },
  ];

  const stats = [
    { title: "Total Quotes", value: "06", icon: FileText },
    { title: "Pending Quotes", value: "02", icon: Clock3 },
    { title: "Approved Quotes", value: "02", icon: CheckCircle2 },
    { title: "Saved Designs", value: "06", icon: Heart },
  ];

  return (
    <div className="min-h-screen bg-[#FEFEFE]">

      {/* Sidebar */}
      <aside className="fixed left-0 top-0 w-[250px] h-screen bg-[#1A1A1A] text-white hidden lg:flex flex-col z-50">

        {/* Logo */}
        <div className="px-7 py-7 border-b border-white/10">
          <h1 className="text-3xl font-serif font-semibold text-[#D4AF37]">
            Erulna
          </h1>

          <p className="text-xs text-gray-400 mt-2 leading-5">
            Beautiful design deserves
            <br />
            beautiful lighting
          </p>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-6">
          <div className="space-y-1">

            {menuItems.map((item) => {
              const Icon = item.icon;

              return (
                <button
                  key={item.name}
                  onClick={() => setActivePage(item.name)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm transition ${
                    activePage === item.name
                      ? "bg-[#D4AF37] text-[#1A1A1A] font-medium"
                      : "text-gray-300 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <Icon size={18} />
                  <span>{item.name}</span>
                </button>
              );
            })}

          </div>
        </nav>

        {/* Logout */}
        <div className="p-4 border-t border-white/10">
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm text-gray-300 hover:bg-white/10 hover:text-white transition">
            <LogOut size={18} />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Main arae */}
      <div className="lg:ml-[250px] min-h-screen">

        {/* Top header */}
        <header className="h-[75px] bg-[#FEFEFE] border-b border-gray-200 flex items-center justify-between px-5 sm:px-8">

          <div className="lg:hidden">
            <h1 className="text-2xl font-serif font-semibold">
              Erulna
            </h1>
          </div>

          <div className="hidden lg:block">
            <p className="text-sm text-[#4A4A4A]">
              Client Dashboard
            </p>
          </div>

          <div className="flex items-center gap-4 ml-auto">

            {/* Notification */}
            <button className="relative w-10 h-10 rounded-full bg-[#F5F5F5] flex items-center justify-center hover:bg-[#FFB74D] transition">
              <Bell size={19} />

              <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-[#D4AF37]" />
            </button>

            {/* User */}
            <div className="flex items-center gap-3">

              <div className="w-10 h-10 rounded-full bg-[#D4AF37] flex items-center justify-center">
                <User size={19} />
              </div>

              <div className="hidden sm:block">
                <p className="text-sm font-semibold">
                  Attia
                </p>

                <p className="text-xs text-[#4A4A4A]">
                  Client
                </p>
              </div>

            </div>
          </div>
        </header>

        {/* Content */}
        <main className="p-5 sm:p-8 max-w-[1500px]">
          {/* QUOTE REQUESTS PAGE */}
          
          {activePage === "Quote Requests" ? (
            <Quotes/>
          ) :activePage ==="Dashboard" ? (
            <>
  
            {/* Welcome */}
               <section className="mb-8">

                <p className="text-xs tracking-[2px] font-medium text-[#D4AF37] uppercase mb-2">
                  Welcome Back
                </p>

                <h2 className="text-3xl sm:text-4xl font-serif font-semibold">
                  Hello, Attia
                </h2>

                <p className="text-[#4A4A4A] mt-2">
                  Manage your lighting projects, quotes and saved designs.
                </p>

              </section>


              {/* stats */}
              <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-8">

                {stats.map((stat) => {

                  const Icon = stat.icon;

                  return (

                    <div
                      key={stat.title}
                      className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition"
                    >

                      <div className="flex justify-between items-start">

                        <div className="w-11 h-11 rounded-lg bg-[#F5F5F5] text-[#D4AF37] flex items-center justify-center">
                          <Icon size={21} />
                        </div>

                        <ArrowRight
                          size={17}
                          className="text-[#4A4A4A]"
                        />

                      </div>

                      <h3 className="text-3xl font-semibold mt-5">
                        {stat.value}
                      </h3>

                      <p className="text-sm text-[#4A4A4A] mt-1">
                        {stat.title}
                      </p>

                    </div>

                  );

                })}

              </section>


              {/* Lower section */}
              <section className="grid grid-cols-1 xl:grid-cols-3 gap-6">

                {/* Recent Quotes */}
                <div className="xl:col-span-2 bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">

                  <div className="p-6 border-b border-gray-100 flex items-center justify-between">

                    <div>

                      <h3 className="text-xl font-serif font-semibold">
                        Recent Quote Requests
                      </h3>

                      <p className="text-sm text-[#4A4A4A] mt-1">
                        Your latest lighting requests
                      </p>

                    </div>

                    <button
                      onClick={() => setActivePage("Quote Requests")}
                      className="hidden sm:flex items-center gap-1 text-sm text-[#1565C0] hover:underline"
                    >
                      View All
                      <ArrowRight size={15} />
                    </button>

                  </div>


                  <div className="p-5">

                    {quotes.slice(0,3).map((quote) => (

                      <div
                        key={quote.id}
                        className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 mb-3 last:mb-0 bg-[#FFF8E1] border-l-4 border-[#D4AF37] rounded-lg"
                      >

                        <div className="flex items-center gap-4">

                          <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center text-[#D4AF37]">
                            <Lightbulb size={21} />
                          </div>

                          <div>

                            <h4 className="text-sm font-semibold">
                              {quote.title}
                            </h4>

                            <p className="text-xs text-[#4A4A4A] mt-1">
                              {quote.id} • {quote.date}
                            </p>

                          </div>

                        </div>


                        <span className="w-fit px-3 py-1.5 rounded-full bg-white text-[#1A1A1A] text-xs font-medium">
                          {quote.status}
                        </span>

                      </div>

                    ))}

                  </div>

                </div>


                {/* Project Update */}
                <div className="bg-[#1A1A1A] text-white rounded-xl p-6 shadow-sm">

                  <div className="w-12 h-12 rounded-xl bg-[#D4AF37] text-[#1A1A1A] flex items-center justify-center mb-5">
                    <Lightbulb size={23} />
                  </div>

                  <p className="text-xs tracking-[2px] text-[#D4AF37] font-medium">
                    PROJECT UPDATE
                  </p>

                  <h3 className="text-2xl font-serif font-semibold mt-2">
                    Your lighting project is moving forward.
                  </h3>

                  <p className="text-sm text-gray-300 leading-6 mt-4">
                    Your latest quote is currently being reviewed by the Erulna lighting team.
                  </p>


                  {/* Progress */}
                  <div className="mt-7">

                    <div className="flex justify-between mb-2">

                      <span className="text-xs text-gray-300">
                        Project Progress
                      </span>

                      <span className="text-xs text-[#D4AF37]">
                        60%
                      </span>

                    </div>

                    <div className="w-full h-2 bg-white/10 rounded-full">
                      <div className="h-2 w-[60%] bg-[#D4AF37] rounded-full" />
                    </div>

                  </div>


                  <button className="w-full mt-7 py-3 rounded-lg bg-[#D4AF37] text-[#1A1A1A] text-sm font-medium flex items-center justify-center gap-2 hover:bg-[#FFB74D] transition">
                    Track Quote
                    <ArrowRight size={17} />
                  </button>

                </div>

              </section>


              {/* Quick access */}
              <section className="mt-8">

                <h3 className="text-2xl font-serif font-semibold">
                  Quick Access
                </h3>

                <p className="text-sm text-[#4A4A4A] mt-1 mb-5">
                  Manage your lighting projects easily.
                </p>


                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">

                  <button
                    onClick={() => setActivePage("Quote Requests")}
                    className="text-left p-5 bg-white border border-gray-200 rounded-xl hover:border-[#D4AF37] hover:shadow-md transition"
                  >

                    <FileText
                      size={22}
                      className="text-[#D4AF37]"
                    />

                    <h4 className="font-semibold mt-4">
                      Quote Requests
                    </h4>

                    <p className="text-sm text-[#4A4A4A] mt-1">
                      View and manage your quote requests.
                    </p>

                  </button>


                  <button className="text-left p-5 bg-white border border-gray-200 rounded-xl hover:border-[#D4AF37] hover:shadow-md transition">

                    <MapPin
                      size={22}
                      className="text-[#D4AF37]"
                    />

                    <h4 className="font-semibold mt-4">
                      Track Quote
                    </h4>

                    <p className="text-sm text-[#4A4A4A] mt-1">
                      Check the current status of your quote.
                    </p>

                  </button>


                  <button className="text-left p-5 bg-white border border-gray-200 rounded-xl hover:border-[#D4AF37] hover:shadow-md transition">

                    <Heart
                      size={22}
                      className="text-[#D4AF37]"
                    />

                    <h4 className="font-semibold mt-4">
                      Saved Designs
                    </h4>

                    <p className="text-sm text-[#4A4A4A] mt-1">
                      View your favorite lighting designs.
                    </p>

                  </button>

                </div>

              </section>

            </>

          ): null}

        </main>

      </div>

    </div>
  );
}