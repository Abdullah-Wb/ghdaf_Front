export const MENU = [
// admin
{
  label: 'الصفحة الرئيسية',
  isTitle: false,
  link: '/main-apps/admin-home/dash-list',
  user_type_id: [3],
},
{
  label: 'طلبات المستخدمين',
  isTitle: true,// يعني له اشياء داخلة
  user_type_id: [3],
  subItemsAdmin: [
    {
      label: 'طلبات انشاء الحساب',
      link: '/main-apps/users-orders/new-users-orders',
      user_type_id: [3],
    },
  ]
},
]


