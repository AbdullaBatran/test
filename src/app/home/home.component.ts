import { Component, EventEmitter, Output, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SharedService } from '../../../public/shared';
declare var bootstrap: any;
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {


   @Output() languageSelected = new EventEmitter<string>(); // Output event to notify parent component
  
    @ViewChild('languageModal') languageModal!: ElementRef; // Modal reference
  
    constructor(private translate: TranslateService,private languageService: SharedService) {
      // Check if language preference is already saved in localStorage
      const savedLang = localStorage.getItem('lang');
      if (!savedLang) {
        // Set default language if not found in localStorage
        this.translate.setDefaultLang('ar');
        this.translate.use('ar');
      } else {
        // If a saved language exists, use it
        this.translate.use(savedLang);
      }
    }
  
    ngAfterViewInit() {
      window.scrollTo(0, 0); // This will scroll to the top of the page
      // Open the modal after view is initialized
      if (!localStorage.getItem('lang')) {
        this.openModal();
      }
    }
  
    openModal() {
      const modalElement = this.languageModal.nativeElement;
      $(modalElement).modal('show'); // Show the modal
    }
  
    selectLanguage(language: string) {
      // Change language dynamically
      this.translate.setDefaultLang(language);
      this.translate.use(language);
  
      // Save the language preference to localStorage
      localStorage.setItem('lang', language);
  
      // Emit the event to notify the parent component
      this.languageSelected.emit(language);
  
      const modalElement = this.languageModal.nativeElement;
      $(modalElement).modal('hide');
  
  
    }
    shouldAddMargin = false;


    language = localStorage.getItem('lang');
  
    ngOnInit() {

      
      this.languageService.currentLanguage.subscribe((language) => {
        this.language = language;

        if (language === 'ar') {
        this.shouldAddMargin = true;
      } 

        
        // You can also add additional logic to update content dynamically based on the language
      });

    }

  

}
