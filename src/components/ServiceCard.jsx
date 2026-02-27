import PropTypes from 'prop-types';

const ServiceCard = ({ title, imgSrc, description1 }) => (
    <div className='bg-blue-900 shadow-lg rounded-lg p-4 m-2 w-lg sm:w-full md:w-full lg:w-full t '>
        <h3 className='text-gray-600 text-2xl font-semibold mb-2'>{title}</h3>
        <img src={imgSrc} alt={`${title} illustration`} className='w-full h-20 object-contain rounded-md mb-5' loading="lazy" />
        <li className='text-gray-200 text-lg mb-4'>{description1}</li>
        

        
    </div>
);

ServiceCard.propTypes = {
    title: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    onReadMore: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
};