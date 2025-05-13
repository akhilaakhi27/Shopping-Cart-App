import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products: [
        {
            id: 1,
            name: 'Women Printed Pure Cotton Straight Kurta  (Red)',
            price: 1200,
            image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/c/z/i/s-sk-4-big-carry-multicolor-st-kurta-kjfab-original-imah7kvnwmjugbjw.jpeg?q=70',
            size: ['M', 'L', '  XL'],
            material: 'Pure Cotton',
            description: 'A beautiful red kurta made of pure cotton with a printed design.',
        },
        {
            id: 2,
            name: 'Women Printed Pure Cotton Straight Kurta  (Blue)',
            price: 1500,
            image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/n/a/b/3xl-floral-dori-bkapparels-original-imah75gjjftbzawe.jpeg?q=70',
            size: ['S', 'M', 'L'],
            material: 'Pure Cotton',
            description: 'A stylish blue kurta with a floral print, perfect for casual wear.',
        },
        {
            id: 3,
            name: 'Women Floral Print Viscose Rayon Flared Kurta  (Black)',
            price: 1800,
            image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/i/c/r/m-5052-new-rjp-craft-original-imah8p6mfrrzrfxd.jpeg?q=70',
            size: ['M', 'L', 'XL', 'XXL'],
            material: 'Viscose Rayon',
            description: 'A black flared kurta with a floral print, made of viscose rayon.',
        },
            {
            id: 4,
            name: 'Women Cotton Blend Kurti Pant Dupatta Set',
            price: 800,
            image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/j/1/l/3xl-embro001-tibra-attire-original-imah7wdveefgqzfg.jpeg?q=70',
            size: ['M', 'L', 'XL', 'XXL'],
            material: 'Viscose Rayon',
            description: 'A black flared kurta with a floral print, made of viscose rayon.',
        },
            {
            id: 5,
            name: 'Printed Kurta, Trouser/Pant & Dupatta Set',
            price: 600,
            image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/salwar-kurta-dupatta/c/q/j/xxl-bg-29-tabahi-original-imah5nw3zhagfsbk.jpeg?q=70',
            size: ['M', 'L', 'XL', 'XXL'],
            material: 'Viscose Rayon',
            description: 'A black flared kurta with a floral print, made of viscose rayon.',
        },
            {
            id: 6,
            name: 'Women Cotton Rayon Kurti Pant Dupatta Set',
            price: 799,
            image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/a/n/8/xxl-uc-1138-kuldevyani-original-imah7n5rbgx8cs8j.jpeg?q=70',
            size: ['M', 'L', 'XL', 'XXL'],
            material: 'Viscose Rayon',
            description: 'A white A-line kurta with a printed design, made of viscose rayon.',
        },
            {
            id: 7,
            name: 'Women Cotton Rayon Kurti Pant Dupatta Set',
            price: 799,
            image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/a/n/8/xxl-uc-1138-kuldevyani-original-imah7n5rbgx8cs8j.jpeg?q=70',
            size: ['M', 'L', 'XL', 'XXL'],
            material: 'Viscose Rayon',
            description: 'A white A-line kurta with a printed design, made of viscose rayon.',
        },
            {
            id: 8,
            name: 'Women Printed Viscose Rayon Straight Kurta  (Yellow)',
            price: 599,
            image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/y/d/x/s-sa-rasa-220-sa-rasa-original-imagq2w4sh6w6t6s.jpeg?q=70',
            size: ['M', 'L', 'XL', 'XXL'],
            material: 'Viscose Rayon',
            description: 'A yellow straight kurta with a printed design, made of viscose rayon.',
        },
            {
            id: 9,
            name: 'Women Solid Viscose Rayon Straight Kurta  (Purple)',
            price: 358,
            image: 'https://rukminim2.flixcart.com/image/612/612/l5h2xe80/kurta/q/c/i/m-ac-ku-20-collar-amar-creation-original-imagg4w8hxzuh9na.jpeg?q=70',
            size: ['M', 'L', 'XL', 'XXL'],
            material: 'Viscose Rayon',
            description: 'A purple kurta with a solid design, made of viscose rayon.',
        },
            {
            id: 10,
            name: 'Women Floral Print Viscose Rayon Flared Kurta  (Black)',
            price: 1800,
            image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/i/c/r/m-5052-new-rjp-craft-original-imah8p6mfrrzrfxd.jpeg?q=70',
            size: ['M', 'L', 'XL', 'XXL'],
            material: 'Viscose Rayon',
            description: 'A black flared kurta with a floral print, made of viscose rayon.',
        },
    ],
};

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
});

export default productsSlice.reducer;