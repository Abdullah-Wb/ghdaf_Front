export const MENU = [
  // admin
  {
    label: 'الرئيسية',
    isTitle: false, // عشان ما عندها سب ايتم و عشان عندها لنك
    link: '/main-apps/admin-home/dash-list',
    user_type_list: [3],
  },
  {
    label: 'طلبات المستخدمين',
    isTitle: true,//عشان عندها سب ايتم و عشان ما عندها لنك
    user_type_list: [3],
    subItems: [
      {
        label: 'طلبات انشاء الحساب',
        link: '/main-apps/users-orders/new-users-orders',
        user_type_list: [3],
      },
      {
        label: 'طلبات السحب من المحفظة',
        link: '/main-apps/users-orders/wallet-request',
        user_type_list: [3],
      },
      {
        label: 'طلبات تغير المستندات',
        link: '/main-apps/users-orders/document-request',
        user_type_list: [3],
      },
      {
        label: 'التذاكر',
        link: '/main-apps/users-orders/tickets',
        user_type_list: [3],
      },
    ]
  },
  {
    label: 'الخرائط',
    isTitle: false, // عشان ما عندها سب ايتم و عشان عندها لنك
    link: '/main-apps/admin-maps/map',
    user_type_list: [3],
  },
  {
    label: 'المستخدمين',
    isTitle: false, // عشان ما عندها سب ايتم و عشان عندها لنك
    link: '/main-apps/users/user-table',
    user_type_list: [3],
  },
  {
    label: 'الطلبات',
    isTitle: false, // عشان ما عندها سب ايتم و عشان عندها لنك
    link: '/main-apps/all-orders/order-table',
    user_type_list: [3],
  },



  // org
  {
    label: 'الرئيسية',
    isTitle: false,
    link: '/main-apps/org-home/org-home-layout',
    user_type_list: [2],
  },
  {
    label: 'طلبي',
    isTitle: false,
    link: '/main-apps/my-order',
    user_type_list: [2],
  },
  {
    label: 'الملف الشخصي',
    isTitle: false,
    link: '/main-apps/org-profile',
    user_type_list: [2],
  },
  {
    label: 'الدعم الفني',
    isTitle: false,
    link: '/main-apps/org-support',
    user_type_list: [2],
  },




  // rest
  {
    label: 'الرئيسية',
    isTitle: false,
    link: '/main-apps/rest-home',
    user_type_list: [1],
  },
  {
    label: 'الطلبات',
    isTitle: true,
    user_type_list: [1],
    subItems: [
      {
        label: 'الطلبات الحالية',
        isTitle: false,
        link: '/main-apps/rest-orders/current-order',
        user_type_list: [1],
      },
      {
        label: 'الطلبات السابقة',
        isTitle: false,
        link: '/main-apps/rest-orders/previous-order',
        user_type_list: [1],
      },
      {
        label: 'اضافة طلب جديد',
        isTitle: false,
        link: '/main-apps/rest-orders/new-order',
        user_type_list: [1],
      },
    ]
  },
  {
    label: 'الملف الشخصي',
    isTitle: false,
    link: '/main-apps/rest-profile',
    user_type_list: [1],
  },
  {
    label: 'الدعم الفني',
    isTitle: false,
    link: '/main-apps/rest-support',
    user_type_list: [1],
  },


]


