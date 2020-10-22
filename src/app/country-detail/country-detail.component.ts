import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountryService } from '../services/country-service';
import { Country } from '../view-model/country';
import { FieldDefinition } from '../../fw/dynamic-forms/fielddefinition';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.css']
})
export class CountryDetailComponent implements OnInit {

  constructor(private countryService: CountryService,
    private router: Router,
    private route: ActivatedRoute) { }

  country: Country;
  countryFields : Array<FieldDefinition> = [
    {key:"id",type:"number",isId:true,label:"Id",required:false},
    {key:"name",type:"string",isId:false,label:"Name",required:true},
    {key:"epiIndex",type:"number",isId:false,label:"EPI Index",required:true},
    {key:"currency",type:"string",isId:false,label:"currency",required:false}
  ];
  action: string;
  errorMessage: string;

  ngOnInit(): void {
    let cntrId = this.route.snapshot.params['id'];
    this.action = this.route.snapshot.params['action'];

    if(this.action === "add"){
      this.country = {id:0, name:"", epiIndex:null, currency:null};
    } else {
      let observable : Observable<any> = this.countryService.getCountry(cntrId);
      observable.subscribe( response => {
        this.country = response;
      });
    }
    
  }

  updateContryDetails(cntry: Country) : void {
    console.log("country mnt update called");
    this.errorMessage = null;
    let observable = this.countryService.updateCountry(cntry);
    observable.subscribe(
      response => {
        this.router.navigate(["/authenticated/country-maint"]);
      },
      err => {
        console.log("country mnt Error received");
        this.errorMessage = "Error updating countries";
      }
    );
    
  }

  createContryDetails(cntry: Country): void {
    this.errorMessage = null;
    let observable : Observable<any> = this.countryService.createCountry(cntry);
    observable.subscribe(
      response => {
        this.country = response;
        this.router.navigate(["/authenticated/country-maint"]);
      },
      err => { 
        this.errorMessage = err; 
      }
    );
  }

}
