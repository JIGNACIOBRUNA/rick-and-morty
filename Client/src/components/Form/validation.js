export default function validateInput(inputs){
    let errors = {};
    if(!inputs.username || !/\S+@\S+\.\S+/.test(inputs.username) || inputs.username.length >= 35){ 
        errors.username = "Campo obligatorio a rellenar con menos de 35 caracteres"}
    if(!inputs.password || !/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,10}$/.test(inputs.password)){
        errors.password ="La contraseña debe tener entre 6 a 10 caracteres y al menos un numero"}
    return errors;
}