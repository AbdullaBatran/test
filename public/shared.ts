import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

 

  private languageSource = new BehaviorSubject<string>('ar'); // Default language is Arabic
  currentLanguage = this.languageSource.asObservable(); // Observable to get the current language

  constructor() {
    // Get saved language from localStorage if it exists
    const savedLang = localStorage.getItem('lang');
    if (savedLang) {
      this.languageSource.next(savedLang); // Set saved language
    }
  }

  changeLanguage(language: string) {
    // Update language and store in localStorage
    localStorage.setItem('lang', language);
    this.languageSource.next(language);
  }
}
