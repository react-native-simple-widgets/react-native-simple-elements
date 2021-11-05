import * as React from "react";
import { storiesOf } from "@storybook/react-native";
import Banner from "react-native-simple-elements/components/Banner";

const DefaultExample = (props) => {

    return (
        <>
            <Banner
                visible={true}
                actions={[]}
            >
                Banner message
            </Banner>
        </>
    );
};

const PlaygroundExample = (props) => {

    return (
        <>
        </>
    );
};

storiesOf("Banner", module)
    .add("Default", () => <DefaultExample />)
    .add("Playground", () => <PlaygroundExample />);
