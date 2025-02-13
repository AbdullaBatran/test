import { Component } from '@angular/core';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.component.html',
  styleUrl: './maintenance.component.scss'
})
export class MaintenanceComponent {
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
      pdf.save('Thermal-Mapping.pdf');
    });
  }
}
