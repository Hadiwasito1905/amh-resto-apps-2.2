import FavoriteRestaurantIdb from '../../data/database';
import {createRestaurantItemTemplate} from '../templates/templates-creator';

const favorite = {
  async render() {
    return `
        <section class="headline" id="headline">
        <h2>List Restoran Favorit Anda</h2>
        </section>
  
          <section class="content" id="list">
        
        </section>
        `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurant();
    const restaurantContainer = document.querySelector('#list');
    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default favorite;
