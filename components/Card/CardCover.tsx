import * as React from "react";
import { StyleSheet, View, ViewStyle, Image, StyleProp } from "react-native";
import { DefaultTheme, ThemeContext } from "styled-components";
import { grey200 } from "../theme/colors";

type Props = React.ComponentPropsWithRef<typeof Image> & {
    /**
     * @internal
     */
    index?: number;
    /**
     * @internal
     */
    total?: number;
    style?: StyleProp<ViewStyle>;
    /**
     * @optional
     */
    theme?: DefaultTheme;
};

/**
 * A component to show a cover image inside a Card.
 *
 * <div class="screenshots">
 *   <figure>
 *     <img class="medium" src="screenshots/card-cover.png" />
 *   </figure>
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import Card from 'react-native-simple-elements/components/Card';
 *
 * const MyComponent = () => (
 *   <Card>
 *     <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
 *   </Card>
 * );
 *
 * export default MyComponent;
 * ```
 *
 * @extends Image props https://reactnative.dev/docs/image#props
 */
const CardCover = ({ index, total, style, ...rest }: Props) => {
    const theme = React.useContext(ThemeContext);
    const { roundness } = theme;

    let coverStyle;

    if (index === 0) {
        if (total === 1) {
            coverStyle = {
                borderRadius: roundness,
            };
        } else {
            coverStyle = {
                borderTopLeftRadius: roundness,
                borderTopRightRadius: roundness,
            };
        }
    } else if (typeof total === "number" && index === total - 1) {
        coverStyle = {
            borderBottomLeftRadius: roundness,
        };
    }

    return (
        <View style={[styles.container, coverStyle, style]}>
            <Image {...rest} style={[styles.image, coverStyle]} />
        </View>
    );
};

CardCover.displayName = "Card.Cover";

const styles = StyleSheet.create({
    container: {
        height: 195,
        backgroundColor: grey200,
        overflow: "hidden",
    },
    image: {
        flex: 1,
        height: undefined,
        width: undefined,
        padding: 16,
        justifyContent: "flex-end",
        resizeMode: "cover",
    },
});

export default CardCover;

// @component-docs ignore-next-line
export { CardCover };
