import Devise from 'ember-simple-auth/authenticators/devise';
import ENV from '../config/environment';

export default Devise.extend({
  serverTokenEndpoint: ENV.API_URL + '/users/sign_in'
});