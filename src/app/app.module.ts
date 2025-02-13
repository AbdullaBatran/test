import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { CalibrationComponent } from './calibration/calibration.component';
import { WarehouseComponent } from './warehouse/warehouse.component';
import { SuppliesComponent } from './supplies/supplies.component';
import { ElectromechanicalComponent } from './electromechanical/electromechanical.component';
import { ComponentservicesComponent } from './componentservices/componentservices.component';
import { CalibrationdiscribtionComponent } from './componentservices/calibrationdiscribtion/calibrationdiscribtion.component';
import { ThermalmapdiscribtionComponent } from './componentservices/thermalmapdiscribtion/thermalmapdiscribtion.component';
import { QualificationdiscribtionComponent } from './componentservices/qualificationdiscribtion/qualificationdiscribtion.component';
import { OursystemComponent } from './warehouse/oursystem/oursystem.component';
import { OurproductComponent } from './warehouse/ourproduct/ourproduct.component';
import { TemperatureComponent } from './oursystem/temperature/temperature.component';
import { EnvironmentalComponent } from './oursystem/environmental/environmental.component';
import { SecurityComponent } from './oursystem/security/security.component';
import { SkarptWComponent } from './ourproducts/skarpt-w/skarpt-w.component';
import { SkmanComponent } from './ourproducts/skman/skman.component';
import { SkarpthubComponent } from './ourproducts/skarpthub/skarpthub.component';
import { ConstructionComponent } from './electromechanical/construction/construction.component';
import { MaintenanceComponent } from './electromechanical/maintenance/maintenance.component';
import { Smartwarehouse1Component } from './smartwarehouse1/smartwarehouse1.component';
import { Calibration1Component } from './calibration1/calibration1.component';
import { Refrigeration1Component } from './refrigeration1/refrigeration1.component';
import { Supplies1Component } from './supplies1/supplies1.component';



// Factory function to create the translate loader
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/Local/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CalibrationComponent,
    WarehouseComponent,
    SuppliesComponent,
    ElectromechanicalComponent,
    ComponentservicesComponent,
    CalibrationdiscribtionComponent,
    ThermalmapdiscribtionComponent,
    QualificationdiscribtionComponent,
    OursystemComponent,
    OurproductComponent,
    TemperatureComponent,
    EnvironmentalComponent,
    SecurityComponent,
    SkarptWComponent,
    SkmanComponent,
    SkarpthubComponent,
    ConstructionComponent,
    MaintenanceComponent,
    Smartwarehouse1Component,
    Calibration1Component,
    Refrigeration1Component,
    Supplies1Component,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      // defaultLanguage:'ar',
      
      // defaultLanguage: localStorage.getItem('language') || 'ar',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
