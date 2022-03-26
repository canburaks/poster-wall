import React, { useEffect } from "react"
import { MantineProvider } from "@mantine/core"
import { theme } from "./theme"
import { MyApp } from "./app"
import { useViewportSize } from "@mantine/hooks"

export default function ThemeWrapper() {
    const { height, width } = useViewportSize()
    console.log("hhh", height)
    if (width < 900) {
        return <Warning />
    }

    return <MyApp />
}

const Warning = () =>
    <div className="warning">
        <h2>
            Bu uygulama mobil cihazlar için optimize edilmemiştir. Lütfen bir
            bilgisayarda deneyiniz
        </h2>
    </div>
