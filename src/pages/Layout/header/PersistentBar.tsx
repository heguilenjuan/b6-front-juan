import { ReactNode, memo } from "react"
import '@/styles/components/persistantBar.scss'

const PersistentBar = memo(({ children }: { children: ReactNode }) => {
    return (
        <header className="persistant-bar">
            {children}
        </header>
    )
})

export default PersistentBar