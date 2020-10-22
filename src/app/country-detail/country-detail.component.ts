import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountryService } from '../services/country-service';
import { Country } from '../view-model/country';
import { FieldDefinition } from '../../fw/dynamic-forms/fielddefinition';

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
    {key:"id",type:"number",isId:true,label:"Id",required:true},
    {key:"name",type:"string",isId:false,label:"Name",required:true},
    {key:"epiIndex",type:"number",isId:false,label:"EPI Index",required:true},
    {key:"currency",type:"string",isId:false,label:"currency",required:true}
  ];
  action: string;

  ngOnInit(): void {
    let cntrId = this.route.snapshot.params['id'];
    this.action = this.route.snapshot.params['action'];
    //console.log("Country Id is:"+cntrId);
    //console.log("Action is:"+action);
    this.country = this.countryService.getCountry(cntrId);
  }

  updateContryDetails(cntry: Country) : void {
    console.log("####### Captured update event in contry details");
    this.countryService.updateCountry(cntry);
    this.router.navigate(["/authenticated/country-maint"]);
  }

  createContryDetails(cntry: Country): void {
    console.log("####### Captured create event in contry details");
    console.log(cntry.name);
    this.countryService.createCountry(cntry);
    this.router.navigate(["/authenticated/country-maint"]);
  }

}
