"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const cardData = [
    { src: "/img/KeyAccount.png", title: "KeyAccount", link: "https://lite.cpall.co.th/Logistic/keyaccount/login.php" },
    { src: "/img/FleetBusiness.png", title: "Daily Fleet Management", link: "http://10.182.32.115:3000/#" },
    { src: "/img/Master-data.png", title: "MASTER DATA", link: "http://10.182.32.115:3000/#" },
    { src: "/img/goCRM.png", title: "goCRM", link: "http://10.182.32.115:3000/#" },
    { src: "/img/gps.png", title: "GPS Tracking", link: "http://10.182.32.115:3000/#" },
    { src: "/img/send-it.png", title: "sendit", link: "http://10.182.32.115:3000/#" },
    { src: "/img/MMMOP.png", title: "MMMOP", link: "http://10.182.32.115:3000/#" },
    { src: "/img/WTS.png", title: "Warehouse Terminal System", link: "http://10.182.32.115:3000/#" },
    { src: "/img/transport.png", title: "Transportation", link: "http://10.182.32.115:3000/#" }
  ];

  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateClock = () => {
      const time = new Date();
      setCurrentTime(
        time.toLocaleDateString("th-TH", {
          year: "numeric",
          month: "long",
          day: "numeric",
          weekday: "long",
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
        })
      );
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-cover bg-center bg-opacity-60 relative" style={{ backgroundImage: "url('/img/backgroung.png')" }}>
       <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Kanit:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <div className="navbar bg-base-100 shadow-sm fixed top-0 left-0 w-full z-50">
      <div className="navbar-start">
          <div className="relative">
            <input type="checkbox" id="menu-toggle" className="peer hidden" />
            <label htmlFor="menu-toggle" className="btn btn-ghost btn-circle">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
              </svg>
            </label>
            <div className="fixed top-0 left-0 h-full w-64 bg-base-100 shadow-md z-50 transform -translate-x-full peer-checked:translate-x-0 transition-transform duration-300 ease-in-out">
              <label htmlFor="menu-toggle" className="absolute right-2 top-2 btn btn-sm btn-circle">✖</label>
              <ul className="menu p-4 text-base-content">
                <li><a>Homepage</a></li>
                <li><a>Portfolio</a></li>
                <li><a>About</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="navbar-center">
          <a className="btn btn-ghost text-xl">Transport Data Center</a>
        </div>
        <div className="navbar-end">
          <span className="text-normal font-normal pr-3 font-kanit">{currentTime}</span>
        </div>
      </div>

      <div className="flex-grow mt-16 p-2 relative">
        <div className="grid md:grid-cols-5 md:mx-10">

          <div className="sm:col-span-4 content-center">
            <div className="grid grid-cols-2 sm:grid-cols-3 sm:gap-2 md:mr-6 lg:grid-cols-4">
              {cardData.map((item, index) => (
                <a key={index} href={item.link || "#"} target="_blank" rel="noopener noreferrer">
                  <div className="bg-white relative group overflow-hidden rounded-lg shadow-md flex flex-col items-center m-2">
                    <img src={item.src} alt={item.title} className="h-30 w-72 object-cover transition-transform duration-300 group-hover:scale-110" />
                    <div className="bg-gray-200 w-full text-center py-1 font-semibold text-gray-700 text-sm md:text-base py-2">
                      {item.title}
                    </div>
                    <div className="absolute inset-0 bg-black/85 text-white text-center font-medium px-3 text-lg flex items-center justify-center transition-transform duration-300 transform translate-y-full group-hover:translate-y-0">
                      {item.title}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="col-span-1 place-items-center h-full  ">
            <div className="bg-white rounded-lg pr-4 p-2 mt-4">
                <iframe title="IframeTH oil_price_board" src="https://www.pttor.com/th/oil_price_board?lang=th" width="200" height="480" className="rounded-lg text-center"></iframe>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-gray-200 text-center p-4 shadow-md w-full mt-auto relative">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-gray-500">
            <strong>
              Copyright &copy; 2014-2021 <a href="https://adminlte.io" className="text-blue-600 hover:underline">AdminLTE.io</a>
            </strong>
            . All rights reserved.
          </div>
          <div className="text-gray-500">Anything you want</div>
        </div>
      </footer>
    </div>
  );
}