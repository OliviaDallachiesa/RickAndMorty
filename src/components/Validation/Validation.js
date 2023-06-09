const validation = (userData) => {
    const errors = {};
    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/
    if(!emailRegex.test(userData.email)){
        errors.email = "el mail ingresado no es valido rey/reina"
    }

    if(!userData.email){ // lo mismo que decir userData.email.length === ""
        errors.email = "Tenes que escribir un email compa ;)"
    }

    if(userData.email.length > 35){
        errors.email = "Es muy largo euuu"
    }

    if(!/.*\d+.*/.test(userData.password)){
        errors.password = "Ponele un numerito a la contra porfa"
    }

    if(userData.password.length < 6 || userData.password.length > 10){
        errors.password = "La password debe tener entre 6 y 10 caracteres"
    }

    return errors;
}

export default validation;