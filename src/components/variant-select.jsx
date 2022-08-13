import React from "react"
import { styled, keyframes } from "@stitches/react"
import { violet, mauve, blackA } from "@radix-ui/colors"
import * as PopoverPrimitive from "@radix-ui/react-popover"
import {
    TextAlignLeftIcon,
    TextAlignCenterIcon,
    TextAlignRightIcon,
    MixerHorizontalIcon,
    Cross2Icon
} from "@radix-ui/react-icons"
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group"

const slideUpAndFade = keyframes({
    "0%": { opacity: 0, transform: "translateY(2px)" },
    "100%": { opacity: 1, transform: "translateY(0)" }
})

const slideRightAndFade = keyframes({
    "0%": { opacity: 0, transform: "translateX(-2px)" },
    "100%": { opacity: 1, transform: "translateX(0)" }
})

const slideDownAndFade = keyframes({
    "0%": { opacity: 0, transform: "translateY(-2px)" },
    "100%": { opacity: 1, transform: "translateY(0)" }
})

const slideLeftAndFade = keyframes({
    "0%": { opacity: 0, transform: "translateX(2px)" },
    "100%": { opacity: 1, transform: "translateX(0)" }
})
const StyledContent = styled(PopoverPrimitive.Content, {
    borderRadius: 4,
    padding: 20,
    width: 260,
    backgroundColor: "white",
    top:"40%",
    boxShadow:
        "hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px",
    "@media (prefers-reduced-motion: no-preference)": {
        animationDuration: "400ms",
        animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
        animationFillMode: "forwards",
        willChange: "transform, opacity",
        '&[data-state="open"]': {
            '&[data-side="top"]': { animationName: slideDownAndFade },
            '&[data-side="right"]': { animationName: slideLeftAndFade },
            '&[data-side="bottom"]': { animationName: slideUpAndFade },
            '&[data-side="left"]': { animationName: slideRightAndFade }
        }
    },
    "&:focus": {
        boxShadow: `hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px, 0 0 0 2px ${violet.violet7}`
    }
})

const StyledArrow = styled(PopoverPrimitive.Arrow, {
    fill: "white"
})

const StyledClose = styled(PopoverPrimitive.Close, {
    all: "unset",
    fontFamily: "inherit",
    borderRadius: "100%",
    height: 25,
    width: 25,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    color: violet.violet11,
    position: "absolute",
    top: 5,
    right: 5,

    "&:hover": { backgroundColor: violet.violet4 },
    "&:focus": { boxShadow: `0 0 0 2px ${violet.violet7}` }
})

// Exports
export const Popover = PopoverPrimitive.Root
export const PopoverTrigger = PopoverPrimitive.Trigger
export const PopoverContent = StyledContent
export const PopoverArrow = StyledArrow
export const PopoverClose = StyledClose

// Your app...
const Flex = styled("div", { display: "flex" })

const IconButton = styled("button", {
    all: "unset",
    position: "absolute",
    zIndex: 2,
    marginLeft: "auto",
    marginRight: "auto",
    fontFamily: "inherit",
    borderRadius: "100%",
    height: 35,
    width: 35,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    color: violet.violet11,
    backgroundColor: "white",
    boxShadow: `0 2px 10px ${blackA.blackA7}`,
    "&:hover": { backgroundColor: violet.violet3 },
    "&:focus": { boxShadow: `0 0 0 2px black` }
})
const Fieldset = styled("fieldset", {
    all: "unset",
    display: "flex",
    gap: 20,
    alignItems: "center"
})

const Label = styled("label", {
    fontSize: 13,
    color: violet.violet11,
    width: 75
})

const Input = styled("input", {
    all: "unset",
    width: "100%",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    flex: "1",
    borderRadius: 4,
    padding: "0 10px",
    fontSize: 13,
    lineHeight: 1,
    color: violet.violet11,
    boxShadow: `0 0 0 1px ${violet.violet7}`,
    height: 25,

    "&:focus": { boxShadow: `0 0 0 2px ${violet.violet8}` }
})

const Text = styled("div", {
    margin: 0,
    color: mauve.mauve12,
    fontSize: 15,
    lineHeight: "19px",
    variants: {
        faded: {
            true: { color: mauve.mauve10 }
        },
        bold: {
            true: { fontWeight: 500 }
        }
    }
})

const StyledToggleGroup = styled(ToggleGroupPrimitive.Root, {
    display: "inline-flex",
    backgroundColor: mauve.mauve6,
    borderRadius: 4,
    boxShadow: `0 2px 10px ${blackA.blackA7}`,
    zIndex: 50
})

const StyledItem = styled(ToggleGroupPrimitive.Item, {
    all: "unset",
    backgroundColor: "white",
    color: mauve.mauve11,
    height: 35,
    width: 35,
    display: "flex",
    fontSize: 15,
    lineHeight: 1,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 1,
    "&:first-child": {
        marginLeft: 0,
        borderTopLeftRadius: 4,
        borderBottomLeftRadius: 4
    },
    "&:last-child": { borderTopRightRadius: 4, borderBottomRightRadius: 4 },
    "&:hover": { backgroundColor: violet.violet3 },
    "&[data-state=on]": {
        backgroundColor: violet.violet5,
        color: violet.violet11
    },
    "&:focus": { position: "relative", boxShadow: `0 0 0 2px black` }
})

// Exports
export const ToggleGroup = StyledToggleGroup
export const ToggleGroupItem = StyledItem

export const VariantSelect = ({ poster, changeHandler }) => (
    <Popover modal={true}>
        <PopoverTrigger asChild>
            <IconButton aria-label="Update dimensions">
                <MixerHorizontalIcon />
            </IconButton>
        </PopoverTrigger>
        <PopoverContent
            sideOffset={5}
            css={{  zIndex: 100 }}
        >
            <Flex css={{ flexDirection: "column", gap: 10 }}>
                <Text bold css={{ marginBottom: 10 }}>
                    Boyut
                </Text>
                <ToggleGroup
                    type="single"
                    defaultValue={poster.currentSize}
                    aria-label="Text alignment"
                    onValueChange={(value) => changeHandler(poster.id, value)}
                >
                    {Object.keys(poster.options).map((option) => (
                        <ToggleGroupItem
                            key={option}
                            value={option}
                            aria-label="Left aligned"
                        >
                            {option}
                        </ToggleGroupItem>
                    ))}
                </ToggleGroup>
            </Flex>
            <PopoverArrow />
            <PopoverClose aria-label="Close">
                <Cross2Icon />
            </PopoverClose>
        </PopoverContent>
    </Popover>
)

export default VariantSelect
