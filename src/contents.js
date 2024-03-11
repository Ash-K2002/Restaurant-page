import lasagna from './images/pexels-anna-guerrero-4079520.jpg'
import spring from './images/pexels-nishant-patel-4105288.jpg'
import caprese from './images/pexels-gabriel-lima-15735986.jpg'

const img1= new Image();
img1.src= caprese;
const img2= new Image();
img2.src= lasagna;
const img3= new Image();
img3.src= spring;

const content={
    welcomeTitle: 'Welcome to Restaurant Nowhere',
    welcomeContent: `Indulge your senses in a culinary journey like no other at Restaurant Nowhere. Nestled in the heart of Nowhere City, our passion for flavor and commitment to excellence define every dish we serve.

    At Restaurant Nowhere, we believe in the magic of food to bring people together. Whether you're seeking an intimate dinner for two, a lively gathering with friends, or a memorable celebration, our warm and inviting ambiance sets the stage for unforgettable dining experiences.
    
    Explore our carefully curated menu featuring a fusion of global flavors, crafted with locally sourced ingredients and seasoned with creativity. From savory starters to decadent desserts, each dish tells a story of passion and dedication to culinary craftsmanship.
    
    Join us and savor the moment. From the first bite to the last, let us take you on a gastronomic adventure that delights the palate and nourishes the soul.
    
    We look forward to welcoming you to Restaurant Nowhere.
    `,

// specialities for home tab
    specialities: 
    [
    {
        name: 'Caprese Salad',
        description: 'A refreshing salad featuring slices of ripe tomatoes, fresh mozzarella cheese, and basil leaves, drizzled with extra virgin olive oil and balsamic glaze, perfect for a light and flavorful appetizer.',
        image: img1,
    },
    {
        name: 'Vegetable Lasagna',
        description: 'Layers of lasagna noodles, marinara sauce, ricotta cheese, and a medley of roasted vegetables such as zucchini, bell peppers, and spinach, baked to perfection with melted mozzarella cheese, providing a satisfying vegetarian option.',
        image: img2,
    },
    {
        name: 'Vegetable Spring Rolls',
        description: 'Crispy spring rolls filled with a savory mixture of shredded cabbage, carrots, mushrooms, and bean sprouts, seasoned with garlic, ginger, and soy sauce, offering a crunchy and flavorful appetizer.',
        image: img3,
    },
],


// menu items for menu tab
menu :[
    {
        category: 'Appetizers',
        items: [
            {
                name: 'Caprese Salad',
                description: 'Fresh mozzarella cheese, ripe tomatoes, and basil leaves drizzled with balsamic glaze.',
                price: 8.99
            },
            {
                name: 'Bruschetta',
                description: 'Toasted baguette slices topped with fresh tomatoes, basil, garlic, and olive oil.',
                price: 7.99
            },
            {
                name: 'Spinach Artichoke Dip',
                description: 'Creamy dip made with spinach, artichokes, and melted cheeses, served with crispy tortilla chips.',
                price: 9.99
            },
            {
                name: 'Crispy Calamari',
                description: 'Tender calamari rings lightly battered and fried until golden brown, served with marinara sauce.',
                price: 10.99
            },
            {
                name: 'Stuffed Mushrooms',
                description: 'Mushrooms stuffed with a savory mixture of breadcrumbs, garlic, herbs, and cheese, baked until golden.',
                price: 8.99
            }
        ]
    },
    {
        category: 'Salads',
        items: [
            {
                name: 'Greek Salad',
                description: 'Fresh mixed greens topped with tomatoes, cucumbers, red onions, Kalamata olives, and feta cheese, served with Greek dressing.',
                price: 9.99
            },
            {
                name: 'Caesar Salad',
                description: 'Crisp romaine lettuce tossed with garlic croutons, Parmesan cheese, and Caesar dressing.',
                price: 8.99
            },
            {
                name: 'Mediterranean Quinoa Salad',
                description: 'Nutrient-rich quinoa mixed with cherry tomatoes, cucumbers, red onions, bell peppers, Kalamata olives, and feta cheese, dressed in a lemon vinaigrette.',
                price: 11.99
            },
            {
                name: 'Asian Chicken Salad',
                description: 'Grilled chicken breast served over mixed greens with mandarin oranges, sliced almonds, crispy noodles, and sesame ginger dressing.',
                price: 12.99
            },
            {
                name: 'Caprese Skewers',
                description: 'Skewers of cherry tomatoes, fresh mozzarella cheese, and basil leaves drizzled with balsamic glaze.',
                price: 9.99
            }
        ]
    },
    {
        category: 'Main Courses',
        items: [
            {
                name: 'Grilled Salmon',
                description: 'Fresh salmon fillet grilled to perfection and served with roasted vegetables and lemon herb butter sauce.',
                price: 16.99
            },
            {
                name: 'Lemon Herb Chicken',
                description: 'Grilled chicken breast marinated in lemon, garlic, and herbs, served with rice pilaf and steamed broccoli.',
                price: 14.99
            },
            {
                name: 'Vegetable Stir-Fry',
                description: 'Mixed vegetables stir-fried with tofu or chicken in a flavorful soy ginger sauce, served over steamed rice.',
                price: 13.99
            },
            {
                name: 'Shrimp Scampi',
                description: 'Succulent shrimp sautéed in garlic, white wine, and butter sauce, served over linguine pasta.',
                price: 17.99
            },
            {
                name: 'Eggplant Parmesan',
                description: 'Breaded slices of eggplant baked with marinara sauce and melted mozzarella cheese, served with spaghetti marinara.',
                price: 13.99
            }
        ]
    },
    {
        category: 'Desserts',
        items: [
            {
                name: 'Tiramisu',
                description: 'Layers of espresso-soaked ladyfingers, mascarpone cheese, and cocoa powder.',
                price: 7.99
            },
            {
                name: 'New York Cheesecake',
                description: 'Creamy cheesecake on a graham cracker crust, topped with strawberry compote.',
                price: 8.99
            },
            {
                name: 'Chocolate Lava Cake',
                description: 'Warm chocolate cake with a molten chocolate center, served with vanilla ice cream.',
                price: 9.99
            },
            {
                name: 'Fruit Tart',
                description: 'Butter pastry crust filled with pastry cream and topped with assorted fresh fruits.',
                price: 7.99
            },
            {
                name: 'Key Lime Pie',
                description: 'Tangy key lime filling in a graham cracker crust, topped with whipped cream.',
                price: 6.99
            }
        ]
    }
],

aboutContent :[
    {
        title: "Our Story",
        content: "Founded in Neverary, Restaurant Nowhere began as a vision to redefine the dining scene in Nowhere City. With a focus on fresh, locally-sourced ingredients and expert culinary craftsmanship, we set out to create a menu that celebrates flavors from around the world while highlighting the best of regional cuisine."
    },
    {
        title: "Our Philosophy",
        content: "At Restaurant Nowhere, we believe in the power of food to bring people together. Whether you're joining us for an intimate dinner, a celebration with friends and family, or a casual meal with colleagues, our goal is to provide a welcoming atmosphere where every guest feels valued and appreciated."
    },
    {
        title: "Our Team",
        content: "Behind every exceptional dining experience is a dedicated team of professionals. Our chefs, sommeliers, and servers are passionate about their craft and committed to ensuring that every dish that leaves our kitchen is prepared with care and attention to detail."
    },
    {
        title: "Our Commitment to Sustainability",
        content: "We are committed to sustainability and environmental responsibility. From sourcing ingredients from local farmers and producers to minimizing waste in our kitchen operations, we strive to minimize our ecological footprint and support the health of our planet."
    },
    {
        title: "Community Engagement",
        content: "At Restaurant Nowhere, we believe in giving back to the community that has supported us. We regularly participate in local charity events, food drives, and community initiatives to make a positive impact in Nowhere City and beyond."
    },
    {
        title: "Join Us",
        content: "We invite you to join us at Restaurant Nowhere and experience the magic of our culinary creations. Whether you're a longtime patron or visiting us for the first time, we look forward to welcoming you and making your dining experience truly memorable."
    }
],


}

export default content;