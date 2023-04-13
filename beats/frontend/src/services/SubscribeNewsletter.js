const SubscribeNewsletter = async (email) => {

    const jsonResponse = await fetch(`https://us-central1-beats-backend.cloudfunctions.net/sendMail?dest=${email}`);

    if(!jsonResponse.ok){
        throw new Error('Something went wrong!')
    }

    const response = await jsonResponse.json();
    
    return response;
}

export default SubscribeNewsletter;