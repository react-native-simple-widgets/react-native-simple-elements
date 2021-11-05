import * as React from "react";
import { storiesOf } from "@storybook/react";
import ShimmerPlaceHolder, { createShimmerPlaceholder } from "react-native-simple-elements/components/Shimmer";
import LinearGradient from 'react-native-linear-gradient';
import { Animated, View } from "react-native";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import Text from "react-native-simple-elements/components/Text";
import Image from "react-native-simple-elements/components/Image";

const viewportParams = {
    viewports: {
        ...INITIAL_VIEWPORTS,
    },
    defaultViewport: "responsive",
};

// @ts-ignore
const Shimmer = createShimmerPlaceholder(LinearGradient);
// @ts-ignore
const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);

storiesOf("Shimmer", module)
    .add("Default", () => {

        return (
            <ShimmerPlaceHolder />
        )
    })
    .add("With LinearGradient", () => {

        return (
            <ShimmerPlaceHolder
                LinearGradient={LinearGradient}
            />
        )
    })
    .add("With Custom", () => {

        return (
            <Shimmer
            />
        )
    })
    .add("With Loop", (props) => {

        const {
            isReversed = false,
            shimmerColors = ["#FFBDBA", "#FF9C6D", "#FFBDBA"],
            hasData = false,
            hasBorder = false,
            randomWidth = false,
        } = props;

        const [visible, setVisible] = React.useState(false)
        const [avatarVisible, setAvatarVisible] = React.useState(false)
        React.useEffect(() => {
            setTimeout(() => {
            hasData && setVisible(true)
            }, 2000)
        }, []);

        // Handle animation
        const avatarRef = React.createRef();
        const firstLineRef = React.createRef();
        const secondLineRef = React.createRef();
        const thirdLineRef = React.createRef();

        React.useEffect(() => {
            const facebookAnimated = Animated.stagger(
                400,
                [
                    // @ts-ignore
                    avatarRef.current.getAnimated(),
                    Animated.parallel([
                        // @ts-ignore
                        firstLineRef.current.getAnimated(),
                        // @ts-ignore
                        secondLineRef.current.getAnimated(),
                        // @ts-ignore
                        thirdLineRef.current.getAnimated()
                    ])
                ]
            );
            Animated.loop(facebookAnimated).start();
        }, [])

        return (
            <View>
                <View style={{ flexDirection: "row" }}>
                    <ShimmerPlaceholder
                        width={80}
                        height={80}
                        style={{ marginRight: 10 }}
                        ref={avatarRef}
                        isReversed={isReversed}
                        shimmerColors={shimmerColors}
                        shimmerStyle={[hasBorder && { borderRadius: 40 }]}
                        stopAutoRun
                        visible={avatarVisible}
                    >
                        {hasData && <Image
                            style={{ width: 80, height: 80, borderRadius: 100 }}
                            source={{ uri: 'https://unsplash.it/1000/1000' }}
                            onLoadEnd={() => setAvatarVisible(true)}
                        />}
                    </ShimmerPlaceholder>
                    <View style={{ justifyContent: "space-between" }}>
                        <ShimmerPlaceholder
                            width={randomWidth ? 250 : 200}
                            style={{}}
                            ref={firstLineRef}
                            isReversed={isReversed}
                            shimmerColors={shimmerColors}
                            shimmerStyle={[hasBorder && { borderRadius: 20 }]}
                            stopAutoRun
                            visible={visible}
                        >
                            <Text style={{ flex: 1, flexWrap: 'wrap', width: 200 }}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                            </Text>
                        </ShimmerPlaceholder>
                        <ShimmerPlaceholder
                            width={randomWidth ? 150 : 200}
                            ref={secondLineRef}
                            isReversed={isReversed}
                            shimmerColors={shimmerColors}
                            shimmerStyle={[hasBorder && { borderRadius: 20 }]}
                            stopAutoRun
                            visible={visible}
                        />
                        <ShimmerPlaceholder
                            width={200}
                            ref={thirdLineRef}
                            isReversed={isReversed}
                            shimmerColors={shimmerColors}
                            shimmerStyle={[hasBorder && { borderRadius: 20 }]}
                            stopAutoRun
                            visible={visible}
                        />
                    </View>
                </View>
            </View>
        )
    }, {
        viewport: {
            ...viewportParams,
            defaultViewport: "iphonex",
        },
    })
    .add("Playground", () => {

        return (
            <Shimmer
            />
        )
    })
