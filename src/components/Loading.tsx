import Logo from '@/assets/icons/logo.webp'
import '@/styles/components/loading.scss'
import HeartSVG from '@/assets/icons/heartSvg.svg'

const Loading = () => {
    return (
        <div className='loading-box'>
            <img src={HeartSVG} alt='corazon diseño de big six' className='heart-icon' />
            <img src={Logo} alt='Logo de big six' className='loading-icon' />
        </div>
    )
}

export default Loading