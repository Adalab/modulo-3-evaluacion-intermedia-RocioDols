
const getApiData = () => {
    return fetch('https://beta.adalab.es/pw-recursos/apis/adalabers-v1/promo-patata.json')
        .then(response => response.json())
        .then(responseData => {
            // Cuando el API responde guardamos los datos en el estado para que se re-renderice el componente
            console.log(responseData);
            return responseData.results;
        });
}

export default getApiData;