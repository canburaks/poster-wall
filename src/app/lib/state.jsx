import create from "zustand"
import { WALL_WIDTH, WALL_HEIGHT, CANVAS_WIDTH } from "./costants"

export const useStore = create(set => ({
           width: WALL_WIDTH,
           height: WALL_HEIGHT,
           wallColor: "#fffae0",
           changeWidth: w => set(state => ({ width: w })),
           changeHeight: h => set(state => ({ height: h })),
           changeWallColor: c => set(state => ({ wallColor: c }))
       }))
