import { Component,AfterViewInit } from '@angular/core';
import { SharedService } from '../../../public/shared';

@Component({
  selector: 'app-smartwarehouse1',
  templateUrl: './smartwarehouse1.component.html',
  styleUrl: './smartwarehouse1.component.scss'
})
export class Smartwarehouse1Component implements AfterViewInit {
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
