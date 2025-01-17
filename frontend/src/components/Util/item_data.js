const itemData = [
    {
    id: 1,
    name: 'Beginner Sword', 
    description: 'The blade itself is fairly simple. No markings can be found, the blade needs no decorations, it only needs to be strong and sharp.', 
    attack: 5, 
    health: 0,
    rarity: 1,
    price: 5, 
    imageUrl: 'https://aviquest-dev.s3.amazonaws.com/Items/Item__01.png'
    },
    {
    id: 2,
    name: 'Curved Sword', 
    description: 'A fairly short, thin, curved blade made of iron is held by a grip wrapped in low-cost, leather.', 
    attack: 5,
    health: 0, 
    rarity: 1, 
    price: 10,
    imageUrl: 'https://aviquest-dev.s3.amazonaws.com/Items/Item__03.png'
    },
    {
    id: 3,
    name: 'Maple Long Sword', 
    description: 'The blade is broken into several pieces, currently has a blunt edge, and has no marks or engravings.It has a practical guard, a leather-bound grip, and a pommel decorated with skulls.It is very heavy, is well balanced and is not to be underestimated.The scabbard is made of wood with steel trimmings.', 
    attack: 7, 
    health: 0, 
    rarity: 2, 
    price: 15,
    imageUrl: 'https://aviquest-dev.s3.amazonaws.com/Items/Item_10.png'
    },
    {
    id: 4,
    name: 'Iron Headed Spear', 
    description: 'It was created as a decoration. The knife-like, uneven head is bound to the shaft with a highly decorated metal sleeve. The 6ft/1.8m shaft is made of low quality ebony (dense, strong dark wood) and is elaborately engraved.', 
    attack: 6, 
    health: 0, 
    rarity: 2, 
    price: 6,
    imageUrl: 'https://aviquest-dev.s3.amazonaws.com/Items/Item_04.png'
    },
    {
    id: 5,
    name: 'Javelin', 
    description: 'The knife-like, very blunt head is securely bound to the shaft with a simple metal ring.', 
    attack: 8, 
    health: 0, 
    rarity: 2, 
    price: 6,
    imageUrl: 'https://aviquest-dev.s3.amazonaws.com/Items/Item__11.png'
    },
    {
    id: 6,
    name: 'Crystal Lance', 
    description: 'The triangular, exceptionally sharp head is securely bound to the shaft with a decorative ring.', 
    attack: 10, 
    health: 0, 
    rarity: 3, 
    price: 15,
    imageUrl: 'https://aviquest-dev.s3.amazonaws.com/Items/Item__09.png'
    },
    {
    id: 7,
    name: 'Wooden Bow', 
    description: 'This elegant flatbow has been admirably constructed of exceptional red elm. Its string is made from exceptional hemp, its a common material around these parts of the world.', 
    attack: 6, 
    health: 0, 
    rarity: 1, 
    price: 5,
    imageUrl: 'https://aviquest-dev.s3.amazonaws.com/Items/Item__16.png'
    },
    {
    id: 8,
    name: 'Juniper Bow', 
    description: 'This well-made recurve crossbow has been cleverly constructed of excellent juniper wood. Its string is made from deluxe silk, its a common material around these parts of the world.', 
    attack: 10, 
    health: 0, 
    rarity: 2, 
    price: 10,
    imageUrl: 'https://aviquest-dev.s3.amazonaws.com/Items/Item__18.png'
    },
    {
    id: 9,
    name: 'Iron Sheild', 
    description: 'Its clear this shield stood the tests of battle. Scores and scratches made by who knows what leave echos of both glory and death, but one this is for sure: theres no stopping now.', 
    attack: 0,
    health: 8, 
    rarity: 2, 
    price: 5,
    imageUrl: 'https://aviquest-dev.s3.amazonaws.com/Items/Item_34.png'
    },
    {
    id: 10,
    name: 'Gold Trimmed Sheild', 
    description: 'The shields edges are augmented with broad metal lining and have been decorated with decorative paintwork. Its center is decorated with complex metalwork and elaborate paintwork.', 
    attack: 0,
    health: 10, 
    rarity: 3, 
    price: 15,
    imageUrl: 'https://aviquest-dev.s3.amazonaws.com/Items/Item_35.png'
    },
    {
    id: 11,
    name: 'Iron Armor', 
    description: 'The upper arms are protected by squared, half covering rerebraces which sit nicely under the shoulderplates.', 
    attack: 0,
    health: 15, 
    rarity: 2, 
    price: 10,
    imageUrl: 'https://aviquest-dev.s3.amazonaws.com/Items/Item_42.png'
    },
    {
    id: 12,
    name: 'Scale Armor', 
    description: 'The breastplate is made from many layers of smaller metal pieces, mimicking the scales of a fish. It covers everything from the neck down and ending at the groin.', 
    attack: 0,
    health: 20, 
    rarity: 3, 
    price: 25,
    imageUrl: 'https://aviquest-dev.s3.amazonaws.com/Items/Item_43.png'
    },
    {
    id: 13,
    name: 'Infantry Helm', 
    description: 'A pointed helm with a squared, v-shaped opening leaving the eyes, nose and mouth exposed.', 
    attack: 0,
    health: 8, 
    rarity: 1, 
    price: 8,
    imageUrl: 'https://aviquest-dev.s3.amazonaws.com/Items/Item_37.png'
    },
    {
    id: 14,
    name: 'General Winged Helm', 
    description: 'A helm with adorned wings on the side, 2 sockets open for eyes, with no opening around the rest of the head.', 
    attack: 0,
    health: 12, 
    rarity: 3, 
    price: 20,
    imageUrl: 'https://aviquest-dev.s3.amazonaws.com/Items/Item_38.png'
    },
    {
    id: 15,
    name: 'Platinum Knife', 
    description: 'The exceptionally heavy 8 inch/20cm blade has a exceptionally sharp edge, and has delicate patterns etched across it. It has no guard, a diamond encrusted grip, and a square pommel. It has no scabbard.', 
    attack: 20,
    health: 0, 
    rarity: 3, 
    price: 25,
    imageUrl: 'https://aviquest-dev.s3.amazonaws.com/Items/Item_01.png'
    },
    {
    id: 16,
    name: 'Maple Wand', 
    description: 'The wand measures 9 inches/23 cm and has an overall ordinary look. The particular strand of Hazel Wood used in this wand is not very common, which increases the price of the wand and fairy wing is quite rare as well, resulting in a very valuable wand.', 
    attack: 15,
    health: 0, 
    rarity: 2, 
    price: 15,
    imageUrl: 'https://aviquest-dev.s3.amazonaws.com/Items/Item_30.png'
    },
    {
    id: 17,
    name: 'Steel Ring', 
    description: 'plain steel band, dented as if by some great force, the initials F.T. are carved into it', 
    attack: 2,
    health: 1, 
    rarity: 1, 
    price: 25,
    imageUrl: 'https://aviquest-dev.s3.amazonaws.com/Items/Item_50.png'
    },
    {
    id: 18,
    name: 'Sapphire Ring', 
    description: 'brilliant blue ring with flecks of yellow across the surface', 
    attack: 5,
    health: 5, 
    rarity: 3, 
    price: 35,
    imageUrl: 'https://aviquest-dev.s3.amazonaws.com/Items/Item_51.png'
    }
]

export default itemData;