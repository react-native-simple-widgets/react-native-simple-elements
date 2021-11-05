import * as React from "react";
import { storiesOf } from "@storybook/react-native";
import TextInput from "react-native-simple-elements/components/TextInput";

const DefaultExample = (props) => {
    const [ value, setValue ] = React.useState("");

    return (
        <>
            <TextInput
                value={value}
                onChangeText={(text) => setValue(text)}
                placeholder={"Placeholder"}
                label={"Label"}
            />
            <TextInput
                value={value}
                onChangeText={(text) => setValue(text)}
                mode={"outlined"}
                placeholder={"Placeholder"}
                label={"Label"}
            />
        </>
    );
};

const PlaygroundExample = (props) => {

    return (
        <>
        </>
    );
};

storiesOf("TextInput", module)
    .add("Default", () => <DefaultExample />)
    .add("Playground", () => <PlaygroundExample />);
