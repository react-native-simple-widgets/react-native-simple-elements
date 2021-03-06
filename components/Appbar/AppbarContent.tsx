import * as React from "react";
import {
    Platform,
    StyleProp,
    StyleSheet,
    TextStyle,
    TouchableWithoutFeedback,
    View,
    ViewStyle,
} from "react-native";
import color from "color";

import Text from "../Text";

import { white } from "../theme/colors";

import type { $RemoveChildren } from "../types";
import { DefaultTheme, ThemeContext } from "styled-components";

type Props = $RemoveChildren<typeof View> & {
    /**
     * Custom color for the text.
     */
    color?: string;
    /**
     * Text for the title.
     */
    title: React.ReactNode;
    /**
     * Style for the title.
     */
    titleStyle?: StyleProp<TextStyle>;
    /**
     * Reference for the title.
     */
    titleRef?: React.RefObject<Text>;
    /**
     * Text for the subtitle.
     */
    subtitle?: React.ReactNode;
    /**
     * Style for the subtitle.
     */
    subtitleStyle?: StyleProp<TextStyle>;
    /**
     * Function to execute on press.
     */
    onPress?: () => void;
    style?: StyleProp<ViewStyle>;
    /**
     * @optional
     */
    theme?: DefaultTheme;
};

/**
 * A component used to display a title and optional subtitle in an appbar.
 *
 * <div class="screenshots">
 *   <figure>
 *     <img class="medium" src="screenshots/appbar-content.png" />
 *   </figure>
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import Appbar from 'react-native-simple-elements/components/Appbar';
 *
 * const MyComponent = () => (
 *     <Appbar.Header>
 *        <Appbar.Content title="Title" subtitle={'Subtitle'} />
 *     </Appbar.Header>
 * );
 *
 * export default MyComponent;
 * ```
 */
const AppbarContent = ({
    color: titleColor = white,
    subtitle,
    subtitleStyle,
    onPress,
    style,
    titleRef,
    titleStyle,
    title,
    ...rest
}: Props) => {
    const theme = React.useContext(ThemeContext);
    const { fonts } = theme;

    const subtitleColor = color(titleColor).alpha(0.7).rgb().string();

    return (
        <TouchableWithoutFeedback onPress={onPress} disabled={!onPress}>
            <View style={[styles.container, style]} {...rest}>
                <Text
                    ref={titleRef}
                    style={[
                        {
                            color: titleColor,
                            ...(Platform.OS === "ios" ? fonts.regular : fonts.medium),
                        },
                        styles.title,
                        titleStyle,
                    ]}
                    numberOfLines={1}
                    accessible
                    accessibilityTraits="header"
                    // @ts-ignore Type '"heading"' is not assignable to type ...
                    accessibilityRole={Platform.OS === "web" ? "heading" : "header"}
                >
                    {title}
                </Text>
                {subtitle ? (
                    <Text
                        style={[styles.subtitle, { color: subtitleColor }, subtitleStyle]}
                        numberOfLines={1}
                    >
                        {subtitle}
                    </Text>
                ) : null}
            </View>
        </TouchableWithoutFeedback>
    );
};

AppbarContent.displayName = "Appbar.Content";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 12,
    },
    title: {
        fontSize: Platform.OS === "ios" ? 17 : 20,
    },
    subtitle: {
        fontSize: Platform.OS === "ios" ? 11 : 14,
    },
});

export default AppbarContent;

// @component-docs ignore-next-line
const AppbarContentWithTheme = AppbarContent;
// @component-docs ignore-next-line
export { AppbarContentWithTheme as AppbarContent };
