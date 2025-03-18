"use client";

import { useEffect, useState } from "react";

// Define the type for card data
type CardData = {
  src: string;
  title: string;
  link: string;
};

export default function Home() {
  // Explicitly type the cardData array
  const cardData: CardData[] = [
    { src: "/img/KeyAccount.png", title: "KeyAccount", link: "https://lite.cpall.co.th/Logistic/keyaccount/login.php" },
    { src: "/img/FleetBusiness.png", title: "Daily Fleet Management", link: "https://lite.cpall.co.th/Logistic/vendor_portal/login.php" },
    { src: "/img/Master-data.png", title: "MASTER DATA", link: "http://10.184.9.26:8080/NEW_RPA/login.phphttp://10.184.9.26:8080/NEW_RPA/login.php" },
    { src: "/img/goCRM.png", title: "goCRM", link: "http://gocrmcss.gosoft.co.th/crm/signInAD.jsp" },
    { src: "/img/gps.png", title: "GPS Tracking", link: "" },
    { src: "/img/send-it.png", title: "sendit", link: "https://manage.sendit.asia/th/2stage/login" },
    { src: "/img/MMMOP.png", title: "MMMOP", link: "https://mms.cpall.co.th/masters/servlet/masters" },
    { src: "/img/WTS.png", title: "Warehouse Terminal System", link: "" },
    { src: "/img/transport.png", title: "Transportation", link: "http://172.29.113.15/Logistic/transportation/apps/pages/login.php" }
  ];

  const [currentTime, setCurrentTime] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [selectedGpsLink, setSelectedGpsLink] = useState("");

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
  

  const handleGpsClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleLinkSelection = (link: string) => {
    setSelectedGpsLink(link);
    setShowPopup(false);
    //window.location.href = link; // same window
    window.open(link, "_blank"); // new window
  };

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Kanit:wght@100;200;300;400;500;600;700;800;900&display=swap');
        body {
          font-family: 'Kanit', sans-serif;
        }
      `}</style>

      {/* Background */}
      <div className="flex flex-col min-h-screen bg-cover bg-center relative"
      style={{ backgroundImage: "url('/img/backgroung.png')" }}>

        {/* Navbar */}
        <div className="navbar bg-base-100 shadow-sm fixed top-0 left-0 w-full z-50 flex justify-between items-center px-4 md:px-10">
          {/* <div className="hidden md:flex items-center">
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
          </div> */}
          <div className="text-xl font-kanit uppercase">Transport Data Center</div>
          <div className="hidden md:flex text-normal font-normal pr-3 font-kanit">{currentTime}</div>
        </div>

        {/* Information */}
        <div className="flex-grow mt-16 p-2 relative font-kanit">

          {/* grid/2 between system & ptt*/}
          <div className="grid md:grid-cols-5 md:mx-10">

            {/* System */}
            <div className="sm:col-span-4 content-center">
              <div className="grid grid-cols-2 sm:grid-cols-3 sm:gap-2 md:mr-6 2xl:grid-cols-4">
                {cardData.map((item, index) => (
                  <a key={index} href={item.link || "#"} target={item.link ? "_blank" : ""} rel="noopener noreferrer">
                    <div className="bg-white relative group overflow-hidden rounded-lg shadow-md flex flex-col items-center m-2" onClick={item.title === "GPS Tracking" ? handleGpsClick : undefined}>
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

            {/* PTT */}
            <div className="col-span-1 place-items-center h-full">
              <div className="bg-white rounded-lg pr-4 p-2 mt-4">
                <iframe title="IframeTH oil_price_board" src="https://www.pttor.com/th/oil_price_board?lang=th" width="200" height="480" className="rounded-lg text-center"></iframe>
              </div>
            </div>

          </div>
        </div>

        {/* GPS Tracking Popup */}
        {showPopup && (
          <div className="fixed top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80">
            <div className="flex flex-row justify-between">
              <h3 className="text-lg font-medium mb-4">Select GPS Tracking Service</h3>
              <button onClick={handleClosePopup} className=" btn btn-sm btn-circle">
                ✖
              </button>
            </div>
            <div className="flex flex-row justify-between">
              {/* DTC Option with Image */}
              <div className="basis-auto mb-4 text-center bg-white shadow-md rounded-b-lg">
                <img src="/img/dtc-logo.png" alt="DTC Logo" className="w-32 h-28 mx-auto mb-2 object-cover" />
                <a href="https://gp.com" className="block w-full text-center p-2 bg-gray-200 text-black rounded-b-lg ">DTC</a>
              </div>
        
              {/* Tele Tec Option with Image */}
              <div className="basis-auto mb-4 text-center bg-white shadow-md rounded-b-lg">
                <img src="/img/teletec-logo.png" alt="Tele Tec Logo" className="w-32 h-28 mx-auto mb-2 object-cover" />
                <a href="https://www.tel.com/" className="block w-full text-center p-2 bg-gray-200 text-black rounded-b-lg">Tele Tec</a>
              </div>
            </div>
          </div>
        </div>
        
        )}

        {/* Footer */}
        <footer className="bg-gray-200 text-center p-4 shadow-md w-full mt-auto relative">
          <div className="container mx-auto flex justify-between items-center">
            <div className="text-gray-500 font-medium">
              Power by improvement transportation team
            </div>
            <div className="text-gray-50 text-gray-200">Anything you want</div>
          </div>
        </footer>

      </div>
    </>
  );
}
