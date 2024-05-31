import { useContext, useState } from "react"
import { StatsContext } from "../provider/statsProvider"

const Task = (props) => {
    const {
        task
    } = props

    const { updateStats } = useContext(StatsContext)

    const [status, setStatus] = useState(task.done ? '\u2713' : '')

    const handleClickStatus = () => {
        if (status === '') {
            setStatus('\u2713')
            updateStats({...task, done: true})
        } else {
            setStatus('')
            updateStats({...task, done: false})
        }
    }

    return (
        <ul className="list-item-task">
            <li className="status">
                <div className="task-status" onClick={handleClickStatus}>
                    {
                        status
                    }
                </div>
            </li>
            <li className="name">
                <p className="name-title">
                    {
                        task.name
                    }
                </p>
            </li>
        </ul>
    )
}

export const WidgetProjectTasks = () => {

    const { stats } = useContext(StatsContext)

    const [activeTasks, setActiveTasks] = useState(stats[0])
    const [openDropDownMenu, setOpenDropDownMenu] = useState(false)

    const handleClickTasksSwitcher = () => {
        setOpenDropDownMenu(!openDropDownMenu)
    }

    const renderTasksSwitcher = (stat) => {
        const handleClickTask = () => {
            setActiveTasks(stat)
        }

        return (
            <p key={stat.id} className="select-paragraph" onClick={handleClickTask}>
                {
                    stat.title
                }
            </p>
        )
    }

    return (
        <>
            <ul className="container-title-bar-tasks">
                <li className="title-bar-tasks">
                    <div className="title-tasks">
                        Project:
                        <span className="title-active-task" onClick={handleClickTasksSwitcher}>
                            {
                                activeTasks.title
                            }
                            {
                                openDropDownMenu &&
                                <div className="select-container">
                                    {
                                        stats.map(stat => renderTasksSwitcher(stat))
                                    }
                                </div>
                            }
                        </span>
                    </div>
                </li>
            </ul>
            {
                activeTasks.tasks.map(task => {
                    return <Task key={task.id} task={task} />
                })
            }
        </>
    )
}