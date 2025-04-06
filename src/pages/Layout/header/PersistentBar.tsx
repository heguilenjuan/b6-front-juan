import { ReactNode, memo } from "react"
import '@/styles/components/persistantBar.scss'

const PersistentBar = memo(({ children }: { children: ReactNode }) => {
    return (
        <div className="persistant-bar">
            {children}
        </div>
    )
})

export default PersistentBar