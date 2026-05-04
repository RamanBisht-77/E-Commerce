import kurti from './kurti.webp'
import jeans from './jeans.webp'
import saree from './saree.avif'
import jacket from './jacket.webp'
import p1_img from './1.avif'
import p5_img from './2.webp'
import p6_img from './3.png'
import p7_img from './4.avif'
import p8_img from './5.avif'
import p9_img from './6.webp'
import p10_img from './7.jpg'
import p11_img from './8.avif'
import men7 from './men7.png'
import women7 from './women7.webp'
import men8 from './men8.jpg'
import women8 from './women8.png'
import kid1 from './kid1.jpg'
import kid2 from './kid2.png'
import kid3 from './kid3.png'
import kid4 from './kid4.webp'
import kid5 from './kid5.png'
import kid6 from './kid6.png'
import kid7 from './kid7.webp'
import kid8 from './kid8.png'

let all_product = [
      {
            id: 1,
            name: "Kurti",
            category: "women",
            image: kurti,
            new_price: 50.0,
            old_price: 80.5
        },
    
    { id: 2, name: "Jeans", category: "women", image:jeans, new_price: 60.0, old_price: 90.5 },
    { id: 3, name: "Saree", category: "women", image:saree, new_price: 75.0, old_price: 120.0 },
    { id: 4, name: "Jacket", category: "women", image: jacket, new_price: 90.0, old_price: 140.0 },
    { id: 5, name: "T-Shirt", category: "men", image: p1_img, new_price: 45.0, old_price: 70.0 },
    { id: 6, name: "Dress", category: "women", image: p5_img, new_price: 85.0, old_price: 130.0 },
    { id: 7, name: "Hoodie", category: "men", image: p6_img, new_price: 95.0, old_price: 150.0 },
    { id: 8, name: "Leggings", category: "women", image: p7_img, new_price: 55.0, old_price: 100.0 },
    { id: 9, name: "Shirt", category: "men", image: p8_img, new_price: 70.0, old_price: 110.0 },
    { id: 10, name: "Jumpsuit", category: "women", image: p9_img, new_price: 88.0, old_price: 135.0 },
    { id: 11, name: "Sweater", category: "men", image: p10_img, new_price: 92.0, old_price: 145.0 },
    { id: 12, name: "Gown", category: "women", image: p11_img, new_price: 99.0, old_price: 160.0 },

    { id: 13, name: "Shorts", category: "men", image: men7, new_price: 40.0, old_price: 65.0 },
    { id: 14, name: "Top", category: "women", image: women7, new_price: 52.0, old_price: 85.0 },
    { id: 15, name: "Kurta", category: "men", image: men8, new_price: 78.0, old_price: 115.0 },
    { id: 16, name: "Skirt", category: "women", image:women8, new_price: 73.0, old_price: 110.0 },

    { id: 21, name: "Denim Shirt", category: "kid", image: kid1, new_price: 85.0, old_price: 140.0 },
   
    { id: 23, name: "Cargo Pants", category: "kid", image:kid2 , new_price: 88.0, old_price: 130.0 },
    
    { id: 25, name: "Trousers", category: "kid", image:kid3, new_price: 76.0, old_price: 120.0 },
    { id: 27, name: "Tank Top", category: "kid", image: kid4, new_price: 49.0, old_price: 80.0 },
   
    { id: 29, name: "Formal Pants", category: "kid", image:kid5, new_price: 98.0, old_price: 160.0 },

    { id: 31, name: "Leather Jacket", category: "kid", image: kid6, new_price: 150.0, old_price: 250.0 },

    { id: 33, name: "Gym Shorts", category: "kid", image: kid7, new_price: 55.0, old_price: 90.0 },
  
    { id:35, name: "Casual Blazer", category: "kid", image: kid8, new_price: 105.0, old_price: 170.0 },
    
]

export default all_product;