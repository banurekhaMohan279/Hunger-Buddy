class restaurantsApi {

   getRestaurantCategories(){
    return fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json());
  }

}

export default new restaurantsApi(); // why is new used here??
