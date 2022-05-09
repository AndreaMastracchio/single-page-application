/* Style/Icon */
import useEmblaCarousel from 'embla-carousel-react'

const Review: React.FC<any> = () => {

    const [viewportRef, embla] = useEmblaCarousel({
        slidesToScroll: 1,
        loop: true
    });

    // Fake 
    const review_array = [
        {
            name: 'Paolo Rossi',
            review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus rutrum tincidunt. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed eget aliquam nisi. Praesent viverra dictum odio sed luctus. Quisque venenatis ornare tempor.'
        },
        {
            name: 'Gentile Romano',
            review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus rutrum tincidunt. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed eget aliquam nisi. Praesent viverra dictum odio sed luctus. Quisque venenatis ornare tempor.'
        },
        {
            name: 'Martino Sona',
            review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus rutrum tincidunt. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed eget aliquam nisi. Praesent viverra dictum odio sed luctus. Quisque venenatis ornare tempor.'
        },
        {
            name: 'Argenti Vive',
            review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus rutrum tincidunt. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed eget aliquam nisi. Praesent viverra dictum odio sed luctus. Quisque venenatis ornare tempor.'
        },
        {
            name: 'Sandro iachini',
            review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus rutrum tincidunt. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed eget aliquam nisi. Praesent viverra dictum odio sed luctus. Quisque venenatis ornare tempor.'
        },
    ]

    return (
        <>
            <h3 className="text-center text-gray-900 text-xl uppercase py-2">  
                Recensioni dei nostri clienti 
            </h3>
            <div className="embla gap-6 space-x-4">
                <div className="embla__viewport" ref={viewportRef}>
                    <div className="embla__container">
                    {
                        review_array.map((value, index) => {
                            return (
                                <div key={index} className='embla__slide cursor-pointer border border-gray-900 gap-6' >
                                    <div className="flex justify-between items-start p-4">
                                        <div className="p-2 flex-grow">
                                            <h1 className="font-medium text-xl font-poppins">
                                                {value.name}
                                            </h1>
                                            <p className="text-gray-500 text-justify">
                                                {value.review}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Review