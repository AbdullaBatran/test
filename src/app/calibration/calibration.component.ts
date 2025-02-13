// import { fontVariable } from '../../../public/fontVariable';
import { Component } from '@angular/core';
import { jsPDF } from 'jspdf';
// import { fontVariable } from '../../../public/assets/fontVariable';


// import * as jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { fontVariable } from '../../../public/assets/fontVariable';
@Component({
  selector: 'app-calibration',
  templateUrl: './calibration.component.html',
  styleUrl: './calibration.component.scss'
})
export class CalibrationComponent {
  // pdfObject:any; 
  fontvariable: fontVariable = new fontVariable();

  // pdfObject:any;

  // title = 'Calibration';


  // description = 'This is the description of the page content. You can put';
  //description ="The laboratory is a quality-controlled environment with experienced personnel, trained in the proper operation of a broad range of equipment."
  // description1 = ' All processes are carried out in accordance with ISO/IEC 17025 international standards& All calibrations are traceable to NIS.';

  constructor() {}

//   downloadPdf() {
//     const doc = new jsPDF();

//     // doc.addFileToVFS(
//     //   'Amiri-Bold-normal.ttf',
//     //   this.fontvariable.font
//     // );

//     // // Add title
//     // doc.setFontSize(22);
//     // doc.setTextColor('#FF5733');
//     // doc.text(this.title, 20, 30);

//     // Calculate the x-coordinate to center the title
//       doc.setTextColor('#181863');
//       doc.setFontSize(22);
//       const pageWidth = doc.internal.pageSize.width;
//       const pageHeight = doc.internal.pageSize.height;
//       const textWidth = doc.getTextWidth(this.title);
//       const x = (pageWidth - textWidth) / 2;
//       // doc.setFontSize(22);

//       // Add title text at the calculated x and y position (20 for vertical spacing)
//       doc.text(this.title, x, 30);




//        // Add image (logo) at the top right
//       const logoWidth = 30;  // Width of the logo
//       const logoHeight = 10; // Height of the logo

//       const logoX = pageWidth - logoWidth - 20;  // 20px margin from the right edge
//       const logoY = 3; // 10px margin from the top edge

//       // Add the image (logo) to the PDF at the top-right position
//       doc.addImage('assets/images/skarptLogo.png', 'PNG', logoX, logoY, logoWidth, logoHeight);

// //***************************************************************************** */
//      // Add image
//     //  doc.addImage('assets/images/download.webp', 'WEBP', 20, 60, 50, 50);

//     //  doc.addImage('assets/images/Calibration.jpeg', 'JPEG', 20, 40, 60, 50);


//     //=======================

//     // Get page dimensions
//     const pdfPageWidth = doc.internal.pageSize.width;
//     const pdfPageHeight = doc.internal.pageSize.height;

//     // Image dimensions
//     const imageWidth = 60;  // Width of the image
//     const imageHeight = 50; // Height of the image

//     // Calculate the x-coordinate to center the image horizontally
//     const i = (pdfPageWidth - imageWidth) / 2;

//     // Calculate the y-coordinate to center the image vertically
//     // const j = (pdfPageHeight - imageHeight) / 2;

//     const j=40;

//     // Add the image to the PDF at the calculated position
//     doc.addImage('assets/images/Calibration.jpeg', 'JPEG', i, j, imageWidth, imageHeight);

//      //********************************************************************** */

//     // // Add description
//     // doc.setFontSize(16);
//     doc.setTextColor('#000000');
//     // // doc.setTextColor('#0000FF');
//     // doc.text(this.description, 20, 100);
//     // // doc.setTextColor('#FF0000');
//     // doc.text(this.description1, 20, 110);


//        //************************************************************** */
//        //************************* text in pdf ************************ */
// //          // Text to be added
// //     const description = "The laboratory is a quality-controlled environment with experienced personnel, trained in the proper operation of a broad range of equipment.All processes are carried out in accordance with ISO/IEC 17025 international standards& All calibrations are traceable to NIS.We offer a range of calibration services including Temperature ,Pressure ,T&RH ,Data Logger ,Digital Balance ,Air Flow , Water Flow ,Closed Volume ,Tachometer ,pH Measurement ,Conductivity Measurement ,Time Measurement & Hardness.";
// //     const descriptionArbic = "يعتبر المختبر بيئة خاضعة لرقابة الجودة ويضم موظفين ذوي خبرة ومدربين على التشغيل السليم لمجموعة واسعة من المعدات.";

// //     // Font size and style
// //     const fontSize = 13;
// //     doc.setFontSize(fontSize);

// //     // Wrap the text so it fits within the page width (avoid text overflow)
// //     const margin = 20; // Margin from the sides
// //     const maxWidth = pageWidth - margin * 2; // Max width for the text (taking margin into account)


// //      // For Arabic, set the text direction to Right-To-Left (RTL)
// //      if (localStorage.getItem('lang')=='ar') {
// //       doc.setR2L(true);  // Set Right-to-Left direction
// //     } else {
// //       doc.setR2L(false); // Default is Left-to-Right (LTR)
// //     }


// //     const wrappedText = doc.splitTextToSize(localStorage.getItem('lang')=='en'? description:descriptionArbic, maxWidth);

// //     // Calculate the total height of the wrapped text
// //     const textHeight = wrappedText.length * fontSize * 1.2; // 1.2 is for line spacing (adjust if needed)

// //     // Calculate the vertical position to center the text
// //     // const yPosition = (pageHeight - textHeight) / 2;

// //     const yPosition=100;
   

// //     // Calculate the horizontal position to center the text
// //     const xPosition = (pageWidth - maxWidth) / 2;

// //     // Add the wrapped text to the PDF at the calculated position
// //     doc.text(wrappedText, xPosition, yPosition);
// //   //=======================================================
  
  


       
// // //===================================== End text ===================================//
// // //==================================================================================//
   

   
    
// //        //**************************************************************** */
// //     // Add any additional content (you can adjust coordinates as needed)
// //     // For instance, if you want to add another section or an image, you can do so.

// //     // Download PDF
//     // doc.save('page-content.pdf');

// //***************************** try font ***************************** */




// doc.addFileToVFS('Amiri-Regular.ttf', this.fontvariable.font); // fontData is the base64 data of your font
// doc.addFont('Amiri-Regular.ttf', 'Amiri' , 'normal'); // fontData is the base64 data of your font
// doc.setFont('Amiri'); // fontData is the base64 data of your font

// // Set Arabic font
// // doc.setFont('Amiri-Regular');



//          // Text to be added
//     const description0 = "The laboratory is a ";

//     const description1="hello in your page";
//     const description2="glooooooooooooooooo";


//     const descriptionArbic = "يعتبر المختبر بيئة خاضعة لرقابة الجودة ويضم موظفين ذوي خبرة ومدربين على التشغيل السليم لمجموعة واسعة من المعدات.";

//     // Font size and style
//     const fontSize = 13;
//     doc.setFontSize(fontSize);

//     // Wrap the text so it fits within the page width (avoid text overflow)
//     const margin = 20; // Margin from the sides
//     const maxWidth = pageWidth - margin * 2; // Max width for the text (taking margin into account)


//      // For Arabic, set the text direction to Right-To-Left (RTL)
//      if (localStorage.getItem('lang')=='ar') {
//       doc.setR2L(true);  // Set Right-to-Left direction
//     } else {
//       doc.setR2L(false); // Default is Left-to-Right (LTR)
//     }


//     const wrappedText0 = doc.splitTextToSize(localStorage.getItem('lang')=='en'? description0:descriptionArbic,maxWidth);

//     const wrappedText1 = doc.splitTextToSize(localStorage.getItem('lang')=='en'? description1:descriptionArbic,maxWidth);

//     // Calculate the total height of the wrapped text
//     const textHeight = wrappedText0.length * fontSize * 1.2; // 1.2 is for line spacing (adjust if needed)

//     // Calculate the vertical position to center the text
//     // const yPosition = (pageHeight - textHeight) / 2;

//     const yPosition0=100;
//     const yPosition1=120;
   

//     // Calculate the horizontal position to center the text
//     const xPosition0 = (pageWidth - maxWidth) / 2;
//     const xPosition1 = (pageWidth - maxWidth) ;
//     // Add the wrapped text to the PDF at the calculated position
//     doc.text(wrappedText0, xPosition0, yPosition0  );
//     doc.text(wrappedText1, xPosition1, yPosition1  );
//   //=======================================================
  
  
//     doc.save('page-content.pdf');

       
// //===================================== End text ===================================//
// //==================================================================================//
   


   // ********************************* Train font *********************
  /********************************************************************* */
  // // title = 'Download as PDF Demo';

  // // Method to capture the content and download it as a PDF
  // downloadPdf() {
  //   const data = document.getElementById('content-to-download'); // Get the content you want to convert to PDF

  //   // Use html2canvas to capture the content as an image
  //   html2canvas(data!).then((canvas) => {
  //     const imgData = canvas.toDataURL('image/png'); // Convert canvas to image data (base64)

  //     // Create a new jsPDF instance
  //     const doc = new jsPDF();

  //     // Add the captured image to the PDF
  //     doc.addImage(imgData, 'PNG', 10, 10, 180, 160); // The values 10, 10, 180, and 160 represent the X, Y, width, and height of the image on the page

  //     // Save the generated PDF
  //     doc.save('content.pdf');
  //   });
  // }



  downloadPdf() {
    const data = document.getElementById('content-to-download'); // Get the content you want to convert to PDF
  
    // Use html2canvas to capture the content as an image
    html2canvas(data!).then((canvas) => {
      const imgData = canvas.toDataURL('image/png'); // Convert canvas to image data (base64)
  
      // Get the mobile screen width (can also use window.innerWidth for dynamic size)
      const mobileWidth = window.innerWidth; 
  
      // Calculate the PDF dimensions for the mobile width
      const pdf = new jsPDF({
        orientation: 'portrait', // Set orientation to portrait
        unit: 'px', // Use pixels for measurement (or you can use 'mm' if preferred)
        format: [mobileWidth, canvas.height * (mobileWidth / canvas.width)] // Set the page size to the mobile screen width and corresponding height
      });
  
      // Add the captured image to the PDF, scaling it to fit the page width
      pdf.addImage(imgData, 'PNG', 0, 0, mobileWidth, canvas.height * (mobileWidth / canvas.width));
  
      // Save the generated PDF
      pdf.save('all.pdf');
    });
  }




// // print content in more pages


  // downloadPdf() {
  //   const data = document.getElementById('content-to-download'); // Get the content you want to convert to PDF
  
  //   // Use html2canvas to capture the content as an image
  //   html2canvas(data!).then((canvas) => {
  //     const imgData = canvas.toDataURL('image/png'); // Convert canvas to image data (base64)
  
  //     // Get the mobile screen width (can also use window.innerWidth for dynamic size)
  //     const mobileWidth = window.innerWidth;
  
  //     // Calculate the PDF dimensions for the mobile width
  //     const pdf = new jsPDF({
  //       orientation: 'portrait', // Set orientation to portrait
  //       unit: 'px', // Use pixels for measurement (or you can use 'mm' if preferred)
  //       format: [mobileWidth, canvas.height * (mobileWidth / canvas.width)] // Set the page size to the mobile screen width and corresponding height
  //     });
  
  //     let imgHeight = canvas.height * (mobileWidth / canvas.width);
  //     let heightLeft = imgHeight;
  //     let position = 0; // Track the current position for image placement
  
  //     // If the image height is greater than the page size, split it across multiple pages
  //     while (heightLeft > 0) {
  //       pdf.addImage(imgData, 'PNG', 0, position, mobileWidth, Math.min(heightLeft, pdf.internal.pageSize.height));
  //       heightLeft -= pdf.internal.pageSize.height;
        
  //       // If there is more content, add another page
  //       if (heightLeft > 0) {
  //         pdf.addPage();
  //         position = -pdf.internal.pageSize.height; // Reset position for the next page
  //       }
  //     }
  
  //     // Save the generated PDF
  //     pdf.save('all.pdf');
  //   });
  // }
  
  
  

}
