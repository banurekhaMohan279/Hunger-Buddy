class restaurantsApi {

   getRestaurantCategories(){
    return fetch('https://developers.zomato.com/api/v2.1/categories',
                {
                  method: 'GET',
                  headers: {"user-key" : "4b22cef4949b6dd368a5b9a32cb83fbd"}
                })
    .then(response => response.json());
  }

}

export default new restaurantsApi(); // why is new used here??
