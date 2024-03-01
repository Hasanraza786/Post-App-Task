import { useState } from "react"
import { images } from "../../constants"

export default () => {

    const imagesArray = [images.post_image, images.post_image, images.post_image, images.post_image, images.post_image]
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [commentCount, setCommentCount] = useState(26)
    const [isComment, setIsComment] = useState(false)
    const [likeCount, setLikeCount] = useState(20)
    const [isLiked, setIsLiked] = useState(false)
    const [isRepost, setIsRepost] = useState(false)
    const [repostCount, setRepostCount] = useState(20)
    const [isSave, setIsSave] = useState(false)
    const [saveCount, setSaveCount] = useState(15)




    const onPressIcon = (type, val) => {
        if (type === 'comment') {
            setIsComment(!isComment)
            setCommentCount(val ? commentCount + 1 : commentCount - 1)
        } else if (type === 'like') {
            setIsLiked(!isLiked)
            setLikeCount(val ? likeCount + 1 : likeCount - 1)
        } else if (type === 'repost') {
            setIsRepost(!isRepost)
            setRepostCount(val ? repostCount + 1 : repostCount - 1)
        } else if (type === 'save') {
            setIsSave(!isSave)
            setSaveCount(val ? saveCount + 1 : saveCount - 1)
        }
    }


    return {
        imagesArray,
        selectedIndex,
        setSelectedIndex,
        onPressIcon,
        isComment,
        isLiked,
        isRepost,
        isSave,
        saveCount,
        commentCount,
        repostCount,
        likeCount
    }
}