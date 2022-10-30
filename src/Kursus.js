import React from "react";
import "./index.css";
import logo from "./assets/logo192.png";

const Kursus = () => {
  return (
    <div id="kursus" className="py-20 px-12 md:px-16 bg-sky-200">
      <h1 className="text-4xl font-bold mb-3">
        Kursus Yang Tersedia <span className="text-blue-800">Untuk Kamu</span>
      </h1>
      <div className="flex justify-center flex-wrap">
        <div className="w-52 h-64 bg-slate-50 rounded-lg shadow-2xl p-7 m-8">
          <div className="flex flex-col items-center">
            <h1 className="text-xl font-semibold">Paket 1</h1>
            <img src={logo} alt="" width={80} className="py-4" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
        <div className="w-52 h-64 bg-slate-50 rounded-lg shadow-2xl p-7 m-8">
          <div className="flex flex-col items-center">
            <h1 className="text-xl font-semibold">Paket 2</h1>
            <img src={logo} alt="" width={80} className="py-4" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
        <div className="w-52 h-64 bg-slate-50 rounded-lg shadow-2xl p-7 m-8">
          <div className="flex flex-col items-center">
            <h1 className="text-xl font-semibold">Paket 3</h1>
            <img src={logo} alt="" width={80} className="py-4" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
        <div className="w-52 h-64 bg-slate-50 rounded-lg shadow-2xl p-7 m-8">
          <div className="flex flex-col items-center">
            <h1 className="text-xl font-semibold">Paket 4</h1>
            <img src={logo} alt="" width={80} className="py-4" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
        <div className="w-52 h-64 bg-slate-50 rounded-lg shadow-2xl p-7 m-8">
          <div className="flex flex-col items-center">
            <h1 className="text-xl font-semibold">Paket 5</h1>
            <img src={logo} alt="" width={80} className="py-4" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
        <div className="w-52 h-64 bg-slate-50 rounded-lg shadow-2xl p-7 m-8">
          <div className="flex flex-col items-center">
            <h1 className="text-xl font-semibold">Paket 6</h1>
            <img src={logo} alt="" width={80} className="py-4" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kursus;
