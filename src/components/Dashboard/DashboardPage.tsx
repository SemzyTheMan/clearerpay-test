"use client";

import React from "react";
import {
  Settings,
  ChevronDown,
  ArrowUp,
  ArrowDown,
  ArrowLeftRight,
  UserRoundPlus,
  Bell,
  MoreVertical,
  ArrowRight,
} from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const DashboardPage = () => {
  const chartData = [
    { day: 1, moneyIn: 100000, moneyOut: 150000 },
    { day: 4, moneyIn: 500000, moneyOut: 400000 },
    { day: 8, moneyIn: 1500000, moneyOut: 1200000 },
    { day: 12, moneyIn: 5000000, moneyOut: 4500000 },
    { day: 15, moneyIn: 10000000, moneyOut: 9000000 },
    { day: 19, moneyIn: 20000000, moneyOut: 18000000 },
    { day: 22, moneyIn: 30000000, moneyOut: 24000000 },
    { day: 26, moneyIn: 40000000, moneyOut: 32000000 },
    { day: 31, moneyIn: 100000, moneyOut: 4500000 },
  ];

  const merchants = [
    { id: 1, name: "Adisa Debo..", initial: "AD" },
    { id: 2, name: "Adisa Debo..", initial: "AD" },
    { id: 3, name: "Adisa Debo..", initial: "AD" },
    { id: 4, name: "Adisa Debo..", initial: "AD" },
    { id: 5, name: "Adisa Debo..", initial: "AD" },
  ];

  const transactions = [
    {
      type: "sent",
      currency: "GBP",
      amount: "-₦1,000,000",
      time: "Today, 13:30",
      recipient: "John Doe",
    },
    {
      type: "exchanged",
      fromCurrency: "GBP",
      toCurrency: "NGN",
      amount: "-£1,000",
      received: "+ ₦200,000",
      time: "Today, 13:30",
      recipient: "John Doe",
    },
    {
      type: "receive",
      fromCurrency: "GBP",
      toCurrency: "NGN",
      amount: "+ ₦200,000",
      time: "Today, 13:30",
      recipient: "John Doe",
    },
    {
      type: "withdraw",
      currency: "GBP",
      amount: "+ ₦200,000",
      time: "Today, 13:30",
      recipient: "John Doe",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen min-w-[1240px]  p-6">
      <div className=" mx-auto">
        {/* Header */}
        <header className="flex justify-between border-b-2 items-center  mb-6">
          <div className="flex items-center gap-8">
            <img src="/" alt="Clearerpay" className="h-8" />
            <nav className="flex gap-6">
              <button className="px-4 py-5 border-b-2 border-black ">
                Dashboard
              </button>

              {["Wallet", "Merchants", "Transactions", "Beneficiaries"].map(
                (item) => (
                  <button key={item} className="px-4 py-5">
                    {item}
                  </button>
                )
              )}
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 px-4 py-2 rounded-[2rem] text-white bg-gray-800">
              <UserRoundPlus />
              Personal account
              <ChevronDown size={16} />
            </button>
            <button className="p-2">
              <Settings size={20} />
            </button>
          </div>
        </header>

        {/* Alert Banner */}
        <div className="flex items-center mb-6 ">
          <div className="mr-[5rem] text-lg">
            <p>Welcome Andy</p>
          </div>
          <div className="bg-red-50 w-fit border border-red-100 rounded-lg px-4 py-2  flex items-center gap-2">
            <Bell className="text-red-400" />
            <span>Your account has been setup for OTC trade, please</span>
            <button className="font-semibold">Contact OTC</button>
            <span>to transact</span>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-3 gap-6">
          {/* Balance Card */}
          <div className="col-span-2 bg-white rounded-xl p-6 shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-2">
                <span>NGN</span>
                <ChevronDown size={16} />
                <span className="text-gray-400">Naira</span>
              </div>
              <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100">
                Deposit
                <span>+</span>
              </button>
            </div>
            <div className="text-4xl font-bold mb-8">₦ 34,645,233</div>
            <div className="flex gap-4">
              {[
                { icon: ArrowUp, label: "Send" },
                { icon: ArrowDown, label: "Receive" },
                { icon: ArrowLeftRight, label: "Swap" },
              ].map(({ icon: Icon, label }) => (
                <button
                  key={label}
                  className="flex items-center gap-2 px-6 py-2 bg-gray-100 rounded-lg"
                >
                  <Icon size={16} />
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Merchants Card */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h2 className="font-semibold">Merchants</h2>
              <button className="flex items-center  gap-2 font-semibold">
                Add Merchants
                <span>+</span>
              </button>
            </div>
            <div className="grid grid-cols-5 gap-4">
              {merchants.map((merchant) => (
                <div key={merchant.id} className="text-center">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    {merchant.initial}
                  </div>
                  <div className="text-xs text-gray-600">{merchant.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* FX RATES */}
        <div className="bg-white rounded-xl p-6 shadow-sm mt-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold py-2">FX Rates</h2>
            <p className="cursor-pointer text-sm font-medium text-slate-300">See all</p>
          </div>

          <div className="grid gap-10 grid-cols-6">
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="flex items-center text-[12px] gap-3 p-2 w-fit rounded bg-gray-100 bg-opacity-40 "
              >
                <div>
                  <p className="text-gray-400">NGN</p>
                  <p className="font-semibold">₦1,640</p>
                </div>
                <ArrowLeftRight className="text-gray-400 text-sm" />
                <div>
                  <p className="text-gray-400">USD</p>
                  <p className="font-semibold">$1.00</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Transactions Section */}
        <div className="grid grid-cols-3 gap-6 mt-6">
          {/* Recent Transactions */}
          <div className="col-span-2 bg-white rounded-xl p-6 shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h2 className="font-semibold">Recent Transactions</h2>
              <button className="text-sm text-gray-500">See all</button>
            </div>
            <div className="space-y-4">
              {transactions.map((transaction, index) => (
                <div
                  key={index}
                  className="grid items-center   grid-cols-3 py-3 border-b"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center
                      ${
                        transaction.type === "sent"
                          ? "bg-red-50"
                          : transaction.type === "exchanged"
                          ? "bg-yellow-50"
                          : transaction.type === "receive"
                          ? "bg-green-50"
                          : "bg-gray-50"
                      }`}
                    >
                      {transaction.type === "sent" ? (
                        <ArrowUp className="text-red-500" />
                      ) : transaction.type === "exchanged" ? (
                        <ArrowLeftRight className="text-yellow-500" />
                      ) : transaction.type === "receive" ? (
                        <ArrowDown className="text-green-500" />
                      ) : (
                        <ArrowDown className="text-gray-500" />
                      )}
                    </div>
                    <div>
                      <p className="font-medium flex gap-1 text-[12px] items-center">
                        <span>
                          {`${transaction.type
                            .charAt(0)
                            .toUpperCase()}${transaction.type.slice(1)} ${
                            transaction?.currency ? transaction?.currency : " "
                          } `}
                        </span>{" "}
                        {transaction?.fromCurrency && (
                          <>
                            {" "}
                            <span>{` ${transaction?.fromCurrency}`}</span>
                            <ArrowRight />
                            <span> {transaction?.toCurrency}</span>
                          </>
                        )}
                      </p>
                    </div>{" "}
                  </div>
                  <p className="text-[12px] text-gray-500">
                    <span className="font-bold">
                      Sent to {transaction.recipient}
                    </span>
                    • {transaction.time}
                  </p>

                  <div className="text-right text-sm font-medium flex justify-end">
                    <p
                      className={
                        transaction.amount.includes("-")
                          ? "text-red-500 text-sm"
                          : "text-black text-sm"
                      }
                    >
                      {`${transaction.amount} ${
                        transaction.received ? "/" : ""
                      }`}
                    </p>
                    {transaction.received && (
                      <p className="text-black">{transaction.received}</p>
                    )}
                    <MoreVertical className="text-gray-600 cursor-pointer mx-5" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Money Chart */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h2 className="font-semibold">Money out/Money in</h2>
              <button className="flex items-center gap-2 px-4 py-2 text-sm bg-gray-100 rounded-lg">
                Date Range
                <ChevronDown size={16} />
              </button>
            </div>
            <div className="flex gap-4 mb-4">
              <div className="flex items-center text-[12px] gap-2">
                <div className="w-3 h-3 rounded-full bg-orange-400"></div>
                <span className="">Money in ₦1,000,000</span>
              </div>
              <div className="flex text-[12px] items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <span className="">Money out ₦1,000,000</span>
              </div>
            </div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={chartData}>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    horizontal={true}
                    vertical={false}
                    stroke="#E5E7EB"
                  />
                  <defs>
                    <linearGradient id="colorIn" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#FB923C" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#FB923C" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorOut" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#F87171" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#F87171" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <XAxis
                    fontSize={10}
                    dataKey="day"
                    tickLine={false}
                    axisLine={false}
                  />
                  <YAxis
                    fontSize={10}
                    ticks={[
                      100000, 1000000, 10000000, 20000000, 30000000, 40000000,
                      50000000,
                    ]}
                    tickFormatter={(value) => {
                      if (value >= 1000000) {
                        return `₦${value / 1000000}m`;
                      } else if (value >= 1000) {
                        return `₦${value / 1000}k`;
                      }
                      return `₦${value}`;
                    }}
                    axisLine={false}
                    tickLine={false}
                    orientation="right"
                  />
                  <Area
                    type="monotone"
                    dataKey="moneyIn"
                    stroke="#FB923C"
                    fillOpacity={1}
                    fill="url(#colorIn)"
                    strokeWidth={2}
                    dot={false}
                  />
                  <Area
                    type="monotone"
                    dataKey="moneyOut"
                    stroke="#F87171"
                    fillOpacity={1}
                    fill="url(#colorOut)"
                    strokeWidth={2}
                    dot={false}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
