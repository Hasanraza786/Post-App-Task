import { SafeAreaView, View, StatusBar, Image, ScrollView, TouchableOpacity } from "react-native"
import { back_icon, delete_icon, dot_icon, mic_icon, send_icon, voice_icon } from "../../assets/icons"
import { Icons, Text } from "../../components"
import { COLORS, images, SIZES } from "../../constants"
import { CommentView, PostCardView, TopView } from "./components"
import { styles } from "./index.styles"
import PostDetailFunctional from "./index.function"
import LinearGradient from "react-native-linear-gradient"
import { BlurView } from "@react-native-community/blur"

const PostDetail = () => {

    const {
        imagesArray,
        selectedIndex,
        setSelectedIndex,
        commentCount,
        isComment,
        isLiked,
        isRepost,
        isSave,
        likeCount,
        onPressIcon,
        repostCount,
        saveCount
    } = PostDetailFunctional()

    return (
        <>
            <SafeAreaView style={styles.safe_area} >
                <StatusBar backgroundColor={COLORS.white} barStyle={"dark-content"} />
                <View style={styles.header_view} >
                    <Icons name={back_icon} />
                    <Text style={styles.header_title} text={"Post"} />
                    <Icons name={dot_icon} />
                </View>
                <View style={styles.main_view}  >

                    <View style={styles.sub_view} >
                        <ScrollView showsVerticalScrollIndicator={false} >

                            <TopView />
                            <PostCardView
                                array={imagesArray}
                                selectedIndex={selectedIndex}
                                setSelectedIndex={setSelectedIndex}
                                comment_count={commentCount}
                                is_comment={isComment}
                                is_liked={isLiked}
                                is_repost={isRepost}
                                is_save={isSave}
                                like_count={likeCount}
                                repost_count={repostCount}
                                save_count={saveCount}
                                onPressIcon={onPressIcon}
                            />

                            <View style={styles.like_view} >
                                <View style={styles.images_row} >
                                    <LinearGradient style={styles.image_view} colors={COLORS.main_gradient} >
                                        <Image style={styles.image} source={images.like_image} />
                                    </LinearGradient>
                                    <LinearGradient style={[styles.image_view, styles.image_2]} colors={COLORS.main_gradient} >
                                        <Image style={styles.image} source={images.profile_image} />
                                    </LinearGradient>
                                    <LinearGradient style={[styles.image_view, styles.image_2]} colors={COLORS.main_gradient} >
                                        <Image style={styles.image} source={images.like_image} />
                                    </LinearGradient>
                                    <LinearGradient style={[styles.image_view, styles.image_2]} colors={COLORS.main_gradient} >
                                        <Image style={styles.image} source={images.profile_image} />
                                    </LinearGradient>
                                    <LinearGradient style={[styles.image_view, styles.image_2]} colors={COLORS.main_gradient} >
                                        <Text style={styles.like_count} text={"62+"} />
                                    </LinearGradient>
                                </View>
                                <Text style={styles.like_text} text={"Like It"} />

                            </View>

                            <Text style={styles.title} text={"Enjoyed the day with the family 😘😍"} />


                            <View style={styles.text_row} >
                                <Text style={styles.metion_text} text={"@Adam_Mohamed & @Haya_Mohamed"} />
                                <Text text={"...More"} />
                            </View>
                            <View style={{ height: SIZES.padding2 }} />
                            <Text style={styles.view_comment_text} text={"View all 17 comments"} />

                            <CommentView />
                            <CommentView />


                            <View style={{ height: SIZES.padding * 3.5 }} />
                        </ScrollView>

                    </View>
                    <View style={styles.bottom_view} >

                        <View style={styles.image_view} >
                            <Image source={images.like_image} style={styles.image} />
                        </View>
                        <View style={styles.voice_view} >
                            <TouchableOpacity>
                                <Icons name={delete_icon} />

                            </TouchableOpacity>
                            <Icons name={voice_icon} />

                            <TouchableOpacity>
                                <Icons name={mic_icon} />
                            </TouchableOpacity>
                        </View>

                        <TouchableOpacity>
                            <Icons name={send_icon} />
                        </TouchableOpacity>

                    </View>
                </View>
            </SafeAreaView>
            <SafeAreaView style={{ backgroundColor: COLORS.background_grey_color }} />
        </>
    )
}


export default PostDetail