import { WidgetProjectTasks } from './component/WidgetProjectTasks'
import { WidgetProjectStats } from './component/WidgetProjectStats'
import './App.css'

function App() {

  return (
    <div className="app-container">
      <div className="container-stats">
        <WidgetProjectStats />
      </div>
      <div className="container-tasks">
        <WidgetProjectTasks />
      </div>
    </div>
  )
}

export default App
