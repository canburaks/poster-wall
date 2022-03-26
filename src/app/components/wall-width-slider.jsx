import { Slider } from "@mantine/core"
import { useStore } from "../lib/state"
// Configure marks to match step
const MARKS = [
    { value: 0, label: "2m", cm: 200 },
    { value: 20, label: "2.4m", cm: 240 },
    { value: 40, label: "2.8m", cm: 280 },
    { value: 60, label: "3.2m", cm: 320 },
    { value: 80, label: "3.6m", cm: 360 },
    { value: 100, label: "4.0m", cm: 400 }
]

export function WallWidthSlider() {
    const width = useStore(state => state.width)
    const increaseWallWidth = useStore(state => state.changeWidth)
    const changeHandler = (value) => {
        const matchedMark = MARKS.filter(m => m.value === value)[0]
        console.log("value", value, matchedMark.cm)
        increaseWallWidth(matchedMark.cm)
    }
    return (
        <Slider
            label={val => MARKS.find(mark => mark.value === val).label}
            defaultValue={60}
            step={20}
            marks={MARKS}
            sx={{ marginTop: 32 }}
            styles={{ markLabel: { display: "block" } }}
            onChangeEnd={changeHandler}
        />
    )
}
