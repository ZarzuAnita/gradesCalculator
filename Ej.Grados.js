function conversion(event){
    event.preventDefault();
    let celsius= document.forms["the-form"]["celsius"].value;
    let kelvin= document.forms["the-form"]["kelvin"].value;

    if((celsius=="")&& (kelvin=="")){
        alert("Inserta un número")
        return false;
    }else if (kelvin !=""){
        document.forms["the-form"]["celsius"].value=parseFloat(kelvin)-273.15;
        return false;
    }else if (celsius !=""){
        document.forms["the-form"]["kelvin"].value=parseFloat(celsius)+273.15;
        return false;
    }

    }
