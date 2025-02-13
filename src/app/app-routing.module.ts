import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WarehouseComponent } from './warehouse/warehouse.component';
import { CalibrationComponent } from './calibration/calibration.component';
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
import { Refrigeration1Component } from './refrigeration1/refrigeration1.component';
import { Smartwarehouse1Component } from './smartwarehouse1/smartwarehouse1.component';
import { Calibration1Component } from './calibration1/calibration1.component';
import { Supplies1Component } from './supplies1/supplies1.component';

const routes: Routes = [
  {path:'', redirectTo:'home',pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'warehouse',component:WarehouseComponent},
  {path:'calibration', component:CalibrationComponent},
  {path:'supplies', component:SuppliesComponent},
  {path:'electro', component:ElectromechanicalComponent},
  {path:'component',component:ComponentservicesComponent},
  {path:'calibrationdis',component:CalibrationdiscribtionComponent},
  {path:'thermaldiscribtion',component:ThermalmapdiscribtionComponent},
  {path:'qualificationdis',component:QualificationdiscribtionComponent},
  {path:'oursystem',component:OursystemComponent},
  {path:'ourproduct',component:OurproductComponent},
  {path:'temperature',component:TemperatureComponent},
  {path:'environmental',component:EnvironmentalComponent},
  {path:'security',component:SecurityComponent},
  {path:'skarpt-w',component:SkarptWComponent},
  {path:'skman',component:SkmanComponent},
  {path:'skarpthub',component:SkarpthubComponent},
  {path:'construction',component:ConstructionComponent},
  {path:'maintenance',component:MaintenanceComponent},
  {path:'refrigeration1',component:Refrigeration1Component},
  {path:'smartwarehouse1',component:Smartwarehouse1Component},
  {path:'calibration1',component:Calibration1Component},
  {path:'supplies1',component:Supplies1Component},









];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
