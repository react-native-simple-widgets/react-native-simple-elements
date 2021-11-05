import * as React from "react";
import { storiesOf } from "@storybook/react";
import ImageButton from "react-native-simple-elements/components/ImageButton";
// import CameraIcon from "@mdi/svg/svg/camera.svg";

storiesOf("ImageButton", module)
    .add("Default", () => {
        return (
            <>
                <ImageButton
                    source={{ uri: "https://via.placeholder.com/350x150.png" }}
                    size={48}
                />
            </>
        )
    })
    .add("Circle", () => {
        return (
            <>
                <ImageButton
                    source={{ uri: "https://via.placeholder.com/350x150.png" }}
                    size={48}
                    circle={true}
                />
            </>
        )
    })