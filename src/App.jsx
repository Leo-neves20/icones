import './App.css'
import * as icon from "@ant-design/icons"

function App() {

  const IconTransformer = (iconName) => {

    const isValidIcon = Object.keys(icon).includes(iconName)

    let IconComponent = null

    if(isValidIcon){

      IconComponent = icon[iconName]

    }else{

      IconComponent = icon["CloseOutlined"]

    }

    return <IconComponent style={{color: "aqua"}}/>

  }

  return (
    <>
      <h1>{IconTransformer("WarningOutlined")}</h1>
    </>
  )
}

export default App
