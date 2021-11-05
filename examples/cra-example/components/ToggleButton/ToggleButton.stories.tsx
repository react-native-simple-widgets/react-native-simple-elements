import * as React from "react";
import { storiesOf } from "@storybook/react";
import { View } from "react-native";
import ToggleButton, { ToggleButtonGroup, ToggleButtonRow } from "react-native-simple-elements/components/ToggleButton";
import FormatAlignLeftIcon from "@mdi/svg/svg/format-align-left.svg";
import FormatAlignRightIcon from "@mdi/svg/svg/format-align-right.svg";

const ToggleButtonGroupExample = () => {

    const [ value, setValue ] = React.useState("left");

    return (
        <View>
            <ToggleButtonGroup
                value={value}
                onValueChange={value => setValue(value)}
            >
                <ToggleButton icon={FormatAlignLeftIcon} value="left" />
                <ToggleButton icon={FormatAlignRightIcon} value="right" />
            </ToggleButtonGroup>
        </View>
    )
}

const ToggleButtonRowExample = () => {

    const [ value, setValue ] = React.useState("left");

    return (
        <View>
            <ToggleButtonRow
                value={value}
                onValueChange={value => setValue(value)}
            >
                <ToggleButton icon={FormatAlignLeftIcon} value="left" />
                <ToggleButton icon={FormatAlignRightIcon} value="right" />
            </ToggleButtonRow>
        </View>
    )
}

storiesOf("ToggleButton", module)
    .add("ToggleButton.Group", () => {
        return (
            <ToggleButtonGroupExample />
        )
    })
    .add("ToggleButton.Row", () => {
        return (
            <ToggleButtonRowExample />
        )
    })
