import { Dimensions } from 'react-native';
export enum Theme {
    main = '#53B175',
    google = '#5383EC',
    facebook = '#4A66AC',
    white = '#ffffff',
    black = '#000000',
    lightPink = '#D3B0E0',
    darkenPink = '#F7A593',
    darkenOrange = '#F8A44C',
    lightGreen = '#53B175',
    lightBlue = '#B7DFF5',
    lightyellow = '#FDE598',
    gray = '#E2E2E2',
    ligthGray = '#F2F3F2',
    darkenGray = '#7C7C7C',
    darkGray = '#4C4F4D',
}
export const SCREEN_WIDTH:number = Dimensions.get('window').width;
export const SCREEN_HEIGHT:number = Dimensions.get('window').height;