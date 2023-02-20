import UrlParser from '../../routes/url-parser';
import RestoDB from '../../data/restodb';
import {createRestaurantDetailTemplate} from '../templates/templates-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';


const Detail = {
  async render() {
    return `
    <div id="likeButtonContainer"></div>
      <div id="restaurant" class="restaurant"></div>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurants = await RestoDB.detailRestaurant(url.id);
    const restaurantContainer = document.querySelector('#restaurant');
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurants);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: restaurants.id,
        name: restaurants.name,
        rating: restaurants.rating,
        city: restaurants.city,
        pictureId: restaurants.pictureId,
      },
    });
  },
};

export default Detail;
