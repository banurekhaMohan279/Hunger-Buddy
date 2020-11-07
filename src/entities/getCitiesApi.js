export default function getCitiesApi(location){
    return fetch ('https://developers.zomato.com/api/v2.1/locations?q='+location,
                  {
                    method: 'GET',
                    headers: {"user-key":"4b22cef4949b6dd368a5b9a32cb83fbd"}
                  })
                  .then(response => response.json());
}
