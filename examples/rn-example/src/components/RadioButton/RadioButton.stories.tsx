import * as React from "react";
import { storiesOf } from "@storybook/react-native";
import RadioButton, { RadioButtonGroup, RadioButtonItem } from "react-native-simple-elements/components/RadioButton";

const DefaultExample = (props) => {

    return (
        <>
            <RadioButton
                value={"first"}
                status={"checked"}
            />
        </>
    );
};

const GroupExample = (props) => {

    const [ value, setValue ] = React.useState("");

    return (
        <>
            <RadioButtonGroup
                value={value}
                onValueChange={(value) => setValue(value)}
            >
                <RadioButtonItem
                    label={"First"}
                    value={"first"}
                    status={"checked"}
                />
                <RadioButtonItem
                    label={"Second"}
                    value={"second"}
                    status={"checked"}
                />
            </RadioButtonGroup>
        </>
    );
};

const PlaygroundExample = (props) => {

    return (
        <>
        </>
    );
};

storiesOf("RadioButton", module)
    .add("Default", () => <DefaultExample />)
    .add("Group", () => <GroupExample />)
    .add("Playground", () => <PlaygroundExample />);
