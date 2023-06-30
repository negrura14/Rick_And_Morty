const validator = (data) =>{
    let errors = {};

    if(!data.email.includes('@')){
        errors.E1 = 'Ingresa un email valido.'
    }
    if(!data.email){
        errors.E2 = 'Ingrese un email.'
    }
    if(data.email.length > 35){
        errors.E3 = 'Menos de 35 caracteres'
    }
    
    if(!/.*\d+.*/.test(data.password)){
        errors.P1 = 'Al menos un numero'
    }
    if (data.password.length < 6 || data.password.length > 10) {
        errors.P2 = 'Longitud incorrecta'
    }
    return errors;

}
export default validator;