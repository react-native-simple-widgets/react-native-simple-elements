import * as React from "react";
import { storiesOf } from "@storybook/react";
import { AvatarIcon, AvatarImage, AvatarText } from "react-native-simple-elements/components/Avatar";
import FolderIcon from "@mdi/svg/svg/folder.svg";

storiesOf("Avatar", module)
    .add("Icon", () => {
        return (
            <AvatarIcon size={24} icon={FolderIcon} />
        )
    })
    .add("Image", () => {
        return (
            <AvatarImage size={24} source={{ uri: "https://via.placeholder.com/350x150" }} />
        )
    })
    .add("Text", () => {
        return (
            <AvatarText size={24} label={"Text"}/>
        )
    })
