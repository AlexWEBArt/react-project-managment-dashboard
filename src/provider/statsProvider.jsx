import { createContext, useState } from "react"
import data from '../data/project.json'

export const StatsContext = createContext(null)

const initialState = {
    stats: data.project.map(stat => {
        const count = stat.tasks.filter(task => !task.done).length
        return {
            id: stat.id,
            title: stat.name,
            tasks: stat.tasks,
            quantity: count
        }
    })
}

const StatsProvider = ({ children }) => {
    const [stats, setStats] = useState(initialState.stats)

    const updateStats = (changedTask) => {
        setStats(prevStats => {
            return prevStats.map(stat => {
                const updatedTasks = stat.tasks.map(task =>
                    task.id === changedTask.id ? changedTask : task
                ).sort((a, b) => a.id - b.id)

                const updatedQuantity = updatedTasks.filter(task => !task.done).length

                return {
                    ...stat,
                    tasks: updatedTasks,
                    quantity: updatedQuantity
                }
            }).sort((a, b) => a.id - b.id)
        });
    };

    return (
        <StatsContext.Provider
            value={{
                stats,
                updateStats,
            }}
        >
            {children}
        </StatsContext.Provider>
    )
}

export default StatsProvider