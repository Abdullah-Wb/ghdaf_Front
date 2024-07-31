import { environment } from '../../../src/environments/environment';
const BASEURL = environment.api;


export const auth={

login: BASEURL+'login',
register:BASEURL+'register'
}

export const users = {

  allUsers : BASEURL+'index',
  showUser : BASEURL+'show/',
  activeUser : BASEURL+'users/activate/',
  viewOrders: BASEURL+'getProducts',//عرض الطلبات بشكل عام
  viewTickets: BASEURL+'tickets',
  showTickets: BASEURL+'tickets/'

}

export const admin_home = {

  Count_users : BASEURL+'users',
Orders_every_month : BASEURL+'monthly-orders',
Product_By_Type : BASEURL+'product-type',

  // Orders_every_month : BASEURL+'show/',

}
