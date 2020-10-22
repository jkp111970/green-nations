import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

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
  isDeleting : boolean = false;
  deleteCountryId : number;
  deleteError: string;

  ngOnInit(): void {
    let obserable : Observable<any> = this.countryService.getCountries();
    obserable.subscribe( response => {
      this.countries = response;
    });
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
    this.deleteError = null;
  }

  cancelDelete(): void {
    this.isDeleting = false;
  }

  deleteCountry(id: number) : void {
    let observable = this.countryService.deleteCountry(id);
    observable.subscribe(
      response => { this.cancelDelete(); },
      err => {
        this.deleteError = err;
      }
    );
  }

}
