import { Image, StyleSheet, View } from "react-native"
import LinearGradient from "react-native-linear-gradient"
import { dot_icon, right_tick_icon } from "../../../assets/icons"
import { Icons, Text } from "../../../components"
import { COLORS, FONTS, images, SIZES } from "../../../constants"

const TopView = () => {
    return (

        <View style={styles.top_view} >
            <LinearGradient colors={COLORS.main_gradient} style={styles.image_view} >
                <Image style={styles.image} source={images.profile_image} />
            </LinearGradient>

            <View style={styles.profile_detail_view} >
                <View style={styles.row} >
                    <Text style={styles.name} text={"Mohamed Mostafa"} />
                    <LinearGradient colors={COLORS.main_gradient} style={styles.tick_view} >
                        <Icons name={right_tick_icon} />
                    </LinearGradient>
                </View>

                <View style={{ height: SIZES.padding2 * 0.5 }} />
                <View style={styles.row} >

                    <LinearGradient style={styles.time_view} colors={COLORS.main_gradient} >
                        <Text style={styles.time} text={"1h Ago"} />
                    </LinearGradient>

                    <View style={{ width: SIZES.padding2 }} />
                    <LinearGradient style={styles.time_view} colors={COLORS.main_gradient}  >
                        <Text style={styles.time} text={"Dubai"} />
                    </LinearGradient>
                </View>
            </View>

            <Icons style={{ marginTop: SIZES.padding2 }} name={dot_icon} />
        </View>
    )
}


export default TopView

const styles = StyleSheet.create({
    top_view: {
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "space-between",
    },
    image_view: {
        height: SIZES.padding * 3,
        width: SIZES.padding * 3,
        borderRadius: SIZES.padding * 1.5,
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        width: "90%",
        height: "90%",
        borderRadius: SIZES.padding * 1.5,
    },
    profile_detail_view: {
        flex: 1,
        marginLeft: SIZES.padding
    },
    row: {
        flexDirection: "row",
        alignItems: "center"
    },
    name: {
        ...FONTS.Bold14
    },
    tick_view: {
        height: SIZES.padding,
        width: SIZES.padding,
        borderRadius: SIZES.padding2,
        justifyContent: "center",
        alignItems: "center",
        marginLeft: SIZES.padding
    },
    time_view: {
        paddingHorizontal: SIZES.padding2 * 0.8,
        paddingVertical: SIZES.padding2 * 0.3,
        borderRadius: SIZES.padding2 * 0.4
    },
    time: {
        ...FONTS.SemiBold10,
        color: COLORS.white
    }
})