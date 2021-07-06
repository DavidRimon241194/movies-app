import { AbstractControl, ValidationErrors } from "@angular/forms";

export class NewMovieValidators {

    static wrongImdbUrl(control: AbstractControl): ValidationErrors | null {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (!control.value.includes('https://www.imdb.com/'))
                    resolve({ wrongImdbUrl: true });
                else
                    resolve(null);
            }, 2000);
        });
    }

    static wrongImageUrl(control: AbstractControl): ValidationErrors | null {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (!control.value.includes('https://www.imdb.com/'))
                    resolve({ wrongImageUrl: true });
                else
                    resolve(null);
            }, 2000);
        });
    }
}