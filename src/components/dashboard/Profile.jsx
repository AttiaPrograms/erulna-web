import React, { useState } from "react";
import { User, Mail, Phone, Save, X } from "lucide-react";

function Profile() {
  const [formData, setFormData] = useState({
    name: "Attia",
    email: "attia@example.com",
    phone: "+92 300 1234567",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setMessage("");
  };

  const handleSave = (e) => {
    e.preventDefault();
    setMessage("Profile updated successfully.");
  };

  const handleCancel = () => {
    setFormData({
      name: "Attia",
      email: "attia@example.com",
      phone: "+92 300 1234567",
    });

    setMessage("");
  };

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <p className="text-xs tracking-[2px] font-medium text-[#D4AF37] uppercase mb-2">
          ACCOUNT SETTINGS
        </p>

        <h2
          className="text-3xl sm:text-4xl font-semibold text-[#1A1A1A]"
          style={{ fontFamily: "Playfair Display, serif" }}
        >
          Profile
        </h2>

        <p className="text-[#4A4A4A] mt-2">
          Edit your personal information.
        </p>
      </div>

      {/* Profile Card */}
      <div className="max-w-3xl bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">

        {/* Profile Top */}
        <div className="bg-[#FFF8E1] p-6 sm:p-8">
          <div className="flex items-center gap-5">

            <div className="w-20 h-20 rounded-full bg-[#D4AF37] flex items-center justify-center">
              <User size={36} className="text-[#1A1A1A]" />
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[#1A1A1A]">
                {formData.name}
              </h3>

              <p className="text-sm text-[#4A4A4A] mt-1">
                Client
              </p>
            </div>

          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSave} className="p-6 sm:p-8">

          <h3
            className="text-xl font-semibold mb-6"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Personal Information
          </h3>

          {/* Name */}
          <div className="mb-5">
            <label className="block text-sm font-medium mb-2">
              Full Name
            </label>

            <div className="relative">
              <User
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-[#4A4A4A]"
              />

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-lg outline-none focus:border-[#D4AF37]"
                placeholder="Enter your name"
              />
            </div>
          </div>

          {/* Email */}
          <div className="mb-5">
            <label className="block text-sm font-medium mb-2">
              Email Address
            </label>

            <div className="relative">
              <Mail
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-[#4A4A4A]"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-lg outline-none focus:border-[#D4AF37]"
                placeholder="Enter your email"
              />
            </div>
          </div>

          {/* Phone */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">
              Phone Number
            </label>

            <div className="relative">
              <Phone
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-[#4A4A4A]"
              />

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-lg outline-none focus:border-[#D4AF37]"
                placeholder="Enter your phone number"
              />
            </div>
          </div>

          {/* Success */}
          {message && (
            <div className="mb-5 p-3 rounded-lg bg-green-50 border border-green-200 text-green-700 text-sm">
              {message}
            </div>
          )}

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">

            <button
              type="submit"
              className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg bg-[#D4AF37] text-[#1A1A1A] font-medium hover:bg-[#FFB74D] transition"
            >
              <Save size={18} />
              Save Changes
            </button>

            <button
              type="button"
              onClick={handleCancel}
              className="sm:w-36 flex items-center justify-center gap-2 py-3 rounded-lg border border-gray-200 hover:border-[#D4AF37] transition"
            >
              <X size={18} />
              Cancel
            </button>

          </div>

        </form>
      </div>
    </div>
  );
}

export default Profile;