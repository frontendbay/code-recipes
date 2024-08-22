import sdk from "@stackblitz/sdk"
import { useEffect } from "react"
import "./index.css"

function App() {
  const css = {width:"100%", height: "500px", border: "0", "border-radius": "4px", overflow:"hidden"}

  useEffect(() => {
    sdk.embedProjectId("box", "vitejs-vite-uz8mgb", {
      forceEmbedLayout: true,
      openFile: "src/index.css,src/App.tsx",
      theme: "dark",
      view: "default",
      height: 800,
      hideExplorer: true,
      hideNavigation: true,
    })
  }, [])
  return (
    <div id="Add" className="max-w-screen-lg mx-auto">
      {/* <Form /> */}
      <div id="box"></div>
    </div>
  )
}

export default App
