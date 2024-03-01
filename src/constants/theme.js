import { RFValue } from 'react-native-responsive-fontsize';


export const COLORS = {

    text_color: "#2D2D2D",
    text_black_color: "#1C1C1C",
    text_grey_color: "#828282",
    blue_color: "#008FDF",
    background_grey_color: "#ECECEC",
    background_color: "#EBEBEB",
    border_grey_color:"#E7E8EF",
    main_gradient: ["#478FE4", "#5CD3C6"],
    post_bottom_gradient: ["#478FE411", "#36AFD655"],
    post_gradient: ["#9EE8F7", "#59a5c6"],
    btn_gradient: ["#FE6587", "#F52D6A"],
    white: "#fff",
    black: "#000",
    transparent: "transparent",
};


export const SIZES = {
    // global sizes
    padding: 20,
    padding2: 12,

    // font sizes
    h8: 8,
    h10: 10,
    h12: 12,
    h14: 14,
    h16: 16,
};

export const FONTS = {
    // Bold Fonts
    Bold8: {
        fontFamily: 'Montserrat-Bold',
        fontSize: RFValue(SIZES.h8),
    },
    Bold10: {
        fontFamily: 'Montserrat-Bold',
        fontSize: RFValue(SIZES.h10),
    },
    Bold14: {
        fontFamily: 'Montserrat-Bold',
        fontSize: RFValue(SIZES.h14),
    },
    Bold16: {
        fontFamily: 'Montserrat-Bold',
        fontSize: RFValue(SIZES.h16),
    },


    // SemiBold
    SemiBold8: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: RFValue(SIZES.h8),
    },
    SemiBold10: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: RFValue(SIZES.h10),
    },
    SemiBold14: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: RFValue(SIZES.h14),
    },


    // Medium Fonts

    Medium8: {
        fontFamily: 'Montserrat-Medium',
        fontSize: RFValue(SIZES.h8),
    },
    Medium12: {
        fontFamily: 'Montserrat-Medium',
        fontSize: RFValue(SIZES.h12),
    },
    Medium14: {
        fontFamily: 'Montserrat-Medium',
        fontSize: RFValue(SIZES.h14),
    },
};

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;
