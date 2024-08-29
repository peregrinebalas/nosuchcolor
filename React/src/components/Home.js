import leftHand from '../assets/left-hand.png'
import rightHand from '../assets/right-hand.png'
import Sections from './Sections'

export default function Home() {
    return (
        <div className='Home'>
            <Sections/>
            <div>
                <img src={rightHand} alt='Right Hand'/>
                <img src={leftHand} alt='Left Hand'/>
            </div>
        </div>
    )
}