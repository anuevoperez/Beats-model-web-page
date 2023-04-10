const SubscribeNewsletter = async (email) => {

    /* Se debe de formatear los datos según lo solicita la API del backend. En este caso estamos usando "Strapi" como backend, 
    aqui se detalla como se deben enviar los datos a Strapi "https://docs.strapi.io/developer-docs/latest/developer-resources/database-apis-reference/rest-api.html#endpoints"
    */
    const datosAEnviar = {
        
        data:{
            email
        }
    }
    
    // Opciones para realizar una peticion POST con la función fetch.

    const requestOptions = {

        method:'POST',
        headers:{

            'Content-Type':'application/json'
        },
        
        body: JSON.stringify(datosAEnviar)
    }

    const jsonResponse = await fetch('http://localhost:1337/api/newsletter-users', requestOptions);

    if(!jsonResponse.ok){
        throw new Error('Something went wrong!')
    }


    const response = await jsonResponse.json();
    
    return response;
}

export default SubscribeNewsletter;