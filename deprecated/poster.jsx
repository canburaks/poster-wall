import React, { useEffect, useState, useMemo } from "react"
import { useSpring, animated } from "@react-spring/web"
import { createUseGesture, dragAction, pinchAction } from "@use-gesture/react"
import { MantineProvider } from "@mantine/core"
import { styled, css } from "../theme/stitches.config"
import { AspectRatio } from "../theme"
import { VariantSelect } from "./variant-select"
import { VARIANT_SIZES } from "../lib/costants"
//import { convert } from "../lib/convert"

const useGesture = createUseGesture([dragAction, pinchAction])

const PosterContainer = styled("div", {
    width: "auto",
    height: "auto"
})
const PosterBox = styled(AspectRatio, {
    width: "auto",
    height: "auto",
    position: "relative"
})
const AnimatedPoster = animated(PosterBox)

export function Poster({ poster, size, transformRatio }) {
    const [specs, setSpec] = useState({
        size: poster.size || 2,
        orientation: poster.orientation || "vertical"
    })
    const [width, height] = useMemo(() => {
        let w
        let h
        const sizes = VARIANT_SIZES[specs.size]
        if (specs.orientation === "vertical") {
            w = Math.min(sizes[0], sizes[1])
            h = Math.max(sizes[0], sizes[1])
        } else {
            h = Math.min(sizes[0], sizes[1])
            w = Math.max(sizes[0], sizes[1])
        }
        return [w * transformRatio, h * transformRatio]
    }, [specs.size, specs.orientation])

    console.log("wh", width, height)

    const sizeChangeHandler = (newSpec) => setSpec({ ...specs, ...newSpec })

    useEffect(() => {
        const handler = (e) => e.preventDefault()
        document.addEventListener("gesturestart", handler)
        document.addEventListener("gesturechange", handler)
        document.addEventListener("gestureend", handler)
        return () => {
            document.removeEventListener("gesturestart", handler)
            document.removeEventListener("gesturechange", handler)
            document.removeEventListener("gestureend", handler)
        }
    }, [])

    const [style, api] = useSpring(() => ({
        x: 0,
        y: 0,
        scale: 1,
        rotateZ: 0
    }))
    const ref = React.useRef(null)

    useGesture(
        {
            // onHover: ({ active, event }) => console.log('hover', event, active),
            // onMove: ({ event }) => console.log('move', event),
            onDrag: ({ pinching, cancel, offset: [x, y], ...rest }) => {
                if (pinching) return cancel()
                api.start({ x, y })
            },
            onPinch: ({
                origin: [ox, oy],
                first,
                movement: [ms],
                offset: [s, a],
                memo
            }) => {
                if (first) {
                    const { width, height, x, y } =
                        ref.current.getBoundingClientRect()
                    const tx = ox - (x + width / 2)
                    const ty = oy - (y + height / 2)
                    memo = [style.x.get(), style.y.get(), tx, ty]
                }

                const x = memo[0] - (ms - 1) * memo[2]
                const y = memo[1] - (ms - 1) * memo[3]
                api.start({ scale: s, rotateZ: a, x, y })
                return memo
            }
        },
        {
            target: ref,
            drag: { from: () => [style.x.get(), style.y.get()] },
            pinch: { scaleBounds: { min: 0.5, max: 2 }, rubberband: true }
        }
    )
    const boxStyle = {
        background: `url(${poster.src})`,
        backgroundSize: "cover",
        width,
        height,
        position: "relative"
    }

    return (
        <animated.div className={"card"} ref={ref} style={style}>
            <PosterBox ratio={width / height} id="poster-box" css={boxStyle} />
        </animated.div>
    )
}
