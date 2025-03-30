import style from './Pages.module.css'
import NavbarTop from '../Navbar/NavbarTop.jsx'
import CardAnimal from '../Cards/CardAnimal.jsx'
import NinaPic from '../assets/NinaPic.png'
import RexPic from '../assets/RexPic.png'
import BellaPic from '../assets/BellaPic.png'
import ZecaPic from '../assets/ZecaPic.png'
import MaxPic from '../assets/MaxPic.png'
import LunaPic from '../assets/LunaPic.png'

function DonationDog() {
    return(
        <>
            <NavbarTop />
            <div className={style.cards}>
                <CardAnimal name="Nina" image={NinaPic} />
                <CardAnimal name="Rex" image={RexPic} />
                <CardAnimal name="Bella" image={BellaPic} />
                <CardAnimal name="Zeca" image={ZecaPic} />
                <CardAnimal name="Max" image={MaxPic} />
                <CardAnimal name="Luna" image={LunaPic} />
                <CardAnimal name="Luna" image={LunaPic} />
                <CardAnimal name="Luna" image={LunaPic} />
                <CardAnimal name="Luna" image={LunaPic} />
                <CardAnimal name="Luna" image={LunaPic} />
                <CardAnimal name="Luna" image={LunaPic} />

            </div>
        </>
    )
}

export default DonationDog