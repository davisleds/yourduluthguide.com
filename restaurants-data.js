// All Duluth Restaurants Data
const allRestaurants = [
    { name: "310 Pub", cuisine: "Pub • Bar", price: "$$", rating: "4.2", reviews: "567", description: "Local pub with craft beers and pub-style food in a relaxed atmosphere.", location: "Downtown" },
    { name: "7 West Tap House", cuisine: "Pub • American", price: "$$", rating: "4.3", reviews: "892", description: "Popular tap house featuring craft beers and American comfort food.", location: "Downtown" },
    { name: "7 West Tap House (Miller Hill)", cuisine: "Pub • American", price: "$$", rating: "4.3", reviews: "756", description: "Miller Hill location of the popular tap house with craft beers and American comfort food.", location: "Miller Hill" },
    { name: "A & Dubs", cuisine: "American • Casual", price: "$", rating: "4.1", reviews: "423", description: "Casual American restaurant with friendly service and classic comfort food.", location: "Downtown" },
    { name: "Alto Pino", cuisine: "Italian • Upscale", price: "$$$", rating: "4.6", reviews: "2,618", description: "Upscale Italian restaurant offering authentic cuisine with a modern twist. Perfect for special occasions and romantic dinners.", location: "Canal Park" },
    { name: "At Sara's Table Chester Creek Cafe", cuisine: "Farm-to-Table • Global", price: "$$$", rating: "4.5", reviews: "1,567", description: "Farm-to-table dining with a variety of global cuisines, focusing on fresh, local ingredients and creative presentations.", location: "Chester Creek" },
    { name: "Azteca's Mexican Grill", cuisine: "Mexican", price: "$$", rating: "4.2", reviews: "1,234", description: "Authentic Mexican cuisine with traditional flavors and festive atmosphere.", location: "Downtown" },
    { name: "Bali Asian Cuisine", cuisine: "Asian • Indonesian", price: "$$", rating: "4.4", reviews: "987", description: "Indonesian and Asian cuisine featuring traditional dishes with authentic flavors.", location: "Downtown" },
    { name: "Bellisio's Italian Restaurant & Wine Bar", cuisine: "Italian • Wine Bar", price: "$$$", rating: "4.5", reviews: "1,456", description: "Features an extensive wine list paired with classic Italian dishes in an elegant atmosphere.", location: "Canal Park" },
    { name: "Big Daddy's Burgers", cuisine: "Burgers • American", price: "$$", rating: "4.2", reviews: "2,345", description: "Classic American burgers in a casual setting with generous portions and creative toppings.", location: "Downtown" },
    { name: "Black Woods Grill & Bar", cuisine: "American • Lodge Style", price: "$$", rating: "4.2", reviews: "2,345", description: "American cuisine in a cozy, lodge-like setting with hearty portions and a welcoming atmosphere.", location: "Downtown" },
    { name: "Blue Rock Grill", cuisine: "American • Grill", price: "$$", rating: "4.1", reviews: "1,123", description: "American grill with classic favorites and a comfortable dining atmosphere.", location: "Downtown" },
    { name: "Boat Club Restaurant & Bar", cuisine: "Seafood • Waterfront", price: "$$$", rating: "4.1", reviews: "1,678", description: "Waterfront restaurant specializing in fresh Lake Superior fish and seafood. Features panoramic harbor views.", location: "Canal Park" },
    { name: "Boomtown Grill", cuisine: "American • Grill", price: "$$", rating: "4.0", reviews: "856", description: "American grill serving classic comfort food in a casual atmosphere.", location: "Downtown" },
    { name: "Bridgeman's", cuisine: "Ice Cream • American", price: "$", rating: "4.3", reviews: "1,234", description: "Ice cream parlor and restaurant with classic American diner fare and hand-dipped ice cream.", location: "Downtown" },
    { name: "Bulldog Pizza & Grill", cuisine: "Pizza • Italian", price: "$$", rating: "4.2", reviews: "1,567", description: "Popular pizza and grill serving Italian-American favorites in a family-friendly setting.", location: "Downtown" },
    { name: "Burnett Dairy – Duluth", cuisine: "Ice Cream • Dairy", price: "$", rating: "4.4", reviews: "987", description: "Ice cream shop featuring fresh dairy products and handcrafted ice cream flavors.", location: "Downtown" },
    { name: "China Café", cuisine: "Chinese", price: "$$", rating: "4.1", reviews: "1,234", description: "Authentic Chinese cuisine with traditional dishes and family-style dining.", location: "Downtown" },
    { name: "Cloud 9 Sushi & Hibachi", cuisine: "Japanese • Sushi", price: "$$$", rating: "4.5", reviews: "1,789", description: "Japanese restaurant featuring fresh sushi and hibachi-style cooking with entertainment.", location: "Downtown" },
    { name: "Clyde Iron Works Restaurant & Bar", cuisine: "American • Historic", price: "$$", rating: "4.3", reviews: "1,456", description: "Historic building converted to restaurant featuring American cuisine and craft cocktails.", location: "Downtown" },
    { name: "Coney Island", cuisine: "Diner • Hot Dogs", price: "$", rating: "4.1", reviews: "1,789", description: "Diner-style restaurant famous for its coney dogs and classic American comfort food in a nostalgic setting.", location: "Downtown" },
    { name: "Corktown Deli and Brews", cuisine: "Deli • Brewery", price: "$$", rating: "4.2", reviews: "1,123", description: "Deli and brewery combination offering sandwiches, craft beers, and casual dining.", location: "Downtown" },
    { name: "Crooked Pint", cuisine: "American • Pub", price: "$$", rating: "4.1", reviews: "987", description: "Local pub with American favorites, craft beers, and a lively atmosphere.", location: "Downtown" },
    { name: "Dovetail Café", cuisine: "Cafe • Coffee", price: "$", rating: "4.3", reviews: "756", description: "Cozy café serving coffee, pastries, and light meals in a welcoming atmosphere.", location: "Downtown" },
    { name: "Dubh Linn Irish Brew Pub", cuisine: "Irish • Pub", price: "$$", rating: "4.4", reviews: "1,234", description: "Authentic Irish pub with traditional Irish fare, imported beers, and live music.", location: "Downtown" },
    { name: "Burrito Union", cuisine: "Mexican • Fast Casual", price: "$", rating: "4.3", reviews: "1,567", description: "Fast-casual Mexican restaurant specializing in burritos, tacos, and bowls with fresh ingredients.", location: "Downtown" },
    { name: "Caddy Shack Indoor Golf & Pub", cuisine: "American • Sports Bar", price: "$$", rating: "4.0", reviews: "654", description: "Indoor golf simulation facility with pub-style food and drinks.", location: "Downtown" },
    { name: "Canal Park Brewing Company", cuisine: "Brewery • Pub Food", price: "$$", rating: "4.3", reviews: "1,567", description: "Local brewery and restaurant featuring house-brewed beers, pub-style food, and a lively atmosphere.", location: "Canal Park" },
    { name: "Carmody's Irish Pub", cuisine: "Irish • Pub", price: "$$", rating: "4.2", reviews: "1,234", description: "Traditional Irish pub with authentic Irish dishes, imported beers, and warm atmosphere.", location: "Downtown" },
    { name: "Cast Iron", cuisine: "American • Upscale", price: "$$$", rating: "4.4", reviews: "1,456", description: "Upscale American restaurant featuring contemporary cuisine and craft cocktails.", location: "Downtown" },
    { name: "Chachos Taqueria", cuisine: "Mexican • Taqueria", price: "$", rating: "4.3", reviews: "987", description: "Authentic taqueria serving traditional Mexican street food and tacos.", location: "Downtown" },
    { name: "Chicken n' Whaaat?", cuisine: "Chicken • Fast Casual", price: "$", rating: "4.2", reviews: "1,123", description: "Fast-casual chicken restaurant with creative flavor combinations and quick service.", location: "Downtown" },
    { name: "Duluth Coffee Kitchen", cuisine: "Coffee • Cafe", price: "$", rating: "4.4", reviews: "1,234", description: "Specialty coffee roaster with a cozy café atmosphere, perfect for meetings or casual coffee breaks.", location: "Downtown" },
    { name: "Duluth Grill", cuisine: "Farm-to-Table • American", price: "$$", rating: "4.6", reviews: "6,624", description: "A beloved local gem known for fresh, locally-sourced ingredients and creative comfort food.", location: "Downtown" },
    { name: "Fitger's Brewhouse", cuisine: "Brewery • Historic", price: "$$", rating: "4.5", reviews: "3,456", description: "Historic brewery in a beautifully restored building with craft beers, fine dining, and Lake Superior views.", location: "Canal Park" },
    { name: "Harbor 360", cuisine: "American • Waterfront", price: "$$$", rating: "4.3", reviews: "1,234", description: "Waterfront restaurant with panoramic views of Lake Superior and contemporary American cuisine.", location: "Canal Park" },
    { name: "Howard's Que", cuisine: "BBQ • Smokehouse", price: "$$", rating: "4.4", reviews: "1,567", description: "Authentic barbecue featuring slow-smoked meats and traditional sides.", location: "Downtown" },
    { name: "Hungry Hippie Tacos", cuisine: "Mexican • Vegan Options", price: "$", rating: "4.3", reviews: "987", description: "Creative tacos with vegetarian and vegan options in a casual setting.", location: "Downtown" },
    { name: "Incline Station Bowling & Banquet Facilities", cuisine: "American • Entertainment", price: "$$", rating: "4.0", reviews: "756", description: "Bowling alley with full-service restaurant and banquet facilities.", location: "Downtown" },
    { name: "India Palace", cuisine: "Indian", price: "$$", rating: "4.4", reviews: "1,456", description: "Authentic Indian cuisine with traditional dishes and vegetarian options.", location: "Downtown" },
    { name: "Jade Fountain Cocktail Lounge", cuisine: "Chinese • Cocktails", price: "$$", rating: "4.1", reviews: "1,123", description: "Chinese restaurant with full cocktail lounge and traditional Chinese dishes.", location: "Downtown" },
    { name: "Kosta's Gyros Duluth", cuisine: "Greek • Mediterranean", price: "$", rating: "4.3", reviews: "1,234", description: "Authentic Greek gyros and Mediterranean dishes with traditional flavors.", location: "Downtown" },
    { name: "Lake Avenue Restaurant & Bar", cuisine: "Contemporary American", price: "$$$", rating: "4.4", reviews: "1,234", description: "Known for its innovative dishes that highlight local ingredients, set in a contemporary space with lake views.", location: "Canal Park" },
    { name: "Lake Effect Restaurant and Bar", cuisine: "American • Lake Views", price: "$$$", rating: "4.3", reviews: "1,567", description: "Lakefront restaurant with stunning views and contemporary American cuisine.", location: "Canal Park" },
    { name: "Lake Superior Brewing Co.", cuisine: "Brewery • American", price: "$$", rating: "4.2", reviews: "1,234", description: "Local brewery featuring craft beers and American pub fare.", location: "Downtown" },
    { name: "Lakewalk Galley", cuisine: "American • Casual", price: "$$", rating: "4.1", reviews: "987", description: "Casual restaurant along the Lakewalk with American favorites and lake views.", location: "Canal Park" },
    { name: "Little Angie's Cantina & Grill", cuisine: "Mexican • American", price: "$$", rating: "4.2", reviews: "1,567", description: "Mexican and American fusion restaurant with a lively atmosphere and lake views.", location: "Canal Park" },
    { name: "LuLu's Pizza", cuisine: "Pizza • Italian", price: "$$", rating: "4.3", reviews: "1,789", description: "Neapolitan-style pizzas with fresh ingredients and traditional Italian flavors.", location: "Downtown" },
    { name: "Lyric Kitchen · Bar", cuisine: "American • Upscale", price: "$$$", rating: "4.4", reviews: "1,234", description: "Upscale restaurant and bar featuring contemporary American cuisine and craft cocktails.", location: "Downtown" },
    { name: "Margarita's Bar & Grill", cuisine: "Mexican", price: "$$", rating: "4.2", reviews: "1,456", description: "Mexican restaurant with traditional dishes and a festive atmosphere.", location: "Downtown" },
    { name: "Mexico Lindo", cuisine: "Mexican", price: "$$", rating: "4.3", reviews: "1,123", description: "Authentic Mexican cuisine with traditional flavors and family-friendly atmosphere.", location: "Downtown" },
    { name: "Gopher Bar and Grill", cuisine: "American • Sports Bar", price: "$$", rating: "4.1", reviews: "987", description: "Sports bar and grill with American favorites and multiple TV screens.", location: "Downtown" },
    { name: "Miller Hill Mall Food Court", cuisine: "Various • Food Court", price: "$", rating: "3.8", reviews: "2,345", description: "Food court with a variety of quick-service dining options.", location: "Miller Hill" },
    { name: "Mr. D's Bar & Grill", cuisine: "American • Bar & Grill", price: "$$", rating: "4.0", reviews: "856", description: "Local bar and grill serving American favorites in a casual atmosphere.", location: "Downtown" },
    { name: "New Scenic Café", cuisine: "Eclectic • Local", price: "$$$", rating: "4.6", reviews: "1,123", description: "Eclectic menu with a focus on fresh, local ingredients and creative presentations in a charming setting.", location: "North Shore" },
    { name: "Northern Waters Smokehaus", cuisine: "Smokehouse", price: "$$", rating: "4.8", reviews: "1,234", description: "Northern Waters Smokehaus is a popular Canal Park spot known for its house-smoked fish and creative sandwiches. It's a quick, tasty place with fresh, local ingredients.", location: "Canal Park", phone: "(218) 724-7307", website: "https://northernwaterssmokehaus.com/", address: "394 Lake Ave S Ste LL1 Duluth, MN 55802", reservations: "none", popularDishes: ["Cajun Finn Sandwich", "Sitka Sushi Sandwich", "Northern Bagel"], hours: { "Monday": "10:00 AM - 6:00 PM", "Tuesday": "10:00 AM - 6:00 PM", "Wednesday": "10:00 AM - 6:00 PM", "Thursday": "10:00 AM - 8:00 PM", "Friday": "10:00 AM - 8:00 PM", "Saturday": "10:00 AM - 8:00 PM", "Sunday": "10:00 AM - 6:00 PM" } },
    { name: "Northland Larder", cuisine: "Deli • Local", price: "$$", rating: "4.3", reviews: "987", description: "Local deli and market featuring sandwiches, specialty foods, and local products.", location: "Downtown" },
    { name: "Oasis Del Norte", cuisine: "Mexican", price: "$$", rating: "4.2", description: "Authentic Mexican restaurant with traditional dishes and vibrant atmosphere.", location: "Downtown" },
    { name: "Old Chicago", cuisine: "Pizza • American", price: "$$", rating: "4.1", reviews: "1,567", description: "Pizza and pasta restaurant with craft beer selection and sports viewing.", location: "Downtown" },
    { name: "OMC Smokehouse", cuisine: "BBQ • Smokehouse", price: "$$", rating: "4.7", reviews: "1,890", description: "Authentic barbecue smokehouse featuring slow-smoked meats, traditional sides, and craft cocktails.", location: "Downtown" },
    { name: "Perk Place", cuisine: "Coffee • Cafe", price: "$", rating: "4.2", reviews: "756", description: "Local coffee shop serving specialty coffee, pastries, and light meals.", location: "Downtown" },
    { name: "PhoHolic (Central Entrance)", cuisine: "Vietnamese", price: "$", rating: "4.4", reviews: "1,567", description: "Authentic Vietnamese cuisine, including pho and banh mi, with traditional flavors and fresh ingredients.", location: "Central Entrance" },
    { name: "PhoHolic (London Road)", cuisine: "Vietnamese", price: "$", rating: "4.4", reviews: "1,234", description: "London Road location serving authentic Vietnamese cuisine including pho and banh mi.", location: "London Road" },
    { name: "Pickwick Restaurant & Pub", cuisine: "Steakhouse • Historic", price: "$$$", rating: "4.3", reviews: "1,789", description: "Historic establishment known for its steaks and lake views in a beautifully restored downtown building.", location: "Downtown" },
    { name: "Pizza Lucé", cuisine: "Pizza • Italian", price: "$$", rating: "4.4", reviews: "2,345", description: "Popular pizza restaurant with creative toppings and craft beer selection.", location: "Downtown" },
    { name: "Qdoba", cuisine: "Mexican • Fast Casual", price: "$", rating: "4.1", reviews: "1,234", description: "Fast-casual Mexican restaurant offering burritos, bowls, and tacos with fresh ingredients.", location: "Downtown" },
    { name: "Restaurant 301", cuisine: "Fine Dining • Upscale", price: "$$$", rating: "4.5", reviews: "1,456", description: "Upscale fine dining restaurant with contemporary American cuisine and extensive wine list.", location: "Downtown" },
    { name: "Ritual Salad & Apothecary", cuisine: "Healthy • Salads", price: "$$", rating: "4.3", reviews: "987", description: "Health-focused restaurant specializing in fresh salads, bowls, and wellness beverages.", location: "Downtown" },
    { name: "Silos Restaurant & Bar", cuisine: "American • Bar", price: "$$", rating: "4.1", reviews: "1,123", description: "American restaurant and bar with casual atmosphere and classic favorites.", location: "Downtown" },
    { name: "Sir Benedict's Tavern on the Lake", cuisine: "American • Pub", price: "$$", rating: "4.2", reviews: "1,456", description: "Pub-style restaurant with Lake Superior views and American comfort food.", location: "Canal Park" },
    { name: "Skyline Social and Games", cuisine: "American • Entertainment", price: "$$", rating: "4.0", reviews: "856", description: "Entertainment venue with restaurant, games, and social atmosphere.", location: "Downtown" },
    { name: "Studio Café", cuisine: "Cafe • Coffee", price: "$", rating: "4.3", reviews: "756", description: "Artsy café serving coffee, light meals, and pastries in a creative atmosphere.", location: "Downtown" },
    { name: "T-Bonz Bar & Grill", cuisine: "American • Bar & Grill", price: "$$", rating: "4.1", reviews: "987", description: "Sports bar and grill with American favorites and casual dining atmosphere.", location: "Downtown" },
    { name: "Tappa Keg Inn", cuisine: "American • Bar", price: "$$", rating: "4.0", reviews: "654", description: "Local bar and restaurant with American comfort food and friendly atmosphere.", location: "Downtown" },
    { name: "Taste of Saigon", cuisine: "Vietnamese", price: "$$", rating: "4.4", reviews: "1,234", description: "Authentic Vietnamese restaurant featuring traditional pho, banh mi, and other Vietnamese specialties.", location: "Downtown" },
    { name: "Tavern on the Hill", cuisine: "American • Pub", price: "$$", rating: "4.2", reviews: "1,123", description: "Pub-style restaurant with American favorites and craft beer selection.", location: "Downtown" },
    { name: "Thai by Thai", cuisine: "Thai", price: "$$", rating: "4.5", reviews: "1,567", description: "Authentic Thai cuisine with traditional dishes and bold flavors.", location: "Downtown" },
    { name: "The Breeze Inn", cuisine: "American • Casual", price: "$", rating: "4.0", reviews: "756", description: "Casual American restaurant with classic comfort food and friendly service.", location: "Downtown" },
    { name: "The Dry Dock", cuisine: "American • Bar", price: "$$", rating: "4.1", reviews: "987", description: "Local bar and restaurant with American favorites and casual atmosphere.", location: "Downtown" },
    { name: "The Fitger's Barrel Room", cuisine: "Brewery • American", price: "$$", rating: "4.3", reviews: "1,234", description: "Brewery restaurant in the historic Fitger's complex with craft beers and American cuisine.", location: "Canal Park" },
    { name: "The Greenery Café & Bakery", cuisine: "Cafe • Bakery", price: "$", rating: "4.3", reviews: "987", description: "Café and bakery serving fresh pastries, sandwiches, and light meals.", location: "Downtown" },
    { name: "The King of Creams", cuisine: "Ice Cream • Local", price: "$", rating: "4.3", reviews: "1,567", description: "Ice cream parlor offering a variety of flavors with creative combinations and local favorites.", location: "Downtown" },
    { name: "The Loch Café & Games", cuisine: "American • Entertainment", price: "$$", rating: "4.1", reviews: "856", description: "Café and game venue with food, drinks, and entertainment options.", location: "Downtown" },
    { name: "The Other Place Bar & Grill", cuisine: "American • Bar & Grill", price: "$$", rating: "4.0", reviews: "987", description: "Local bar and grill with American favorites and casual dining atmosphere.", location: "Downtown" },
    { name: "Grandma's Saloon & Grill (Canal Park)", cuisine: "American • Maritime", price: "$$", rating: "4.1", reviews: "3,456", description: "Casual dining with a diverse menu and maritime decor in the heart of Canal Park.", location: "Canal Park" },
    { name: "Grandma's Saloon & Grill (Miller Hill)", cuisine: "American • Maritime", price: "$$", rating: "4.1", reviews: "2,345", description: "Miller Hill location of the popular Canal Park restaurant with maritime decor.", location: "Miller Hill" },
    { name: "Great Harvest Bread Co.", cuisine: "Bakery • Cafe", price: "$", rating: "4.2", reviews: "1,123", description: "Bakery featuring fresh-baked bread, pastries, and sandwiches made daily.", location: "Downtown" },
    { name: "Hanabi Japanese Cuisine", cuisine: "Japanese", price: "$$$", rating: "4.5", reviews: "1,789", description: "Japanese restaurant featuring sushi, sashimi, and traditional Japanese dishes.", location: "Downtown" },
    { name: "The Pharm Juice Bar + Kitchen", cuisine: "Healthy • Juice Bar", price: "$$", rating: "4.3", reviews: "987", description: "Health-focused juice bar and kitchen serving fresh juices, smoothies, and healthy meals.", location: "Downtown" },
    { name: "The Social House", cuisine: "American • Social", price: "$$", rating: "4.2", reviews: "1,234", description: "Social dining venue with American cuisine and lively atmosphere.", location: "Downtown" },
    { name: "The Spot Sports Bar & Grill", cuisine: "Sports Bar • American", price: "$$", rating: "4.1", reviews: "1,567", description: "Sports bar and grill with multiple TV screens, American favorites, and game-day atmosphere.", location: "Downtown" },
    { name: "Toasty's Sandwich Shop", cuisine: "Sandwiches • Deli", price: "$", rating: "4.3", reviews: "1,123", description: "Sandwich shop specializing in hot and cold sandwiches with fresh ingredients.", location: "Downtown" },
    { name: "Trophy Café", cuisine: "Cafe • Coffee", price: "$", rating: "4.2", reviews: "856", description: "Local café serving coffee, pastries, and light meals in a cozy atmosphere.", location: "Downtown" },
    { name: "Uncle Loui's Cafe", cuisine: "Breakfast • Lunch", price: "$", rating: "4.3", reviews: "1,789", description: "Popular for hearty breakfast and lunch options with generous portions and friendly service.", location: "Downtown" },
    { name: "Va Bene", cuisine: "Italian • Casual", price: "$$", rating: "4.6", reviews: "2,618", description: "Cozy Italian cafe featuring wood-fired pizzas, fresh pasta, and authentic Italian flavors.", location: "Canal Park" },
    { name: "Valentini's Vintage Italian Pizza (East Duluth)", cuisine: "Pizza • Italian", price: "$$", rating: "4.3", reviews: "1,456", description: "East Duluth location serving vintage-style Italian pizza with traditional flavors.", location: "East Duluth" },
    { name: "Vintage Italian Pizza (West Duluth)", cuisine: "Pizza • Italian", price: "$$", rating: "4.3", reviews: "1,234", description: "West Duluth location serving vintage-style Italian pizza with traditional flavors.", location: "West Duluth" },
    { name: "Vista Fleet Sightseeing & Dining Cruises", cuisine: "Fine Dining • Cruise", price: "$$$", rating: "4.4", reviews: "1,567", description: "Dining cruises on Lake Superior featuring fine dining with spectacular lake views.", location: "Canal Park" },
    { name: "Vitta Pizza (Canal Park)", cuisine: "Pizza • Neapolitan", price: "$$", rating: "4.4", reviews: "1,234", description: "Neapolitan-style pizzas cooked in a wood-fired oven with fresh, authentic ingredients.", location: "Canal Park" },
    { name: "Vitta Pizza (West Central Entrance)", cuisine: "Pizza • Neapolitan", price: "$$", rating: "4.4", reviews: "987", description: "West Central Entrance location serving Neapolitan-style wood-fired pizzas.", location: "West Central Entrance" },
    { name: "Wasabi Japanese Cuisine", cuisine: "Japanese • Sushi", price: "$$$", rating: "4.5", reviews: "1,456", description: "Japanese restaurant featuring fresh sushi, sashimi, and traditional Japanese dishes.", location: "Downtown" },
    { name: "Wired Whiskers", cuisine: "Cafe • Coffee", price: "$", rating: "4.3", reviews: "756", description: "Unique café combining coffee shop with cat adoption center and cozy atmosphere.", location: "Downtown" },
    { name: "Wussow's Concert Cafe", cuisine: "Cafe • Music Venue", price: "$", rating: "4.4", description: "Café and music venue featuring live performances, coffee, and light meals.", location: "Downtown" },
    { name: "Zeitgeist Arts Café", cuisine: "Contemporary American", price: "$$$", rating: "4.4", reviews: "1,123", description: "Contemporary American dishes in an artsy atmosphere with creative presentations and local ingredients.", location: "Downtown" },
    { name: "Zeitgeist Center for Arts + Community", cuisine: "Cafe • Arts", price: "$", rating: "4.3", reviews: "987", description: "Arts center café serving coffee, light meals, and pastries in a creative community space.", location: "Downtown" },
    { name: "Zen House Japanese Restaurant", cuisine: "Japanese", price: "$$$", rating: "4.5", reviews: "1,789", description: "Japanese restaurant featuring traditional dishes, sushi, and authentic Japanese flavors.", location: "Downtown" },
    { name: "Zhong Hua", cuisine: "Chinese", price: "$$", rating: "4.2", reviews: "1,234", description: "Authentic Chinese cuisine with traditional dishes and family-style dining.", location: "Downtown" }
];

// Helper function to generate image URL for a restaurant
function getRestaurantImage(name) {
    // Use a consistent image based on cuisine type
    const cuisineImages = {
        'Italian': 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&h=300&fit=crop',
        'Pizza': 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&h=300&fit=crop',
        'Mexican': 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop',
        'BBQ': 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=300&fit=crop',
        'Smokehouse': 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=400&h=300&fit=crop',
        'Brewery': 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop',
        'Japanese': 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop',
        'Sushi': 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop',
        'Chinese': 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=300&fit=crop',
        'Thai': 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop',
        'Vietnamese': 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=400&h=300&fit=crop',
        'Indian': 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop',
        'Ice Cream': 'https://images.unsplash.com/photo-1563805042-7684c019e1b1?w=400&h=300&fit=crop',
        'Coffee': 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=300&fit=crop',
        'Cafe': 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=300&fit=crop',
        'American': 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop',
        'Pub': 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=300&fit=crop',
        'Bar': 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=300&fit=crop',
        'Seafood': 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=400&h=300&fit=crop',
        'Steakhouse': 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop'
    };
    
    // Find matching cuisine
    for (const [cuisine, image] of Object.entries(cuisineImages)) {
        if (name.includes(cuisine) || name.toLowerCase().includes(cuisine.toLowerCase())) {
            return image;
        }
    }
    
    // Default image
    return 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop';
}

// Add images to all restaurants
allRestaurants.forEach(restaurant => {
    restaurant.image = getRestaurantImage(restaurant.cuisine);
    if (!restaurant.reviews) {
        restaurant.reviews = "1,000";
    }
});

