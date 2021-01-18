class restaurantsApi {

   getAllRestaurants(city,page,isInit){
    const start = page * 20;
    return fetch('https://developers.zomato.com/api/v2.1/search?entity_id='+city+'&entity_type=city&start='+start+'&count=20&category=6',
                {
                  method: 'GET',
                  headers: {"user-key" : "4b22cef4949b6dd368a5b9a32cb83fbd"}
                })
    .then(response => response.json());
  }

}

export default new restaurantsApi(); // why is new used here??
