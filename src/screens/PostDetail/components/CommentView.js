import { Image, StyleSheet, TouchableOpacity, View, Text as T } from "react-native"
import LinearGradient from "react-native-linear-gradient"
import { grey_comment_icon, red_heart_icon, sound_wave_icon, stop_icon } from "../../../assets/icons"
import { Icons, Text } from "../../../components"
import { COLORS, FONTS, images, SIZES } from "../../../constants"

const CommentView = () => {
    let mentions = ["Haya", "Battamostafffa"]
    return (
        <View style={styles.main_view} >
            <LinearGradient colors={COLORS.main_gradient} style={styles.image_view} >
                <Image source={images.like_image} style={styles.image} />
            </LinearGradient>
            <View style={styles.detail_view} >
                <View style={styles.top_view} >
                    <View style={styles.text_view} >
                        <Text style={styles.name} text={"Adam Mohamed"} />
                        <Text style={styles.time} text={"14 Hours Ago"} />
                    </View>
                    <TouchableOpacity activeOpacity={0.6} >
                        <Icons name={red_heart_icon} />
                    </TouchableOpacity>
                    <View style={{ width: SIZES.padding2 }} />
                    <TouchableOpacity activeOpacity={0.6} >
                        <Icons name={grey_comment_icon} />
                    </TouchableOpacity>
                </View>
                <View style={{ height: SIZES.padding2 * 0.5 }} />
                <T style={{ width: "90%" }} >
                    <Text style={styles.comment} text={"Lovely 😘😍 I’ve enjoyed the day too With  "} />
                    {
                        mentions?.map((item, index) => (
                            <>
                                <Text style={styles.mention} text={`@${item}`} />
                                {(index + 1) < mentions?.length &&
                                    <Text style={styles.seperator} text={"  &  "} />
                                }
                            </>
                        ))
                    }
                </T>

                <View style={styles.sub_comment_view} >

                    <View style={styles.top_view} >

                        <View style={styles.image_view} >
                            <Image source={images.like_image} style={styles.image} />
                        </View>
                        <View style={{ width: SIZES.padding2 * 0.5 }} />
                        <View style={styles.text_view} >
                            <Text style={styles.name} text={"Daniel Hamilton"} />
                            <Text style={styles.time} text={"5 Hours Ago"} />
                        </View>
                        <TouchableOpacity activeOpacity={0.6} >
                            <Icons iconHeight={15} name={red_heart_icon} />
                        </TouchableOpacity>
                        <View style={{ width: SIZES.padding2 * 0.5 }} />
                        <TouchableOpacity activeOpacity={0.6} >
                            <Icons iconHeight={15} name={grey_comment_icon} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ height: SIZES.padding2 }} />

                    <View style={styles.row} >
                        <LinearGradient style={styles.stop_view} colors={COLORS.main_gradient} >
                            <Icons name={stop_icon} />
                        </LinearGradient>
                        <Icons name={sound_wave_icon} />
                    </View>

                </View>

                <Text style={styles.reply_text} text={"Show more 3 replies"} />

            </View>
        </View>
    )
}

export default CommentView

const styles = StyleSheet.create({
    main_view: {
        borderColor: COLORS.background_color,
        borderWidth: 1,
        borderRadius: SIZES.padding2,
        padding: SIZES.padding2,
        marginTop: SIZES.padding2,
        flexDirection: "row",
        alignItems: "flex-start"
    },
    detail_view: {
        flex: 1,
        marginLeft: SIZES.padding2
    },
    top_view: {
        flexDirection: "row",
        alignItems: "center"
    },
    image_view: {
        height: SIZES.padding * 2,
        width: SIZES.padding * 2,
        borderRadius: SIZES.padding * 2,
        justifyContent: "center",
        alignItems: "center"
    },
    image: {
        width: "90%",
        height: "90%",
        borderRadius: SIZES.padding * 2
    },
    text_view: {
        flex: 1,
        alignItems: "flex-start",
        marginTop: SIZES.padding2 * 0.2
    },

    name: {
        ...FONTS.Bold10
    },
    time: {
        ...FONTS.SemiBold8,
        color: COLORS.text_grey_color
    },
    comment: {
        textAlign: "left",
        ...FONTS.SemiBold10,
    },
    mention: {
        ...FONTS.SemiBold10,
        color: COLORS.blue_color
    },
    seperator: {
        ...FONTS.SemiBold10,
    },
    sub_comment_view: {
        marginTop: SIZES.padding2,
        borderLeftWidth: 2,
        borderLeftColor: COLORS.border_grey_color,
        paddingLeft: SIZES.padding2 * 1.5
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
    },
    stop_view: {
        height: SIZES.padding,
        width: SIZES.padding,
        borderRadius: SIZES.padding2,
        justifyContent: "center",
        alignItems: "center",
        marginRight: SIZES.padding2 * 1.5
    },
    reply_text: {
        ...FONTS.Bold8,
        textAlign: "left",
        marginTop: SIZES.padding2 * 0.5
    }

})