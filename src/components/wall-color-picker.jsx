import { useStore } from "../lib/state"
import { ColorPicker, ColorInput } from "@mantine/core"
import { styled, css } from "../theme/stitches.config"

const Box = styled("div", {
    position: "absolute",
    top: 16,
    right: 16,
    background: "#1A1B1E",
    padding: "8px 16px",
    zIndex: 1,
    "& label": {
        color: "white"
    }
})

export const WallColorPicker = () => {
    const canvasColor = useStore((state) => state.wallColor)
    const canvasColorChanger = useStore((state) => state.changeWallColor)
    return (
        <ColorInput
            defaultValue={canvasColor}
            onChange={canvasColorChanger}
            styles={{
                label: { color: "white" },
                input: {
                    width: 120,
                    background: "#1A1B1E",
                    color: "white"
                },
                wrapper: {
                    background: "transparent"
                },
                root: {
                    background: "transparent"
                }
            }}
            sx={(theme) => ({
                position: "absolute",
                top: 32,
                right: "5vw",
                padding: "8px 16px",
                zIndex: 1,
                color: "white"
            })}
            radius={"xl"}
        />
    )
}
