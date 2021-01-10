import { ImageSourcePropType } from "react-native";

interface IconsName {
    [Home: string]: string;
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
export interface CategoriesItem {
    name: string;
    icon: ImageSourcePropType;
}
export const categories: Array<CategoriesItem> = [
    {
        name: "Fresh Fruits & Vegitables",
        icon: require('../assets/icons/categoriesFruit.png')
    },
    {
        name: "Cooking Oli & Ghee",
        icon: require('../assets/icons/categoriesCook.png')

    },
    {
        name: "Meat & Fish",
        icon: require('../assets/icons/categoriesMeat.png')

    },
    {
        name: "Bakery & Snacks",
        icon: require('../assets/icons/categoriesBakery.png')

    },
    {
        name: "Dairy & Eggs",
        icon: require('../assets/icons/categoriesDairy.png')

    },
    {
        name: "Beverages",
        icon: require('../assets/icons/categoriesBeverage.png')
    }
]