import React from "react";

const DashboardPage = () => {
  return (
    <div className="p-8 space-y-8 bg-white h-full">
      <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1: Total Users */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between h-32">
          <div className="flex justify-between items-start">
            <h3 className="text-sm font-medium text-gray-500">Total Users</h3>
            <span className="p-2 bg-red-50 rounded-lg text-red-500">👤</span>
          </div>
          <div>
            <p className="text-3xl font-bold text-gray-900">500+</p>
            <p className="text-xs text-gray-400 mt-1">+ 20%</p>
          </div>
        </div>

        {/* Card 2: Total Subscriptions */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between h-32">
          <div className="flex justify-between items-start">
            <h3 className="text-sm font-medium text-gray-500">
              Total Subscriptions
            </h3>
            <span className="p-2 bg-purple-50 rounded-lg text-purple-500">
              👑
            </span>
          </div>
          <div>
            <p className="text-3xl font-bold text-gray-900">120</p>
            <p className="text-xs text-gray-400 mt-1">+ 20%</p>
          </div>
        </div>

        {/* Card 3: Monthly Revenue */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between h-32">
          <div className="flex justify-between items-start">
            <h3 className="text-sm font-medium text-gray-500">
              Monthly Revenue
            </h3>
            <span className="p-2 bg-green-50 rounded-lg text-green-500">
              💲
            </span>
          </div>
          <div>
            <p className="text-3xl font-bold text-gray-900">$500+</p>
            <p className="text-xs text-gray-400 mt-1">+ 20%</p>
          </div>
        </div>
      </div>

      {/* Statistics Chart Section */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-semibold text-gray-900">My Statistics</h3>
          <button className="text-sm border rounded-lg px-3 py-1 flex items-center gap-2">
            Year 2025 <span>▼</span>
          </button>
        </div>
        <div className="h-64 flex items-center justify-center bg-gray-50 rounded-xl border border-dashed border-gray-200 text-gray-400">
          Chart Placeholder
        </div>
      </div>

      {/* New Users Table Section */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">New Users</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-[#F9FAFB]">
              <tr>
                <th className="py-4 px-4 text-sm font-medium text-gray-500 rounded-s-xl">
                  Name
                </th>
                <th className="py-4 px-4 text-sm font-medium text-gray-500">
                  Email
                </th>
                <th className="py-4 px-4 text-sm font-medium text-gray-500">
                  Last Mood
                </th>
                <th className="py-4 px-4 text-sm font-medium text-gray-500">
                  Onboarding Date
                </th>
                <th className="py-4 px-4 text-sm font-medium text-gray-500 rounded-e-xl">
                  Subscription
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[1, 2, 3].map((item) => (
                <tr key={item} className="group hover:bg-gray-50">
                  <td className="py-4 px-4 text-sm font-medium text-gray-900">
                    Martin Lu
                  </td>
                  <td className="py-4 px-4 text-sm text-gray-500">
                    Lu.martin@mail.com
                  </td>
                  <td className="py-4 px-4 text-sm text-gray-500">Happy</td>
                  <td className="py-4 px-4 text-sm text-gray-500">
                    26 September 2024
                  </td>
                  <td className="py-4 px-4 text-sm text-gray-500">
                    Monthly - $30
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
