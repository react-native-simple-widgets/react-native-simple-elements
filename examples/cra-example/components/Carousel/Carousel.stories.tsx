import * as React from 'react';
import { Image, Dimensions, View } from "react-native";
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import Carousel, { Pagination } from 'react-native-simple-elements/components/Carousel';
import { SUPPORTED_RATIOS } from 'react-native-simple-elements/components/RatioBox';
import { AbsoluteView, FlexRowCenterContainer } from 'react-native-simple-elements/components/Container';
import IconButton from 'react-native-simple-elements/components/IconButton';
import ArrowLeft from "@mdi/svg/svg/arrow-left.svg";
import ArrowRight from "@mdi/svg/svg/arrow-right.svg";

const onPressFn = action("onPress");

const DefaultExample = () => {
    const _imageCarouselRef = React.createRef<Carousel>();

    const { width: viewportWidth } = Dimensions.get('window');
    // const sliderWidth = viewportWidth - 32;
    const sliderWidth = 500;

    const [ activeSlide, setActiveSlide ] = React.useState(0);

    // const title = text("title", "Text");
    return (
        <View
            style={{
                // ...StyleSheet.absoluteFillObject,
                width: 500,
                height: 500 * SUPPORTED_RATIOS.WH_21x9,
                overflow: "hidden",
            }}
        >
            {/* <CarouselLeftArrow
                onPress={e => _imageCarouselRef.current?.snapToPrev()}
            /> */}
            <Carousel
                sliderWidth={sliderWidth}
                itemWidth={sliderWidth}
                data={[{}, {}, {}]}
                renderItem={({ item, index }) => {
                    return (
                        <Image
                            key={index}
                            source={{ uri: "https://via.placeholder.com/350x150" }}
                            style={{
                                width: 500,
                                height: 500 * SUPPORTED_RATIOS.WH_21x9,
                            }}
                        />
                    );
                }}
                ref={_imageCarouselRef}
                loop={true}
                onSnapToItem={(index) => setActiveSlide(index) }
            />
            {/* <CarouselRightArrow
                onPress={e => _imageCarouselRef.current?.snapToNext()}
            /> */}
            <AbsoluteView
                style={{
                    flexDirection: "row",
                }}
            >
                <FlexRowCenterContainer>
                    <IconButton
                        icon={ArrowLeft}
                        onPress={e => _imageCarouselRef.current?.snapToPrev()}
                    />
                </FlexRowCenterContainer>
                <View
                    style={{
                        alignItems: "center",
                        justifyContent: "flex-end",
                        flex: 1,
                    }}
                >
                    <Pagination
                        dotsLength={[{}, {}, {}].length}
                        activeDotIndex={activeSlide}
                        containerStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.75)' }}
                        dotStyle={{
                            width: 10,
                            height: 10,
                            borderRadius: 5,
                            marginHorizontal: 8,
                            backgroundColor: 'rgba(255, 255, 255, 0.92)'
                        }}
                        inactiveDotStyle={{
                            // Define styles for inactive dots here
                        }}
                        inactiveDotOpacity={0.4}
                        inactiveDotScale={0.6}
                    />
                </View>
                <FlexRowCenterContainer>
                    <IconButton
                        icon={ArrowRight}
                        onPress={e => _imageCarouselRef.current?.snapToNext()}
                    />
                </FlexRowCenterContainer>
            </AbsoluteView>
        </View>
    )
}

storiesOf('Carousel', module)
    .addDecorator(withKnobs)
    .add('Default', () => <DefaultExample />)
