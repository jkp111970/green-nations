import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CountryService } from '../services/country-service';
import { Country } from '../view-model/country';

@Component({
  selector: 'app-country-maint',
  templateUrl: './country-maint.component.html',
  styleUrls: ['./country-maint.component.css']
})
export class CountryMaintComponent implements OnInit {

  constructor(private countryService: CountryService,
    private router: Router) { }

  countries : Array<Country>;
  isDeleting : Boolean = false;
  deleteCountryId : number;

  ngOnInit(): void {
    this.countries = this.countryService.getCountries();
  }

  addCountry(): void {
    this.router.navigate(['/authenticated/country-detail',0,'add']);
  }

  showCountry(id: number): void{
    this.router.navigate(['/authenticated/country-detail',id,'read']);
  }

  editCountry(id: number): void{
    this.router.navigate(['/authenticated/country-detail',id,'update']);
  }

  confirmDeleteCountry(id: number) : void {
    this.isDeleting = true;
    this.deleteCountryId = id;
  }

  cancelDelete(): void {
    this.isDeleting = false;
  }

  deleteCountry(id: number) : void {
    this.countryService.deleteCountry(id);
    this.isDeleting = false;
  }

}
