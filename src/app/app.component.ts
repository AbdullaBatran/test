import { Component, EventEmitter, Output, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SharedService } from '../../public/shared';
declare var bootstrap: any;
declare var $: any;
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'QR';

  @Output() languageSelected = new EventEmitter<string>(); // Output event to notify parent component

  @ViewChild('languageModal') languageModal!: ElementRef; // Modal reference

  constructor(private translate: TranslateService , private languageService: SharedService) {
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

    this.languageService.changeLanguage(language); // Update language in the service Bta3et pdf ely bt8yer language mn component ela component tany
    
    // Change language dynamically
    this.translate.setDefaultLang(language);
    this.translate.use(language);

    // Save the language preference to localStorage
    localStorage.setItem('lang', language);

    // Emit the event to notify the parent component
    this.languageSelected.emit(language);

    // Close the modal after language selection
    // const modalElement = this.languageModal.nativeElement;
    // const modal = new bootstrap.Modal(modalElement);
    // modal.hide();



    // location.reload()
    const modalElement = this.languageModal.nativeElement;
    $(modalElement).modal('hide');


  }

  ngOnInit() {
    // Modal is opened automatically after view initialization (handled in ngAfterViewInit)
  }
}
