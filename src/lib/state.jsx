import create from "zustand"
import { WALL_WIDTH, WALL_HEIGHT, CANVAS_WIDTH } from "./costants"

export const useStore = create((set, get) => ({
    width: WALL_WIDTH,
    height: WALL_HEIGHT,
    wallColor: "#fffae0",
    posters: [
        {
            id: 1,
            src: "/img/absolut.png",
            orientation: "vertical",
            options: {
                "70x50": { width: 50, height: 70 },
                "50x40": { width: 40, height: 50 },
                "40x30": { width: 30, height: 40 },
                "30x21": { width: 21, height: 30 }
            },
            currentSize: { width: 50, height: 70 }
        },
        {
            id: 2,
            src: "/img/johanna.png",
            orientation: "vertical",
            options: {
                "70x50": { width: 50, height: 70 },
                "50x40": { width: 40, height: 50 },
                "40x30": { width: 30, height: 40 },
                "30x21": { width: 21, height: 30 }
            },
            currentSize: { width: 50, height: 70 }
        },
        {
            id: 3,
            src: "/img/balloon.png",
            orientation: "vertical",
            options: {
                "70x50": { width: 50, height: 70 },
                "40x30": { width: 30, height: 40 }
            },
            currentSize: { width: 50, height: 70 }
        }
    ],
    changePosterSize: (id, option) => {
        let allPosters = get().posters
        let newAllPosters = []
        allPosters.forEach((p) => {
            if (p.id !== id) {
                newAllPosters.push(p)
            } else {
                let newCurrentSize = p.options[option]
                newAllPosters.push({ ...p, currentSize: newCurrentSize })
            }
        })
        set((state) => ({ posters: newAllPosters }))
    },
    changeWidth: (w) => set((state) => ({ width: w })),
    changeHeight: (h) => set((state) => ({ height: h })),
    changeWallColor: (c) => set((state) => ({ wallColor: c }))
}))
