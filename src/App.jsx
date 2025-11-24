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
      status: "Absconded - Hostile text msg to whatsapp group",
      logo: "./alorica.png",
      designation: "Customer Support (Amazon)",
    },
    {
      id: 10,
      compname: "Concentrix",
      duration: "Nov 2025",
      status: "Absconded - Hostile text msg to trainer",
      logo: "./concentrix.webp",
      designation: "Technical Support (VMWare)",
    },
  ];

  const mySchool = [
    {
      id: 1,
      schoolName: "Sarada Sishu Tirtha",
      duration: "1994 to 1996",
    },
    {
      id: 2,
      schoolName: "Sadar govt high school",
      duration: "1996 to 2004",
    },
    {
      id: 3,
      schoolName: "Manindranath High School",
      duration: "2005 to 2010",
    },
  ];

  return (
    <>
      <div className="main-container">
        <div className="about">
          <div className="my-image-div"></div>
          <div className="name-div">
            <h1>Abhishek kabi</h1>
          </div>
          <div className="details">
            <p>DOB: 21/Dec/1991</p>
            <p>Place of birth: Coochbehar, West Bengal</p>
            <p>Age: 33</p>
            <p>Current City: Bangalore, Karnataka</p>
            <p>Relationship Status: Single</p>
          </div>
        </div>
        <div className="divider">
          <h1>Schools</h1>
        </div>
        {/* School Details Section */}
        {mySchool.map((school) => (
          <div className="job-container" key={school.id}>
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
                      {school.id}.
                    </p>{" "}
                    <div className="img-comp-logo-div">
                      <div
                        style={{
                          height: "100%",
                          width: "100%",
                          borderRadius: "50%",
                          backgroundColor: "#f0f0f0",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <span style={{ color: "gray", fontSize: "12px" }}>
                          School
                        </span>
                      </div>
                    </div>{" "}
                    <p className="compname">
                      <strong>{school.schoolName}</strong>
                    </p>
                  </div>
                  <div>
                    <p
                      className="duration"
                      style={{ color: "gray", margin: "0", padding: "0" }}
                    >
                      {school.duration}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="divider">
          <h1>College</h1>
        </div>
        {/* College Card */}
        <div className="job-container">
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
                    1.
                  </p>{" "}
                  <div className="img-comp-logo-div">
                    <div
                      style={{
                        height: "100%",
                        width: "100%",
                        borderRadius: "50%",
                        backgroundColor: "#f0f0f0",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <img
                        src="./vit.png"
                        alt=""
                        style={{
                          height: "100%",
                          width: "100%",
                          borderRadius: "50%",
                        }}
                      />
                    </div>
                  </div>{" "}
                  <p className="compname">
                    <strong>Vellore Institute of technology</strong>
                  </p>
                </div>
                <div>
                  <p
                    className="designation"
                    style={{ color: "gray", margin: "0", padding: "0" }}
                  >
                    B.tech IT
                  </p>
                </div>
                <div>
                  <p
                    className="duration"
                    style={{ color: "gray", margin: "0", padding: "0" }}
                  >
                    2010 to 2017
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="divider">
          <h1>Work</h1>
        </div>
        {/* Job Details Section */}
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
                      {details.designation}
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
        <div className="divider">
          <h1>End of Phase-1</h1>
        </div>
    </>
  );
}

export default App;
