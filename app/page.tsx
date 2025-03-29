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
    { src: "/img/keyAccount.png", title: "KeyAccount", link: "https://lite.cpall.co.th/Logistic/keyaccount/login.php" },
    { src: "/img/fleetBusiness.png", title: "Daily Fleet Management", link: "https://lite.cpall.co.th/Logistic/vendor_portal/login.php" },
    { src: "/img/master-data.png", title: "MASTER DATA", link: "http://10.184.9.26:8080/NEW_RPA/login.php" },
    { src: "/img/goCRM.png", title: "goCRM", link: "http://gocrmcss.gosoft.co.th/crm/signInAD.jsp" },
    { src: "/img/gps.png", title: "GPS Tracking", link: "" },
    { src: "/img/send-it.png", title: "sendit", link: "https://manage.sendit.asia/th/2stage/login" },
    { src: "/img/mmmop.png", title: "MMMOP", link: "https://mms.cpall.co.th/masters/servlet/masters" },
    { src: "/img/wts.png", title: "Warehouse Terminal System", link: "" },
    { src: "/img/transport.png", title: "Transportation", link: "http://172.29.113.15/Logistic/transportation/apps/pages/login.php" },
    { src: "/img/comingsoon.png", title: "Cross-Dock", link: "" }
  ];

  const cardGps: CardData[] = [
    { src: "/img/dtc.jpg", title: "DTC", link: "https://gp.com" },
    { src: "/img/teletec.png", title: "Tele Tec", link: "https://www.tel.com/" },
  ];

  const cardWts: CardData[] = [
    { src: "/img/warehouse.png", title: "CDC BKK", link: "https://wts-cdc.cpall.co.th/wts/Login.jsp" },
    { src: "/img/warehouse.png", title: "CDC UPC", link: "https://wts-rcdc.cpall.co.th/wts/Login.jsp" },
    { src: "/img/warehouse.png", title: "FDC", link: "https://wts-fdc.cpall.co.th/wts/Login.jsp" },
    { src: "/img/warehouse.png", title: "DC RDC ADC", link: "https://wts-pdc.cpall.co.th/wtstp/Login.jsp" },
    { src: "/img/warehouse.png", title: "BDC", link: "https://wts-bdc.cpall.co.th/wts/Login.jsp" },
    { src: "/img/warehouse.png", title: "TOTE CONTROL", link: "https://wts-mh.cpall.co.th/mh/Login.jsp" },
    { src: "/img/warehouse.png", title: "AIE", link: "https://wts-acdc.cpall.co.th/wts/Login.jsp" },
  ];

  const [currentTime, setCurrentTime] = useState("");
  const [showGpsPopup, setShowGps] = useState(false);
  const [selectedGpsLink, setSelectedGpsLink] = useState("");
  const [showWarehousePopup, setShowWarehousePopup] = useState(false);

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

  const handleClickPopup = (item: CardData) => {
    if (item.title === "Warehouse Terminal System") {
      setShowWarehousePopup(true);
    } if (item.title === "GPS Tracking") {
      setShowGps(true);
    }
    else {
      console.log("No matching popup");
    }
  };

  const handleClosePopup = () => {
    setShowGps(false);
    setShowWarehousePopup(false);
  };

  const handleLinkSelection = (link: string) => {
    setSelectedGpsLink(link);
    setShowGps(false);
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
        <div className="navbar bg-base-100 shadow-sm fixed top-0 left-0 w-full z-50 flex justify-between items-center px-4 md:px-10 lg:px-15 xl:px-30">
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
        <div className="flex-grow mt-16 p-2 relative font-kanit xl:px-30">

          {/* grid/2 between system & ptt*/}
          <div className="grid md:grid-cols-5 md:mx-10">

            {/* System */}
            <div className="sm:col-span-4 content-center">
              <div className="grid grid-cols-3 sm:grid-cols-3 sm:gap-2 md:mr-6 lg:grid-cols-4">
                {cardData.map((item, index) => (
                  <a key={index} href={item.link || "#"} target={item.link ? "_blank" : ""} rel="noopener noreferrer">
                    <div className="bg-white relative group overflow-hidden rounded-lg shadow-md flex flex-col items-center m-2" onClick={() => handleClickPopup(item)}>
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

        {/* GPS Tracking  */}
        {showGpsPopup && (
          <div className="fixed top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-82 sm:w-120">
              <div className="flex flex-row justify-between">
                <h3 className="text-lg font-medium mb-4">Select GPS Tracking Service</h3>
                <button onClick={handleClosePopup} className=" btn btn-sm btn-circle">✖</button>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {cardGps.map((item, index) => (
                  <a key={index} href={item.link || "#"} target={item.link ? "_blank" : ""} rel="noopener noreferrer">
                    <div
                      className="bg-white relative group overflow-hidden rounded-lg shadow-md flex flex-col items-center m-2"
                      onClick={() => handleClickPopup(item)}>
                      <img
                        src={item.src}
                        alt={item.title}
                        className="h-30 w-62 object-cover transition-transform duration-300 group-hover:scale-110"
                      />
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
          </div>

        )}

        {/*wts */}
        {showWarehousePopup && (
          <div className="fixed top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg w-85 sm:w-140 md:w-180 lg:w-220 ">
              <div className="flex flex-row justify-between">
                <h3 className="text-lg font-medium mb-2 sm:mb-4">Select Warehouse Terminal System</h3>
                <button onClick={handleClosePopup} className=" btn btn-sm btn-circle">✖</button>
              </div>

              <div className="grid grid-cols-3 gap-2 md:grid-cols-4 ">
                {cardWts.map((item, index) => (
                  <a key={index} href={item.link || "#"} target={item.link ? "_blank" : ""} rel="noopener noreferrer">
                    <div
                      className="bg-white relative group overflow-hidden rounded-lg shadow-md flex flex-col items-center md:m-2"
                      onClick={() => handleClickPopup(item)}
                    >
                      <img
                        src={item.src}
                        alt={item.title}
                        className="h-30 w-62 sm:w-75 object-cover transition-transform duration-300 group-hover:scale-110"
                      />
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
          </div>

        )}

        {/* Footer */}
        <footer className="bg-gray-200 p-4 shadow-md w-full mt-auto absolute bottom-0 left-0">
          <div className="container ml-15 ">
            <div className="text-gray-500 font-medium">
              Powered by Improvement Transportation Team
            </div>
            {/* <div className="text-gray-500">Anything you want</div> */}
          </div>
        </footer>

      </div>
    </>
  );
}
