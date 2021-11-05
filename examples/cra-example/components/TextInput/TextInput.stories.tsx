import * as React from "react";
import { View } from "react-native";
import { storiesOf } from "@storybook/react";
import TextInput from "react-native-simple-elements/components/TextInput";

const TextInputExample = () => {
    const [text, setText] = React.useState('');

    return (
        <View>
            <TextInput
                label="Email"
                value={text}
                onChangeText={text => setText(text)}
            />
            <TextInput
                mode="outlined"
                label="Outline"
                value={text}
                onChangeText={text => setText(text)}
            />
        </View>
    )
}

storiesOf("TextInput", module)
    .add("Default", () => <TextInputExample />)
