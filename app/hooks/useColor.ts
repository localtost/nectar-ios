import { Theme } from '../config/Theme';

export const useColor = (index: number) => {
    switch (index) {
        case 0:
            return Theme.darkenPink;
        case 1:
            return Theme.lightPink;
        case 2:
            return Theme.lightGreen;
        case 3:
            return Theme.lightyellow;
        case 4:
            return Theme.lightPink;
        default:
            return Theme.lightBlue;
    }
}