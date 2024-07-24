import { environment } from '../../../src/environments/environment';
const BASEURL = environment.api;


export const auth={

login: BASEURL+'login',
register:BASEURL+'register',
have_all_user:BASEURL+'all users'
}
