import * as React from "react";
import { storiesOf } from "@storybook/react-native";
import ToggleButton, { ToggleButtonGroup, ToggleButtonRow } from "react-native-simple-elements/components/ToggleButton";
import HomeIcon from "@mdi/svg/svg/home.svg";
import AccountIcon from "@mdi/svg/svg/account.svg";

const DefaultExample = (props) => {

    const [ value, setValue ] = React.useState("");

    return (
        <>
            <ToggleButtonGroup
                value={value}
                onValueChange={(newValue) => setValue(newValue)}
            >
                <ToggleButton
                    icon={HomeIcon}
                    value={"home"}
                />
                <ToggleButton
                    icon={AccountIcon}
                    value={"account"}
                />
            </ToggleButtonGroup>
            <ToggleButtonRow
                value={value}
                onValueChange={(newValue) => setValue(newValue)}
            >
                <ToggleButton
                    icon={HomeIcon}
                    value={"home"}
                />
                <ToggleButton
                    icon={AccountIcon}
                    value={"account"}
                />
            </ToggleButtonRow>
        </>
    );
};

const PlaygroundExample = (props) => {

    return (
        <>
        </>
    );
};

storiesOf("ToggleButton", module)
    .add("Default", () => <DefaultExample />)
    .add("Playground", () => <PlaygroundExample />);
