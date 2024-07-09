import Help from "@/components/terminal/commands/Help"
import Welcome from "@/components/terminal/commands/Welcome"


export const firtCmd = (windowWith: number, windowHeight: number) => {
    return {
        id: 0,
        commands: [
            {
                cmd: "",
                Component: Welcome,
                time: new Date().toLocaleTimeString(),
            },
            {
                cmd: "help",
                Component: Help,
                time: new Date().toLocaleTimeString(),
            }
        ],
        position: {
            x: windowWith / 4,
            y: windowHeight/4,
        }
    }
}