import { styled } from "../stitches.config"
import * as AspectRatioPrimitive from "@radix-ui/react-aspect-ratio"

export const AspectRatio = AspectRatioPrimitive
export const Flex = styled("div", {
    display: "flex",
    position: "relative",
    variants: {
        direction: {
            column: {
                flexDirection: "column"
            },
            col: {
                flexDirection: "column"
            },
            row: {
                flexDirection: "row"
            }
        },
        justify: {
            start: { justifyContent: "flex-start" },
            end: { justifyContent: "flex-end" },
            center: { justifyContent: "center" }
        },
        items: {
            start: { alignItems: "flex-start" },
            end: { alignItems: "flex-end" },
            center: { alignItems: "center" },
            streth: { alignItems: "streth" }
        },
        type: {
            cover: {
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0
            },
            centered: {
                justifyContent: "center",
                alignItems: "center"
            }
        }
    }
})
