import * as React from "react";
import { View } from "react-native";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import IconButton from "react-native-simple-elements/components/IconButton";
import CameraIcon from "@mdi/svg/svg/camera.svg";

const pressFn = action("Pressed");

const IconButtonExample = () => {

    return (
        <View>
            <IconButton
                icon={CameraIcon}
                onPress={pressFn}
            />
        </View>
    )
}

storiesOf("IconButton", module)
    .add("Default", () => {
        return (
            <IconButtonExample />
        )
    })
