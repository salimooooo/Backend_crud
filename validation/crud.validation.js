
const isEmpty = require('./isEmpty');
const validator = require('validator');



module.exports = function Validate (data){

    let errors={}

data.Email = !isEmpty(data.Email) ? data.Email : ""
data.Lastname = !isEmpty(data.Lastname) ? data.Lastname : ""
data.Firstname = !isEmpty(data.Firstname) ? data.Firstname : ""
data.Password = !isEmpty(data.Password) ? data.Password : ""
data.Birthday = !isEmpty(data.Birthday) ? data.Birthday : ""
data.Location = !isEmpty(data.Location) ? data.Location : ""


if (!validator.isEmail(data.Email)){
    errors.Email = " Format required Email"
    }

if (validator.isEmpty(data.Email)){
errors.Email = "required Email"
}


if (!validator.isUppercase(data.Lastname)|| !validator.isAlpha(data.Lastname)){
    errors.Lastname = " Format required Lastname"
    }

if (validator.isEmpty(data.Lastname)){
    errors.Lastname = "required Lastname"
    }

    

    if (!validator.isUppercase(data.Firstname)|| !validator.isAlpha(data.Firstname)){
        errors.Lastname = " Format required Firstname"
        }

if (validator.isEmpty(data.Firstname)){
    errors.Firstname = "required Firstname"
    }

    /*  PASSWORD
Au moins 8 caractères de long.
Au moins 1 lettre minuscule.
Au moins 1 lettre majuscule.
Au moins 1 chiffre.
Au moins 1 symbole.


    */

if (!validator.isStrongPassword(data.Password)){
    errors.Password = " Format required Password"
    }

if (validator.isEmpty(data.Password)){
    errors.Password = "required Password"
    }


    if (!validator.isDate(data.Birthday)){
        errors.Birthday = "required Birthday"
        }
    
    
if (validator.isEmpty(data.Birthday)){
    errors.Birthday = "required Birthday"
    }


if (!validator.isLocale(data.Location)){
        errors.Location = "required Location"
        }
    if (validator.isEmpty(data.Location)){
        errors.Location = "required Location"
        }



     return {
        errors,
        isValid: isEmpty(errors)
     }


};