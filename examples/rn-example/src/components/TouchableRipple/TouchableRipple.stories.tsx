import * as React from "react";
import { storiesOf } from "@storybook/react-native";
import TouchableRipple from "react-native-simple-elements/components/TouchableRipple";
import Text from "react-native-simple-elements/components/Text";
import { action } from "@storybook/addon-actions";

const onPress = action("onPress");

const DefaultExample = (props) => {

    return (
        <>
            <TouchableRipple
                onPress={onPress}
            >
                <Text>Hello</Text>
            </TouchableRipple>
        </>
    );
};

const PlaygroundExample = (props) => {

    return (
        <>
        </>
    );
};

storiesOf("TouchableRipple", module)
    .add("Default", () => <DefaultExample />)
    .add("Playground", () => <PlaygroundExample />);
