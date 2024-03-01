import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants/theme";

export const styles = StyleSheet.create({
    safe_area: {
        flex: 1,
        backgroundColor: COLORS.white
    },
    header_view: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: SIZES.padding,
        paddingVertical: SIZES.padding2
    },
    header_title: {
        ...FONTS.Bold16,
        color: COLORS.black
    },
    main_view: {
        flex: 1,
        backgroundColor: COLORS.background_color,
        paddingTop: SIZES.padding2 * 0.8,
    },
    sub_view: {
        flex: 1,
        borderRadius: SIZES.padding * 1.2,
        backgroundColor: COLORS.white,
        paddingVertical: SIZES.padding2,
        paddingHorizontal: SIZES.padding,
        marginHorizontal: SIZES.padding2 * 0.8
    },
    like_view: {
        flexDirection: "row",
        alignItems: "center",
        gap: SIZES.padding2,
        marginTop: SIZES.padding2
    },
    images_row: {
        flexDirection: "row",
        alignItems: "center"
    },
    image_view: {
        height: SIZES.padding * 2.2,
        width: SIZES.padding * 2.2,
        borderRadius: SIZES.padding * 1.5,
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        height: "90%",
        width: "90%",
        borderRadius: SIZES.padding * 1.5,
    },
    image_2: {
        marginLeft: -SIZES.padding2 * 1.3
    },
    like_count: {
        color: COLORS.white,
        ...FONTS.Medium8
    },
    like_text: {
        ...FONTS.Medium14
    },
    title: {
        textAlign: "left",
        marginTop: SIZES.padding2
    },
    text_row: {
        marginTop: SIZES.padding2 * 0.5,
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "wrap"
    },
    metion_text: {
        color: COLORS.blue_color,
    },
    view_comment_text: {
        textAlign: "left",
        ...FONTS.Bold8
    },
    bottom_view: {
        backgroundColor: COLORS.background_grey_color,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        height: SIZES.padding * 4,
        position: "absolute",
        bottom: 0,
        zIndex: 2,
        width: "100%",
        paddingHorizontal: SIZES.padding
    },
    voice_view: {
        flexDirection: "row",
        alignItems: "center",
        flex: 1,
        backgroundColor: COLORS.white,
        height: SIZES.padding * 2,
        borderRadius: SIZES.padding,
        justifyContent: "space-between",
        marginHorizontal: SIZES.padding2,
        paddingHorizontal: SIZES.padding2
    }


})