import * as React from "react";
import { storiesOf } from "@storybook/react";
import { number, withKnobs } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import Image from "react-native-simple-elements/components/Image";
import { SquareShimmer } from "react-native-simple-elements/components/Shimmer";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

const viewportParams = {
    viewports: {
        ...INITIAL_VIEWPORTS,
    },
    defaultViewport: "responsive",
};

const iphonexViewport = {
    viewport: {
        ...viewportParams,
        defaultViewport: "iphonex",
    },
};

const DefaultExample = () => {
    return (
        <>
            <Image
                source={{ uri: "https://via.placeholder.com/350x150.png" }}
                style={{
                    width: 100,
                    height: 100,
                }}
                width={200}
                height={200}
            />
            <Image
                source={{ uri: "https://via.placeholder.com/350x150.png" }}
                style={{
                    width: 100,
                    height: 100,
                }}
                containerStyle={{
                    borderRadius: 50,
                }}
            />
        </>
    )
}

const WithLoaderExample = () => {
    return (
        <>
            <Image
                source={{ uri: "https://via.placeholder.com/350x150.png" }}
                style={{
                    width: 100,
                    height: 100,
                }}
                // width={200}
                // height={200}
                PlaceholderContent={
                    <SquareShimmer size={100}/>
                }
                transition={true}
            />
        </>
    )
}

const MobileViewExample = () => {

    return (
        <>
            <Image
                source={{ uri: "https://via.placeholder.com/350x150.png" }}
                style={{
                    width: 100,
                    height: 100,
                }}
            />
        </>
    )
}

const PlaygroundExample = () => {
    const width = number("width", 100);
    const onPressFn = action("onPress");

    return (
        <>
            <Image
                source={{ uri: "https://via.placeholder.com/350x150.png" }}
                style={{
                    width: width,
                    height: 100,
                }}
                onPress={onPressFn}
            />
        </>
    )
}

storiesOf("Image", module)
    .addDecorator(withKnobs)
    .add("Default", () => <DefaultExample />)
    .add("Mobile View", () => <MobileViewExample/>, iphonexViewport)
    .add("with Loader", () => <WithLoaderExample/>)
    .add("Playground", () => <PlaygroundExample />);
