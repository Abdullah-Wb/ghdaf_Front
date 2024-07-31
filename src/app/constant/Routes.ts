import { environment } from '../../../src/environments/environment';
const BASEURL = environment.api;


export const auth={

login: BASEURL+'login',
register:BASEURL+'register'
}

export const users = {

  allUsers : BASEURL+'index',
  showUser : BASEURL+'show/',
  activeUser : BASEURL+'users/activate/'

}

export const admin_home = {

  Count_users : BASEURL+'users',
Orders_every_month : BASEURL+'monthly-orders',
Product_By_Type : BASEURL+'product-type',

  // Orders_every_month : BASEURL+'show/',

}




export const  rest_orders={
  //اضافة منتج في الطلب
  New_Product : BASEURL+'addProduct',
  //تفاصيل الطلب
  View_single_request_With_products : BASEURL+'request-products/1',
  //تعرض كل المنتجات في السستم
  View_products : BASEURL+'getProducts',
  View_requests :  BASEURL+'getProducts',
}


