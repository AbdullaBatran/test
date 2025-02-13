import { Component ,AfterViewInit} from '@angular/core';
import { SharedService } from '../../../public/shared';

@Component({
  selector: 'app-refrigeration1',
  templateUrl: './refrigeration1.component.html',
  styleUrl: './refrigeration1.component.scss'
})
export class Refrigeration1Component implements AfterViewInit {
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
