import * as Progress from 'react-native-progress';
import { Dimensions, Platform, StyleSheet, TouchableOpacity, View } from 'react-native';
import { COLORS, FONTS, SIZES } from '../../../constants';
import { Icons, Text } from '../../../components';
import { like_icon, red_comment_icon, red_heart_icon, red_repost_icon, red_save_icon, repost_icon, save_icon, share_icon, user_icon, white_comment_icon } from '../../../assets/icons';
import Carousel, { Pagination, ParallaxImage } from 'react-native-snap-carousel';
import LinearGradient from 'react-native-linear-gradient';
import { BlurView } from "@react-native-community/blur";

const PostCardView = ({ array, selectedIndex, setSelectedIndex,
    comment_count,
    is_comment,
    is_liked,
    like_count,
    is_save,
    save_count,
    is_repost,
    repost_count,
    onPressIcon
}) => {

    const renderItem = ({ item }, parallaxProps) => {
        return (
            <View style={styles.item}>
                <ParallaxImage
                    source={item}
                    containerStyle={styles.imageContainer}
                    style={styles.image}
                    parallaxFactor={0.4}
                    {...parallaxProps}
                />
            </View>
        );
    }

    return (
        <View style={styles.post_view} >
            <View style={styles.top_row} >
                <TouchableOpacity>
                    <Icons name={user_icon} />
                </TouchableOpacity>

                <Progress.Circle size={35}
                    showsText
                    formatText={() => <Text style={{ color: COLORS.white }} text={selectedIndex + 1} />}
                    textStyle={{ ...FONTS.Bold8, color: COLORS.white }}
                    progress={(selectedIndex + 1) / array?.length}
                    unfilledColor={COLORS.background_grey_color}
                    color={COLORS.white}
                    borderColor={COLORS.transparent}
                />
            </View>

            <Carousel
                sliderWidth={Dimensions.get("screen").width / 1.15}
                sliderHeight={Dimensions.get("screen").height / 3}
                itemWidth={Dimensions.get("screen").width / 1.15}
                data={array}
                renderItem={renderItem}
                hasParallaxImages={true}
                onSnapToItem={index => setSelectedIndex(index)}
            />
            <Pagination
                dotsLength={array.length}
                activeDotIndex={selectedIndex}
                containerStyle={{ gap: SIZES.padding2 * 0.5, position: "absolute", zIndex: 2, bottom: SIZES.padding * 2 }}
                inactiveDotElement={<View
                    style={{
                        height: SIZES.padding2,
                        width: SIZES.padding2,
                        borderRadius: SIZES.padding,
                        backgroundColor: COLORS.white
                    }}
                />}
                dotElement={<LinearGradient colors={COLORS.main_gradient}
                    style={{
                        height: SIZES.padding2,
                        width: SIZES.padding,
                        borderRadius: SIZES.padding,
                    }}
                />}
            />



            <BlurView
                blurType='light'
                blurAmount={10}
                blurRadius={SIZES.padding}
                reducedTransparencyFallbackColor={COLORS.white}
                style={{
                    width: "100%",
                    backgroundColor: COLORS.transparent,

                    borderRadius: SIZES.padding
                }} >
                <LinearGradient
                    start={{ x: 0.5, y: 0.1 }}
                    end={{ x: 0.5, y: 0.9 }}
                    colors={COLORS.post_bottom_gradient} style={styles.post_bottom_view} >

                    <TouchableOpacity activeOpacity={0.6} onPress={() => onPressIcon("like", !is_liked)} style={styles.row} >
                        <Icons iconHeight={15} name={is_liked ? red_heart_icon : like_icon} />
                        <Text style={styles.count} text={like_count} />
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.6} onPress={() => onPressIcon("comment", !is_comment)} style={styles.row} >
                        <Icons iconHeight={15} name={is_comment ? red_comment_icon : white_comment_icon} />
                        <Text style={styles.count} text={comment_count} />
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.6} onPress={() => onPressIcon("save", !is_save)} style={styles.row} >
                        <Icons iconHeight={15} name={is_save ? red_save_icon : save_icon} />
                        <Text style={styles.count} text={save_count} />
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.6} onPress={() => onPressIcon("repost", !is_repost)} style={styles.row} >
                        <Icons iconHeight={15} name={is_repost ? red_repost_icon : repost_icon} />
                        <Text style={styles.count} text={repost_count} />
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.6} style={styles.row} >
                        <Icons  iconHeight={15} name={share_icon} />
                    </TouchableOpacity>
                    <LinearGradient colors={COLORS.btn_gradient} style={styles.btn} >
                        <TouchableOpacity activeOpacity={0.6} >
                            <Text style={styles.btn_text} text={"Follow"} />
                        </TouchableOpacity>
                    </LinearGradient>
                </LinearGradient>
            </BlurView>


        </View>
    )
}


export default PostCardView


const styles = StyleSheet.create({
    post_view: {
        height: Dimensions.get("screen").height / 2.7,
        width: Dimensions.get("screen").width / 1.15,
        borderRadius: SIZES.padding,
        marginTop: SIZES.padding2,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#9ee8f7",
        overflow: "hidden"

    },
    top_row: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: SIZES.padding2,
        position: "absolute",
        top: SIZES.padding2 * 0.5
    },
    item: {
        width: Dimensions.get("screen").width / 1.15,
        height: Dimensions.get("screen").height / 2.7,
        paddingTop: SIZES.padding2,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        borderRadius: SIZES.padding,
    },
    imageContainer: {
        flex: 1,
        marginBottom: Platform.select({ ios: 0, android: 1 }), // Prevent a random Android rendering issue
        backgroundColor: COLORS.transparent,
        width: "100%",
        height: "100%",
        alignItems: "center"
    },
    image: {
        height: "100%",
        width: "100%",
        resizeMode: 'contain',
    },
    post_bottom_view: {
        width: "100%",
        height: SIZES.padding * 3,
        borderRadius: SIZES.padding,
        flexDirection: "row",
        paddingHorizontal: SIZES.padding2,
        justifyContent: "space-around",
        alignItems: "center",
        shadowRadius: 1,
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 2 },
        shadowColor: COLORS.blue_color

    },
    row: {
        flexDirection: "row",
        alignItems: "center",
    },
    count: {
        color: COLORS.white,
        marginLeft: SIZES.padding2 * 0.2,
        ...FONTS.Bold10
    },
    btn: {
        height: SIZES.padding * 1.5,
        paddingHorizontal: SIZES.padding,
        justifyContent: "center",
        alignItems: "center"
    },
    btn_text: {
        ...FONTS.SemiBold14,
        color: COLORS.white
    }
})