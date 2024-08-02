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
  showTickets: BASEURL+'tickets/',
  updateTicket: BASEURL+'tickets/'

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
  View_single_request_With_products : BASEURL+'request-products/',
  //تعرض كل المنتجات في السستم
  View_products : BASEURL+'getProducts',
  View_requests :  BASEURL+'getProducts',
}













export const  rest_profile={
  AddFile : BASEURL+'AddFile',
  GetFile :BASEURL+'Agetfile/2/',
  showUser : BASEURL+'show/',
  Show_Wallet : BASEURL+'',
  New_Working_hours : BASEURL+'',
}


export const rest_support ={
  New_Ticket : BASEURL+'teckets',
}





















export const  profile={
  showUser : BASEURL+'show/',

}

