import { FormGroup, FormControl, ValidatorFn, AbstractControl } from "@angular/forms";


export class FormValidatorExtension {

   public static validateAllFormFields(formGroup: FormGroup) { 
        Object.keys(formGroup.controls).forEach(field => {
            const control = formGroup.get(field);
            if (control instanceof FormControl) {
                control.markAsTouched({ onlySelf: true });
            } else if (control instanceof FormGroup) {
                this.validateAllFormFields(control);
            }
        });
    }

    public static equalValueValidator(targetKey: string, toMatchKey: string): ValidatorFn {
        return (group: FormGroup): {[key: string]: any} => {
          const target = group.controls[targetKey];
          const toMatch = group.controls[toMatchKey];
          if (target.touched && toMatch.touched) {
            const isMatch = target.value === toMatch.value;
            // set equal value error on dirty controls
            if (!isMatch && target.valid && toMatch.valid) {
              toMatch.setErrors({equalValue: targetKey});
              const message = targetKey + ' != ' + toMatchKey;
              return {'equalValue': message};
            }
            if (isMatch && toMatch.hasError('equalValue')) {
              toMatch.setErrors(null);
            }
          }
      
          return null;
        };
      }

     
    public static dateGreaterThan(sourceDateControlName: string, targetDateControlName: string, errorMessage : string = null): ValidatorFn {
        return (f: FormGroup): { [key: string]: boolean } | null => {
            let date1 = f.controls[sourceDateControlName].value;
            let date2 = f.controls[targetDateControlName].value;
            if(date1=="")
                date1 = null;
            if(date2=="")
                date2= null;
            
            if ((date1 !== null && date2 !== null) && new Date(date1) < new Date(date2)) {
                f.controls[sourceDateControlName].setErrors({dateComparerError: errorMessage || sourceDateControlName+' should be greater than '+targetDateControlName});

            }
            return null;
        };
    }

    public static timeGreaterThan(sourceTimeControlName: string, targetTimeControlName: string, errorMessage : string = null, sourceDateControlName:string = null, targetDateControlName:string = null,): ValidatorFn {
        return (f: FormGroup): { [key: string]: boolean } | null => {
           
            let date1 ="2000-01-01",date2 = "2000-01-01";

            if(sourceDateControlName!=null && targetDateControlName!=null)
            {                
            date1 = f.controls[sourceDateControlName].value;
            date2 = f.controls[targetDateControlName].value;
            if(date1=="")
             date1 = "2000-01-01";
            if(date2=="")
             date2= "2000-01-01";
            }

            let time1 = f.controls[sourceTimeControlName].value;
            let time2 = f.controls[targetTimeControlName].value;
            if(time1=="")
                time1 = null;
            if(time2=="")
                time2= null;
            
            if ((time1 !== null && time2 !== null) && new Date(date1+"T"+time1+":00Z") < new Date(date2+"T"+time2+":00Z")) {
                f.controls[sourceTimeControlName].setErrors({timeComparerError: errorMessage || sourceTimeControlName+' should be greater than '+targetTimeControlName});
            }
            return null;
        };
    }
}