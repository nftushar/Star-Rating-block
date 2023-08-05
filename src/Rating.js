import { useState } from 'react';
// import { solidIcon, outlineIcon } from './utils/icons';

const Rating = ({ attributes, clientId }) => {
    const { src, title, loading } = attributes;

    const [isNowFull, setIsNowFull] = useState(false);

 

    return <div className='bBlocksIframe'>
        <rating
            title={title}
            width='100%'
            height='100%'
            src={src}
            loading={loading}
        /> 
 
    </div>
}
export default Rating;