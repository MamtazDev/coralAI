import React, { useContext, useEffect, useState } from "react";
import { useRef } from "react";
import ImageContaienr from "../components/ui/ImageContaienr";
import ChartContainer from "../components/ui/ChartContainer";
import { FaArrowLeft } from "react-icons/fa6";
import Results from "../components/ui/Results";
import AverageCoralCover from "../components/ui/AverageCoralCover";
import ButtonsContainer from "../components/ui/ButtonsContainer";
import FeedbackModal from "../components/modal/FeedbackModal";
import SignUpModa from "../components/modal/SignUpModa";
import { FolderContext } from "../contexts/FolderContext";
import { useNavigate } from "react-router-dom";

// import html2pdf from "html2pdf.js";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';


const Home = () => {
  const { images } = useContext(FolderContext);

  const [showFeedbackModal, setFeedbackModal] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const contentRef = useRef(null);


//   const screenWidth = window.screen.width; // Width of the screen in pixels
// const screenHeight = window.screen.height; // Height of the screen in pixels
// const aspectRatio = screenWidth / screenHeight;


  const generatePDF =  () => {
    const input = document.getElementById('pdf-content'); // Replace 'pdf-content' with the ID of the element you want to capture

    html2canvas(input)
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png'); // Convert canvas to base64 image data
        const pdf = new jsPDF('p', 'mm', 'a4'); // Create a new PDF instance
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();
        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight); // Add image to PDF
        pdf.save('webpage.pdf'); // Save the PDF
      });
  };

  console.log(images, "fjkjfk");
  return (
    <>
      <div
        ref={contentRef}
        id="content-to-export"
        className="container mx-auto my-[30px]  mainBox grid grid-cols-1   lg:grid-cols-5"
      >
        <div className="col-span-3 p-[25px]">
          <ImageContaienr setFeedbackModal={setFeedbackModal} images={images} />
          <ChartContainer />
        </div>
        <div className="border-l col-span-2 border-[#cccccc] ">
          <div className="flex items-center gap-4 px-[25px] py-[15px] border-b border-[#cccccc] ">
            <FaArrowLeft className="text-[26px] font-[700]" />
            <p className="text-[24px] font-[700]">Live Coral Cover</p>
          </div>
          <Results images={images} />
          <AverageCoralCover />
          <ButtonsContainer
            generatePDF={generatePDF}
            setShowSignUpModal={setShowSignUpModal}
          />
        </div>
      </div>

      <FeedbackModal
        setFeedbackModal={setFeedbackModal}
        showFeedbackModal={showFeedbackModal}
      />
      <SignUpModa
        showSignUpModal={showSignUpModal}
        setShowSignUpModal={setShowSignUpModal}
      />
    </>
  );
};

export default Home;



// new print page 
// import React from 'react';
// import html2canvas from 'html2canvas';
// import jsPDF from 'jspdf';

// class PDFGenerator extends React.Component {
//   generatePDF = () => {
//     const input = document.getElementById('pdf-content'); // Replace 'pdf-content' with the ID of the element you want to capture

//     html2canvas(input)
//       .then((canvas) => {
//         const imgData = canvas.toDataURL('image/png'); // Convert canvas to base64 image data
//         const pdf = new jsPDF('p', 'mm', 'a4'); // Create a new PDF instance

//         const pdfWidth = pdf.internal.pageSize.getWidth();
//         const pdfHeight = pdf.internal.pageSize.getHeight();
//         pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight); // Add image to PDF
//         pdf.save('webpage.pdf'); // Save the PDF

//       });
//   };

//   render() {
//     return (
//       <div>
//         {/* Your React component */}
//         <div id="pdf-content">
//           {/* Content you want to capture */}
//         </div>
//         <button onClick={this.generatePDF}>Generate PDF</button>
//       </div>
//     );
//   }
// }

// export default PDFGenerator;


// ager print function 


// import React from 'react';

// class PrintButton extends React.Component {
//   handlePrint = () => {
//     window.print();
//   };

//   render() {
//     return (
//       <div>
//         <button onClick={this.handlePrint}>Print</button>
//         <p>This is the content you want to print.</p>
//         {/* Add your screen content here */}
//       </div>
//     );
//   }
// }

// export default PrintButton;