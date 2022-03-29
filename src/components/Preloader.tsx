import { PreloaderStyle, ImagePreloader } from '@/styled-components';
import { MustachiLogo } from '../assets';

export default function Preloader(){
    return (
        <PreloaderStyle>
            <ImagePreloader src={MustachiLogo} />
        </PreloaderStyle>
    )
}