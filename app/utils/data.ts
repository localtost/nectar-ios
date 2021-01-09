interface IconsName {
    [Home:string]: string;
    Search1: string;
    Shoppingcart: string;
    Hearto: string;
    User: string;
}
export interface ProfileItem {
    id: number;
    name: string;
    icon: string
}
export const data: IconsName = {
    Home: 'Shop',
    Search1: 'Explore',
    Shoppingcart: 'Cart',
    Hearto: 'Favorite',
    User: "Account"
};
export const profileItems: Array<ProfileItem> = [
    {
        id: 1,
        name: 'Orders',
        icon: 'shoppingcart',
    },
    {
        id: 2,
        name: 'My Details ',
        icon: 'idcard',
    },
    {
        id: 3,
        name: 'Delivery Adress',
        icon: 'enviromento',
    },
    {
        id: 4,
        name: 'Payment methods',
        icon: 'creditcard',
    },
    {
        id: 5,
        name: 'Promo Codes',
        icon: 'barcode',
    },
    {
        id: 6,
        name: 'Notifications',
        icon: 'bells',
    },
    {
        id: 7,
        name: 'Help',
        icon: 'questioncircleo',
    },
    {
        id: 8,
        name: 'About',
        icon: 'infocirlceo',
    },
];