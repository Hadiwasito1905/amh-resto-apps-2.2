import API_ENDPOINT from '../globals/api-endpoint';

// eslint-disable-next-line require-jsdoc
class RestoDB {
  // eslint-disable-next-line require-jsdoc
  static async homePage() {
    const response = await fetch(API_ENDPOINT.home);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  // eslint-disable-next-line require-jsdoc
  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.detail(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }
}

export default RestoDB;
