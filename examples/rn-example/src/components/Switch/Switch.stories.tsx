import * as React from "react";
import { storiesOf } from "@storybook/react-native";
import Switch from "react-native-simple-elements/components/Switch";

const DefaultExample = (props) => {

    const [ isSwitch, setIsSwitch ] = React.useState(false);

    return (
        <>
            <Switch
                value={isSwitch}
                onValueChange={() => setIsSwitch(!isSwitch)}
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

storiesOf("Switch", module)
    .add("Default", () => <DefaultExample />)
    .add("Playground", () => <PlaygroundExample />);
