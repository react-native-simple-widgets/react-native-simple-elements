import * as React from "react";
import color from "color";
import {
    Animated,
    StyleSheet,
    StyleProp,
    TextStyle,
    LayoutChangeEvent,
} from "react-native";
import AnimatedText from "../Text/AnimatedText";
import type { $Omit } from "../types";
import { DefaultTheme, ThemeContext } from "styled-components";

type Props = $Omit<
    $Omit<React.ComponentPropsWithRef<typeof AnimatedText>, "padding">,
    "type"
> & {
    /**
     * Type of the helper text.
     */
    type: "error" | "info";
    /**
     * Whether to display the helper text.
     */
    visible?: boolean;
    /**
     * Whether to apply padding to the helper text.
     */
    padding?: "none" | "normal";
    /**
     * Text content of the HelperText.
     */
    children: React.ReactNode;
    style?: StyleProp<TextStyle>;
    /**
     * @optional
     */
    theme?: DefaultTheme;
    /**
     * TestID used for testing purposes
     */
    testID?: string;
};

/**
 * Helper text is used in conjuction with input elements to provide additional hints for the user.
 *
 * <div class="screenshots">
 *   <img class="medium" src="screenshots/helper-text.gif" />
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { View } from 'react-native';
 * import HelperText from 'react-native-simple-elements/components/HelperText';
 * import TextInput from "react-native-simple-elements/components/TextInput";
 *
 * const MyComponent = () => {
 *   const [text, setText] = React.useState('');
 *
 *    const onChangeText = text => setText(text);
 *
 *   const hasErrors = () => {
 *     return !text.includes('@');
 *   };
 *
 *  return (
 *     <View>
 *       <TextInput label="Email" value={text} onChangeText={onChangeText} />
 *       <HelperText type="error" visible={hasErrors()}>
 *         Email address is invalid!
 *       </HelperText>
 *     </View>
 *   );
 * };
 *
 * export default MyComponent;
 * ```
 */
const HelperText = ({
    style,
    type = "info",
    visible = true,
    onLayout,
    padding = "normal",
    ...rest
}: Props) => {
    const theme = React.useContext(ThemeContext);
    const { current: shown } = React.useRef<Animated.Value>(
        new Animated.Value(visible ? 1 : 0)
    );

    let { current: textHeight } = React.useRef<number>(0);

    const { scale } = theme.animation;

    React.useEffect(() => {
        if (visible) {
            // show text
            Animated.timing(shown, {
                toValue: 1,
                duration: 150 * scale,
                useNativeDriver: true,
            }).start();
        } else {
            // hide text
            Animated.timing(shown, {
                toValue: 0,
                duration: 180 * scale,
                useNativeDriver: true,
            }).start();
        }
    }, [visible, scale, shown]);

    const handleTextLayout = (e: LayoutChangeEvent) => {
        //@ts-ignore Animated.Text typings are improved but something is still broken. It thinks onLayout is not callable.
        onLayout?.(e);
        textHeight = e.nativeEvent.layout.height;
    };

    const { colors, dark } = theme;

    const textColor =
        type === "error"
            ? colors.error
            : color(colors.text)
                .alpha(dark ? 0.7 : 0.54)
                .rgb()
                .string();

    return (
        // @ts-ignore
        <AnimatedText
            onLayout={handleTextLayout}
            style={[
                styles.text,
                padding !== "none" ? styles.padding : {},
                {
                    color: textColor,
                    opacity: shown,
                    transform:
                        visible && type === "error"
                            ? [
                                {
                                    translateY: shown.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: [-textHeight / 2, 0],
                                    }),
                                },
                            ]
                            : [],
                },
                style,
            ]}
            {...rest}
        >
            {rest.children}
        </AnimatedText>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 12,
        paddingVertical: 4,
    },
    padding: {
        paddingHorizontal: 12,
    },
});

export default HelperText;
