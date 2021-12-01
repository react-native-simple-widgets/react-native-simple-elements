import * as React from "react";
import RatioBox, { Props } from "./RatioBox";
import AbsoluteView from "../Container/AbsoluteView";
import { StyleProp, ViewStyle } from "react-native";

const RatioBoxContainer = ({
    children,
    absoluteViewStyle,
    ...rest
}: Props & { absoluteViewStyle: StyleProp<ViewStyle> }) => {

    return (
        <RatioBox
            {...rest}
        >
            <AbsoluteView
                style={absoluteViewStyle}
            >
                {children}
            </AbsoluteView>
        </RatioBox>
    );
};

export default RatioBoxContainer;
