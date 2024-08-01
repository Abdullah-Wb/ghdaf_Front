export const MENU = [
  // admin
  {
    label: 'الرئيسية',
    isTitle: false,
    link: '/main-apps/admin-home/dash-list',
    user_type_list: [3],
  },
  {
    label: 'طلبات المستخدمين',
    isTitle: true,// يعني له اشياء داخلة
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
        label: 'التذكرة',
        link: '/main-apps/users-orders/tickets',
        user_type_list: [3],
      },
    ]
  },

  // org
  {
    label: 'الرئيسية',
    isTitle: false,
    link: '/main-apps/admin-home/dash-list',
    user_type_list: [1],
  },



  // rest
  {
    label: 'الرئيسية',
    isTitle: false,
    link: '/main-apps/admin-home/dash-list',
    user_type_list: [2],
  },
]


