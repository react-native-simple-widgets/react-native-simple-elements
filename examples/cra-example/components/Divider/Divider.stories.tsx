import * as React from "react";
import { storiesOf } from "@storybook/react";
import Divider from "react-native-simple-elements/components/Divider";
import { View } from "react-native";
import Text from "react-native-simple-elements/components/Text";

const Example = (props) => {

    return (
        <View>
            <Text>Apple</Text>
            <Divider style={{ height: 1 }}/>
            <Text>Orange</Text>
            <Divider />
        </View>
    );
}

storiesOf("Divider", module)
    .add("Default", () => <Example />)
