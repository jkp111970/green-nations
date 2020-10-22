import { Injectable } from "@angular/core";

import { Country } from '../view-model/country';

@Injectable()
export class CountryService {

    constructor(){}

    private countries: Array<Country> = [
        {id:1,name:"India",epiIndex:111.1,currency:"INR"},
        {id:2,name:"USA",epiIndex:222.1,currency:"USD"},
        {id:3,name:"UK",epiIndex:333.1,currency:"GBP"},
        {id:4,name:"Switzerland",epiIndex:909.1,currency:"EUR"}
    ];

    getCountries(): Array<Country> {
        return this.countries;
    }

    getCountry(id: number) : Country {
        return this.countries.find(cntry => cntry.id == id);
    }

    updateCountry(country: Country) : void {
        let indexOfCountryForUpdate = this.countries.findIndex(c => c.id == country.id);
        this.countries[indexOfCountryForUpdate] = country;
    }

    createCountry(country: Country) : void {
        let maxId : number = 0;
        this.countries.forEach(cntr => {
            if(cntr.id > maxId) {
                maxId = cntr.id;
            }
        });
        maxId = maxId + 1;
        country.id = maxId;
        this.countries.push(country);
    }

    deleteCountry(id: number) : void {
        let indx = this.countries.findIndex(c => c.id == id);
        this.countries.splice(indx,1);
    }

}