import { useState } from "react";

function App() {
  const jobDetails = [
    {
      id: 1,
      compname: "Aegis BPO",
      duration: "Sept 2017 to Nov 2017",
      status: "Absconded",
      logo: "./aegis.png",
      designation: "Customer Support (JIO)",
    },
    {
      id: 2,
      compname: "DXC Technology",
      duration: "Feb 2018 to Nov 2018",
      status: "Absconded",
      logo: "./dxc.png",
      designation: "Tech Support L1 - Eon",
    },
    {
      id: 3,
      compname: "HP",
      duration: "Feb 2019 to Mar 2019",
      status: "Absconded",
      logo: "./hp.png",
      designation: "Tech Support L1",
    },
    {
      id: 4,
      compname: "Quinnox",
      duration: "Apr 2019 to Jun 2019",
      status: "Absconded",
      logo: "./quinnox.png",
      designation: "Mainframe Engineer - RPG",
    },
    {
      id: 5,
      compname: "Concentrix",
      duration: "Aug 2019 to Oct 2019",
      status: "Exit",
      logo: "./concentrix.webp",
      designation: "Customer Support (OnePlus)",
    },
    {
      id: 6,
      compname: "Amazon",
      duration: "Jan 2020",
      status: "Terminated - Violent behaviour with HR/Recruiter",
      logo: "./amazon.jpg",
      designation: "Seller Support",
    },
    {
      id: 7,
      compname: "Teleperformance",
      duration: "Oct 2020",
      status: "Absconded",
      logo: "./tp.svg",
      designation: "Customer Support",
    },
    {
      id: 8,
      compname: "Cameo Global",
      duration: "April 2023",
      status: "Terminated - Violent behaviour with HR/Recruiter",
      logo: "./newera.png",
      designation: "Technical Support L1 - (CISCO)",
    },
    {
      id: 9,
      compname: "Alorica",
      duration: "Jan 2025",
      status: "Absconded - #Hostile text msg to whatsapp group",
      logo: "./alorica.png",
      designation: "Customer Support (Amazon)",
    },
    {
      id: 10,
      compname: "Concentrix",
      duration: "Nov 2025",
      status: "Absconded - #Hostile text msg to trainer",
      logo: "./concentrix.webp",
      designation: "Technical Support (VMWare)",
    },
  ];
  return (
    <>
      <div className="main-container">
        {jobDetails.map((details) => (
          <div className="job-container" key={details.id}>
            <div className="job-container-details">
              <div className="heading">
                <div className="kont">
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "20px",
                    }}
                  >
                    <p
                      style={{
                        color: "grey",
                        fontSize: "20px",
                        fontFamily: "Inter, sans-serif",
                      }}
                    >
                      {details.id}.
                    </p>{" "}
                    <div className="img-comp-logo-div">
                      <img
                        src={details.logo}
                        alt=""
                        style={{
                          height: "100%",
                          width: "100%",
                          borderRadius: "50%",
                        }}
                      />
                    </div>{" "}
                    <p className="compname">
                      <strong>{details.compname}</strong>
                    </p>
                  </div>
                  <div>
                    <p
                      className="designation"
                      style={{ color: "gray", margin: "0", padding: "0" }}
                    >
                      Designation: {details.designation}
                    </p>
                  </div>
                  <div>
                    <p
                      className="duration"
                      style={{ color: "gray", margin: "0", padding: "0" }}
                    >
                      {details.duration}
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <p className="status">
                  <span style={{ color: "gray" }}>Status:</span>{" "}
                  <span style={{ color: "gray" }}>{details.status}</span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
