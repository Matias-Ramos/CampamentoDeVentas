import blueLogo from '/products/logo.png';
import whiteLogo from '/products/logo_white.png';

const Logo = ({ color } : { color: string }) => (
    <img 
        src={ 
            color=="white" ? whiteLogo : blueLogo
        }
        className='mw-100   logo'
        alt="logo del Campamento de ventas" 
    />
    
)

export default Logo