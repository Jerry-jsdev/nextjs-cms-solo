var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  const products =[
    {id:1, name:"Nike Air Max", 
        description:"Lace up and feel the legacy. Produced at the intersection of art, music and culture, this champion running shoe helped define the ‘90s.",
        category:"Men's Shoes",
        image:"/images/Nike Air Max.webp",
        price: 199.99
    },
    {id:2, name:"Nike Man", 
        description:"Lace up and feel the legacy. Produced at the intersection of art, music and culture, this champion running shoe helped define the ‘90s.",
        category:"Men's Shoes",
        image:"/images/Nike Man.webp",
        price: 159.99
    },
    {id:3, name:"Nike Pegasus",
        description:"Lace up and feel the legacy. Produced at the intersection of art, music and culture, this champion running shoe helped define the ‘90s.",
        category:"Men's Shoes",
        image:"/images/Nike Pegasus.webp",
        price: 129.99
    },
    {id:4, name:"Nike Womens Downshifter",
        description:"Lace up and feel the legacy. Produced at the intersection of art, music and culture, this champion running shoe helped define the ‘90s.",
        category:"Women's Shoes",
        image:"/images/Nike Womens Downshifter.webp",
        price: 169
    },
    {id:5, name:"Nike Womens Invincible",
        description:"Lace up and feel the legacy. Produced at the intersection of art, music and culture, this champion running shoe helped define the ‘90s.",
        category:"Women's Shoes",
        image:"/images/Nike Womens Invincible.webp",
        price: 299.99
    },
    {id:6, name:"Reebok",
        description:"Lace up and feel the legacy. Produced at the intersection of art, music and culture, this champion running shoe helped define the ‘90s.",
        category:"Men's Shoes",
        image:"/images/Reebok.jpg",
        price: 99.89
    },
    {id:7, name:"Reebok2",
        description:"Lace up and feel the legacy. Produced at the intersection of art, music and culture, this champion running shoe helped define the ‘90s.",
        category:"Men's Shoes",
        image:"/images/Reebok2.webp",
        price: 179.99
    },
    {id:8, name:"Skechers",
        description:"Lace up and feel the legacy. Produced at the intersection of art, music and culture, this champion running shoe helped define the ‘90s.",
        category:"Men's Shoes",
        image:"/images/Skechers.jpg",
        price: 299.99
    },
    {id:9, name:"Under Armour",
        description:"Lace up and feel the legacy. Produced at the intersection of art, music and culture, this champion running shoe helped define the ‘90s.",
        category:"Men's Shoes",
        image:"/images/Under Armour.webp",
        price: 89.99
    },
    {id:10, name:"Under Armour Hovr",
        description:"Lace up and feel the legacy. Produced at the intersection of art, music and culture, this champion running shoe helped define the ‘90s.",
        category:"Men's Shoes",
        image:"/images/Under Armour hovr.webp",
        price: 136.99
    },
    {id:11, name:"Adidas",
        description:"Lace up and feel the legacy. Produced at the intersection of art, music and culture, this champion running shoe helped define the ‘90s.",
        category:"Men's Shoes",
        image:"/images/adidas.webp",
        price: 179
    },
    {id:12, name:"Asic",
        description:"Lace up and feel the legacy. Produced at the intersection of art, music and culture, this champion running shoe helped define the ‘90s.",
        category:"Men's Shoes",
        image:"/images/Asics.jpg",
        price: 169.99
    },
    {id:13, name:"Asics Womens Gel",
        description:"Lace up and feel the legacy. Produced at the intersection of art, music and culture, this champion running shoe helped define the ‘90s.",
        category:"Women's Shoes",
        image:"/images/Asics Womens Gel.webp",
        price: 189.99
    },
    {id:14, name:"Asics Womens Gel 2",
        description:"Lace up and feel the legacy. Produced at the intersection of art, music and culture, this champion running shoe helped define the ‘90s.",
        category:"Women's Shoes",
        image:"/images/Asics Womens Gel 2.webp",
        price: 89.99
    },
    {id:15, name:"Asics Womens GT1000",
        description:"Lace up and feel the legacy. Produced at the intersection of art, music and culture, this champion running shoe helped define the ‘90s.",
        category:"Women's Shoes",
        image:"/images/Asics Womens GT1000.jpg",
        price: 129.99
    },
    {id:16, name:"Canterbury",
        description:"Lace up and feel the legacy. Produced at the intersection of art, music and culture, this champion running shoe helped define the ‘90s.",
        category:"Men's Shoes",
        image:"/images/Canterbury.webp",
        price: 139.99
    },
    {id:17, name:"New Balance",
        description:"Lace up and feel the legacy. Produced at the intersection of art, music and culture, this champion running shoe helped define the ‘90s.",
        category:"Men's Shoes",
        image:"/images/New Balance.jpg",
        price: 149.99
    }

    ]
    return res.status(200).json({ products });
  // get form database÷
});

module.exports = router;
