import React, { useEffect, useMemo, useState } from "react"
import { SimpleGrid } from "@mantine/core"
import { Container } from "@mantine/core"
import { MantineProvider } from "@mantine/core"
import { Poster } from "./components"
import { Flex, AspectRatio } from "./theme/atoms/box"
import { styled, css } from "./theme/stitches.config"
import { useElementSize, useViewportSize } from "@mantine/hooks"
import { WALL_WIDTH, CANVAS_WIDTH } from "./lib/costants"
import { CANVAS_VIEWPORT_RATIO } from "./lib/costants"
import { WallWidthSlider, WallColorPicker } from "./components"
import { useStore } from "./lib/state"
import { ColorPicker } from "@mantine/core"

const absolut = {
    src:
        "https://cbsofyalioglu.fra1.cdn.digitaloceanspaces.com/clients/opendigital-gallery/poster-app/absolut-creative-poster%202.png",
    orientation: "vertical",
    width: 50,
    height: 70
}
export function MyApp(props) {
    const [posters, setPosters] = useState([absolut])
    const { height, width } = useViewportSize()
    const canvasWidthPixel = useMemo(() => width * CANVAS_VIEWPORT_RATIO, [
        width
    ])
    const canvasWidthCm = useStore(state => state.width)
    const canvasColor = useStore(state => state.wallColor)
    function convert(cm) {
        return cm * (canvasWidthPixel / canvasWidthCm)
    }

    console.log("width height", width, height)
    return <Main>
            <Canvas id="canvas" css={{ background: canvasColor }}>
                {posters.map(p =>
                    <Poster
                        key={p.src}
                        src={p.src}
                        width={convert(p.width)}
                        height={convert(p.height)}
                    />
                )}
            </Canvas>
            <WallWidthSlider />
            <WallColorPicker />
        </Main>
}

const Main = styled("main", {
    maxWidth: "100vw",
    width: "100%",
    height: "auto",
    display: "flex",
    minHeight: "100vh",
    flexDirection: "column",
    background: "#1A1B1E",
    overflowX: "hidden",
    padding: "32px 64px",
    boxSizing: "border-box"
})
const Canvas = styled("div", {
    maxWidth: CANVAS_WIDTH,
    width: "100%",
    height: "auto",
    display: "flex",
    alignSelf: "center",
    minHeight: "70vh",
    flexDirection: "column",
    background: "#1A1B1E",
    overflowX: "hidden",
    position: "relative",
    border: "2px solid black",
    boxSizing: "border-box",
    borderRadius: 16
})
