import { Injectable } from "@angular/core";
import { Observable, of } from 'rxjs';
import { delay, flatMap } from 'rxjs/internal/operators';

import { Country } from '../view-model/country';

@Injectable()
export class CountryService {

    constructor() { }

    private countries: Array<Country> = [
        { id: 1, name: "India", epiIndex: 111.1, currency: "INR" },
        { id: 2, name: "USA", epiIndex: 222.1, currency: "USD" },
        { id: 3, name: "UK", epiIndex: 333.1, currency: "GBP" },
        { id: 4, name: "Switzerland", epiIndex: 909.1, currency: "EUR" }
    ];

    getCountries(): Observable<any> {
        return of(this.countries).pipe(delay(500));
    }

    getCountry(id: number): Observable<any> {
        let country = this.countries.find(cntry => cntry.id == id);
        return of(country);
    }

    updateCountry(country: Country): Observable<any> {
        /*return of({})
            .pipe(
                delay(100)
            )
            .pipe(
                flatMap( x => { 
                    throw new Error("update Country Failed"); 
                })
            );*/
        let indexOfCountryForUpdate = this.countries.findIndex(c => c.id == country.id);
        this.countries[indexOfCountryForUpdate] = country;
        return of(country).pipe(delay(1000));
    }

    createCountry(country: Country): Observable<any> {
        /*
        return of({})
            .pipe(
                delay(100)
            )
            .pipe(
                flatMap( x => { 
                    throw new Error("Create Country Failed"); 
                })
            );
        */
        let maxId: number = 0;
        this.countries.forEach(cntr => {
            if (cntr.id > maxId) {
                maxId = cntr.id;
            }
        });
        maxId = maxId + 1;
        country.id = maxId;
        this.countries.push(country);
        return of(country);
    }

    deleteCountry(id: number): Observable<any> {
        /*return of({})
            .pipe(
                delay(2000)
            )
            .pipe(
                flatMap( x => { 
                    throw new Error("delete Country Failed"); 
                })
            );*/
        let indx = this.countries.findIndex(c => c.id == id);
        this.countries.splice(indx, 1);
        return of({}).pipe(delay(100));
    }

}