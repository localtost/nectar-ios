import { Dimensions } from 'react-native';
export enum Theme {
    main = '#53B175',
    google = '#5383EC',
    facebook = '#4A66AC',
    white = '#ffffff',
    black = '#000000',
    lightPink = 'rgba(211, 176, 224, 0.25)',
    darkenPink = 'rgba(247, 165, 147, 0.25)',
    darkenOrange = '#F8A44C',
    lightGreen = 'rgba(83, 177, 117, 0.1)',
    lightBlue = 'rgba(183, 223, 245, 0.25)',
    lightyellow = 'rgba(253, 229, 152, 0.25)',
    gray = '#E2E2E2',
    ligthGray = '#F2F3F2',
    darkenGray = '#7C7C7C',
    darkGray = '#4C4F4D',
}
export const SCREEN_WIDTH: number = Dimensions.get('window').width;
export const SCREEN_HEIGHT: number = Dimensions.get('window').height;