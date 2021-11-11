import * as React from "react";
import { StyleProp, ViewStyle } from "react-native";
import styled from "styled-components/native";
import { SUPPORTED_PERCENTAGE_RATIOS } from "./utils";

const Box = styled.View({
});

type Props = {
    width: number | string,
    children: React.ReactNode,
    style?: StyleProp<ViewStyle>,
    ratio?: string,
}

const defaultProps = {
    ratio: SUPPORTED_PERCENTAGE_RATIOS.WH_36x9,
};

const RatioBox = ({
    width,
    style,
    children,
    ratio,
}: Props) => {

    return (
        <Box
            style={[
                style,
                {
                    width: width,
                    paddingTop: ratio,
                },
            ]}
        >
            {children}
        </Box>
    );
};

RatioBox.defaultProps = defaultProps;

export default RatioBox;
