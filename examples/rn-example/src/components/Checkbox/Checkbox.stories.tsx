import * as React from "react";
import { storiesOf } from "@storybook/react-native";
import Checkbox, { CheckboxItem } from "react-native-simple-elements/components/Checkbox";

const DefaultExample = (props) => {

    const [ checked, setChecked ] = React.useState(false);

    return (
        <>
            <Checkbox
                status={checked ? "checked" : "unchecked"}
                onPress={() => setChecked(!checked)}
            />
        </>
    );
};

const CheckboxItemExample = (props) => {

    const [ checked, setChecked ] = React.useState(false);

    return (
        <>
            <CheckboxItem
                label={"Checkbox Item"}
                status={checked ? "checked" : "unchecked"}
                onPress={() => setChecked(!checked)}
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

storiesOf("Checkbox", module)
    .add("Default", () => <DefaultExample />)
    .add("CheckboxItem", () => <CheckboxItemExample />)
    .add("Playground", () => <PlaygroundExample />);
