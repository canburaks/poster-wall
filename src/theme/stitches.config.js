import { createStitches } from "@stitches/react"

export const {
    styled,
    css,
    globalCss,
    keyframes,
    getCssText,
    theme,
    createTheme,
    config
} = createStitches({
    theme: {
        colors: {}
    },
    media: {
        sm: "(min-width: 480px)",
        md: "(min-width: 750px)",
        lg: "(min-width: 990px)"
    },
    utils: {
        marginX: value => ({ marginLeft: value, marginRight: value })
    }
})
