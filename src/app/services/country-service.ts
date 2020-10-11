import { Injectable } from "@angular/core";

import { Country } from '../view-model/country';

@Injectable()
export class CountryService {

    constructor(){}

    private countries: Array<Country> = [
        {id:1,name:"India",epiIndex:111.1},
        {id:2,name:"USA",epiIndex:222.1},
        {id:3,name:"UK",epiIndex:333.1},
        {id:4,name:"Switzerland",epiIndex:909.1}
    ];

    getCountries(): Array<Country> {
        return this.countries;
    }

    getCountry(id: number) : Country {
        return this.countries.find(cntry => cntry.id == id);
    }

}