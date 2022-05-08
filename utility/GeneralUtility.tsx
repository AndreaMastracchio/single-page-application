export const updateObject = ( oldObject: any, updatedProperties: any ) => {
    return {
        ...oldObject,
        ...updatedProperties
    };
};

export const saveScrollPos = (url: string) => {
    clearScrollPos(url)
    const scrollPos = { x: window.scrollX, y: window.scrollY };
    sessionStorage.setItem(url, JSON.stringify(scrollPos));
    console.log(sessionStorage.getItem(url))
}

export const clearScrollPos = (url: string) => {
    sessionStorage.removeItem(url)
}

export const createCarousel = (products) => {

    let n = 5
    let product_carousel = new Array(5),
        len = products.length,
        taken = new Array(len);
    if (n > len)
        throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
        var x = Math.floor(Math.random() * len);
        product_carousel[n] = products[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }

    return product_carousel
}
 