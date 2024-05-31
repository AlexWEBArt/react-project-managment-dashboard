import { useContext } from "react"
import { StatsContext } from "../provider/statsProvider"

export const WidgetProjectStats = () => {

    const { stats } = useContext(StatsContext)

    return (
        <>
            <ul className="container-title-stats">
                <li className="title-stats">
                    <p className="title-stats-name">
                        Project
                    </p>
                </li>
                <li className="title-bar-stats">
                    <p className="title-stats-status">
                        Open
                    </p>
                </li>
            </ul>
            {
                stats.map(stat => {
                    return (
                        <ul key={stat.id} className="list-item-stat">
                            <li className="name">
                                <p className="name-title">
                                    {
                                        stat.title
                                    }
                                </p>
                            </li>
                            <li className="count">
                                <p className="quantity">
                                    {
                                        stat.quantity
                                    }
                                </p>
                            </li>
                        </ul>
                    )
                })
            }
        </>
    )
}