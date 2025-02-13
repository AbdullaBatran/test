import { Component, OnInit ,AfterViewInit } from '@angular/core';
import { SharedService } from '../../../public/shared';

@Component({
  selector: 'app-calibration1',
  templateUrl: './calibration1.component.html',
  styleUrl: './calibration1.component.scss'
})
export class Calibration1Component implements OnInit , AfterViewInit {

  constructor(private languageService: SharedService) {}
   language = localStorage.getItem('lang');
  //  language: string | null = '';

   ngOnInit(): void {
    this.languageService.currentLanguage.subscribe((language) => {
      this.language = language;
      // You can also add additional logic to update content dynamically based on the language
    });

   }


   ngAfterViewInit() {
    window.scrollTo(0, 0); // This will scroll to the top of the page
  }

 




  
    
}
