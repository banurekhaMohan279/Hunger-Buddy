class restaurantDetailsApi {

   getRestaurantDetails(res_id){
    return fetch('https://developers.zomato.com/api/v2.1/restaurant?res_id='+res_id,
                {
                  method: 'GET',
                  headers: {"user-key" : "4b22cef4949b6dd368a5b9a32cb83fbd"}
                })
    .then(response => response.json());
  }

}

export default new restaurantDetailsApi();
