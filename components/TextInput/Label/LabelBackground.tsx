import * as React from "react";
import { Animated, StyleSheet } from "react-native";

import AnimatedText from "../../Text/AnimatedText";

import type { LabelBackgroundProps } from "../types";

const LabelBackground = ({
    parentState,
    labelProps: {
        placeholderStyle,
        baseLabelTranslateX,
        topPosition,
        hasActiveOutline,
        label,
        backgroundColor,
    },
    labelStyle,
}: LabelBackgroundProps) => {
    const hasFocus = hasActiveOutline || parentState.value;
    const opacity = parentState.labeled.interpolate({
        inputRange: [0, 1],
        outputRange: [hasFocus ? 1 : 0, 0],
    });

    const labelTranslationX = {
        transform: [
            {
                translateX: parentState.labeled.interpolate({
                    inputRange: [0, 1],
                    outputRange: [-baseLabelTranslateX, 0],
                }),
            },
        ],
    };

    return label
        ? [
            <Animated.View
                key="labelBackground-view"
                pointerEvents="none"
                style={[
                    StyleSheet.absoluteFill,
                    styles.view,
                    {
                        backgroundColor,
                        opacity,
                    },
                    labelTranslationX,
                ]}
            />,
            <AnimatedText
                key="labelBackground-text"
                style={[
                    placeholderStyle,
                    labelStyle,
                    styles.outlinedLabel,
                    {
                        top: topPosition + 1,
                        backgroundColor,
                        opacity,
                        transform: [
                            ...labelStyle.transform,
                            {
                                scaleY: parentState.labeled.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [0.2, 1],
                                }),
                            },
                        ],
                    },
                ]}
                numberOfLines={1}
            >
                {label}
            </AnimatedText>,
        ]
        : null;
};

export default LabelBackground;

const styles = StyleSheet.create({
    view: {
        position: "absolute",
        top: 6,
        left: 10,
        width: 8,
        height: 2,
    },
    outlinedLabel: {
        position: "absolute",
        left: 18,
        paddingHorizontal: 0,
        color: "transparent",
    },
});
