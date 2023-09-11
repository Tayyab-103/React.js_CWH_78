import React, { useState } from "react";

export default function About() {
  const [myStyle, setMyStyle] = useState({
    //initialstate
    color: "black",
    backgroundColor: "white",
  });

  const [btntext,setBtnText] = useState("Enable Dark Mode")

  const toggleStyle = () => {
    if (myStyle.color === "black") {
      setMyStyle({
        color: "white",
        backgroundColor: "black",
        border: "1px solid white"
      });
      setBtnText("Enable Light Mode");
    } else {
      setMyStyle({
        color: "black",
        backgroundColor: "white",
      });
      setBtnText("Enable Dark Mode");
    }
  };

  return (
    <div className="container" style={myStyle}>
      <h1 className="my-3">About Us</h1>
      <div class="accordion accordion-flush" id="accordionFlushExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingOne">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
              style={myStyle}
            >
              Accordion Item #1
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            class="accordion-collapse collapse"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body" style={myStyle}>
              Placeholder content for this accordion, which is intended to
              demonstrate the <code>.accordion-flush</code> class. This is the
              first item's accordion body.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingTwo">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
              style={myStyle}
            >
              Accordion Item #2
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="flush-headingTwo"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body" style={myStyle}>
              Placeholder content for this accordion, which is intended to
              demonstrate the <code>.accordion-flush</code> class. This is the
              second item's accordion body. Let's imagine this being filled with
              some actual content.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingThree">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
              style={myStyle}
            >
              Accordion Item #3
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            class="accordion-collapse collapse"
            aria-labelledby="flush-headingThree"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body" style={myStyle}>
              Placeholder content for this accordion, which is intended to
              demonstrate the <code>.accordion-flush</code> class. This is the
              third item's accordion body. Nothing more exciting happening here
              in terms of content, but just filling up the space to make it
              look, at least at first glance, a bit more representative of how
              this would look in a real-world application.
            </div>
          </div>
        </div>
      </div>
      <div className="container my-3">
        <button onClick={toggleStyle} type="button" class="btn btn-primary">
          {btntext}
        </button>
      </div>
    </div>
  );
}

// import React, { useState } from "react";

// export default function About() {

//     // const [myStyle, setMyStyle] = useState({
//     //     color: 'white',
//     //     backgroundColor: 'black'
//     // })

//     // toggleStyle = ()=>{
//     //     if (myStyle.color == 'white'){
//     //         setMyStyle({
//     //           color: "black",
//     //           backgroundColor: "white",
//     //         });
//     //     }
//     // }

//   return (
//     <div className="container" style={myStyle}>
//       <h1 className="my-3">About Us</h1>
//       <div
//         className="accordion accordion-flush"
//         id="accordionFlushExample"
//         style={myStyle}
//       >
//         <div className="accordion-item" style={myStyle}>
//           <h2 className="accordion-header">
//             <button
//               style={myStyle}
//               className="accordion-button collapsed"
//               type="button"
//               data-bs-toggle="collapse"
//               data-bs-target="#flush-collapseOne"
//               aria-expanded="false"
//               aria-controls="flush-collapseOne"
//             >
//               Accordion Item #1
//             </button>
//           </h2>
//           <div
//             id="flush-collapseOne"
//             className="accordion-collapse collapse"
//             data-bs-parent="#accordionFlushExample"
//           >
//             <div className="accordion-body">
//               Placeholder content for this accordion, which is intended to
//               demonstrate the <code>.accordion-flush</code> className. This is
//               the first item's accordion body.
//             </div>
//           </div>
//         </div>
//         <div className="accordion-item" style={myStyle}>
//           <h2 className="accordion-header">
//             <button
//               style={myStyle}
//               className="accordion-button collapsed"
//               type="button"
//               data-bs-toggle="collapse"
//               data-bs-target="#flush-collapseTwo"
//               aria-expanded="false"
//               aria-controls="flush-collapseTwo"
//             >
//               Accordion Item #2
//             </button>
//           </h2>
//           <div
//             id="flush-collapseTwo"
//             className="accordion-collapse collapse"
//             data-bs-parent="#accordionFlushExample"
//           >
//             <div className="accordion-body">
//               Placeholder content for this accordion, which is intended to
//               demonstrate the <code>.accordion-flush</code> className. This is
//               the second item's accordion body. Let's imagine this being filled
//               with some actual content.
//             </div>
//           </div>
//         </div>
//         <div className="accordion-item" style={myStyle}>
//           <h2 className="accordion-header">
//             <button
//               style={myStyle}
//               className="accordion-button collapsed"
//               type="button"
//               data-bs-toggle="collapse"
//               data-bs-target="#flush-collapseThree"
//               aria-expanded="false"
//               aria-controls="flush-collapseThree"
//             >
//               Accordion Item #3
//             </button>
//           </h2>
//           <div
//             id="flush-collapseThree"
//             className="accordion-collapse collapse"
//             data-bs-parent="#accordionFlushExample"
//           >
//             <div className="accordion-body">
//               Placeholder content for this accordion, which is intended to
//               demonstrate the <code>.accordion-flush</code> className. This is
//               the third item's accordion body. Nothing more exciting happening
//               here in terms of content, but just filling up the space to make it
//               look, at least at first glance, a bit more representative of how
//               this would look in a real-world application.
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="container my-3">
//         <button onClick={toggleStyle} type="button" className="btn btn-primary">
//           Enable Dark Mode
//         </button>
//       </div>
//     </div>
//   );
// }
