import Restodb from '../../data/restodb';
import {createRestaurantItemTemplate} from '../templates/templates-creator';

const Home ={
  async render() {
    return `
    <section class="headline" id="headline"> 
            <h2>Angkringan Mbah Hadi Resto Apps</h2>
    </section>
    
    <section class="content" id="list">
      
    </section>
        `;
  },

  async afterRender() {
    const restaurants = await Restodb.homePage();
    const restaurantContainer = document.querySelector('#list');
    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Home;
