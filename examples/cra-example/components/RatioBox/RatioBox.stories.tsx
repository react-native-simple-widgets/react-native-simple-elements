import * as React from "react";
import { storiesOf } from "@storybook/react";
import RatioBox, { SUPPORTED_PERCENTAGE_RATIOS } from 'react-native-simple-elements/components/RatioBox';
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

const viewportParams = {
    viewports: {
        ...INITIAL_VIEWPORTS,
    },
    defaultViewport: "responsive",
}

const iphonexviewport = {
    viewport: {
        ...viewportParams,
        defaultViewport: "iphonex",
    },
}

const DefaultExample = (props) => {

    return (
        <>
            <RatioBox
                width="100%"
                ratio={SUPPORTED_PERCENTAGE_RATIOS.WH_36x9}
                style={{
                    backgroundColor: "orange",
                }}
            >
            </RatioBox>
        </>
    );
};

const MobileViewExample = (props) => {

    return (
        <>
            <RatioBox
                width="100%"
                ratio={SUPPORTED_PERCENTAGE_RATIOS.WH_36x9}
                style={{
                    backgroundColor: "orange",
                }}
            >
            </RatioBox>
        </>
    );
};

const PlaygroundExample = (props) => {

    return (
        <>
        </>
    );
};

storiesOf("RatioBox", module)
    .add("Default", () => <DefaultExample />)
    .add("MobileView", () => <MobileViewExample />, iphonexviewport)
    .add("Playground", () => <PlaygroundExample />);
