import * as React from 'react';
import { storiesOf } from "@storybook/react";
import Chip from "react-native-simple-elements/components/Chip";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import HomeIcon from "@mdi/svg/svg/home.svg";
import ImageButton from 'react-native-simple-elements/components/ImageButton';

const viewportParams = {
    viewports: {
        ...INITIAL_VIEWPORTS,
    },
    defaultViewport: "responsive",
};

storiesOf("Chip", module)
    .add("Default", () => {

        return (
            <Chip
            >
                Avatar
            </Chip>
        )
    })
    .add("Mobile View", () => {

        return (
            <Chip
            >
                Avatar
            </Chip>
        )
    }, {
        viewport: {
            ...viewportParams,
            defaultViewport: "iphonex",
        }
    })
    .add("Mobile View with icons", () => {

        return (
            <Chip
                icon={HomeIcon}
            >
                Avatar
            </Chip>
        )
    }, {
        viewport: {
            ...viewportParams,
            defaultViewport: "iphonex",
        }
    })
    .add("with avatar", () => {

        return (
            <Chip
                avatar={
                    <ImageButton
                        source={{ uri: "https://avatars.githubusercontent.com/u/7020134?s=400&u=ba52e0bb67deca100738f558e52d5dcb8d54e00f&v=4" }}
                        size={24}
                    />
                }
            >
                Avatar
            </Chip>
        )
    })
    .add("Playground", () => {

        return (
            <Chip
            >
                Avatar
            </Chip>
        )
    });
