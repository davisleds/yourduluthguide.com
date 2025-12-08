// All Duluth Restaurants Data
const allRestaurants = [
    { name: "310 Pub", cuisine: "Sports Bar • Burgers • American", price: "$$", rating: "4.2", reviews: "567", description: "310 Pub is a casual neighborhood bar in Duluth known for its laid-back vibe, classic pub fare, and wide selection of drinks.", location: "Canal Park", phone: "(218) 464-4681", website: "https://310pub.com/", address: "310 S Lake Ave Duluth, MN 55802", reservations: "none", popularDishes: ["Boneless Chicken Wings", "Bacon Burger", "Meat Lovers Pizza"], niche_keywords: ["Best sports bar near Canal Park Minnesota", "310 Pub boneless chicken wings Canal Park", "Sports bar with lake view Canal Park"], hours: { "Monday": "3:00 PM - 2:00 AM", "Tuesday": "3:00 PM - 2:00 AM", "Wednesday": "3:00 PM - 2:00 AM", "Thursday": "11:00 AM - 2:00 AM", "Friday": "11:00 AM - 2:00 AM", "Saturday": "11:00 AM - 2:00 AM", "Sunday": "11:00 AM - 2:00 AM" } },
    { name: "7 West Tap House(Miller Hill)", cuisine: "Burgers • Tacos • Bar", price: "$$", rating: "4.3", reviews: "756", description: "7 West Tap House is award-winning for its Burgers, a huge rotating craft beer selection 40+, and generous, comfort-style fare in a friendly, beer-lover's pub environment.", location: "Duluth Heights", phone: "(218) 464-1879", website: "https://7westtaphouse.com/", address: "2510 Maple Grove Rd Duluth, MN 55811", reservations: "none", popularDishes: ["Taphouse Burger", "Avocado Chicken Tacos", "Sugar Daddy"], niche_keywords: ["Best burgers near Duluth Heights Minnesota", "7 West Tap House(Miller Hill) taphouse burger Duluth Heights", "Top rated burgers Duluth Heights"], hours: { "Monday": "11:00 AM - 9:00 PM", "Tuesday": "11:00 AM - 9:00 PM", "Wednesday": "11:00 AM - 9:00 PM", "Thursday": "11:00 AM - 9:00 PM", "Friday": "11:00 AM - 10:00 PM", "Saturday": "11:00 AM - 10:00 PM", "Sunday": "11:00 AM - 9:00 PM" } },
    { name: "Alto Pino", cuisine: "Mediterranean • Upscale • Cocktail bar", price: "$$$", rating: "4.6", reviews: "2,618", description: "Alto Pino is a Mediterranean-inspired restaurant in downtown Duluth offering seasonally driven shared dishes with flavors from across the Mediterranean.", location: "Downtown", phone: "(218) 464-1380", website: "https://www.altopinoduluth.com/", address: "7 W Superior St, Duluth, MN 55802", reservations: "Required", popularDishes: ["Eggplant Dolmas", "Lamb Ragu", "Squash Hummus"],
        niche_keywords: ["Best mediterranean near downtown Duluth Minnesota", "Alto Pino eggplant dolmas downtown Duluth", "Top rated mediterranean downtown Duluth"], hours: { "Monday": "Closed", "Tuesday": "Closed", "Wednesday": "5:00 PM - 9:00 PM", "Thursday": "5:00 PM - 9:00 PM", "Friday": "5:00 PM - 10:00 PM", "Saturday": "5:00 PM - 10:00 PM", "Sunday": "5:00 PM - 9:00 PM" } },
    { name: "At Sara's Table Chester Creek Cafe", cuisine: "Farm-to-Table • Brunch • American", price: "$$", rating: "4.5", reviews: "1,567", description: "At Sara's Table Chester Creek Cafe is a cozy, community-focused restaurant in Duluth that emphasizes sustainably sourced, handcrafted dishes made with local ingredients.", location: "Chester Park", phone: "(218) 724-6811", website: "https://www.astccc.net/", address: "1902 E 8th St, Duluth, MN 55812", reservations: "none", popularDishes: ["Cranberry Wild Rice French Toast", "Hippie Farm Breakfast", "Bison & Wild Rice Polenta"],
        niche_keywords: ["Best farm-to-table near Chester Park Minnesota", "At Sara's Table Chester Creek Cafe cranberry wild rice french toast Chester Park", "Best brunch Chester Park Minnesota"], hours: { "Monday": "8:00 AM - 9:00 PM", "Tuesday": "8:00 AM - 9:00 PM", "Wednesday": "8:00 AM - 9:00 PM", "Thursday": "8:00 AM - 9:00 PM", "Friday": "8:00 AM - 9:00 PM", "Saturday": "8:00 AM - 9:00 PM", "Sunday": "8:00 AM - 3:00 PM" } },
    { name: "Azteca's Mexican Grill", cuisine: "Mexican • Tequila Bar • Latin American", price: "$$", rating: "4.2", reviews: "1,234", description: "Azteca's Mexican Grill in Duluth is a lively spot with a large menu of authentic Mexican fare, a wide tequila selection, and upbeat atmosphere that makes every meal feel like a fiesta.", location: "Miller Hill", phone: "(218) 722-1038", website: "https://aztecasmexicangrillmn.com/", address: "2224 Mountain Shadow Dr, Duluth, MN 55811", reservations: "none", popularDishes: ["Fajita Trio", "Carne Asada y Mas", "Chimichanga"],
        niche_keywords: ["Best mexican near Miller Hill Minnesota", "Azteca's Mexican Grill fajita trio Miller Hill", "Best authentic mexican Miller Hill Minnesota"], hours: { "Monday": "11:00 AM - 9:00 PM", "Tuesday": "11:00 AM - 9:00 PM", "Wednesday": "11:00 AM - 9:00 PM", "Thursday": "11:00 AM - 9:00 PM", "Friday": "11:00 AM - 9:00 PM", "Saturday": "11:00 AM - 9:00 PM", "Sunday": "11:00 AM - 8:00 PM" } },
    { name: "Bali Asian Cuisine", cuisine: "Asian Fusion • Indonesian • Sushi", price: "$$", rating: "4.4", reviews: "987", description: "Bali Asian Cuisine in Duluth blends authentic Indonesian dishes with Asian-fusion sushi, ramen, and poke in a relaxed, flavorful setting.", location: "Lincoln Park", phone: "(218) 217-4266", website: "https://www.baliasiancuisine.com/", address: "1931 W Superior St, Duluth, MN 55806", reservations: "none", popularDishes: ["Nasi Goreng", "Tonkotsu Ramen", "Sweet Heat Poke Bowl"],
        niche_keywords: ["Best asian fusion near Lincoln Park Minnesota", "Bali Asian Cuisine nasi goreng Lincoln Park", "Top rated asian fusion Lincoln Park"], hours: { "Monday": "Closed", "Tuesday": "11:00 AM - 9:00 PM", "Wednesday": "11:00 AM - 9:00 PM", "Thursday": "11:00 AM - 9:00 PM", "Friday": "11:00 AM - 9:00 PM", "Saturday": "11:00 AM - 9:00 PM", "Sunday": "12:00 PM - 8:00 PM" } },
    { name: "Bellisio's Italian Restaurant & Wine Bar", cuisine: "Italian • Wine Bar • Upscale", price: "$$$", rating: "4.5", reviews: "1,456", description: "Bellisio's is an elegant, award-winning restaurant in Duluth's Canal Park known for its high-quality pasta, seafood, steaks, and an extensive wine list.", location: "Canal Park", phone: "(218) 727-4921", website: "http://www.bellisios.com/", address: "405 S Lake Ave, Duluth, MN 55802", reservations: "Recommended", popularDishes: ["Fettuccine Alfredo", "Lobscargot", "Chicken Marsala"],
        niche_keywords: ["Best italian near Canal Park Minnesota", "Bellisio's Italian Restaurant & Wine Bar fettuccine alfredo Canal Park", "italian with lake view Canal Park"], hours: { "Monday": "4:00 PM - 8:30 PM", "Tuesday": "Closed", "Wednesday": "4:00 PM - 8:30 PM", "Thursday": "4:00 PM - 8:30 PM", "Friday": "4:00 PM - 9:30 PM", "Saturday": "4:00 PM - 9:30 PM", "Sunday": "4:00 PM - 8:30 PM" } },
    { name: "Big Daddy's Burgers", cuisine: "Burgers • Breakfast • Fast Food", price: "$", rating: "4.2", reviews: "2,345", description: "Big Daddy's Burgers is a classic Duluth diner-style burger joint known for its fresh, never-frozen patties, giant challenge burgers, hearty breakfast options, and friendly, casual vibe.", location: "Piedmont", phone: "(218) 296-6903", website: "https://www.duluthsbestburgers.com/", address: "2828 Piedmont Ave, Duluth, MN 55811", reservations: "none", popularDishes: ["Big Daddy Burger", "Belly Buster", "Breakfast Burger"],
        niche_keywords: ["Best burgers near Piedmont Minnesota", "Big Daddy's Burgers big daddy burger Piedmont", "Top rated burgers Piedmont"], hours: { "Monday": "6:00 AM - 8:00 PM", "Tuesday": "6:00 AM - 8:00 PM", "Wednesday": "6:00 AM - 8:00 PM", "Thursday": "6:00 AM - 8:00 PM", "Friday": "6:00 AM - 8:00 PM", "Saturday": "6:00 AM - 8:00 PM", "Sunday": "Closed" } },
    { name: "Black Woods Grill & Bar", cuisine: "American • Steak • Bar", price: "$$", rating: "4.2", reviews: "2,345", description: "Black Woods Grill & Bar is a family-friendly restaurant in Duluth known for its hand-cut steaks, ribs, scratch-made soups, and classic comfort dishes.", location: "Congdon", phone: "(218) 724-1612", website: "https://blackwoods.com/", address: "2525 London Rd, Duluth, MN 55812", reservations: "Recommended", popularDishes: ["Wild Rice Burger", "Mac 'N Cheese", "Bourbon Beef Tips"],
        niche_keywords: ["Best american near Congdon Minnesota", "Black Woods Grill & Bar wild rice burger Congdon", "Top rated american Congdon"], hours: { "Monday": "11:30 AM - 10:00 PM", "Tuesday": "11:30 AM - 10:00 PM", "Wednesday": "11:30 AM - 10:00 PM", "Thursday": "11:30 AM - 10:00 PM", "Friday": "11:30 AM - 11:00 PM", "Saturday": "11:30 AM - 11:00 PM", "Sunday": "11:30 AM - 10:00 PM" } },
    { name: "Boat Club Restaurant & Bar", cuisine: "Seafood • Steak • American", price: "$$$", rating: "4.1", reviews: "1,678", description: "The Boat Club is a lakeside restaurant in Duluth's Fitger's Complex offering fresh seafood, premium steaks, handmade pasta, and craft cocktails in a refined but relaxed setting.", location: "Downtown", phone: "(218) 727-4880", website: "http://boatclubrestaurant.com/", address: "600 E Superior St, Duluth, MN 55802", reservations: "Required", popularDishes: ["King Crab", "Lake Superior Walleye", "Boat Club Benedict"],
        niche_keywords: ["Best seafood near downtown Duluth Minnesota", "Boat Club Restaurant & Bar king crab downtown Duluth", "Top rated seafood downtown Duluth"], hours: { "Monday": "7:00 AM - 9:00 PM", "Tuesday": "7:00 AM - 9:00 PM", "Wednesday": "7:00 AM - 9:00 PM", "Thursday": "7:00 AM - 9:00 PM", "Friday": "7:00 AM - 10:00 PM", "Saturday": "7:00 AM - 10:00 PM", "Sunday": "7:00 AM - 9:00 PM" } },
    { name: "BoomTown Woodfire Bar & Grill", cuisine: "American • Wood‑Fire Grill • Brewpub", price: "$$", rating: "4.0", reviews: "856", description: "BoomTown Grill in Duluth features a warm, upscale atmosphere with a wood-fired grill, scratch‑cooked comfort food, and hearty craft beers.", location: "Duluth Heights", phone: "(218) 722-0977", website: "https://boomtownwoodfire.com/", address: "4483 Martin Rd, Duluth, MN 55803", reservations: "Recommended", popularDishes: ["Brewhouse Steak Salad", "Cajun Burger", "Smoked Brisket Mac"],
        niche_keywords: ["Best american near Duluth Heights Minnesota", "BoomTown Woodfire Bar & Grill brewhouse steak salad Duluth Heights", "Top rated american Duluth Heights"], hours: { "Monday": "11:00 AM - 11:00 PM", "Tuesday": "11:00 AM - 11:00 PM", "Wednesday": "11:00 AM - 11:00 PM", "Thursday": "11:00 AM - 11:00 PM", "Friday": "11:00 AM - 12:00 AM", "Saturday": "11:00 AM - 12:00 AM", "Sunday": "11:00 AM - 11:00 PM" } },
    { name: "Bridgeman's", cuisine: "Steakhouse • Northern", price: "$$$", rating: "4.3", reviews: "1,234", description: "Classic Duluth fine-dining steakhouse with prime cuts and seafood.", location: "Duluth, MN", phone: "(218) 727-9345", website: "https://bridgemansduluth.com/", address: "116 E Superior St, Duluth, MN 55802", reservations: "Reservations accepted", popularDishes: ["Filet", "Lobster", "Prime Rib"],
        niche_keywords: ["Best steakhouse near duluth, mn Minnesota", "Bridgeman's filet duluth, mn", "Top rated steakhouse duluth, mn"], hours: { "Monday": "4:00 PM - 9:00 PM", "Tuesday": "4:00 PM - 9:00 PM", "Wednesday": "4:00 PM - 9:00 PM", "Thursday": "4:00 PM - 9:00 PM", "Friday": "4:00 PM - 10:00 PM", "Saturday": "4:00 PM - 10:00 PM", "Sunday": "Closed" } },
    { name: "Bridgeman's", cuisine: "Burgers • Ice Cream • American", price: "$$", rating: "4.2", reviews: "1,123", description: "Bridgeman's is a casual Duluth eatery in Miller Hill known for its classic burgers, sandwiches, and family-friendly atmosphere.", location: "Duluth Heights", phone: "(218) 727-0123", website: "https://www.bridgemansmn.com/", address: "2202 Mountain Shadow Dr, Duluth, MN 55811", reservations: "none", popularDishes: ["Double Cheeseburger", "Fish Sandwich", "Onion Rings"],
        niche_keywords: ["Best burgers near Duluth Heights Minnesota", "Bridgeman's double cheeseburger Duluth Heights", "Top rated burgers Duluth Heights"], hours: { "Monday": "8:00 AM - 8:00 PM", "Tuesday": "8:00 AM - 8:00 PM", "Wednesday": "8:00 AM - 8:00 PM", "Thursday": "8:00 AM - 8:00 PM", "Friday": "8:00 AM - 9:00 PM", "Saturday": "8:00 AM - 9:00 PM", "Sunday": "Closed" } },
    { name: "Bulldog Pizza & Grill", cuisine: "Pizza • Burgers • American / Italian", price: "$$", rating: "4.2", reviews: "1,567", description: "Bulldog Pizza & Grill is a longtime Duluth favorite — a laid-back, neighborhood family restaurant and college hangout known for its zesty red sauce, pizzas, pasta, and grill items.", location: "Kenwood", phone: "(218) 728-3663", website: "https://www.bulldogpizzagrill.com/", address: "101 Mount Royal Shopping Cir, Duluth, MN 55803", reservations: "none", popularDishes: ["Bulldog Supreme Pizza", "Meatball Sub", "Garlic Pizza Fries"],
        niche_keywords: ["Best pizza near Kenwood Minnesota", "Bulldog Pizza & Grill bulldog supreme pizza Kenwood", "Best pizza delivery Kenwood Minnesota"], hours: { "Monday": "11:00 AM - 9:00 PM", "Tuesday": "11:00 AM - 9:00 PM", "Wednesday": "11:00 AM - 9:00 PM", "Thursday": "11:00 AM - 9:00 PM", "Friday": "11:00 AM - 9:00 PM", "Saturday": "11:00 AM - 9:00 PM", "Sunday": "Closed" } },
    { name: "Burnett Dairy", cuisine: "Cheese Shop • Bistro • Ice Cream", price: "$$", rating: "4.4", reviews: "987", description: "Burnett Dairy is a farmer‑owned coop with a specialty store in Duluth offering wood‑fired pizzas, fried cheese curds, over 30 hard-scoop ice cream flavors, and a full cheese case.", location: "Spirit Valley", phone: "(218) 522-4411", website: "https://www.burnettdairy.com/", address: "8552 Grand Ave, Duluth, MN 55808", reservations: "none", popularDishes: ["Pizza", "Fried Cheese Curds", "Ice Cream"],
        niche_keywords: ["Best cheese shop near spirit valley Minnesota", "Burnett Dairy pizza spirit valley", "Top rated cheese shop spirit valley"], hours: { "Monday": "10:00 AM - 7:00 PM", "Tuesday": "10:00 AM - 7:00 PM", "Wednesday": "10:00 AM - 7:00 PM", "Thursday": "10:00 AM - 7:00 PM", "Friday": "10:00 AM - 7:00 PM", "Saturday": "10:00 AM - 7:00 PM", "Sunday": "10:00 AM - 6:00 PM" } },
    { name: "China King", cuisine: "Chinese", price: "$$", rating: "4.0", reviews: "856", description: "Fast-service Chinese restaurant offering large portions and classic favorites.", location: "Hermantown, MN", phone: "(218) ?", website: "N/A", address: "5031 Miller Trunk Hwy, Hermantown, MN 55811", reservations: "none", popularDishes: ["General Tso's Chicken", "Fried Rice", "Lo Mein"],
        niche_keywords: ["Best chinese near hermantown, mn Minnesota", "China King general tso's chicken hermantown, mn", "Top rated chinese hermantown, mn"], hours: { "Monday": "Hours vary", "Tuesday": "Hours vary", "Wednesday": "Hours vary", "Thursday": "Hours vary", "Friday": "Hours vary", "Saturday": "Hours vary", "Sunday": "Hours vary" } },
    { name: "China Star", cuisine: "Chinese", price: "$$", rating: "4.1", reviews: "987", description: "Family-style Chinese restaurant with General Tso's, fried rice, and lo mein.", location: "Duluth, MN", phone: "(218) ?", website: "N/A", address: "1301 E 9th St, Duluth, MN 55805", reservations: "none", popularDishes: ["General Tso's Chicken", "Fried Rice", "Lo Mein"],
        niche_keywords: ["Best chinese near duluth, mn Minnesota", "China Star general tso's chicken duluth, mn", "Top rated chinese duluth, mn"], hours: { "Monday": "Hours vary", "Tuesday": "Hours vary", "Wednesday": "Hours vary", "Thursday": "Hours vary", "Friday": "Hours vary", "Saturday": "Hours vary", "Sunday": "Hours vary" } },
    { name: "Cantonese House", cuisine: "Chinese", price: "$$", rating: "4.2", reviews: "756", description: "Cozy Chinese restaurant known for chow mein, wonton soup, and combo plates.", location: "Duluth, MN", phone: "(218) ?", website: "N/A", address: "24 W 1st St, Duluth, MN 55802", reservations: "none", popularDishes: ["Chow Mein", "Wonton Soup", "Combo Plates"],
        niche_keywords: ["Best chinese near duluth, mn Minnesota", "Cantonese House chow mein duluth, mn", "Top rated chinese duluth, mn"], hours: { "Monday": "Hours vary", "Tuesday": "Hours vary", "Wednesday": "Hours vary", "Thursday": "Hours vary", "Friday": "Hours vary", "Saturday": "Hours vary", "Sunday": "Hours vary" } },
    { name: "Cloud 9 Sushi & Hibachi", cuisine: "Japanese • Asian Bistro • Sushi", price: "$$", rating: "4.5", reviews: "1,789", description: "Cloud 9 is a Duluth lakeside bistro offering all‑you‑can‑eat sushi, hibachi, and a wide range of Asian dishes in a modern, stylish setting.", location: "Downtown Duluth", phone: "(218) 786‑9888", website: "https://cloud9asianbistroduluth.com/", address: "308 S Lake Ave, Duluth, MN 55802", reservations: "none", popularDishes: ["AYCE Sushi", "Hibachi Steak", "Tempura Rolls"],
        niche_keywords: ["Best japanese near downtown duluth Minnesota", "Cloud 9 Sushi & Hibachi ayce sushi downtown duluth", "Best sushi all you can eat downtown duluth"], hours: { "Monday": "Closed", "Tuesday": "11:00 AM - 9:00 PM", "Wednesday": "11:00 AM - 9:00 PM", "Thursday": "11:00 AM - 9:00 PM", "Friday": "11:00 AM - 10:00 PM", "Saturday": "11:00 AM - 10:00 PM", "Sunday": "12:00 PM - 9:00 PM" } },
    { name: "Clyde Iron Works Restaurant & Bar", cuisine: "American • Bar & Grill • Steakhouse", price: "$$", rating: "4.3", reviews: "1,456", description: "Clyde Iron Works is a historic Duluth restaurant and bar located in a renovated steel mill, offering steak, seafood, craft cocktails, and an upscale yet relaxed dining experience.", location: "Lincoln Park", phone: "(218) 722-9027", website: "https://clydeironworks.com", address: "301 E Superior St, Duluth, MN 55802", reservations: "Recommended", popularDishes: ["Steak Frites", "Pan-Seared Salmon", "Duck Confit"],
        niche_keywords: ["Best american near Lincoln Park Minnesota", "Clyde Iron Works Restaurant & Bar steak frites Lincoln Park", "Top rated american Lincoln Park"], hours: { "Monday": "Closed", "Tuesday": "Closed", "Wednesday": "Closed", "Thursday": "11:00 AM - 8:30 PM", "Friday": "11:00 AM - 8:30 PM", "Saturday": "11:00 AM - 8:30 PM", "Sunday": "11:00 AM - 8:30 PM" } },
    { name: "Coney Island Deluxe", cuisine: "American • Diner • Hot Dogs", price: "$", rating: "4.1", reviews: "1,789", description: "Coney Island Deluxe is a longtime Duluth institution serving classic coney dogs, gyros, burgers, homemade chili, and shakes with a nostalgic, counter‑service vibe.", location: "Downtown", phone: "(218) 722-2772", website: "https://coneyislanddeluxe.com", address: "112 W 1st St, Duluth, MN 55802", reservations: "none", popularDishes: ["Coney Dog", "Gyro", "Chili Soup"],
        niche_keywords: ["Best american near downtown Duluth Minnesota", "Coney Island Deluxe coney dog downtown Duluth", "Top rated american downtown Duluth"], hours: { "Monday": "10:00 AM - 8:00 PM", "Tuesday": "10:00 AM - 8:00 PM", "Wednesday": "10:00 AM - 8:00 PM", "Thursday": "10:00 AM - 8:00 PM", "Friday": "10:00 AM - 8:00 PM", "Saturday": "10:00 AM - 8:00 PM", "Sunday": "Closed" } },
    { name: "Corktown Eatery and Bar", cuisine: "Deli • Bar • American", price: "$$", rating: "4.2", reviews: "1,123", description: "Corktown is a laid‑back sandwich shop and brew bar in Duluth featuring creative deli sandwiches, salads, rotating craft beers, and a relaxed neighborhood atmosphere.", location: "West End / Lincoln Park craft district", phone: "(218) 606-1607", website: "https://corktowndeli.com", address: "102 S 27th Ave W, Duluth, MN 55806", reservations: "none", popularDishes: ["Angry Reuben", "Chicken Curry Dip", "Porchetta Sandwich"],
        niche_keywords: ["Best deli near west end / lincoln park craft district Minnesota", "Corktown Eatery and Bar angry reuben west end / lincoln park craft district", "Top rated deli west end / lincoln park craft district"], hours: { "Monday": "11:00 AM - 9:00 PM", "Tuesday": "11:00 AM - 9:00 PM", "Wednesday": "11:00 AM - 9:00 PM", "Thursday": "11:00 AM - 9:00 PM", "Friday": "11:00 AM - 9:00 PM", "Saturday": "11:00 AM - 9:00 PM", "Sunday": "11:00 AM - 9:00 PM" } },
    { name: "Crooked Pint Ale House", cuisine: "Bar • Pub • American", price: "$$", rating: "4.1", reviews: "987", description: "Crooked Pint is a laid‑back pub in Duluth with a wide selection of 32 draft beers, Juicy Lucy burgers, pot pies, tacos, and big‑screen TVs for watching the game.", location: "Kenwood / West Duluth area, Duluth", phone: "(218) 464‑4129", website: "https://www.crookedpint.com/", address: "1402 W Arrowhead Rd, Duluth, MN 55811", reservations: "none", popularDishes: ["Duluth Lucy", "Pretzel", "Totchos"],
        niche_keywords: ["Best bar near kenwood / west duluth area, duluth Minnesota", "Crooked Pint Ale House duluth lucy kenwood / west duluth area, duluth", "Top rated bar kenwood / west duluth area, duluth"], hours: { "Monday": "11:00 AM - 10:00 PM", "Tuesday": "11:00 AM - 10:00 PM", "Wednesday": "11:00 AM - 10:00 PM", "Thursday": "11:00 AM - 10:00 PM", "Friday": "11:00 AM - 10:00 PM", "Saturday": "10:00 AM - 10:00 PM", "Sunday": "10:00 AM - 10:00 PM" } },
    { name: "Dovetail Café", cuisine: "Café • Coffee Shop • Community", price: "$$", rating: "4.3", reviews: "756", description: "Cozy community café in Duluth's Lincoln Park Craft District, serving specialty coffee, handcrafted food, local beer, and housing a marketplace for local artisans.", location: "Lincoln Park", phone: "(218) 481‑7888", website: "https://www.dovetailcafe.com", address: "1917 W Superior St, Duluth, MN 55806", reservations: "none", popularDishes: ["Quiche", "Burrito Bowl", "Vegan Valhalla Breakfast Sandwich"],
        niche_keywords: ["Best café near Lincoln Park Minnesota", "Dovetail Café quiche Lincoln Park", "Top rated café Lincoln Park"], hours: { "Monday": "8:00 AM - 3:00 PM", "Tuesday": "8:00 AM - 3:00 PM", "Wednesday": "8:00 AM - 8:00 PM", "Thursday": "8:00 AM - 8:00 PM", "Friday": "8:00 AM - 8:00 PM", "Saturday": "8:00 AM - 8:00 PM", "Sunday": "8:00 AM - 8:00 PM" } },
    { name: "Dubh Linn Irish Brew Pub", cuisine: "Brewpub • Irish • Bar / Restaurant", price: "$$", rating: "4.4", reviews: "1,234", description: "Dubh Linn is a historic Irish-style microbrewery and pub in downtown Duluth, serving made-from-scratch Irish fare, craft beers brewed on site, and a massive whiskey selection.", location: "Downtown", phone: "(218) 727-1559", website: "https://dubhlinnpub.com", address: "109 W Superior St, Duluth, MN 55802", reservations: "Recommended", popularDishes: ["Shepherd's Pie", "Reuben Egg Rolls", "Bangers & Mash"],
        niche_keywords: ["Best brewpub near downtown Duluth Minnesota", "Dubh Linn Irish Brew Pub shepherd's pie downtown Duluth", "Top rated brewpub downtown Duluth"], hours: { "Monday": "4:00 PM - 2:00 AM", "Tuesday": "4:00 PM - 2:00 AM", "Wednesday": "4:00 PM - 2:00 AM", "Thursday": "4:00 PM - 2:00 AM", "Friday": "4:00 PM - 2:00 AM", "Saturday": "4:00 PM - 2:00 AM", "Sunday": "Closed" } },
    { name: "Burrito Union", cuisine: "Mexican • Bar • Burritos", price: "$$", rating: "4.3", reviews: "1,567", description: "Burrito Union is a laid-back Mexican cantina in Duluth serving hearty burritos, tacos, wings, and local brews in a fun, college‑town atmosphere.", location: "Lakeside / Lester Park", phone: "(218) 728-4414", website: "https://burritounion.com/", address: "1332 E 4th St, Duluth, MN 55805", reservations: "none", popularDishes: ["Imperial Chicken Burrito", "Vegan Socialist", "Empire Builder"],
        niche_keywords: ["Best mexican near lakeside / lester park Minnesota", "Burrito Union imperial chicken burrito lakeside / lester park", "Best authentic mexican lakeside / lester park Minnesota"], hours: { "Monday": "11:00 AM - 10:00 PM", "Tuesday": "11:00 AM - 10:00 PM", "Wednesday": "11:00 AM - 10:00 PM", "Thursday": "11:00 AM - 10:00 PM", "Friday": "11:00 AM - 11:00 PM", "Saturday": "10:00 AM - 11:00 PM", "Sunday": "10:00 AM - 10:00 PM" } },
    { name: "Caddy Shack Indoor Golf & Pub", cuisine: "Indoor Sports Bar • Games • American", price: "$$", rating: "4.0", reviews: "654", description: "Caddy Shack is Duluth's only indoor golf and sports bar, featuring HD golf simulators, a full bar, pool, darts, board games, and a friendly hangout space.", location: "Lincoln Park", phone: "(218) 624-7768", website: "https://caddyshackduluth.com/", address: "2023 W Superior St, Duluth, MN 55806", reservations: "Recommended", popularDishes: ["Lobster Roll", "Flatbread", "Baked Cheese Curds"],
        niche_keywords: ["Best indoor sports bar near Lincoln Park Minnesota", "Caddy Shack Indoor Golf & Pub lobster roll Lincoln Park", "Top rated indoor sports bar Lincoln Park"], hours: { "Monday": "10:00 AM - 10:00 PM", "Tuesday": "10:00 AM - 10:00 PM", "Wednesday": "10:00 AM - 11:00 PM", "Thursday": "10:00 AM - 11:00 PM", "Friday": "10:00 AM - 12:00 AM", "Saturday": "10:00 AM - 12:00 AM", "Sunday": "10:00 AM - 6:00 PM" } },
    { name: "Canal Park Brewing Company", cuisine: "Brewpub • American • Craft Beer", price: "$$", rating: "4.3", reviews: "1,567", description: "Canal Park Brewing Company is a lakeside brewpub in Duluth offering house-brewed beers, pub food, and a scenic view of Lake Superior.", location: "Canal Park", phone: "(218) 464-4790", website: "https://canalparkbrewery.com/", address: "300 Canal Park Dr, Duluth, MN 55802", reservations: "none", popularDishes: ["Brewpub Smash Burger", "Stoned Surf Fish & Chips", "Bavarian Pretzel"],
        niche_keywords: ["Best brewpub near Canal Park Minnesota", "Canal Park Brewing Company brewpub smash burger Canal Park", "brewpub with lake view Canal Park"], hours: { "Monday": "11:00 AM - 9:00 PM", "Tuesday": "11:00 AM - 9:00 PM", "Wednesday": "11:00 AM - 9:00 PM", "Thursday": "11:00 AM - 9:00 PM", "Friday": "11:00 AM - 11:00 PM", "Saturday": "11:00 AM - 11:00 PM", "Sunday": "11:00 AM - 9:00 PM" } },
    { name: "Carmody's Irish Pub", cuisine: "Brewpub • Irish • Bar", price: "$", rating: "4.2", reviews: "1,234", description: "Carmody's Irish Pub is a historic, cozy downtown Duluth pub and brewery in a converted stable, offering house-brewed beer, live music, and classic Irish pub fare.", location: "Downtown", phone: "(218) 740-4747", website: "https://carmodypub.com/", address: "308 E Superior St, Duluth, MN 55802", reservations: "Recommended", popularDishes: ["Bangers & Mash", "Scotch Eggs", "Shepherd's Pie"],
        niche_keywords: ["Best brewpub near downtown Duluth Minnesota", "Carmody's Irish Pub bangers & mash downtown Duluth", "Top rated brewpub downtown Duluth"], hours: { "Monday": "Closed", "Tuesday": "4:00 PM - 2:00 AM", "Wednesday": "4:00 PM - 2:00 AM", "Thursday": "12:00 PM - 2:00 AM", "Friday": "12:00 PM - 2:00 AM", "Saturday": "12:00 PM - 2:00 AM", "Sunday": "12:00 PM - 2:00 AM" } },
    { name: "Cast Iron Bar & Grill", cuisine: "American • Bar & Grill • Casual", price: "$$", rating: "4.4", reviews: "1,456", description: "Cast Iron is a friendly bar and grill north of Duluth on Old Miller Trunk Highway offering pub food, burgers, live music, and a relaxed dining space.", location: "North Duluth", phone: "(218) 729-7514", website: "http://castironduluth.com/", address: "5906 Old Miller Trunk Hwy, Duluth, MN 55811", reservations: "none", popularDishes: ["Slow Burn Burger", "Philly Cheese Steak", "Fish Fry"],
        niche_keywords: ["Best american near north duluth Minnesota", "Cast Iron Bar & Grill slow burn burger north duluth", "Top rated american north duluth"], hours: { "Monday": "Closed", "Tuesday": "11:00 AM - 11:00 PM", "Wednesday": "11:00 AM - 11:00 PM", "Thursday": "11:00 AM - 11:00 PM", "Friday": "11:00 AM - 1:00 AM", "Saturday": "11:00 AM - 1:00 AM", "Sunday": "11:00 AM - 11:00 PM" } },
    { name: "Chachos Taqueria", cuisine: "Mexican • Street Food • Tacos", price: "$$", rating: "4.3", reviews: "987", description: "Chachos Taqueria is a lively Mexican street-food spot in Duluth's Canal Park, serving tacos, bowls, tortas, and housemade salsas.", location: "Canal Park", phone: "(218) 451-3089", website: "https://www.chachos-taqueria.com/", address: "329 Canal Park Dr, Duluth, MN 55802", reservations: "none", popularDishes: ["Birria Tacos", "Tamales", "Chicken Mole Bowl"],
        niche_keywords: ["Best mexican near Canal Park Minnesota", "Chachos Taqueria birria tacos Canal Park", "mexican with lake view Canal Park"], hours: { "Monday": "11:00 AM - 7:00 PM", "Tuesday": "Closed", "Wednesday": "11:00 AM - 7:00 PM", "Thursday": "11:00 AM - 7:00 PM", "Friday": "11:00 AM - 7:00 PM", "Saturday": "11:00 AM - 7:00 PM", "Sunday": "11:00 AM - 7:00 PM" } },
    { name: "Chicken n' Whaaat?!", cuisine: "Fried Chicken • Fast Casual • American", price: "$", rating: "4.2", reviews: "1,123", description: "Chicken n' Whaaat?! is a fast-casual restaurant in Duluth specializing in hand-breaded fried chicken sandwiches and tenders, cooked in beef tallow for flavor.", location: "West Duluth", phone: "(218) 206-6684", website: "https://chickenandwhat.com/", address: "231 N Central Ave, Duluth, MN 55807", reservations: "none", popularDishes: ["Cluckin' Dill‑icious Sammie", "Nashville Hot Tenders", "Whaaat Sauce Fries"],
        niche_keywords: ["Best fried chicken near West Duluth Minnesota", "Chicken n' Whaaat?! cluckin' dill‑icious sammie West Duluth", "Top rated fried chicken West Duluth"], hours: { "Monday": "11:00 AM - 9:00 PM", "Tuesday": "11:00 AM - 9:00 PM", "Wednesday": "11:00 AM - 9:00 PM", "Thursday": "11:00 AM - 9:00 PM", "Friday": "11:00 AM - 9:00 PM", "Saturday": "11:00 AM - 9:00 PM", "Sunday": "11:00 AM - 9:00 PM" } },
    { name: "Duluth Coffee Kitchen", cuisine: "Café • Brunch • Farm‑to‑Table", price: "$$", rating: "4.4", reviews: "1,234", description: "Duluth Coffee Kitchen is a brunch‑focused restaurant next to Duluth Coffee Company, serving farm-sourced food, specialty coffee, and a full bar in a cozy downtown setting.", location: "Downtown", phone: "(218) 221‑6643", website: "https://duluthcoffeecompany.com", address: "107 E Superior St, Duluth, MN 55802", reservations: "none", popularDishes: ["Biscuits & Gravy", "Harvest Hash", "Bahn Mi Sandwich"],
        niche_keywords: ["Best café near downtown Duluth Minnesota", "Duluth Coffee Kitchen biscuits & gravy downtown Duluth", "Best brunch downtown Duluth Minnesota"], hours: { "Monday": "8:00 AM - 3:00 PM", "Tuesday": "8:00 AM - 3:00 PM", "Wednesday": "8:00 AM - 3:00 PM", "Thursday": "8:00 AM - 3:00 PM", "Friday": "8:00 AM - 3:00 PM", "Saturday": "8:00 AM - 3:00 PM", "Sunday": "8:00 AM - 3:00 PM" } },
    { name: "Duluth Grill", cuisine: "Brunch • Café • American", price: "$$", rating: "4.6", reviews: "6,624", description: "Duluth Grill is a cozy, locally focused brunch spot in Duluth that serves scratch-made dishes using seasonal, locally sourced ingredients.", location: "Lincoln Park", phone: "(218) 726-1150", website: "https://duluthgrill.com", address: "118 S 27th Ave W, Duluth, MN 55806", reservations: "Recommended", popularDishes: ["Pot Roast", "Banana Cream Pie", "Smoked Salmon Omelet"],
        niche_keywords: ["Best brunch near Lincoln Park Minnesota", "Duluth Grill pot roast Lincoln Park", "Best brunch Lincoln Park Minnesota"], hours: { "Monday": "8:00 AM - 3:00 PM", "Tuesday": "8:00 AM - 3:00 PM", "Wednesday": "8:00 AM - 3:00 PM", "Thursday": "8:00 AM - 3:00 PM", "Friday": "8:00 AM - 3:00 PM", "Saturday": "8:00 AM - 3:00 PM", "Sunday": "8:00 AM - 3:00 PM" } },
    { name: "Fitger's Brewhouse Brewery & Grille", cuisine: "Brewpub • American • Bar", price: "$$", rating: "4.5", reviews: "3,456", description: "Pub-style restaurant and brewery in the historic Fitger's Brewery complex, serving handcrafted ales, lagers, and pub food like the famous Wild Rice Burger.", location: "Downtown", phone: "(218) 279-2739", website: "https://fitgersbrewhouse.com/", address: "600 E Superior St, Duluth, MN 55802", reservations: "Recommended", popularDishes: ["Wild Rice Burger", "Poutine", "Fish Tacos"],
        niche_keywords: ["Best brewpub near downtown Duluth Minnesota", "Fitger's Brewhouse Brewery & Grille wild rice burger downtown Duluth", "Top rated brewpub downtown Duluth"], hours: { "Monday": "11:00 AM - 11:00 PM", "Tuesday": "11:00 AM - 11:00 PM", "Wednesday": "11:00 AM - 11:00 PM", "Thursday": "11:00 AM - 11:00 PM", "Friday": "11:00 AM - 12:00 AM", "Saturday": "11:00 AM - 12:00 AM", "Sunday": "11:00 AM - 11:00 PM" } },
    { name: "Harbor 360", cuisine: "American • Burger • Bar", price: "$", rating: "4.3", reviews: "1,234", description: "A rotating restaurant atop the Radisson Hotel with panoramic views of Duluth's harbor, offering fast-casual fare, board games, and a full bar.", location: "Downtown", phone: "(218) 722‑8439", website: "harbor360duluth.com", address: "505 W Superior St, Duluth, MN 55802", reservations: "none", popularDishes: ["Black Bean Burger with Fried Egg", "Spicy Chicken Sandwich", "Lake Superior Whitefish"],
        niche_keywords: ["Best american near downtown Duluth Minnesota", "Harbor 360 black bean burger with fried egg downtown Duluth", "Top rated american downtown Duluth"], hours: { "Monday": "7:00 AM - 10:00 PM", "Tuesday": "7:00 AM - 10:00 PM", "Wednesday": "7:00 AM - 10:00 PM", "Thursday": "7:00 AM - 10:00 PM", "Friday": "7:00 AM - 12:00 AM", "Saturday": "7:00 AM - 12:00 AM", "Sunday": "7:00 AM - 8:30 PM" } },
    { name: "Howard's Que", cuisine: "Barbecue • Soul Food • Southern", price: "$$", rating: "4.4", reviews: "1,567", description: "A down‑home BBQ joint in Duluth's Lincoln Park serving slow‑smoked ribs, pulled pork, jerk chicken, and classic southern sides.", location: "Lincoln Park", phone: "(218) 310‑5618", website: "Facebook / Howard's Que", address: "1931 W Michigan St, Duluth, MN 55806", reservations: "none", popularDishes: ["Pulled Pork Sandwich", "Rib Dinner", "Jerk Chicken Sandwich"],
        niche_keywords: ["Best barbecue near Lincoln Park Minnesota", "Howard's Que pulled pork sandwich Lincoln Park", "Top rated barbecue Lincoln Park"], hours: { "Monday": "Closed", "Tuesday": "Closed", "Wednesday": "10:30 AM - 2:00 PM", "Thursday": "10:30 AM - 2:00 PM", "Friday": "10:30 AM - 9:00 PM", "Saturday": "4:00 PM - 9:00 PM", "Sunday": "Closed" } },
    { name: "Hungry Hippie Tacos", cuisine: "Tacos • Mexican • Casual", price: "$$", rating: "4.3", reviews: "987", description: "An approachable taco shop in Duluth's Lincoln Park craft district serving up \"Northern tacos\" on fry‑bread, house‑smoked meats, and made‑from‑scratch sides.", location: "Lincoln Park", phone: "(218) 216‑6030", website: "hungryhippietacos.com", address: "1810 W Superior St, Duluth, MN 55806", reservations: "none", popularDishes: ["Northern Frybread Tacos", "Nashville Hot Cheese Curds", "Chimichanga"],
        niche_keywords: ["Best tacos near Lincoln Park Minnesota", "Hungry Hippie Tacos northern frybread tacos Lincoln Park", "Top rated tacos Lincoln Park"], hours: { "Monday": "11:00 AM - 8:00 PM", "Tuesday": "11:00 AM - 8:00 PM", "Wednesday": "11:00 AM - 8:00 PM", "Thursday": "11:00 AM - 8:00 PM", "Friday": "11:00 AM - 8:00 PM", "Saturday": "11:00 AM - 8:00 PM", "Sunday": "11:00 AM - 8:00 PM" } },
    { name: "Incline Station Bowling & Banquet Facilities", cuisine: "Bowling • Bar • Events", price: "$", rating: "4.0", reviews: "756", description: "A family‑owned bowling center in Duluth with 24 lanes, a full‑service grill/bar, arcade, and group/banquet event spaces.", location: "Downtown", phone: "(218) 722‑2695", website: "inclinestationbowling.com", address: "601 W Superior St, Duluth, MN 55802", reservations: "none", popularDishes: ["Bone‑in Wings", "Pizza", "Burgers"],
        niche_keywords: ["Best bowling near downtown Duluth Minnesota", "Incline Station Bowling & Banquet Facilities bone‑in wings downtown Duluth", "Top rated bowling downtown Duluth"], hours: { "Monday": "3:00 PM - 11:00 PM", "Tuesday": "3:00 PM - 11:00 PM", "Wednesday": "3:00 PM - 11:00 PM", "Thursday": "12:00 PM - 11:00 PM", "Friday": "12:00 PM - 12:00 AM", "Saturday": "11:30 AM - 12:00 AM", "Sunday": "12:00 PM - 10:00 PM" } },
    { name: "India Palace", cuisine: "Indian • Pakistani • Vegetarian", price: "$$", rating: "4.4", reviews: "1,456", description: "A laid-back Indian restaurant in Duluth serving traditional North‑Indian favorites in a cozy, simple setting.", location: "Downtown", phone: "(218) 727‑8767", website: "indiapalaceduluth.com", address: "319 W Superior St, Duluth, MN 55802", reservations: "none", popularDishes: ["Chicken Tikka Masala", "Lamb Kashmiri", "Saag Paneer"],
        niche_keywords: ["Best indian near downtown Duluth Minnesota", "India Palace chicken tikka masala downtown Duluth", "Top rated indian downtown Duluth"], hours: { "Monday": "11:30 AM - 2:30 PM, 5:00 PM - 8:30 PM", "Tuesday": "11:30 AM - 2:30 PM, 5:00 PM - 8:30 PM", "Wednesday": "11:30 AM - 2:30 PM, 5:00 PM - 8:30 PM", "Thursday": "11:30 AM - 2:30 PM, 5:00 PM - 8:30 PM", "Friday": "11:30 AM - 2:30 PM, 5:00 PM - 9:00 PM", "Saturday": "11:30 AM - 2:30 PM, 5:00 PM - 9:00 PM", "Sunday": "Closed" } },
    { name: "Jade Fountain Cocktail Lounge", cuisine: "Bar • Cocktail • Tiki", price: "$$", rating: "4.1", reviews: "1,123", description: "A stylish, eclectic cocktail lounge in Duluth with Asian‑tiki décor, creative handcrafted drinks, and a cozy, multi-room vibe.", location: "West Duluth (Central Ave)", phone: "(218) 624‑4212", website: "jade‑fountain.com", address: "305 N Central Ave, Duluth, MN 55807", reservations: "none", popularDishes: ["Singapore Sling", "Blood in the Gulf Stream", "Mai Tai"],
        niche_keywords: ["Best bar near west duluth (central ave) Minnesota", "Jade Fountain Cocktail Lounge singapore sling west duluth (central ave)", "Top rated bar west duluth (central ave)"], hours: { "Monday": "Closed", "Tuesday": "5:00 PM - 11:00 PM", "Wednesday": "5:00 PM - 11:00 PM", "Thursday": "5:00 PM - 11:00 PM", "Friday": "4:00 PM - 1:00 AM", "Saturday": "4:00 PM - 2:00 AM", "Sunday": "Closed" } },
    { name: "Kosta's Gyros", cuisine: "Mediterranean • Greek • Fast Casual", price: "$", rating: "4.3", reviews: "1,234", description: "A no‑frills gyro joint in Duluth known for its generous portions of lamb and chicken gyros, fresh pita, and signature sauce.", location: "Duluth", phone: "(218) 481‑7783", website: "— (drive‑thru)", address: "2702 W Michigan St, Duluth, MN 55806", reservations: "none", popularDishes: ["Original Gyro", "Chicken Gyro", "Greek Salad with Meat"],
        niche_keywords: ["Best mediterranean near duluth Minnesota", "Kosta's Gyros original gyro duluth", "Top rated mediterranean duluth"], hours: { "Monday": "11:00 AM - 7:00 PM", "Tuesday": "11:00 AM - 7:00 PM", "Wednesday": "11:00 AM - 7:00 PM", "Thursday": "11:00 AM - 7:00 PM", "Friday": "11:00 AM - 7:00 PM", "Saturday": "Closed", "Sunday": "Closed" } },
    { name: "Lake Avenue Restaurant & Bar", cuisine: "New American • Bar • Locavore", price: "$$$", rating: "4.4", reviews: "1,234", description: "A cozy, upscale‑casual restaurant in Canal Park focused on locally sourced, Midwestern ingredients paired with craft cocktails and global wine.", location: "Canal Park", phone: "(218) 722‑2355", website: "lakeaveduluth.com", address: "394 S Lake Ave, Duluth, MN 55802", reservations: "Required", popularDishes: ["Smoked Cheddar Mac & Cheese", "Charred Shishito Peppers", "Roasted Mushroom Benedict"],
        niche_keywords: ["Best new american near Canal Park Minnesota", "Lake Avenue Restaurant & Bar smoked cheddar mac & cheese Canal Park", "new american with lake view Canal Park"], hours: { "Monday": "11:00 AM - 9:00 PM", "Tuesday": "11:00 AM - 9:00 PM", "Wednesday": "11:00 AM - 9:00 PM", "Thursday": "11:00 AM - 9:00 PM", "Friday": "10:00 AM - 10:00 PM", "Saturday": "10:00 AM - 10:00 PM", "Sunday": "10:00 AM - 9:00 PM" } },
    { name: "Lake Effect Restaurant & Bar", cuisine: "Casual • New American • Northwoods", price: "$$", rating: "4.3", reviews: "1,567", description: "A cozy, cabin-chic spot on Island Lake serving smoked ribs, wings, burgers, steak, fish, and vegan fare.", location: "Island Lake / Gnesen Township", phone: "(218) 576-7583", website: "lakeeffectrestaurant.com", address: "7047 Rice Lake Road, Duluth, MN 55803", reservations: "Recommended", popularDishes: ["Walleye Sandwich", "Jerk Pork Stroganoff", "Smoked Wings"],
        niche_keywords: ["Best casual near island lake / gnesen township Minnesota", "Lake Effect Restaurant & Bar walleye sandwich island lake / gnesen township", "Top rated casual island lake / gnesen township"], hours: { "Monday": "Closed", "Tuesday": "10:00 AM - 9:00 PM", "Wednesday": "10:00 AM - 9:00 PM", "Thursday": "10:00 AM - 9:00 PM", "Friday": "10:00 AM - 9:00 PM", "Saturday": "10:00 AM - 2:00 PM", "Sunday": "10:00 AM - 2:00 PM" } },
    { name: "Lake Superior Brewing Co.", cuisine: "Brewery • Brewpub • Bar", price: "$$", rating: "4.2", reviews: "1,234", description: "A community-focused brewpub in Duluth's Lakeside neighborhood serving house-made beers, wood-fired pizzas, burgers, oysters, and craft cocktails.", location: "Lakeside / Lester Park", phone: "(218) 591-1328", website: "lakesuperiorbrewingduluth.com", address: "5324 E Superior St, Duluth, MN 55804", reservations: "none", popularDishes: ["Korean Style Smash-Burger", "Classic Smash-Burger", "Charcuterie & Cheese Board"],
        niche_keywords: ["Best brewery near lakeside / lester park Minnesota", "Lake Superior Brewing Co. korean style smash-burger lakeside / lester park", "Top rated brewery lakeside / lester park"], hours: { "Monday": "Closed", "Tuesday": "4:00 PM - 10:00 PM", "Wednesday": "4:00 PM - 10:00 PM", "Thursday": "4:00 PM - 10:00 PM", "Friday": "4:00 PM - 10:00 PM", "Saturday": "12:00 PM - 9:00 PM", "Sunday": "Closed" } },
    { name: "Lakewalk Galley", cuisine: "Food Boat • Small Plates • Casual", price: "$–$$", rating: "4.1", reviews: "987", description: "A land-locked \"food boat\" in Canal Park offering creative small plates, brats, cheese curds, and mini-donuts.", location: "Canal Park", phone: "(218) 721-2034", website: "lakewalkgalley.com", address: "504 Canal Park Dr, Duluth, MN 55802", reservations: "none", popularDishes: ["Bratwurst", "Cheese Curds", "Mini-Donuts"],
        niche_keywords: ["Best food boat near Canal Park Minnesota", "Lakewalk Galley bratwurst Canal Park", "food boat with lake view Canal Park"], hours: { "Monday": "Closed", "Tuesday": "Closed", "Wednesday": "Closed", "Thursday": "Closed", "Friday": "11:00 AM - 7:00 PM", "Saturday": "11:00 AM - 7:00 PM", "Sunday": "11:00 AM - 7:00 PM" } },
    { name: "Little Angie's Cantina & Grill", cuisine: "Tex-Mex • Bar • Mexican", price: "$$", rating: "4.2", reviews: "1,567", description: "A vibrant Tex-Mex restaurant in Duluth's Canal Park with a festive patio, a tequila wall, and classic Southwestern dishes like fajitas, tacos, burritos, and enchiladas.", location: "Canal Park", phone: "(218) 727-6117", website: "littleangies.com", address: "11 E Buchanan St, Duluth, MN 55802", reservations: "Recommended", popularDishes: ["Fajitas", "Burritos", "Chimichangas"],
        niche_keywords: ["Best tex-mex near Canal Park Minnesota", "Little Angie's Cantina & Grill fajitas Canal Park", "tex-mex with lake view Canal Park"], hours: { "Monday": "11:30 AM - 11:00 PM", "Tuesday": "11:30 AM - 11:00 PM", "Wednesday": "11:30 AM - 11:00 PM", "Thursday": "11:30 AM - 11:00 PM", "Friday": "11:30 AM - 1:00 AM", "Saturday": "11:00 AM - 1:00 AM", "Sunday": "11:00 AM - 11:00 PM" } },
    { name: "LuLu's Pizza", cuisine: "Pizza • Artisan • Casual", price: "$", rating: "4.3", reviews: "1,789", description: "A family-owned sourdough pizza shop in downtown Duluth that makes their dough from scratch and offers creative specialty pies.", location: "Downtown", phone: "(218) 481-7167", website: "luluspizzaduluth.com", address: "420 W Superior St, Duluth, MN 55802", reservations: "none", popularDishes: ["Pepperoni Perfecto", "La Chiva", "Jerk Chicken", "Banh Mi Za"],
        niche_keywords: ["Best pizza near downtown Duluth Minnesota", "LuLu's Pizza pepperoni perfecto downtown Duluth", "Best pizza delivery downtown Duluth Minnesota"], hours: { "Monday": "Closed", "Tuesday": "11:00 AM - 1:00 PM, 4:00 PM - 8:00 PM", "Wednesday": "11:00 AM - 1:00 PM, 4:00 PM - 8:00 PM", "Thursday": "11:00 AM - 1:00 PM, 4:00 PM - 8:00 PM", "Friday": "11:00 AM - 1:00 PM, 4:00 PM - 9:00 PM", "Saturday": "4:00 PM - 9:00 PM", "Sunday": "Closed" } },
    { name: "Lyric Kitchen · Bar", cuisine: "American • Comfort • Bar", price: "$$", rating: "4.4", reviews: "1,234", description: "A laid-back, downtown Duluth restaurant in the historic Lyric block serving breakfast, burgers, flatbreads, steaks, and local-inspired comfort food with a full bar.", location: "Downtown Duluth", phone: "(218) 249-9000", website: "lyrickitchenbar.com", address: "205 W Superior St, Duluth, MN 55802", reservations: "Recommended", popularDishes: ["Lyric Original Cheese Curds", "Chicken & Waffles", "Steak"],
        niche_keywords: ["Best american near downtown duluth Minnesota", "Lyric Kitchen · Bar lyric original cheese curds downtown duluth", "Top rated american downtown duluth"], hours: { "Monday": "Closed", "Tuesday": "7:00 AM - 10:00 PM", "Wednesday": "7:00 AM - 10:00 PM", "Thursday": "7:00 AM - 10:00 PM", "Friday": "7:00 AM - 12:00 AM", "Saturday": "7:00 AM - 12:00 AM", "Sunday": "7:00 AM - 12:00 PM" } },
    { name: "Margarita's Bar & Grill", cuisine: "Mexican • Bar • Casual", price: "$$", rating: "4.2", reviews: "1,456", description: "A relaxed Mexican restaurant offering tacos, burritos, margaritas, and Tex-Mex comfort food in a casual Duluth setting.", location: "West Duluth", phone: "(218) 727-7678", website: "None", address: "4602 Grand Ave, Duluth, MN 55807", reservations: "none", popularDishes: ["Carne Asada Tacos", "Chicken Chimichanga", "Fajitas"],
        niche_keywords: ["Best mexican near West Duluth Minnesota", "Margarita's Bar & Grill carne asada tacos West Duluth", "Best authentic mexican West Duluth Minnesota"], hours: { "Monday": "11:00 AM - 9:00 PM", "Tuesday": "11:00 AM - 9:00 PM", "Wednesday": "11:00 AM - 9:00 PM", "Thursday": "11:00 AM - 9:00 PM", "Friday": "11:00 AM - 10:00 PM", "Saturday": "11:00 AM - 10:00 PM", "Sunday": "11:00 AM - 8:00 PM" } },
    { name: "Mexico Lindo", cuisine: "Mexican • Bar • Family-Friendly", price: "$$", rating: "4.3", reviews: "1,123", description: "A popular Canal Park Mexican restaurant known for its large portions, waterfront views, sizzling fajitas, and classic margaritas.", location: "Canal Park", phone: "(218) 727-1978", website: "mexicolindo.restaurant", address: "600 E Superior St Suite 201, Duluth, MN 55802", reservations: "Recommended", popularDishes: ["Fajitas", "Carne Asada", "Enchiladas"],
        niche_keywords: ["Best mexican near Canal Park Minnesota", "Mexico Lindo fajitas Canal Park", "mexican with lake view Canal Park"], hours: { "Monday": "11:00 AM - 9:30 PM", "Tuesday": "11:00 AM - 9:30 PM", "Wednesday": "11:00 AM - 9:30 PM", "Thursday": "11:00 AM - 10:00 PM", "Friday": "11:00 AM - 10:30 PM", "Saturday": "11:00 AM - 10:30 PM", "Sunday": "11:00 AM - 9:00 PM" } },
    { name: "McKenzie's Bar & Grill", cuisine: "American • Bar", price: "$$", rating: "4.1", reviews: "856", description: "Neighborhood bar offering burgers, sandwiches, and weekly specials.", location: "Duluth, MN", phone: "(218) ?", website: "N/A", address: "218 N Central Ave, Duluth, MN 55802", reservations: "none", popularDishes: ["Burgers", "Sandwiches", "Bar Food"],
        niche_keywords: ["Best american near duluth, mn Minnesota", "McKenzie's Bar & Grill burgers duluth, mn", "Top rated american duluth, mn"], hours: { "Monday": "Hours vary", "Tuesday": "Hours vary", "Wednesday": "Hours vary", "Thursday": "Hours vary", "Friday": "Hours vary", "Saturday": "Hours vary", "Sunday": "Hours vary" } },
    { name: "Gopher Bar & Grill", cuisine: "Bar • Pub • American", price: "$", rating: "4.1", reviews: "987", description: "Gopher Bar & Grill is a longtime neighborhood bar in Duluth, known for its home-cooked sandwiches, burgers, pizzas, and lively atmosphere with live music and bingo nights.", location: "West Duluth", phone: "(218) 624‑9793", website: "None", address: "402 N Central Ave, Duluth, MN 55807", reservations: "none", popularDishes: ["Chicken Wings", "Meatball Sub", "Wild Rice Soup"],
        niche_keywords: ["Best bar near West Duluth Minnesota", "Gopher Bar & Grill chicken wings West Duluth", "Top rated bar West Duluth"], hours: { "Monday": "1:30 AM - 12:00 AM", "Tuesday": "12:30 AM - 12:00 AM", "Wednesday": "12:30 AM - 1:30 AM", "Thursday": "12:30 AM - 1:30 AM", "Friday": "12:30 AM - 1:30 AM", "Saturday": "12:30 AM - 1:30 AM", "Sunday": "12:30 AM - 1:30 AM" } },
    { name: "Mr. D's Bar & Grill", cuisine: "Bar • American • Grill", price: "$", rating: "4.0", reviews: "856", description: "A laid-back neighborhood bar in West Duluth known for its half-pound burgers, live music on weekends, and a family-friendly atmosphere.", location: "West Duluth", phone: "(218) 624-4178", website: "mrdsbar.com", address: "5622 Grand Ave, Duluth, MN 55807", reservations: "Recommended", popularDishes: ["Half-Pound Burger", "Mushroom & Swiss Burger", "Wings"],
        niche_keywords: ["Best bar near West Duluth Minnesota", "Mr. D's Bar & Grill half-pound burger West Duluth", "Top rated bar West Duluth"], hours: { "Monday": "11:00 AM - 11:00 PM", "Tuesday": "11:00 AM - 11:00 PM", "Wednesday": "11:00 AM - 11:00 PM", "Thursday": "11:00 AM - 11:00 PM", "Friday": "11:00 AM - 1:00 AM", "Saturday": "11:00 AM - 1:00 AM", "Sunday": "11:00 AM - 6:00 PM" } },
    { name: "New Scenic Café", cuisine: "New American • Fine Dining • Locavore", price: "$$", rating: "4.6", reviews: "1,123", description: "A peaceful, chef-driven café nestled along the North Shore of Lake Superior, known for its seasonal, artful dishes and lakeside views.", location: "Island Lake / North Shore", phone: "(218) 525-6274", website: "newsceniccafe.com", address: "5461 N Shore Dr, Duluth, MN 55804", reservations: "Recommended", popularDishes: ["Seared Sea Scallops", "Sashimi Tuna Tacos", "French Onion Soup"],
        niche_keywords: ["Best new american near island lake / north shore Minnesota", "New Scenic Café seared sea scallops island lake / north shore", "Top rated new american island lake / north shore"], hours: { "Monday": "Closed", "Tuesday": "Closed", "Wednesday": "11:00 AM - 9:00 PM", "Thursday": "11:00 AM - 9:00 PM", "Friday": "11:00 AM - 9:00 PM", "Saturday": "11:00 AM - 9:00 PM", "Sunday": "11:00 AM - 9:00 PM" } },
    { name: "Northern Waters Smokehaus", cuisine: "Smokehouse • Sandwhichs • Deil", price: "$$", rating: "4.8", reviews: "1,234", description: "Northern Waters Smokehaus is a popular Canal Park spot known for its house-smoked fish and creative sandwiches. It's a quick, tasty place with fresh, local ingredients.", location: "Canal park", phone: "(218) 724-7307", website: "https://northernwaterssmokehaus.com/", address: "394 Lake Ave S Ste LL1 Duluth, MN 55802", reservations: "none", popularDishes: ["Cajun Finn Sandwich", "Sitka Sushi Sandwich", "Northern Bagel"],
        niche_keywords: ["Best smokehouse near canal park Minnesota", "Northern Waters Smokehaus cajun finn sandwich canal park", "smokehouse with lake view canal park"], hours: { "Monday": "10:00 AM - 6:00 PM", "Tuesday": "10:00 AM - 6:00 PM", "Wednesday": "10:00 AM - 6:00 PM", "Thursday": "10:00 AM - 8:00 PM", "Friday": "10:00 AM - 8:00 PM", "Saturday": "10:00 AM - 8:00 PM", "Sunday": "10:00 AM - 6:00 PM" } },
    { name: "Oasis Del Norte", cuisine: "Mexican • Tacos • Casual", price: "$", rating: "4.2", reviews: "856", description: "A taqueria serving authentic Mexican tacos, burritos, quesadillas, and tortas in the Lincoln Park Craft District, using scratch-made ingredients and local produce.", location: "Lincoln Park", phone: "(218) 464-0824", website: "oasisdelnorte.com", address: "2401 W Superior St, Duluth, MN 55806", reservations: "none", popularDishes: ["Tacos al Pastor", "Birria Ramen", "Carnitas Quesadilla"],
        niche_keywords: ["Best mexican near Lincoln Park Minnesota", "Oasis Del Norte tacos al pastor Lincoln Park", "Best authentic mexican Lincoln Park Minnesota"], hours: { "Monday": "11:00 AM - 9:00 PM", "Tuesday": "11:00 AM - 9:00 PM", "Wednesday": "11:00 AM - 9:00 PM", "Thursday": "11:00 AM - 9:00 PM", "Friday": "11:00 AM - 9:00 PM", "Saturday": "11:00 AM - 9:00 PM", "Sunday": "11:00 AM - 8:00 PM" } },
    { name: "Old Chicago Pizza & Taproom", cuisine: "American • Pizza • Bar", price: "$", rating: "4.1", reviews: "1,567", description: "A laid-back sports-friendly pizza and taproom spot known for hand-tossed pizzas, craft beers, and hearty pub fare.", location: "Downtown Duluth", phone: "(218) 409-8830", website: "oldchicago.com", address: "327 S Lake Ave, Duluth, MN 55802", reservations: "none", popularDishes: ["Sicilian Pepperoni Rolls", "Chicago 7 Pizza", "Hangover Burger"],
        niche_keywords: ["Best american near downtown duluth Minnesota", "Old Chicago Pizza & Taproom sicilian pepperoni rolls downtown duluth", "Top rated american downtown duluth"], hours: { "Monday": "11:00 AM - 12:00 AM", "Tuesday": "11:00 AM - 12:00 AM", "Wednesday": "11:00 AM - 12:00 AM", "Thursday": "11:00 AM - 12:00 AM", "Friday": "11:00 AM - 1:00 AM", "Saturday": "11:00 AM - 1:00 AM", "Sunday": "11:00 AM - 12:00 AM" } },
    { name: "OMC Smokehouse", cuisine: "Barbeque • Smokehouse • American", price: "$$", rating: "4.7", reviews: "1,890", description: "OMC Smokehouse is a well-loved Lincoln Park spot serving slow-smoked meats, hearty sides, and classic comfort flavors. It's a laid-back place known for big portions, homemade sauces, and a cozy neighborhood vibe.", location: "Lincoln Park", phone: "(218) 606-1611", website: "https://omcsmokehouse.com/", address: "1909 W Superior St Duluth, MN 55806", reservations: "none", popularDishes: ["Smoked Omc Plate", "Buttermilk Fried Chicken Sandwich", "Korean BBQ Pork Belly Sandwich"],
        niche_keywords: ["Best barbeque near Lincoln Park Minnesota", "OMC Smokehouse smoked omc plate Lincoln Park", "Top rated barbeque Lincoln Park"], hours: { "Monday": "11:00 AM - 9:00 PM", "Tuesday": "11:00 AM - 9:00 PM", "Wednesday": "11:00 AM - 9:00 PM", "Thursday": "11:00 AM - 9:00 PM", "Friday": "11:00 AM - 10:00 PM", "Saturday": "11:00 AM - 10:00 PM", "Sunday": "11:00 AM - 9:00 PM" } },
    { name: "Osaka Sushi & Hibachi", cuisine: "Japanese • Hibachi", price: "$$", rating: "4.4", reviews: "1,234", description: "Popular hibachi restaurant with entertaining chefs and sushi options.", location: "Duluth, MN", phone: "(218) ?", website: "N/A", address: "4601 Miller Trunk Hwy, Duluth, MN 55811", reservations: "none", popularDishes: ["Hibachi", "Sushi Rolls", "Teriyaki"],
        niche_keywords: ["Best japanese near duluth, mn Minnesota", "Osaka Sushi & Hibachi hibachi duluth, mn", "Best sushi all you can eat duluth, mn"], hours: { "Monday": "Hours vary", "Tuesday": "Hours vary", "Wednesday": "Hours vary", "Thursday": "Hours vary", "Friday": "Hours vary", "Saturday": "Hours vary", "Sunday": "Hours vary" } },
    { name: "Perk Place Coffeehouse", cuisine: "Café • Bakery • Breakfast", price: "$$", rating: "4.2", reviews: "756", description: "A cozy, family-owned coffeehouse in Duluth serving scratch-made pastries, breakfast sandwiches, espresso drinks, and smoothies.", location: "Kenwood (West Duluth)", phone: "(218) 730-7375", website: "perkplaceduluth.com", address: "1336 W Arrowhead Rd, Duluth, MN 55811", reservations: "none", popularDishes: ["Egg Bake", "Breakfast Sandwich", "Cinnamon Scone"],
        niche_keywords: ["Best café near kenwood (west duluth) Minnesota", "Perk Place Coffeehouse egg bake kenwood (west duluth)", "Top rated café kenwood (west duluth)"], hours: { "Monday": "7:00 AM - 3:00 PM", "Tuesday": "7:00 AM - 3:00 PM", "Wednesday": "7:00 AM - 3:00 PM", "Thursday": "7:00 AM - 3:00 PM", "Friday": "7:00 AM - 3:00 PM", "Saturday": "7:00 AM - 3:00 PM", "Sunday": "7:00 AM - 3:00 PM" } },
    { name: "PhoHolic Taste of Vietnam (Central Entrance)", cuisine: "Asian • Vietnamese • Noodle", price: "$", rating: "4.4", reviews: "1,567", description: "A cozy Vietnamese restaurant on Duluth's Central Entrance specializing in pho, banh mi, and rice bowls.", location: "Kenwood", phone: "(218) 464-0312", website: "phoholicduluth.com", address: "309 E Central Entrance, Duluth, MN 55811", reservations: "none", popularDishes: ["Pho (#10 Special)", "Banh Mi", "Bun Bo Hue"],
        niche_keywords: ["Best asian near Kenwood Minnesota", "PhoHolic Taste of Vietnam (Central Entrance) pho (#10 special) Kenwood", "Top rated asian Kenwood"], hours: { "Monday": "11:00 AM - 9:00 PM", "Tuesday": "11:00 AM - 9:00 PM", "Wednesday": "Closed", "Thursday": "11:00 AM - 9:00 PM", "Friday": "11:00 AM - 9:00 PM", "Saturday": "11:00 AM - 9:00 PM", "Sunday": "11:00 AM - 8:00 PM" } },
    { name: "PhoHolic Taste of Vietnam (London Road)", cuisine: "Asian • Vietnamese • Noodle", price: "$", rating: "4.4", reviews: "1,234", description: "A second, larger location of PhoHolic in Duluth, serving pho, banh mi, noodle salads, and an expanded menu in a remodeled space.", location: "Kenwood / Central Entrance Corridor (London Road)", phone: "(218) 481-7595", website: "phoholicduluth.com", address: "1623 London Rd, Duluth, MN 55812", reservations: "none", popularDishes: ["Pho #10 Combination", "Banh Mi", "Chicken Curry"],
        niche_keywords: ["Best asian near kenwood / central entrance corridor (london road) Minnesota", "PhoHolic Taste of Vietnam (London Road) pho #10 combination kenwood / central entrance corridor (london road)", "Top rated asian kenwood / central entrance corridor (london road)"], hours: { "Monday": "11:00 AM - 9:00 PM", "Tuesday": "11:00 AM - 9:00 PM", "Wednesday": "11:00 AM - 9:00 PM", "Thursday": "11:00 AM - 9:00 PM", "Friday": "11:00 AM - 9:00 PM", "Saturday": "11:00 AM - 9:00 PM", "Sunday": "11:00 AM - 8:00 PM" } },
    { name: "Pho Hoa", cuisine: "Thai • Vietnamese", price: "$$", rating: "4.3", reviews: "987", description: "Local spot with pho, pad thai, fried rice, and spring rolls.", location: "Duluth, MN", phone: "(218) ?", website: "N/A", address: "309 E Central Entrance, Duluth, MN 55811", reservations: "none", popularDishes: ["Pho", "Pad Thai", "Fried Rice", "Spring Rolls"],
        niche_keywords: ["Best thai near duluth, mn Minnesota", "Pho Hoa pho duluth, mn", "Top rated thai duluth, mn"], hours: { "Monday": "Hours vary", "Tuesday": "Hours vary", "Wednesday": "Hours vary", "Thursday": "Hours vary", "Friday": "Hours vary", "Saturday": "Hours vary", "Sunday": "Hours vary" } },
    { name: "Pickwick Restaurant & Pub", cuisine: "Steakhouse • Pub • American", price: "$$", rating: "4.3", reviews: "1,789", description: "A historic Duluth restaurant and pub known for its charcoal-grilled steaks, homemade soups, and classic European-style atmosphere.", location: "Downtown", phone: "(218) 623-7425", website: "pickwickduluth.com", address: "508 E Superior St, Duluth, MN 55802", reservations: "Recommended", popularDishes: ["Smoked Whitefish", "Ribeye Steak", "Onion Rings"],
        niche_keywords: ["Best steakhouse near downtown Duluth Minnesota", "Pickwick Restaurant & Pub smoked whitefish downtown Duluth", "Top rated steakhouse downtown Duluth"], hours: { "Monday": "11:30 AM - 9:00 PM", "Tuesday": "11:30 AM - 9:00 PM", "Wednesday": "11:30 AM - 9:00 PM", "Thursday": "11:30 AM - 9:00 PM", "Friday": "11:30 AM - 10:00 PM", "Saturday": "11:30 AM - 10:00 PM", "Sunday": "Closed" } },
    { name: "Pizza Lucé", cuisine: "Pizza • Bar • Italian", price: "$$", rating: "4.4", reviews: "2,345", description: "A creative, locally-rooted pizzeria in downtown Duluth with wood-fired pies, hoagies, pasta, and a full bar.", location: "Downtown", phone: "(218) 727-7400", website: "pizzaluce.com", address: "11 E Superior St, Duluth, MN 55802", reservations: "none", popularDishes: ["Cheesy Bread", "Elote Pizza", "Hoagie Sandwich"],
        niche_keywords: ["Best pizza near downtown Duluth Minnesota", "Pizza Lucé cheesy bread downtown Duluth", "Best pizza delivery downtown Duluth Minnesota"], hours: { "Monday": "11:00 AM - 1:00 AM", "Tuesday": "11:00 AM - 1:00 AM", "Wednesday": "11:00 AM - 1:00 AM", "Thursday": "11:00 AM - 1:00 AM", "Friday": "11:00 AM - 1:00 AM", "Saturday": "10:00 AM - 1:00 AM", "Sunday": "10:00 AM - 1:00 AM" } },
    { name: "Restaurant 301", cuisine: "American • Contemporary • Brunch", price: "$$", rating: "4.5", reviews: "1,456", description: "An upscale yet warm restaurant located in the Sheraton Duluth Hotel, featuring seasonal Northland-inspired dishes and craft cocktails.", location: "Downtown Duluth", phone: "(218) 336-2705", website: "restaurant301.com", address: "301 E Superior St, Duluth, MN 55802", reservations: "Recommended", popularDishes: ["Wild Rice Arancini", "Ahi Tuna Tartare", "Pork Shank"],
        niche_keywords: ["Best american near downtown duluth Minnesota", "Restaurant 301 wild rice arancini downtown duluth", "Best brunch downtown duluth Minnesota"], hours: { "Monday": "6:30 AM - 10:00 AM, 4:00 PM - 11:00 PM", "Tuesday": "6:30 AM - 10:00 AM, 4:00 PM - 11:00 PM", "Wednesday": "6:30 AM - 10:00 AM, 4:00 PM - 11:00 PM", "Thursday": "6:30 AM - 10:00 AM, 4:00 PM - 11:00 PM", "Friday": "6:30 AM - 10:00 AM, 4:00 PM - 12:00 AM", "Saturday": "8:00 AM - 11:00 AM, 4:00 PM - 12:00 AM", "Sunday": "8:00 AM - 11:00 AM, 4:00 PM - 11:00 PM" } },
    { name: "Ritual Salad", cuisine: "Salad • Vegan • Lunch", price: "$", rating: "4.3", reviews: "987", description: "A unique, magical salad shop and apothecary in Duluth offering build-your-own bowls, healing soups, crystals, herbs, and more.", location: "Lakeside", phone: "(218) 464-0246", website: "ritualsalad.com", address: "4501 E Superior St, Duluth, MN 55804", reservations: "none", popularDishes: ["\"Deadly Seven\" Salad", "Wild Rice Mushroom Soup", "Build-Your-Own Bowl"],
        niche_keywords: ["Best salad near Lakeside Minnesota", "Ritual Salad \ Lakeside", "Top rated salad Lakeside"], hours: { "Monday": "11:00 AM - 7:00 PM", "Tuesday": "11:00 AM - 7:00 PM", "Wednesday": "11:00 AM - 7:00 PM", "Thursday": "11:00 AM - 7:00 PM", "Friday": "11:00 AM - 7:00 PM", "Saturday": "11:00 AM - 4:00 PM", "Sunday": "Closed" } },
    { name: "Silos Restaurant & Bar", cuisine: "American • Seafood • Steak", price: "$$$", rating: "4.1", reviews: "1,123", description: "A refined waterfront restaurant at Pier B Resort with harbor views, wood-fired steaks, walleye tacos, and seafood inspired by the North.", location: "Canal Park", phone: "(218) 336-3430", website: "pierbresort.com", address: "800 W Railroad St, Duluth, MN 55802", reservations: "Required", popularDishes: ["Wood-Fired Ribeye", "Norwegian Salmon", "Walleye Tacos"],
        niche_keywords: ["Best american near Canal Park Minnesota", "Silos Restaurant & Bar wood-fired ribeye Canal Park", "american with lake view Canal Park"], hours: { "Monday": "7:00 AM - 11:00 PM", "Tuesday": "7:00 AM - 11:00 PM", "Wednesday": "7:00 AM - 11:00 PM", "Thursday": "7:00 AM - 11:00 PM", "Friday": "7:00 AM - 11:00 PM", "Saturday": "7:00 AM - 11:00 PM", "Sunday": "7:00 AM - 11:00 PM" } },
    { name: "Sir Benedict's Tavern on the Lake", cuisine: "Bar • Pub • American", price: "$$", rating: "4.2", reviews: "1,456", description: "A cozy lakeside English-style tavern in Duluth with a full bar, live music, and a menu of sandwiches, soups, and pub fare.", location: "Downtown", phone: "(218) 728-1192", website: "sirbens.com", address: "805 E Superior St, Duluth, MN 55802", reservations: "none", popularDishes: ["Chicken Bacon Artichoke", "Cuban Pork Sandwich", "Smoked Butternut Squash Soup"],
        niche_keywords: ["Best bar near downtown Duluth Minnesota", "Sir Benedict's Tavern on the Lake chicken bacon artichoke downtown Duluth", "Top rated bar downtown Duluth"], hours: { "Monday": "11:00 AM - 12:00 AM", "Tuesday": "11:00 AM - 12:00 AM", "Wednesday": "11:00 AM - 12:00 AM", "Thursday": "11:00 AM - 12:00 AM", "Friday": "11:00 AM - 12:00 AM", "Saturday": "11:00 AM - 12:00 AM", "Sunday": "Closed" } },
    { name: "Skyline Social & Games", cuisine: "Bowling • Bar • Arcade / Games", price: "$$", rating: "4.0", reviews: "856", description: "A fun entertainment venue in Hermantown/Duluth with bowling (traditional and duckpin), axe throwing, arcade games, and a full restaurant & bar.", location: "Hermantown", phone: "(218) 727-8555", website: "skylinesocialandgames.com", address: "4894 Miller Trunk Hwy, Duluth, MN 55811", reservations: "none", popularDishes: ["Bacon Cheeseburger Pizza", "Burgers", "Tacos"],
        niche_keywords: ["Best bowling near Hermantown Minnesota", "Skyline Social & Games bacon cheeseburger pizza Hermantown", "Top rated bowling Hermantown"], hours: { "Monday": "11:00 AM - 11:00 PM", "Tuesday": "11:00 AM - 11:00 PM", "Wednesday": "11:00 AM - 12:00 AM", "Thursday": "11:00 AM - 11:00 PM", "Friday": "11:00 AM - 12:00 AM", "Saturday": "10:00 AM - 12:00 AM", "Sunday": "10:00 AM - 11:00 PM" } },
    { name: "Studio Café", cuisine: "Café • Coffee • Salad", price: "$", rating: "4.3", reviews: "756", description: "An artsy, welcoming coffeehouse in downtown Duluth where guests can sip specialty Underwood Coffee and use free art supplies—from typewriters and paints to yarn and paper—to create.", location: "Downtown", phone: "(218) 464-6619", website: "studiocafeduluth.com", address: "102 W Superior St, Duluth, MN 55802", reservations: "none", popularDishes: ["Hand-crafted Lattes", "English Muffin Breakfast Sandwhich", "Cappuccino"],
        niche_keywords: ["Best café near downtown Duluth Minnesota", "Studio Café hand-crafted lattes downtown Duluth", "Top rated café downtown Duluth"], hours: { "Monday": "7:30 AM - 7:00 PM", "Tuesday": "7:30 AM - 7:00 PM", "Wednesday": "7:30 AM - 7:00 PM", "Thursday": "7:30 AM - 9:00 PM", "Friday": "7:30 AM - 9:00 PM", "Saturday": "7:30 AM - 3:00 PM", "Sunday": "7:30 AM - 7:00 PM" } },
    { name: "T-Bonz Bar & Grill", cuisine: "Bar • American • Grill", price: "$$", rating: "4.1", reviews: "987", description: "A casual West Duluth bar and grill offering classic burgers, steaks, sandwiches, and nightly specials in a friendly neighborhood setting.", location: "West Duluth", phone: "(218) 624-9200", website: "tbonzbarandgrill.com", address: "4849 Grand Ave, Duluth, MN 55807", reservations: "none", popularDishes: ["Half-Pound Burger", "Baby Back Ribs", "Fish Fry"],
        niche_keywords: ["Best bar near West Duluth Minnesota", "T-Bonz Bar & Grill half-pound burger West Duluth", "Top rated bar West Duluth"], hours: { "Monday": "11:00 AM - 1:00 AM", "Tuesday": "11:00 AM - 1:00 AM", "Wednesday": "11:00 AM - 1:00 AM", "Thursday": "11:00 AM - 1:00 AM", "Friday": "11:00 AM - 1:00 AM", "Saturday": "11:00 AM - 1:00 AM", "Sunday": "11:00 AM - 12:00 AM" } },
    { name: "Tappa Keg Inn", cuisine: "Bar • American • Italian", price: "$$", rating: "4.0", reviews: "654", description: "A vintage-style bar and restaurant known for homemade comfort food like pork chops, burgers, meatloaf, and its cozy, down‑home vibe.", location: "West Duluth", phone: "(218) 624‑9881", website: "facebook.com/tappakegrestaurant", address: "7036 Grand Ave, Duluth, MN 55807", reservations: "none", popularDishes: ["Pork Chops", "1/3 lb Burger", "Spaghetti \"Dick's Way\""],
        niche_keywords: ["Best bar near West Duluth Minnesota", "Tappa Keg Inn pork chops West Duluth", "Top rated bar West Duluth"], hours: { "Monday": "11:00 AM - 11:00 PM", "Tuesday": "11:00 AM - 11:00 PM", "Wednesday": "11:00 AM - 11:00 PM", "Thursday": "11:00 AM - 11:00 PM", "Friday": "11:00 AM - 11:00 PM", "Saturday": "9:00 AM - 11:00 PM", "Sunday": "9:00 AM - 11:00 PM" } },
    { name: "Tavern on the Hill", cuisine: "American • Bar • Pub", price: "$$", rating: "4.2", reviews: "1,123", description: "A locally‑owned neighborhood tavern near UMD with burgers, artisan pizzas, scratch bowls, moonshine, and a large patio.", location: "Central Hillside", phone: "(218) 724‑0010", website: "tavernduluth.com", address: "1102 Woodland Ave, Duluth, MN 55803", reservations: "Recommended", popularDishes: ["Wings & Pub Pretzels", "Tavern Burger", "Wild Rice Melt"],
        niche_keywords: ["Best american near central hillside Minnesota", "Tavern on the Hill wings & pub pretzels central hillside", "american outdoor patio central hillside"], hours: { "Monday": "11:00 AM - 10:00 PM", "Tuesday": "11:00 AM - 10:00 PM", "Wednesday": "11:00 AM - 10:00 PM", "Thursday": "11:00 AM - 10:00 PM", "Friday": "11:00 AM - 11:00 PM", "Saturday": "10:00 AM - 11:00 PM", "Sunday": "10:00 AM - 10:00 PM" } },
    { name: "Thai By Thai", cuisine: "Thai • Asian • Seafood", price: "$", rating: "4.5", reviews: "1,567", description: "A cozy Thai restaurant in downtown Duluth serving classic Thai favorites like curries, noodle dishes, and stir fries.", location: "Downtown Duluth", phone: "(218) 728-4822", website: "thaibythairestaurantinc.com", address: "114 W 1st St, Duluth, MN 55802", reservations: "none", popularDishes: ["Pad Thai", "Massaman Curry", "Drunken Noodles"],
        niche_keywords: ["Best thai near downtown duluth Minnesota", "Thai By Thai pad thai downtown duluth", "Top rated thai downtown duluth"], hours: { "Monday": "Closed", "Tuesday": "11:30 AM - 6:30 PM", "Wednesday": "11:30 AM - 6:30 PM", "Thursday": "11:30 AM - 6:30 PM", "Friday": "11:30 AM - 7:30 PM", "Saturday": "12:00 PM - 7:30 PM", "Sunday": "12:00 PM - 7:30 PM" } },
    { name: "The Breeze Inn", cuisine: "Bar • American • Grill", price: "$", rating: "4.0", reviews: "756", description: "A cozy, family‑run bar & grill in Duluth known for its half‑pound Juicy Lucys, homemade soups, and local brews.", location: "Jean Duluth Rd (North Duluth)", phone: "(218) 525‑2883", website: "thebreezeduluth.com", address: "5168 Jean Duluth Rd, Duluth, MN 55803", reservations: "none", popularDishes: ["Juicy Lucy Burger", "Homemade Soup", "Sandwiches"],
        niche_keywords: ["Best bar near jean duluth rd (north duluth) Minnesota", "The Breeze Inn juicy lucy burger jean duluth rd (north duluth)", "Top rated bar jean duluth rd (north duluth)"], hours: { "Monday": "Closed", "Tuesday": "12:00 PM - 9:00 PM", "Wednesday": "12:00 PM - 9:00 PM", "Thursday": "12:00 PM - 9:00 PM", "Friday": "12:00 PM - 9:00 PM", "Saturday": "12:00 PM - 9:00 PM", "Sunday": "12:00 PM - 9:00 PM" } },
    { name: "Grand View Grill and bar", cuisine: "Bar • American • Grill", price: "$$", rating: "4.1", reviews: "987", description: "A laid‑back neighborhood bar in Duluth serving classic bar fare like burgers, wings, and seafood.", location: "Lakeside", phone: "(218) 624‑5512", website: "https://grandviewgrillandbar.com/", address: "2820 Midway Rd, Duluth, MN 55810", reservations: "none", popularDishes: ["Onion Rings & Swiss Cheese Burger", "Philly Steak Wrap", "Fish Fry"],
        niche_keywords: ["Best bar near Lakeside Minnesota", "Grand View Grill and bar onion rings & swiss cheese burger Lakeside", "Top rated bar Lakeside"], hours: { "Monday": "8:00 AM - 10:00 PM", "Tuesday": "8:00 AM - 10:00 PM", "Wednesday": "8:00 AM - 10:00 PM", "Thursday": "8:00 AM - 10:00 PM", "Friday": "8:00 AM - 10:00 PM", "Saturday": "9:00 AM - 10:00 PM", "Sunday": "9:00 AM - 10:00 PM" } },
    { name: "The Fitger's Barrel Room", cuisine: "Brewpub • Bar • Historic", price: "$$", rating: "4.3", reviews: "1,234", description: "A cozy, rustic bar inside the historic Fitger's Brewery Complex, offering craft beer, whiskey, cocktails, and hand‑tossed pizzas in a stone-walled venue.", location: "Canal Park / Fitger's Complex", phone: "(218) 279‑2739", website: "fitgersbarrelroom.com", address: "600 E Superior St, Duluth, MN 55802", reservations: "Recommended", popularDishes: ["Beer‑Battered Bacon Cheese Curds", "Korean Street Pizza", "Two‑Topping Pizza"],
        niche_keywords: ["Best brewpub near canal park / fitger's complex Minnesota", "The Fitger's Barrel Room beer‑battered bacon cheese curds canal park / fitger's complex", "brewpub with lake view canal park / fitger's complex"], hours: { "Monday": "4:00 PM - 11:00 PM", "Tuesday": "4:00 PM - 11:00 PM", "Wednesday": "4:00 PM - 11:00 PM", "Thursday": "4:00 PM - 11:00 PM", "Friday": "12:00 PM - 12:00 AM", "Saturday": "12:00 PM - 12:00 AM", "Sunday": "12:00 PM - 9:00 PM" } },
    { name: "The Greenery Café & Bakery", cuisine: "Café • Bakery • Breakfast", price: "$", rating: "4.3", reviews: "987", description: "A welcoming downtown Duluth café in the Holiday Center serving Starbucks coffee, bagels, pastries, and made-fresh soups, salads & sandwiches.", location: "Downtown Duluth", phone: "(218) 727-3387", website: "hiduluth.com (Holiday Inn)", address: "200 W 1st St Duluth, MN 55802", reservations: "none", popularDishes: ["Breakfast Burrito", "Bagel & Pastry", "Soup & Sandwich"],
        niche_keywords: ["Best café near downtown duluth Minnesota", "The Greenery Café & Bakery breakfast burrito downtown duluth", "Top rated café downtown duluth"], hours: { "Monday": "6:30 AM - 5:00 PM", "Tuesday": "6:30 AM - 5:00 PM", "Wednesday": "6:30 AM - 5:00 PM", "Thursday": "6:30 AM - 5:00 PM", "Friday": "6:30 AM - 5:00 PM", "Saturday": "6:30 AM - 1:00 PM", "Sunday": "6:30 AM - 1:00 PM" } },
    { name: "The King of Creams", cuisine: "Ice Cream • Burgers • Diner", price: "$", rating: "4.3", reviews: "1,567", description: "A locally owned Duluth favorite that serves handcrafted burgers, Philly cheesesteaks, hand-scooped ice cream, shakes, and sandwiches.", location: "Hillside", phone: "(218) 725‑9000", website: "thekingofcreams.com", address: "502 E 4th St, Duluth, MN 55805", reservations: "none", popularDishes: ["Smash Burgers", "Philly Cheesesteak", "Ice Cream"],
        niche_keywords: ["Best ice cream near hillside Minnesota", "The King of Creams smash burgers hillside", "Top rated ice cream hillside"], hours: { "Monday": "11:00 AM - 7:00 PM", "Tuesday": "11:00 AM - 7:00 PM", "Wednesday": "11:00 AM - 7:00 PM", "Thursday": "11:00 AM - 7:00 PM", "Friday": "11:00 AM - 9:00 PM", "Saturday": "11:00 AM - 9:00 PM", "Sunday": "12:30 PM - 7:00 PM" } },
    { name: "The Loch Café & Games", cuisine: "Café • Games • Board Games", price: "$", rating: "4.1", reviews: "856", description: "A cozy hybrid coffee shop and game store where you can grab espresso, sandwiches, and play tabletop games like D&D or Magic.", location: "East Hillside", phone: "(218) 606‑1104", website: "https://promotingme-ecard.com/loch-cafe/", address: "318 N 18th Ave E, Duluth, MN 55812", reservations: "none", popularDishes: ["Eevee‑lusion Latte", "Flatbread", "Pretzel"],
        niche_keywords: ["Best café near east hillside Minnesota", "The Loch Café & Games eevee‑lusion latte east hillside", "Top rated café east hillside"], hours: { "Monday": "8:00 AM - 9:00 PM", "Tuesday": "8:00 AM - 9:00 PM", "Wednesday": "8:00 AM - 9:00 PM", "Thursday": "8:00 AM - 9:00 PM", "Friday": "8:00 AM - 9:00 PM", "Saturday": "8:00 AM - 9:00 PM", "Sunday": "8:00 AM - 7:00 PM" } },
    { name: "The Other Place Bar & Grill", cuisine: "Bar • American • Sports", price: "$$", rating: "4.0", reviews: "987", description: "A laid-back neighborhood bar in Duluth known for all-day breakfast, pub fare, live music, and drink specials.", location: "East Duluth", phone: "(218) 733‑0214", website: "theotherplacemn.com", address: "3930 E Calvary Rd, Duluth, MN 55803", reservations: "Recommended", popularDishes: ["Steak Sandwich", "Buffalo Wings", "The Other Place Burger"],
        niche_keywords: ["Best bar near East Duluth Minnesota", "The Other Place Bar & Grill steak sandwich East Duluth", "Top rated bar East Duluth"], hours: { "Monday": "4:00 PM - 12:00 AM", "Tuesday": "4:00 PM - 12:00 AM", "Wednesday": "4:00 PM - 12:00 AM", "Thursday": "4:00 PM - 12:00 AM", "Friday": "11:00 AM - 1:00 AM", "Saturday": "8:00 AM - 1:00 AM", "Sunday": "8:00 AM - 11:00 PM" } },
    { name: "Grandma's Saloon & Grill (Canal Park)", cuisine: "Bar • Pub • American", price: "$$", rating: "4.1", reviews: "3,456", description: "A lively, nostalgia‑filled Duluth icon established in 1976, featuring antiques, a rooftop lounge, and hearty American fare in a warm, welcoming setting.", location: "Canal Park", phone: "(218) 727‑4192", website: "grandmasrestaurants.com", address: "522 S Lake Ave, Duluth, MN 55802", reservations: "Recommended", popularDishes: ["Golden Rings", "Steak Cheese French sandwich", "Wild Rice-Cranberry Meatloaf"],
        niche_keywords: ["Best bar near Canal Park Minnesota", "Grandma's Saloon & Grill (Canal Park) golden rings Canal Park", "bar with lake view Canal Park"], hours: { "Monday": "11:00 AM - 1:00 AM", "Tuesday": "11:00 AM - 1:00 AM", "Wednesday": "11:00 AM - 1:00 AM", "Thursday": "11:00 AM - 1:00 AM", "Friday": "11:00 AM - 1:00 AM", "Saturday": "11:00 AM - 1:00 AM", "Sunday": "11:00 AM - 1:00 AM" } },
    { name: "Grandma's Saloon & Grill (Miller Hill)", cuisine: "Bar • Pub • American", price: "$$", rating: "4.1", reviews: "2,345", description: "A lively pub in Miller Hill offering classic American fare like overstuffed sandwiches, burgers, ribs, wild rice dishes, jumbo onion rings, and stuffed mushrooms.", location: "Miller Hill", phone: "(218) 722‑9313", website: "grandmasrestaurants.com", address: "2202 Maple Grove Rd, Duluth, MN 55811", reservations: "Recommended", popularDishes: ["Overstuffed sandwiches", "Burgers", "Ribs", "Wild Rice Dishes", "Jumbo Onion Rings", "Stuffed Mushrooms"],
        niche_keywords: ["Best bar near Miller Hill Minnesota", "Grandma's Saloon & Grill (Miller Hill) overstuffed sandwiches Miller Hill", "Top rated bar Miller Hill"], hours: { "Monday": "11:00 AM - 8:00 PM", "Tuesday": "11:00 AM - 8:00 PM", "Wednesday": "11:00 AM - 8:00 PM", "Thursday": "11:00 AM - 8:00 PM", "Friday": "11:00 AM - 9:00 PM", "Saturday": "11:00 AM - 9:00 PM", "Sunday": "11:00 AM - 8:00 PM" } },
    { name: "Great Harvest Bread Co", cuisine: "Bakery • Café • Sandwiches", price: "$", rating: "4.2", reviews: "1,123", description: "A wholesome, family-owned bakery in Duluth that grinds its own whole wheat flour daily and serves freshly baked breads, pastries, and hearty sandwiches.", location: "East Duluth", phone: "(218) 728-9510", website: "greatharvestduluth.com", address: "3 S 13th Ave E Duluth, MN 55802", reservations: "none", popularDishes: ["Honey Whole Wheat Bread", "Smoked Turkey Goddess Sandwich", "The Cobb Salad"],
        niche_keywords: ["Best bakery near East Duluth Minnesota", "Great Harvest Bread Co honey whole wheat bread East Duluth", "Top rated bakery East Duluth"], hours: { "Monday": "6:30 AM - 5:00 PM", "Tuesday": "6:30 AM - 5:00 PM", "Wednesday": "6:30 AM - 5:00 PM", "Thursday": "6:30 AM - 5:00 PM", "Friday": "6:30 AM - 5:00 PM", "Saturday": "7:00 AM - 2:30 PM", "Sunday": "Closed" } },
    { name: "Hanabi Japanese Cuisine", cuisine: "Japanese • Sushi • Bar", price: "$$", rating: "4.5", reviews: "1,789", description: "A modern Japanese restaurant in Duluth offering inventive sushi rolls, hibachi fare, and a full bar in a warm lounge-style setting.", location: "Downtown Duluth", phone: "(218) 464‑4412", website: "hanabiduluthmn.com", address: "110 N 1st Ave W, Duluth, MN 55802", reservations: "Yes", popularDishes: ["North Shore Roll", "Spicy Tuna Roll", "Hibachi Chicken Fried Rice"],
        niche_keywords: ["Best japanese near downtown duluth Minnesota", "Hanabi Japanese Cuisine north shore roll downtown duluth", "Best sushi all you can eat downtown duluth"], hours: { "Monday": "11:00 AM - 10:00 PM", "Tuesday": "11:00 AM - 10:00 PM", "Wednesday": "11:00 AM - 10:00 PM", "Thursday": "11:00 AM - 10:00 PM", "Friday": "11:00 AM - 10:00 PM", "Saturday": "11:00 AM - 10:00 PM", "Sunday": "11:00 AM - 10:00 PM" } },
    { name: "Juice Pharm", cuisine: "Juice • Vegan • Healthy", price: "$$", rating: "4.3", reviews: "987", description: "A family‑run downtown Duluth juice bar and kitchen serving fresh-pressed juices, smoothies, acai bowls, and globally inspired plant‑based dishes.", location: "Downtown", phone: "(218) 522‑4545", website: "thepharmjuicebarandkitchen.com", address: "208 E 1st St, Duluth, MN 55802", reservations: "none", popularDishes: ["Acai Bowl", "Macho Burrito", "Buddha Bowl"],
        niche_keywords: ["Best juice near downtown Duluth Minnesota", "Juice Pharm acai bowl downtown Duluth", "Top rated juice downtown Duluth"], hours: { "Monday": "10:00 AM - 3:00 PM", "Tuesday": "10:00 AM - 3:00 PM", "Wednesday": "10:00 AM - 3:00 PM", "Thursday": "10:00 AM - 3:00 PM", "Friday": "10:00 AM - 3:00 PM", "Saturday": "10:00 AM - 3:00 PM", "Sunday": "10:00 AM - 3:00 PM" } },
    { name: "The Social House", cuisine: "Casual • American • Breakfast & Brunch", price: "$$", rating: "4.2", reviews: "1,234", description: "A warm, family‑friendly restaurant in Duluth/Hermantown known for giant homemade pancakes, BBQ Brisket Benedict, hearty omelets, and hand‑pattied burgers.", location: "Hermantown / Canal Park", phone: "(218) 727-8519 / (218) 606-1047", website: "thesocialhousemn.com", address: "4897 Miller Trunk Hwy, Hermantown, MN & 355 S Lake Ave, Duluth, MN", reservations: "none", popularDishes: ["BBQ Brisket Benedict", "Walleye Eggs Benedict", "Giant Pancakes"],
        niche_keywords: ["Best casual near hermantown / canal park Minnesota", "The Social House bbq brisket benedict hermantown / canal park", "casual with lake view hermantown / canal park"], hours: { "Monday": "8:00 AM - 3:00 PM", "Tuesday": "8:00 AM - 3:00 PM", "Wednesday": "8:00 AM - 3:00 PM", "Thursday": "8:00 AM - 3:00 PM", "Friday": "8:00 AM - 3:00 PM", "Saturday": "8:00 AM - 3:00 PM", "Sunday": "8:00 AM - 3:00 PM" } },
    { name: "The Spot Sports Bar & Grill", cuisine: "Bar • American • Sports", price: "$$", rating: "4.1", reviews: "1,567", description: "A lively venue in Duluth's Incline Station bowling alley with food, 8 HD TVs, darts, and a full-service bar.", location: "Lakeside / Downtown (Incline Station)", phone: "(218) 722-0671", website: "inclinestationbowling.com", address: "601 W Superior St, Duluth, MN 55802", reservations: "none", popularDishes: ["Fried Chicken Sandwich", "Nacho Cheese Fries", "Club Sandwich"],
        niche_keywords: ["Best bar near lakeside / downtown (incline station) Minnesota", "The Spot Sports Bar & Grill fried chicken sandwich lakeside / downtown (incline station)", "Top rated bar lakeside / downtown (incline station)"], hours: { "Monday": "11:00 AM - 1:30 AM", "Tuesday": "11:00 AM - 1:30 AM", "Wednesday": "11:00 AM - 1:30 AM", "Thursday": "11:00 AM - 1:30 AM", "Friday": "11:00 AM - 1:30 AM", "Saturday": "11:00 AM - 1:30 AM", "Sunday": "11:00 AM - 1:30 AM" } },
    { name: "Toasty's Sandwich Shop", cuisine: "Sandwiches • Café • American", price: "$$", rating: "4.3", reviews: "1,123", description: "A cozy neighborhood spot in downtown Duluth known for its grilled \"melts,\" burgers, salads, and homemade soups.", location: "Downtown Duluth", phone: "(218) 722-0915", website: "toastysduluth.com", address: "324 W Superior St Suite 21, Duluth, MN 55802", reservations: "none", popularDishes: ["Arriba Arriba Melt", "Tom Turkey Melt", "Bruschetta Salad"],
        niche_keywords: ["Best sandwiches near downtown duluth Minnesota", "Toasty's Sandwich Shop arriba arriba melt downtown duluth", "Top rated sandwiches downtown duluth"], hours: { "Monday": "11:00 AM - 8:00 PM", "Tuesday": "11:00 AM - 8:00 PM", "Wednesday": "11:00 AM - 8:00 PM", "Thursday": "11:00 AM - 8:00 PM", "Friday": "11:00 AM - 8:00 PM", "Saturday": "11:00 AM - 8:00 PM", "Sunday": "11:00 AM - 8:00 PM" } },
    { name: "Trophy Café", cuisine: "Café • American • Brunch", price: "$", rating: "4.2", reviews: "856", description: "A warm, nostalgic diner‑style café known for its big breakfast portions, friendly service, and cozy taxidermy-decor.", location: "New Duluth", phone: "(218) 522‑4558", website: "trophycafe.com", address: "1314 Commonwealth Ave, Duluth, MN 55808", reservations: "none", popularDishes: ["Trophy #2", "Meat Lovers Omelette", "Biscuits & Gravy"],
        niche_keywords: ["Best café near new duluth Minnesota", "Trophy Café trophy #2 new duluth", "Best brunch new duluth Minnesota"], hours: { "Monday": "7:00 AM - 2:00 PM", "Tuesday": "7:00 AM - 2:00 PM", "Wednesday": "7:00 AM - 2:00 PM", "Thursday": "7:00 AM - 2:00 PM", "Friday": "7:00 AM - 2:00 PM", "Saturday": "7:00 AM - 2:00 PM", "Sunday": "7:00 AM - 2:00 PM" } },
    { name: "Uncle Loui's Cafe", cuisine: "Café • Diner • American", price: "$", rating: "4.3", reviews: "1,789", description: "A longtime Duluth breakfast and lunch diner serving hearty, homestyle fare like omelets, pancakes, hash browns, and burgers.", location: "Downtown", phone: "(218) 727‑4518", website: "unclelouiscafe.com", address: "520 E 4th St, Duluth, MN 55805", reservations: "none", popularDishes: ["Pancakes", "Omelets", "French Toast"],
        niche_keywords: ["Best café near downtown Duluth Minnesota", "Uncle Loui's Cafe pancakes downtown Duluth", "Top rated café downtown Duluth"], hours: { "Monday": "Closed", "Tuesday": "6:00 AM - 1:00 PM", "Wednesday": "6:00 AM - 1:00 PM", "Thursday": "6:00 AM - 1:00 PM", "Friday": "6:00 AM - 1:00 PM", "Saturday": "7:00 AM - 1:00 PM", "Sunday": "7:00 AM - 1:00 PM" } },
    { name: "Va Bene", cuisine: "Italian • Contemporary • Lake‑view", price: "$$$", rating: "4.6", reviews: "2,618", description: "A modern Italian restaurant in Duluth with fresh pastas, salads, steak, seafood, and gelato, all paired with spectacular views of Lake Superior.", location: "Lakewalk", phone: "(218) 722‑1518", website: "vabenecaffe.com", address: "734 E Superior St, Duluth, MN 55802", reservations: "Required", popularDishes: ["Rosemary Focaccia", "Gnocchi", "Seafood Risotto"],
        niche_keywords: ["Best italian near lakewalk Minnesota", "Va Bene rosemary focaccia lakewalk", "Top rated italian lakewalk"], hours: { "Monday": "11:00 AM - 9:00 PM", "Tuesday": "11:00 AM - 9:00 PM", "Wednesday": "11:00 AM - 9:00 PM", "Thursday": "11:00 AM - 9:00 PM", "Friday": "11:00 AM - 9:00 PM", "Saturday": "11:00 AM - 9:00 PM", "Sunday": "11:00 AM - 9:00 PM" } },
    { name: "Vitta Pizza (Canal Park)", cuisine: "Pizza • Italian • Casual", price: "$$", rating: "4.4", reviews: "1,234", description: "Locally owned Neapolitan-style pizza made in a wood-fired brick oven using fresh Italian ingredients.", location: "Canal Park", phone: "(218) 727-2226", website: "vittapizza.com", address: "307 Canal Park Dr, Duluth, MN 55802", reservations: "none", popularDishes: ["Margherita", "Silvio", "Tomasso Pizzas"],
        niche_keywords: ["Best pizza near Canal Park Minnesota", "Vitta Pizza (Canal Park) margherita Canal Park", "pizza with lake view Canal Park"], hours: { "Monday": "11:00 AM - 9:00 PM", "Tuesday": "11:00 AM - 9:00 PM", "Wednesday": "11:00 AM - 9:00 PM", "Thursday": "11:00 AM - 9:00 PM", "Friday": "11:00 AM - 10:00 PM", "Saturday": "11:00 AM - 10:00 PM", "Sunday": "11:00 AM - 9:00 PM" } },
    { name: "Vitta Pizza (Central Entrance)", cuisine: "Pizza • Italian • Casual", price: "$$", rating: "4.4", reviews: "987", description: "Locally owned Neapolitan-style pizza made in a wood-fired brick oven with fresh Italian ingredients.", location: "Central Entrance", phone: "(218) 464-4843", website: "vittapizza.com", address: "21 W Central Entrance, Duluth, MN 55811", reservations: "none", popularDishes: ["Margherita", "Lolita", "Cheesy Breadsticks"],
        niche_keywords: ["Best pizza near central entrance Minnesota", "Vitta Pizza (Central Entrance) margherita central entrance", "Best pizza delivery central entrance Minnesota"], hours: { "Monday": "11:00 AM - 8:30 PM", "Tuesday": "11:00 AM - 8:30 PM", "Wednesday": "11:00 AM - 8:30 PM", "Thursday": "11:00 AM - 8:30 PM", "Friday": "11:00 AM - 9:00 PM", "Saturday": "11:00 AM - 9:00 PM", "Sunday": "11:00 AM - 8:30 PM" } },
    { name: "Wasabi All You Can Eat Superior", cuisine: "Japanese • Sushi • Hibachi", price: "$$", rating: "4.5", reviews: "1,456", description: "A Japanese restaurant in Superior (near Duluth) offering all-you-can-eat sushi, hibachi, and grill in a modern, relaxed setting.", location: "Superior, WI", phone: "(715) 718-0017", website: "wasabisuperior.com", address: "3333 Tower Ave, Superior, WI 54880", reservations: "none", popularDishes: ["All-You-Can-Eat Sushi", "Hibachi Chicken", "Steak"],
        niche_keywords: ["Best japanese near Superior Wisconsin Minnesota", "Wasabi All You Can Eat Superior all-you-can-eat sushi Superior Wisconsin", "Best sushi all you can eat Superior Wisconsin"], hours: { "Monday": "11:00 AM - 9:30 PM", "Tuesday": "11:00 AM - 9:30 PM", "Wednesday": "11:00 AM - 9:30 PM", "Thursday": "11:00 AM - 9:30 PM", "Friday": "11:00 AM - 10:00 PM", "Saturday": "11:00 AM - 10:00 PM", "Sunday": "Closed" } },
    { name: "Wired Whiskers", cuisine: "Café • Cat Café • Coffee", price: "$", rating: "4.3", reviews: "756", description: "A cozy cat café in Duluth where you can enjoy espresso drinks, baked goods, and hang out with adoptable rescue cats in a relaxing lounge.", location: "East Duluth", phone: "(218) 481-7107", website: "wiredwhisker.com", address: "1823 E Superior St Duluth, MN 55812", reservations: "none", popularDishes: ["Cappuccino", "Bagels", "Chile Verde Breakfast Burrito"],
        niche_keywords: ["Best café near East Duluth Minnesota", "Wired Whiskers cappuccino East Duluth", "Top rated café East Duluth"], hours: { "Monday": "7:00 AM - 5:00 PM", "Tuesday": "7:00 AM - 5:00 PM", "Wednesday": "7:00 AM - 5:00 PM", "Thursday": "7:00 AM - 5:00 PM", "Friday": "7:00 AM - 7:00 PM", "Saturday": "7:00 AM - 7:00 PM", "Sunday": "7:00 AM - 7:00 PM" } },
    { name: "Wussow's Concert Cafe", cuisine: "Café • Bar • Music Venue", price: "$$", rating: "4.4", reviews: "987", description: "A cozy, community-centered coffeehouse and live music venue offering espresso drinks, homemade food, and regular performances.", location: "West Duluth", phone: "(218) 624-5957", website: "wussows.com", address: "324 N Central Ave, Duluth, MN 55807", reservations: "none", popularDishes: ["Breakfast Melt", "Lavender Dark Chocolate Mocha", "Smoked Trout Wrap"],
        niche_keywords: ["Best café near West Duluth Minnesota", "Wussow's Concert Cafe breakfast melt West Duluth", "Top rated café West Duluth"], hours: { "Monday": "6:30 AM - 8:00 PM", "Tuesday": "6:30 AM - 6:30 PM", "Wednesday": "6:30 AM - 9:00 PM", "Thursday": "6:30 AM - 8:00 PM", "Friday": "6:30 AM - 6:30 PM", "Saturday": "7:00 AM - 6:30 PM", "Sunday": "8:00 AM - 3:00 PM" } },
    { name: "Zeitgeist Arts Café", cuisine: "American • Contemporary • Bar", price: "$$", rating: "4.4", reviews: "1,123", description: "A nonprofit arts-center restaurant and bar in downtown Duluth that supports the Zeitgeist performance space, offering seasonal, locally inspired comfort food, craft beer, wine, and cocktails.", location: "Downtown Duluth", phone: "(218) 722-9100", website: "zeitgeistarts.com", address: "222 E Superior St, Duluth, MN 55802", reservations: "Recommended", popularDishes: ["Coconut Curry Rice Bowl", "Pommes Frites", "Vegan Banh Mi"],
        niche_keywords: ["Best american near downtown duluth Minnesota", "Zeitgeist Arts Café coconut curry rice bowl downtown duluth", "Top rated american downtown duluth"], hours: { "Monday": "Closed", "Tuesday": "4:00 PM - 10:00 PM", "Wednesday": "4:00 PM - 10:00 PM", "Thursday": "4:00 PM - 10:00 PM", "Friday": "4:00 PM - 11:00 PM", "Saturday": "4:00 PM - 11:00 PM", "Sunday": "Closed" } },
    { name: "Zen House Japanese Restaurant", cuisine: "Japanese • Sushi • Seafood", price: "$$", rating: "4.5", reviews: "1,789", description: "A warm, authentic Japanese spot in Duluth serving sushi, tempura, noodle soups, rice bowls, and stir fries in a calmly elegant setting.", location: "Hermantown", phone: "(218) 722-9365", website: "zenhouseduluth.com", address: "4023 Woodland Ave, Duluth, MN 55803", reservations: "none", popularDishes: ["Tempura Mushrooms", "Soy Sauce Ramen", "Zen Roll"],
        niche_keywords: ["Best japanese near Hermantown Minnesota", "Zen House Japanese Restaurant tempura mushrooms Hermantown", "Best sushi all you can eat Hermantown"], hours: { "Monday": "11:00 AM - 8:30 PM", "Tuesday": "11:00 AM - 8:30 PM", "Wednesday": "11:00 AM - 8:30 PM", "Thursday": "11:00 AM - 8:30 PM", "Friday": "11:00 AM - 9:00 PM", "Saturday": "11:00 AM - 9:00 PM", "Sunday": "12:00 PM - 7:00 PM" } },
    { name: "Zhong Hua", cuisine: "Chinese • Asian", price: "$$", rating: "4.2", reviews: "1,234", description: "Casual Chinese restaurant serving traditional dishes, combos, and lunch specials.", location: "Duluth, MN", phone: "(218) ?", website: "N/A", address: "—", reservations: "none", popularDishes: ["General Tso's", "Fried Rice", "Egg Rolls"],
        niche_keywords: ["Best chinese near duluth, mn Minnesota", "Zhong Hua general tso's duluth, mn", "Top rated chinese duluth, mn"], hours: { "Monday": "Hours vary", "Tuesday": "Hours vary", "Wednesday": "Hours vary", "Thursday": "Hours vary", "Friday": "Hours vary", "Saturday": "Hours vary", "Sunday": "Hours vary" } }
];

// Helper function to convert restaurant name to slug format (matching folder structure)
function nameToSlug(name) {
    // Extract location from parentheses if present
    let location = "";
    let cleanName = name;
    
    if (name.includes("(Miller Hill)")) {
        location = "-miller-hill";
        cleanName = name.replace(/\s*\(Miller Hill\)\s*/g, "");
    } else if (name.includes("(Canal Park)")) {
        location = "-canal-park";
        cleanName = name.replace(/\s*\(Canal Park\)\s*/g, "");
    } else if (name.includes("(Central Entrance)")) {
        location = "-central-entrance";
        cleanName = name.replace(/\s*\(Central Entrance\)\s*/g, "");
    } else if (name.includes("(London Road)")) {
        location = "-london-road";
        cleanName = name.replace(/\s*\(London Road\)\s*/g, "");
    }
    
    // Convert to lowercase
    let slug = cleanName.toLowerCase();
    
    // Replace special characters with ASCII equivalents
    slug = slug.replace(/é/g, 'e').replace(/è/g, 'e').replace(/ê/g, 'e').replace(/ë/g, 'e');
    
    // Remove special characters (keep only letters, numbers, spaces, hyphens)
    slug = slug.replace(/[^a-z0-9 -]/g, '');
    
    // Replace spaces with hyphens
    slug = slug.replace(/\s+/g, '-');
    
    // Remove multiple consecutive hyphens
    slug = slug.replace(/-+/g, '-');
    
    // Remove leading/trailing hyphens
    slug = slug.replace(/^-|-$/g, '');
    
    // Add location suffix if needed
    return slug + location;
}

// Mapping of restaurant names to their photo information in the "Restaurant Photos" folder
// Format: "Restaurant Name": { folderNumber: 64, filename: "photo-filename.jpg" }
const restaurantPhotos = {
    "Duluth Grill": {
        folderNumber: 36,
        filename: "Screenshot 2025-12-02 at 7.10.32\u202FAM.png",
        allPhotos: [
            "584424347_18491885107072492_1305928869302613271_nfull.webp",
            "Screenshot 2025-12-02 at 7.08.53 AM.png",
            "Screenshot 2025-12-02 at 7.08.57 AM.png",
            "Screenshot 2025-12-02 at 7.09.12 AM.png",
            "Screenshot 2025-12-02 at 7.09.32 AM.png",
            "Screenshot 2025-12-02 at 7.10.04 AM.png",
            "Screenshot 2025-12-02 at 7.10.32 AM.png",
            "Screenshot 2025-12-02 at 7.11.31 AM.png",
            "Screenshot 2025-12-02 at 7.11.55 AM.png",
            "Screenshot 2025-12-02 at 7.12.12 AM.png",
            "Screenshot 2025-12-02 at 7.13.57 AM.png",
            "Screenshot 2025-12-02 at 7.14.28 AM.png",
            "Screenshot 2025-12-02 at 7.15.10 AM.png"
        ]
    },
    "7 West Tap House(Miller Hill)": {
        folderNumber: 3,
        filename: "10584697_566123240193188_1982755173_n.jpg",
        allPhotos: [
            "10584697_566123240193188_1982755173_n.jpg",
            "10953154_1413553268953932_2074637807_n.jpg",
            "11226778_452788438232765_1695316346_n.jpg",
            "23098958_638066629915410_3452931978297344000_n.jpg",
            "23280007_1975892059301401_8429530744749031424_n.jpg",
            "download.jpg"
        ]
    },
    "Alto Pino": {
        folderNumber: 5,
        filename: "Screenshot 2025-12-02 at 7.19.08\u202FAM.png",
        allPhotos: [
            "Screenshot 2025-12-02 at 7.17.08 AM.png",
            "Screenshot 2025-12-02 at 7.17.15 AM.png",
            "Screenshot 2025-12-02 at 7.17.31 AM.png",
            "Screenshot 2025-12-02 at 7.18.19 AM.png",
            "Screenshot 2025-12-02 at 7.18.27 AM.png",
            "Screenshot 2025-12-02 at 7.18.46 AM.png",
            "Screenshot 2025-12-02 at 7.18.58 AM.png",
            "Screenshot 2025-12-02 at 7.19.08 AM.png",
            "Screenshot 2025-12-02 at 7.19.27 AM.png",
            "Screenshot 2025-12-02 at 7.19.33 AM.png",
            "Screenshot 2025-12-02 at 7.19.52 AM.png",
            "Screenshot 2025-12-02 at 7.20.13 AM.png",
            "Screenshot 2025-12-02 at 7.20.56 AM.png",
            "Screenshot 2025-12-02 at 7.21.09 AM.png",
            "Screenshot 2025-12-02 at 7.21.30 AM.png",
            "Screenshot 2025-12-02 at 7.22.01 AM.png"
        ]
    },
    "Va Bene": {
        folderNumber: 98,
        filename: "Screenshot 2025-12-02 at 7.26.11\u202FAM.png",
        allPhotos: [
            "Screenshot 2025-12-02 at 7.25.25 AM.png",
            "Screenshot 2025-12-02 at 7.25.52 AM.png",
            "Screenshot 2025-12-02 at 7.25.59 AM.png",
            "Screenshot 2025-12-02 at 7.26.11 AM.png",
            "Screenshot 2025-12-02 at 7.26.27 AM.png",
            "Screenshot 2025-12-02 at 7.26.57 AM.png",
            "Screenshot 2025-12-02 at 7.27.23 AM.png",
            "Screenshot 2025-12-02 at 7.27.39 AM.png",
            "Screenshot 2025-12-02 at 7.27.53 AM.png",
            "Screenshot 2025-12-02 at 7.28.39 AM.png",
            "Screenshot 2025-12-02 at 7.29.40 AM.png",
            "Screenshot 2025-12-02 at 7.30.13 AM.png",
            "enclosed_solarium_duluth_lake_views_italian_restaurant-290x160.jpg"
        ]
    },
    "Northern Waters Smokehaus": {
        folderNumber: 64,
        filename: "Storefront+Patio+06-2024.webp",
        allPhotos: [
            "482707297_18486363781046676_5665944392773207498_n.jpg",
            "482759316_18486363790046676_3586932510239256777_n.jpg",
            "482810328_18486363760046676_4968769468087598003_n.jpg",
            "482829391_18486363862046676_2071466819608436997_n.jpg",
            "482845971_18486363799046676_1654427375083587832_n.jpg",
            "482850865_18486363829046676_1653489072401057760_n.jpg",
            "482879926_18486363859046676_2387815811757695479_n.jpg",
            "482884321_18486363745046676_8890529902560048214_n.jpg",
            "482952679_18486363820046676_1188578761616237520_n.jpg",
            "483007759_18486363772046676_7491784328536596152_n.jpg",
            "483083971_18486363841046676_8380515790956377680_n.jpg",
            "483149356_18486363910046676_6120745070947309590_n.jpg",
            "483161541_18486363871046676_6498393164930337717_n.jpg",
            "483165461_18486363901046676_597191609838979606_n.jpg",
            "483211467_18486363880046676_6958789782752508152_n.jpg",
            "483234434_18486363889046676_6508564336636427039_n.jpg",
            "483236306_18486363721046676_1770433575087502106_n.jpg",
            "Sandwich+Signs.webp",
            "Storefront+Patio+06-2024.webp"
        ]
    },
    "Fitger's Brewhouse Brewery & Grille": {
        folderNumber: 37,
        filename: "Screenshot 2025-12-02 at 6.32.02\u202FPM.png",
        allPhotos: [
            "Screenshot 2025-12-02 at 6.32.02 PM.png",
            "Screenshot 2025-12-02 at 6.32.16 PM.png",
            "Screenshot 2025-12-02 at 6.32.24 PM.png",
            "Screenshot 2025-12-02 at 6.32.36 PM.png",
            "Screenshot 2025-12-02 at 6.32.59 PM.png",
            "Screenshot 2025-12-02 at 6.33.28 PM.png",
            "Screenshot 2025-12-02 at 6.33.39 PM.png",
            "Screenshot 2025-12-02 at 6.35.00 PM.png",
            "SnapInsta.to_341950893_890968438640983_2798447449730338209_n.jpg",
            "SnapInsta.to_347642345_243268098294591_3479674226272742245_n.png",
            "SnapInsta.to_347788431_812839336940452_585392745251085561_n.png"
        ]
    },
    "OMC Smokehouse": {
        folderNumber: 67,
        filename: "548527097_18413736886115424_2937642158121684275_n.jpg",
        allPhotos: [
            "426538139_18329729359115424_2713411797011606830_n.jpg",
            "446863839_18347598394115424_1835753847993087306_n.jpg",
            "449053835_18350421034115424_3762523172778136139_n.jpg",
            "527590616_18408382537115424_3025418285146478095_n.jpg",
            "541926371_18412813459115424_1853187376608108662_n.jpg",
            "548527097_18413736886115424_2937642158121684275_n.jpg",
            "551397947_18414586132115424_6430218361437892629_n.jpg",
            "557411675_18416358373115424_8325910323420748189_n.jpg",
            "565412828_18418556941115424_4885530204796069978_n.jpg",
            "571513747_18422085478115424_3781392602728072716_n.jpg",
            "572536367_18423403270115424_272561758650584307_n.jpg",
            "573377182_18422543857115424_9099481153509206770_n.jpg",
            "582854779_18425489215115424_280271548908638535_n.jpg",
            "590421761_18426877603115424_7371288733064348174_n.jpg"
        ]
    },
    "New Scenic Café": {
        folderNumber: 63,
        filename: "Screenshot 2025-12-02 at 6.14.43\u202FPM.png",
        allPhotos: [
            "Screenshot 2025-12-02 at 6.14.43 PM.png",
            "Screenshot 2025-12-02 at 6.15.59 PM.png",
            "Screenshot 2025-12-02 at 6.16.18 PM.png",
            "Screenshot 2025-12-02 at 6.16.26 PM.png",
            "Screenshot 2025-12-02 at 6.16.37 PM.png",
            "Screenshot 2025-12-02 at 6.16.57 PM.png",
            "Screenshot 2025-12-02 at 6.17.09 PM.png",
            "Screenshot 2025-12-02 at 6.17.33 PM.png",
            "Screenshot 2025-12-02 at 6.17.59 PM.png",
            "Screenshot 2025-12-02 at 6.18.10 PM.png",
            "Screenshot 2025-12-02 at 6.18.24 PM.png",
            "Screenshot 2025-12-02 at 6.18.44 PM.png",
            "Screenshot 2025-12-02 at 6.19.13 PM.png",
            "Screenshot 2025-12-02 at 6.19.49 PM.png"
        ]
    },
    "Cloud 9 Sushi & Hibachi": {
        folderNumber: 28,
        filename: "Screenshot 2025-12-02 at 6.43.59\u202FPM.png",
        allPhotos: [
            "Screenshot 2025-12-02 at 6.41.26 PM.png",
            "Screenshot 2025-12-02 at 6.41.45 PM.png",
            "Screenshot 2025-12-02 at 6.42.32 PM.png",
            "Screenshot 2025-12-02 at 6.42.54 PM.png",
            "Screenshot 2025-12-02 at 6.43.06 PM.png",
            "Screenshot 2025-12-02 at 6.43.29 PM.png",
            "Screenshot 2025-12-02 at 6.43.44 PM.png",
            "Screenshot 2025-12-02 at 6.43.59 PM.png",
            "Screenshot 2025-12-02 at 6.44.09 PM.png",
            "Screenshot 2025-12-02 at 6.44.31 PM.png",
            "Screenshot 2025-12-02 at 6.44.52 PM.png",
            "Screenshot 2025-12-02 at 6.45.46 PM.png",
            "download.jpg"
        ]
    },
    "Clyde Iron Works Restaurant & Bar": {
        folderNumber: 29,
        filename: "499922042_1283906450410788_6063813335053097608_n.jpg",
        allPhotos: [
            "499922042_1283906450410788_6063813335053097608_n.jpg",
            "532586774_1363905352410897_7100370096036391990_n.jpg",
            "545598622_1386966976771401_4855829570594905320_n.jpg",
            "576173208_1445276760940422_4066994143782177456_n.jpg",
            "577233250_1445280607606704_6595977750101480446_n.jpg",
            "581176931_1449265213874910_5692963381858024830_n.jpg",
            "download.jpg"
        ]
    },
    "Coney Island Deluxe": {
        folderNumber: 30,
        filename: "463618575_8548850801827039_5120183206792981031_n.jpg",
        allPhotos: [
            "463618575_8548850801827039_5120183206792981031_n.jpg",
            "485952898_1184515190340621_733563651844107588_n.jpg",
            "487850960_1195343782591095_6071488186560063180_n.jpg",
            "488253167_1197365659055574_1624170572026414722_n.jpg",
            "492157655_1214263397365800_5065857998766963223_n.jpg",
            "545548271_1332904595501679_1310112226417405032_n.jpg"
        ]
    },
    "Hanabi Japanese Cuisine": {
        folderNumber: 43,
        filename: "download-1.jpg",
        allPhotos: [
            "download-1.jpg",
            "download-2.jpg",
            "download-3.jpg",
            "download-4.jpg",
            "download-5.jpg",
            "download-6.jpg",
            "download-7.jpg",
            "download-8.jpg",
            "download-9.jpg",
            "download.jpg",
            "images-1.jpg",
            "images.jpg"
        ]
    },
    "Zen House Japanese Restaurant": {
        folderNumber: 105,
        filename: "SnapInsta.to_18011581_1264497377004685_7997314673785438208_n.jpg",
        allPhotos: [
            "SnapInsta.to_18011581_1264497377004685_7997314673785438208_n.jpg",
            "SnapInsta.to_18580345_1708652669441650_3625008335478063104_n.jpg",
            "SnapInsta.to_18812231_313043879131781_5721898625940848640_n.jpg",
            "download-1.jpg",
            "download-2.jpg",
            "download-3.jpg",
            "download-4.jpg",
            "download.jpg",
            "images.jpg",
            "w768.jpg"
        ]
    },
    "At Sara's Table Chester Creek Cafe": {
        folderNumber: 6,
        filename: "download-1.jpg",
        allPhotos: [
            "download-1.jpg",
            "download-2.jpg",
            "download-3.jpg",
            "download-4.jpg",
            "download-5.jpg",
            "download.jpg",
            "images-1.jpg",
            "images-2.jpg",
            "images-3.jpg",
            "images-4.jpg",
            "images.jpg"
        ]
    },
    "Azteca's Mexican Grill": {
        folderNumber: 7,
        filename: "461279064_18043789784003110_987818838625476223_n.jpg",
        allPhotos: [
            "461279064_18043789784003110_987818838625476223_n.jpg",
            "461513830_3627417890904223_1886036993866173102_n.jpg",
            "463823379_18045685799003110_1615715461975907106_n.jpg",
            "464295770_18046185011003110_8821244250059317394_n.jpg",
            "468666759_18049635317003110_5278565509566201356_n.jpg",
            "469175373_18050367461003110_2842349115405329894_n.jpg",
            "469197880_18050367497003110_5475738638452684764_n.jpg",
            "download-1.jpg",
            "download.jpg"
        ]
    },
    "Bali Asian Cuisine": {
        folderNumber: 8,
        filename: "download-1.jpg",
        allPhotos: [
            "download-1.jpg",
            "download-2.jpg",
            "download-3.jpg",
            "download.jpg",
            "images-1.jpg",
            "images-2.jpg",
            "images-3.jpg",
            "images.jpg"
        ]
    },
    "Thai By Thai": {
        folderNumber: 86,
        filename: "download-1.jpg",
        allPhotos: [
            "download-1.jpg",
            "download-2.jpg",
            "download-3.jpg",
            "download-4.jpg",
            "download-5.jpg",
            "download-6.jpg",
            "download.jpg",
            "images-1.jpg",
            "images-2.jpg",
            "images-3.jpg",
            "images.jpg"
        ]
    },
    "Bellisio's Italian Restaurant & Wine Bar": {
        folderNumber: 9,
        filename: "524613050_1307933684668418_4180442537238943191_n.jpg",
        allPhotos: [
            "524613050_1307933684668418_4180442537238943191_n.jpg",
            "530459054_1323616946433425_7209644138686736649_n.jpg",
            "544559196_1346697667458686_7687564840518974788_n.jpg",
            "download-1.jpg",
            "download-2.jpg",
            "download-3.jpg",
            "download-4.jpg",
            "download-5.jpg",
            "download.jpg"
        ]
    },
    "Big Daddy's Burgers": {
        folderNumber: 10,
        filename: "download-1.jpg",
        allPhotos: [
            "download-1.jpg",
            "download-2.jpg",
            "download-3.jpg",
            "download-4.jpg",
            "download.jpg",
            "images-1.jpg",
            "images-2.jpg",
            "images-3.jpg",
            "images.jpg"
        ]
    },
    "Bridgeman's": {
        folderNumber: 14,
        filename: "download-1.jpg",
        allPhotos: [
            "download-1.jpg",
            "download-2.jpg",
            "download-3.jpg",
            "download-4.jpg",
            "download-5.jpg",
            "download-6.jpg",
            "download-7.jpg",
            "download.jpg",
            "images.jpg"
        ]
    },
    "Black Woods Grill & Bar": {
        folderNumber: 11,
        filename: "download-1.jpg",
        allPhotos: [
            "download-1.jpg",
            "download-2.jpg",
            "download-3.jpg",
            "download-4.jpg",
            "download-5.jpg",
            "download-6.jpg",
            "download-7.jpg",
            "download.jpg",
            "images-1.jpg",
            "images-2.jpg",
            "images.jpg"
        ]
    },
    "Boat Club Restaurant & Bar": {
        folderNumber: 12,
        filename: "download-1.jpg",
        allPhotos: [
            "download-1.jpg",
            "download-2.jpg",
            "download-3.jpg",
            "download-4.jpg",
            "download-5.jpg",
            "download-6.jpg",
            "download-7.jpg",
            "download.jpg",
            "images.jpg"
        ]
    },
    "BoomTown Woodfire Bar & Grill": {
        folderNumber: 13,
        filename: "522592672_835991405617102_8902602671071330722_n.jpg",
        allPhotos: [
            "522592672_835991405617102_8902602671071330722_n.jpg",
            "525579209_844577171425192_5940623500307517664_n.jpg",
            "527534288_847147114501531_7914626517948473027_n.jpg",
            "545612201_875855641630678_2138054582248959175_n.jpg",
            "550091714_884015734148002_479674444587700262_n.jpg",
            "550993490_887295817153327_3378055347217280016_n.jpg",
            "575752597_923222940227281_7951300829953504163_n.jpg",
            "download-1.jpg",
            "download-2.jpg",
            "download-3.jpg",
            "download.jpg",
            "images.jpg"
        ]
    },
    "Bulldog Pizza & Grill": {
        folderNumber: 16,
        filename: "481193185_9419691251402688_2046325751736930361_n.jpg",
        allPhotos: [
            "481193185_9419691251402688_2046325751736930361_n.jpg",
            "481672104_1199545855508064_7459049411195585874_n.jpg",
            "485589955_18493240663026885_5884988413079657771_n.jpg",
            "517996710_18514219906026885_4094575702335605362_n.jpg",
            "534727623_18521502118026885_5002900113726862742_n.jpg",
            "568541690_18535149328026885_6223215375036289673_n.jpg",
            "download-1.jpg",
            "download-2.jpg",
            "download-3.jpg",
            "download-4.jpg",
            "download.jpg",
            "images.jpg"
        ]
    },
    "Burnett Dairy": {
        folderNumber: 17,
        filename: "480300062_122210381138188440_2655585271796278200_n.jpg",
        allPhotos: [
            "480300062_122210381138188440_2655585271796278200_n.jpg",
            "download-1.jpg",
            "download.jpg",
            "images-1.jpg",
            "images.jpg"
        ]
    },
    "Burrito Union": {
        folderNumber: 18,
        filename: "download-1.jpg",
        allPhotos: [
            "download-1.jpg",
            "download-2.jpg",
            "download-3.jpg",
            "download-4.jpg",
            "download.jpg",
            "images-1.jpg",
            "images.jpg"
        ]
    },
    "Caddy Shack Indoor Golf & Pub": {
        folderNumber: 19,
        filename: "484801260_1199105655551463_3485394684346758440_n.jpg",
        allPhotos: [
            "484801260_1199105655551463_3485394684346758440_n.jpg",
            "484872418_1199105695551459_9210021947335596418_n.jpg",
            "486638992_1210204177774944_5666248943333641273_n.jpg",
            "487061428_1212659557529406_5184322936257715611_n.jpg",
            "487375237_1212370214225007_7368302777412823227_n.jpg",
            "_original.webp",
            "download.jpg"
        ]
    },
    "Canal Park Brewing Company": {
        folderNumber: 20,
        filename: "490267131_18076916869745414_7631916628626495833_n.jpg",
        allPhotos: [
            "490267131_18076916869745414_7631916628626495833_n.jpg",
            "492009141_1158903046275770_449401236069366890_n.jpg",
            "495121599_1158899906276084_1890891582557720776_n.jpg",
            "496923893_1152092503623491_9140922795157843017_n.jpg",
            "497462796_1152092416956833_8062893994920158619_n.jpg",
            "498340339_1156918123140929_1345701558320686894_n.jpg",
            "506613691_1176046127894795_4645818980289066879_n.jpg",
            "540510374_1240533158112758_8303161159000019296_n.jpg",
            "565924577_1287536640079076_1092014812244950044_n.jpg",
            "download.jpg"
        ]
    },
    "Restaurant 301": {
        folderNumber: 77,
        filename: "489529352_1086829090131852_5510052445319631002_n.jpg",
        allPhotos: [
            "489529352_1086829090131852_5510052445319631002_n.jpg",
            "489957886_1086835003464594_8783767343512288006_n.jpg",
            "490250863_1088387856642642_6892439247050358649_n.jpg",
            "490295291_1087735523374542_6464792716682621350_n.jpg",
            "490374421_1085777216903706_462420500960168004_n.jpg",
            "490446186_1088387969975964_8606514991938537549_n.jpg",
            "490699992_1088387966642631_628162160041415570_n.jpg",
            "490703848_1088387639975997_7063003422736087103_n.jpg",
            "download-1.jpg",
            "download-2.jpg",
            "download.jpg"
        ]
    },
    "Wasabi All You Can Eat Superior": {
        folderNumber: 101,
        filename: "download-1.jpg",
        allPhotos: [
            "download-1.jpg",
            "download-2.jpg",
            "download-3.jpg",
            "download-4.jpg",
            "download-5.jpg",
            "download-6.jpg",
            "download.jpg",
            "images.jpg"
        ]
    },
    "Pizza Lucé": {
        folderNumber: 76,
        filename: "download-1.jpg",
        allPhotos: [
            "download-1.jpg",
            "download-2.jpg",
            "download-3.jpg",
            "download-4.jpg",
            "download-5.jpg",
            "download-6.jpg",
            "download.jpg",
            "images-1.jpg",
            "images.jpg"
        ]
    },
    "Howard's Que": {
        folderNumber: 45,
        filename: "download.jpg",
        allPhotos: [
            "download.jpg"
        ]
    },
    "PhoHolic Taste of Vietnam (Central Entrance)": {
        folderNumber: 73,
        filename: "download-1.jpg",
        allPhotos: [
            "download-1.jpg",
            "download-2.jpg",
            "download-3.jpg",
            "download-4.jpg",
            "download-5.jpg",
            "download-6.jpg",
            "download.jpg",
            "images.jpg"
        ]
    },
    "Cantonese House": {
        folderNumber: 21,
        filename: "download-1.jpg",
        allPhotos: [
            "download-1.jpg",
            "download-2.jpg",
            "download-3.jpg",
            "download.jpg"
        ]
    },
    "Carmody's Irish Pub": {
        folderNumber: 22,
        filename: "30830232_591209094581551_8591404424297971712_n.jpg",
        allPhotos: [
            "30830232_591209094581551_8591404424297971712_n.jpg",
            "31474826_2106784366028616_8414409019598307328_n.jpg",
            "32035688_177877192874521_273429704101330944_n.jpg",
            "download-1.jpg",
            "download.jpg"
        ]
    },
    "Cast Iron Bar & Grill": {
        folderNumber: 23,
        filename: "506468102_1331485582316469_6977577473484190427_n.jpg",
        allPhotos: [
            "506468102_1331485582316469_6977577473484190427_n.jpg",
            "518365266_1359018089563218_7179712983705910583_n.jpg",
            "558176214_1440530034745356_6636959319134387428_n.jpg",
            "586917792_1483721040426255_2195761098504130219_n.jpg",
            "587907038_1485604730237886_7812092606726867694_n.jpg",
            "588558404_1487267573404935_1909006375493139373_n.jpg",
            "590269607_1489179633213729_4502344158090555347_n.jpg",
            "593976985_1493318929466466_142683337067164740_n.jpg",
            "594551027_1494213112710381_6433386237261299086_n.jpg"
        ]
    },
    "Chachos Taqueria": {
        folderNumber: 24,
        filename: "download-1.jpg",
        allPhotos: [
            "download-1.jpg",
            "download-2.jpg",
            "download-3.jpg",
            "download-4.jpg",
            "download.jpg",
            "images.jpg"
        ]
    },
    "Chicken n' Whaaat?!": {
        folderNumber: 25,
        filename: "download-1.jpg",
        allPhotos: [
            "download-1.jpg",
            "download-2.jpg",
            "download-3.jpg",
            "download-4.jpg",
            "download-5.jpg",
            "download.jpg",
            "images-1.jpg",
            "images-2.jpg",
            "images.jpg"
        ]
    },
    "China King": {
        folderNumber: 26,
        filename: "102952936_3704190849607492_8259942867324222037_n.jpg",
        allPhotos: [
            "102952936_3704190849607492_8259942867324222037_n.jpg",
            "103433197_3704191189607458_8637733934154980967_n.jpg",
            "483487992_1048965993919494_2776539441827636621_n.jpg"
        ]
    },
    "China Star": {
        folderNumber: 27,
        filename: "459024604_8092944934094273_2212592374492036102_n.jpg",
        allPhotos: [
            "459024604_8092944934094273_2212592374492036102_n.jpg",
            "509082080_9971988942856520_1214106121203602761_n-1.jpg",
            "download.jpg"
        ]
    },
    "India Palace": {
        folderNumber: 48,
        filename: "469666402_600208912492234_6651961516572506619_n.jpg",
        allPhotos: [
            "469666402_600208912492234_6651961516572506619_n.jpg",
            "469898556_602624208917371_8255430049225138385_n.jpg",
            "download-1.jpg",
            "download-2.jpg",
            "download-3.jpg",
            "download.jpg"
        ]
    },
    "Corktown Eatery and Bar": {
        folderNumber: 31,
        filename: "download-1.jpg",
        allPhotos: [
            "download-1.jpg",
        "download-2.jpg",
        "download-3.jpg",
        "download-4.jpg",
        "download-5.jpg",
        "download-6.jpg",
        "download-7.jpg",
        "download.jpg"
        ]
    },
    "Crooked Pint Ale House": {
        folderNumber: 32,
        filename: "download-1.jpg",
        allPhotos: [
            "download-1.jpg",
        "download-2.jpg",
        "download-3.jpg",
        "download-4.jpg",
        "download-5.jpg",
        "download.jpg"
        ]
    },
    "Dovetail Café": {
        folderNumber: 33,
        filename: "download-1.jpg",
        allPhotos: [
            "download-1.jpg",
        "download-2.jpg",
        "download-3.jpg",
        "download-4.jpg",
        "download-5.jpg",
        "download.jpg",
        "images-1.jpg",
        "images.jpg"
        ]
    },
    "Dubh Linn Irish Brew Pub": {
        folderNumber: 34,
        filename: "Screenshot 2025-12-03 at 10.23.31 PM.png",
        allPhotos: [
            "Screenshot 2025-12-03 at 10.23.31 PM.png",
        "download-1.jpg",
        "download.jpg"
        ]
    },
    "Duluth Coffee Kitchen": {
        folderNumber: 35,
        filename: "download-1.jpg",
        allPhotos: [
            "download-1.jpg",
        "download-2.jpg",
        "download-3.jpg",
        "download.jpg",
        "images-1.jpg",
        "images.jpg"
        ]
    },
    "Gopher Bar & Grill": {
        folderNumber: 38,
        filename: "download-1.jpg",
        allPhotos: [
            "download-1.jpg",
        "download-2.jpg",
        "download.jpg"
        ]
    },
    "Grand View Grill and bar": {
        folderNumber: 39,
        filename: "download-1.jpg",
        allPhotos: [
            "download-1.jpg",
        "download-2.jpg",
        "download-3.jpg",
        "download.jpg"
        ]
    },
    "Grandma's Saloon & Grill (Canal Park)": {
        folderNumber: 40,
        filename: "download-1.jpg",
        allPhotos: [
            "download-1.jpg",
        "download-2.jpg",
        "download-3.jpg",
        "download.jpg",
        "images.jpg"
        ]
    },
    "Grandma's Saloon & Grill (Miller Hill)": {
        folderNumber: 41,
        filename: "download-1 copy.jpg",
        allPhotos: [
            "download-1 copy.jpg",
        "download.png",
        "images copy.jpg",
        "images.jpg"
        ]
    },
    "Great Harvest Bread Co": {
        folderNumber: 42,
        filename: "download-1.jpg",
        allPhotos: [
            "download-1.jpg",
        "download-2.jpg",
        "download-3.jpg",
        "download-4.jpg",
        "download-5.jpg",
        "download-6.jpg",
        "download.jpg"
        ]
    },
    "Harbor 360": {
        folderNumber: 44,
        filename: "download-1.jpg",
        allPhotos: [
            "download-1.jpg",
        "download-2.jpg",
        "download-3.jpg",
        "download-4.jpg",
        "download-5.jpg",
        "download-6.jpg",
        "download-7.jpg",
        "download.jpg"
        ]
    },
    "Hungry Hippie Tacos": {
        folderNumber: 46,
        filename: "download-1.jpg",
        allPhotos: [
            "download-1.jpg",
        "download-2.jpg",
        "download-3.jpg",
        "download-4.jpg",
        "download.jpg"
        ]
    },
    "Incline Station Bowling & Banquet Facilities": {
        folderNumber: 47,
        filename: "download-1.jpg",
        allPhotos: [
            "download-1.jpg",
        "download-2.jpg",
        "download.jpg"
        ]
    },
    "Jade Fountain Cocktail Lounge": {
        folderNumber: 49,
        filename: "download-1.jpg",
        allPhotos: [
            "download-1.jpg",
        "download-2.jpg",
        "download-3.jpg",
        "download.jpg"
        ]
    },
    "Juice Pharm": {
        folderNumber: 50,
        filename: "download-1.jpg",
        allPhotos: [
            "download-1.jpg",
        "download-2.jpg",
        "download-3.jpg",
        "download-4.jpg",
        "download-5.jpg",
        "download-6.jpg",
        "download.jpg"
        ]
    },
    "Kosta's Gyros": {
        folderNumber: 51,
        filename: "528229010_2592888414396767_7273969276567954221_n.jpg",
        allPhotos: [
            "528229010_2592888414396767_7273969276567954221_n.jpg",
        "download-1.jpg",
        "download.jpg"
        ]
    },
    "Lake Avenue Restaurant & Bar": {
        folderNumber: 52,
        filename: "download-1.jpg",
        allPhotos: [
            "download-1.jpg",
        "download-10.jpg",
        "download-2.jpg",
        "download-3.jpg",
        "download-4.jpg",
        "download-5.jpg",
        "download-6.jpg",
        "download-7.jpg",
        "download-8.jpg",
        "download-9.jpg",
        "download.jpg"
        ]
    },
    "Lake Effect Restaurant & Bar": {
        folderNumber: 53,
        filename: "download-1.jpg",
        allPhotos: [
            "download-1.jpg",
        "download-2.jpg",
        "download-3.jpg",
        "download-4.jpg",
        "download-5.jpg",
        "download.jpg"
        ]
    },
    "Lake Superior Brewing Co.": {
        folderNumber: 54,
        filename: "download-1.jpg",
        allPhotos: [
            "download-1.jpg",
        "download-2.jpg",
        "download-3.jpg",
        "download-4.jpg",
        "download.jpg",
        "images-1.jpg",
        "images.jpg"
        ]
    },
    "Lakewalk Galley": {
        folderNumber: 55,
        filename: "download-1.jpg",
        allPhotos: [
            "download-1.jpg",
        "download-2.jpg",
        "download-3.jpg",
        "download.jpg"
        ]
    },
    "Little Angie's Cantina & Grill": {
        folderNumber: 56,
        filename: "download-1.jpg",
        allPhotos: [
            "download-1.jpg",
        "download-2.jpg",
        "download-3.jpg",
        "download.jpg"
        ]
    },
    "LuLu's Pizza": {
        folderNumber: 57,
        filename: "download-1.jpg",
        allPhotos: [
            "download-1.jpg",
        "download-2.jpg",
        "download-3.jpg",
        "download-4.jpg",
        "download.jpg"
        ]
    },
    "Lyric Kitchen · Bar": {
        folderNumber: 58,
        filename: "download-1.jpg",
        allPhotos: [
            "download-1.jpg",
        "download-2.jpg",
        "download-3.jpg",
        "download-4.jpg",
        "download-5.jpg",
        "download.jpg"
        ]
    },
    "Margarita's Bar & Grill": {
        folderNumber: 59,
        filename: "download-1.jpg",
        allPhotos: [
            "download-1.jpg",
        "download-2.jpg",
        "download-3.jpg",
        "download-4.jpg",
        "download-5.jpg",
        "download.jpg"
        ]
    },
    "McKenzie's Bar & Grill": {
        folderNumber: 60,
        filename: "download-1.jpg",
        allPhotos: [
            "download-1.jpg",
        "download-2.jpg",
        "download-3.jpg",
        "download-4.jpg",
        "download-5.jpg",
        "download-6.jpg",
        "download.jpg"
        ]
    },
    "Mexico Lindo": {
        folderNumber: 61,
        filename: "download-1.jpg",
        allPhotos: [
            "download-1.jpg",
        "download-2.jpg",
        "download-3.jpg",
        "download-4.jpg",
        "download.jpg"
        ]
    },
    "Mr. D's Bar & Grill": {
        folderNumber: 62,
        filename: "138593243_4296059507076547_1594962043747067947_n.jpg",
        allPhotos: [
            "138593243_4296059507076547_1594962043747067947_n.jpg",
        "161226383_4478476828834813_5461107553416913324_n.jpg",
        "487134397_1211890614280009_1178220921830521004_n.jpg",
        "488935412_1217215203747550_6150902457729353264_n.jpg",
        "495352677_1246790767456660_3792181476813999749_n.jpg",
        "495379706_1254545986681138_7606154255330074892_n.jpg",
        "497449752_1254934819975588_4689869209477544904_n.jpg"
        ]
    },
    "Oasis Del Norte": {
        folderNumber: 65,
        filename: "493084056_1477251996947530_3519336786385463825_n.jpg",
        allPhotos: [
            "493084056_1477251996947530_3519336786385463825_n.jpg",
        "530613756_1567432694596126_6929353935297095817_n.jpg",
        "533243752_1570107704328625_2169616745016099893_n.jpg",
        "537020959_1578385726834156_3081560731314793346_n.jpg",
        "540963242_1583745739631488_8623683359179837563_n.jpg",
        "546157515_1596145678391494_5218391920961069225_n.jpg",
        "549527480_1600465801292815_566644022093282755_n.jpg",
        "556023990_1611465973526131_408915102716548681_n.jpg",
        "558882744_1614467329892662_6631899265772393120_n.jpg",
        "558888052_1617721482900580_4020097267543041407_n.jpg",
        "558947035_1622779762394752_7557316907223786285_n.jpg",
        "569049090_1634366744569387_6645362479906324745_n.jpg",
        "571785179_1638164134189648_6242676652819251938_n.jpg"
        ]
    },
    "Old Chicago Pizza & Taproom": {
        folderNumber: 66,
        filename: "download-1.jpg",
        allPhotos: [
            "download-1.jpg",
        "download-2.jpg",
        "download-3.jpg",
        "download-4.jpg",
        "download-5.jpg",
        "download-6.jpg",
        "download-7.jpg",
        "download-8.jpg",
        "download.jpg"
        ]
    },
    "Osaka Sushi & Hibachi": {
        folderNumber: 69,
        filename: "download-1.jpg",
        allPhotos: [
            "download-1.jpg",
        "download-2.jpg",
        "download-3.jpg",
        "download-4.jpg",
        "download.jpg"
        ]
    },
    "Perk Place Coffeehouse": {
        folderNumber: 70,
        filename: "download-1.jpg",
        allPhotos: [
            "download-1.jpg",
        "download-2.jpg",
        "download-3.jpg",
        "download-4.jpg",
        "download.jpg"
        ]
    },
    "Pho Hoa": {
        folderNumber: 72,
        filename: "download-1.jpg",
        allPhotos: [
            "download-1.jpg",
        "download-2.jpg",
        "download-3.jpg",
        "download-4.jpg",
        "download-5.jpg",
        "download.jpg",
        "images.jpg"
        ]
    },
    "PhoHolic Taste of Vietnam (London Road)": {
        folderNumber: 74,
        filename: "Screenshot 2025-12-04 at 2.14.20 PM.png",
        allPhotos: [
            "Screenshot 2025-12-04 at 2.14.20 PM.png",
        "download-1 copy.jpg",
        "download-1.jpg",
        "download-2 copy.jpg",
        "download-3 copy.jpg",
        "download-4 copy.jpg",
        "download-5 copy.jpg",
        "download-6 copy.jpg",
        "download.jpg"
        ]
    },
    "Pickwick Restaurant & Pub": {
        folderNumber: 75,
        filename: "download-1.jpg",
        allPhotos: [
            "download-1.jpg",
        "download-2.jpg",
        "download-3.jpg",
        "download-4.jpg",
        "download.jpg"
        ]
    },
    "Ritual Salad": {
        folderNumber: 78,
        filename: "474490740_122186939000054464_7474313916907179397_n.jpg",
        allPhotos: [
            "474490740_122186939000054464_7474313916907179397_n.jpg",
        "474700108_122187204254054464_75688573652221268_n.jpg",
        "475036904_122187404372054464_183881094837202137_n.jpg",
        "475064050_122187121466054464_4982640234635319942_n.jpg",
        "476614710_17924614062010881_1003109166710470595_n.jpg",
        "487282035_17930658351010881_9040622086261198600_n.jpg",
        "487423219_122195217884054464_90638316944043958_n.jpg",
        "518233513_17941939638010881_8695090994648452540_n.jpg",
        "574018689_122220081080054464_4687543232560025927_n.jpg",
        "download.jpg"
        ]
    },
    "Silos Restaurant & Bar": {
        folderNumber: 79,
        filename: "494158125_1239104324885579_4321121104285580502_n.jpg",
        allPhotos: [
            "494158125_1239104324885579_4321121104285580502_n.jpg",
        "515442025_1339425841520093_7167037773726759423_n.jpg",
        "524134949_1315214317274579_7774738636821502350_n.jpg",
        "524805359_1318715516924459_3375788689559167811_n.jpg",
        "539222894_1344611167668227_3481735869224717069_n.jpg",
        "540435793_1351685020294175_2769697613952492091_n.jpg",
        "540442382_1350035497125794_6894050189970648926_n.jpg",
        "557585211_1383221103807233_6012027849616755146_n.jpg",
        "558173138_1384447823684561_8433494800275095511_n.jpg",
        "558664280_1386048590191151_1287955964574504063_n.jpg",
        "559325174_1389653853163958_5525251390593222111_n.jpg",
        "559368188_1388636629932347_6120658217512846262_n.jpg",
        "565256763_1392716506191026_5567581430043908100_n.jpg",
        "574590446_1407792861350057_673710890401557539_n.jpg",
        "download-1.jpg",
        "download-2.jpg",
        "download-3.jpg",
        "download.jpg"
        ]
    },
    "Sir Benedict's Tavern on the Lake": {
        folderNumber: 80,
        filename: "download-1.jpg",
        allPhotos: [
            "download-1.jpg",
        "download-2.jpg",
        "download.jpg",
        "images.jpg"
        ]
    },
    "Skyline Social & Games": {
        folderNumber: 81,
        filename: "download-1.jpg",
        allPhotos: [
            "download-1.jpg",
        "download-2.jpg",
        "download-4.jpg",
        "download.jpg",
        "download.png"
        ]
    },
    "Studio Café": {
        folderNumber: 82,
        filename: "473286236_122136684116503065_9133155628687136531_n.jpg",
        allPhotos: [
            "473286236_122136684116503065_9133155628687136531_n.jpg",
        "484898167_122150879546503065_1807074955108875100_n.jpg",
        "487399115_122153992670503065_5948135259552173081_n.jpg",
        "487530785_17877287994290401_4006145927487909722_n.jpg",
        "516748889_17888909304290401_2827374773067349590_n.jpg",
        "529300551_122175990194503065_4792404565859421482_n.jpg",
        "529967253_122176956128503065_6413145650372958104_n.jpg",
        "530244627_122176956122503065_4273219824488615581_n.jpg",
        "download-1.jpg",
        "download-2.jpg",
        "download.jpg"
        ]
    },
    "T-Bonz Bar & Grill": {
        folderNumber: 83,
        filename: "download-1.jpg",
        allPhotos: [
            "download-1.jpg",
        "download-2.jpg",
        "download-4.jpg",
        "download-5.jpg",
        "download-6.jpg",
        "download-7.jpg",
        "download-8.jpg",
        "download.jpg"
        ]
    },
    "Tappa Keg Inn": {
        folderNumber: 84,
        filename: "download-1.jpg",
        allPhotos: [
            "download-1.jpg",
        "download-2.jpg",
        "download-4.jpg",
        "download-5.jpg",
        "download-6.jpg",
        "download-7.jpg",
        "download.jpg"
        ]
    },
    "Tavern on the Hill": {
        folderNumber: 85,
        filename: "download-1.jpg",
        allPhotos: [
            "download-1.jpg",
        "download-2.jpg",
        "download-4.jpg",
        "download-5.jpg",
        "download-6.jpg",
        "download-7.jpg",
        "download-8.jpg",
        "download.jpg"
        ]
    },
    "The Breeze Inn": {
        folderNumber: 87,
        filename: "download-1.jpg",
        allPhotos: [
            "download-1.jpg",
        "download.jpg",
        "images-1.jpg",
        "images-2.jpg",
        "images-3.jpg",
        "images-4.jpg",
        "images.jpg"
        ]
    },
    "The Fitger's Barrel Room": {
        folderNumber: 88,
        filename: "download-1.jpg",
        allPhotos: [
            "download-1.jpg",
        "download-2.jpg",
        "download-3.jpg",
        "download.jpg"
        ]
    },
    "The Greenery Café & Bakery": {
        folderNumber: 89,
        filename: "download-1.jpg",
        allPhotos: [
            "download-1.jpg",
        "download-2.jpg",
        "download-3.jpg",
        "download-4.jpg",
        "download.jpg"
        ]
    },
    "The King of Creams": {
        folderNumber: 90,
        filename: "download-1.jpg",
        allPhotos: [
            "download-1.jpg",
        "download-2.jpg",
        "download-3.jpg",
        "download-4.jpg",
        "download-5.jpg",
        "download.jpg"
        ]
    },
    "The Loch Café & Games": {
        folderNumber: 91,
        filename: "download-1.jpg",
        allPhotos: [
            "download-1.jpg",
        "download-2.jpg",
        "download-3.jpg",
        "download.jpg",
        "images-1.jpg",
        "images.jpg"
        ]
    },
    "The Other Place Bar & Grill": {
        folderNumber: 92,
        filename: "download-1.jpg",
        allPhotos: [
            "download-1.jpg",
        "download-2.jpg",
        "download.jpg"
        ]
    },
    "The Social House": {
        folderNumber: 93,
        filename: "download-1.jpg",
        allPhotos: [
            "download-1.jpg",
        "download-2.jpg",
        "download-3.jpg",
        "download-4.jpg",
        "download.jpg"
        ]
    },
    "The Spot Sports Bar & Grill": {
        folderNumber: 94,
        filename: "download-1.jpg",
        allPhotos: [
            "download-1.jpg",
        "download.jpg"
        ]
    },
    "Toasty's Sandwich Shop": {
        folderNumber: 95,
        filename: "download-1.jpg",
        allPhotos: [
            "download-1.jpg",
        "download-2.jpg",
        "download-3.jpg",
        "download-4.jpg",
        "download-5.jpg",
        "download-6.jpg",
        "download-7.jpg",
        "download-8.jpg",
        "download.jpg"
        ]
    },
    "Trophy Café": {
        folderNumber: 96,
        filename: "download-1.jpg",
        allPhotos: [
            "download-1.jpg",
        "download-2.jpg",
        "download-3.jpg",
        "download-4.jpg",
        "download-5.jpg",
        "download.jpg"
        ]
    },
    "Uncle Loui's Cafe": {
        folderNumber: 97,
        filename: "download-1.jpg",
        allPhotos: [
            "download-1.jpg",
        "download-2.jpg",
        "download.jpg"
        ]
    },
    "Vitta Pizza (Canal Park)": {
        folderNumber: 99,
        filename: "download copy.jpg",
        allPhotos: [
            "download copy.jpg",
        "download-1.jpg",
        "download-2.jpg",
        "download-3.jpg",
        "download-4.jpg",
        "download-5.jpg",
        "download.jpg"
        ]
    },
    "Vitta Pizza (Central Entrance)": {
        folderNumber: 100,
        filename: "download-1.jpg",
        allPhotos: [
            "download-1.jpg",
        "download-2.jpg",
        "download-3.jpg",
        "download-4.jpg",
        "download-5.jpg",
        "images-1.jpg",
        "images-2.jpg",
        "images.jpg"
        ]
    },
    "Wired Whiskers": {
        folderNumber: 102,
        filename: "download-1.jpg",
        allPhotos: [
            "download-1.jpg",
        "download-2.jpg",
        "download.jpg",
        "images-1.jpg",
        "images-2.jpg",
        "images-3.jpg",
        "images-4.jpg",
        "images.jpg"
        ]
    },
    "Wussow's Concert Cafe": {
        folderNumber: 103,
        filename: "118702814_3210303739085011_6144810948817633191_n.jpg",
        allPhotos: [
            "118702814_3210303739085011_6144810948817633191_n.jpg",
        "124824767_3423568124425237_5543723002760668898_n.jpg",
        "128622587_3476826795766036_6211919663012998017_n.jpg",
        "149767607_3659534540828593_4496047041319665345_n.jpg",
        "460269129_18422694856075569_508474895825611350_n.jpg",
        "468850023_18435943366075569_2827819322319447150_n.jpg",
        "474249402_18444490225075569_2087009316121112205_n.jpg",
        "481021450_18449979118075569_4846543299779423351_n.jpg",
        "487313755_1228544085943576_4762385609440690374_n.jpg",
        "491461486_18460518943075569_3084928163005051624_n.jpg",
        "504203837_18468671011075569_3124070340003847786_n.jpg",
        "540531682_18482142445075569_3860988601637755258_n.jpg",
        "571466406_18491323978075569_1028772794861616294_n.jpg",
        "571995994_18491329132075569_5582393570897587974_n.jpg",
        "582428389_18495501244075569_2395931867006970877_n.jpg",
        "download-1.jpg",
        "download-2.jpg",
        "download.jpg"
        ]
    },
    "Zeitgeist Arts Café": {
        folderNumber: 104,
        filename: "download-1.jpg",
        allPhotos: [
            "download-1.jpg",
        "download-2.jpg",
        "download-3.jpg",
        "download.jpg"
        ]
    },
    "Zhong Hua": {
        folderNumber: 106,
        filename: "download-1.jpg",
        allPhotos: [
            "download-1.jpg",
        "download-2.jpg",
        "download-3.jpg",
        "download.jpg"
        ]
    }
};

// Helper function to encode a photo path for URL use
function encodePhotoPath(folderNumber, slug, filename) {
    // Build the path with proper URL encoding
    // Use absolute path starting with / for proper routing on Vercel
    // Folder path with spaces is fine (browsers handle it), but filename needs encoding
    // especially for special characters like + which must be encoded as %2B
    const folderPath = `/Restaurant Photos/${folderNumber}. ${slug}`;
    // URL encode the filename to handle special characters like +, spaces, etc.
    const encodedFilename = encodeURIComponent(filename);
    const fullPath = folderPath + '/' + encodedFilename;
    return fullPath;
}

// Helper function to get photo path from "Restaurant Photos" folder
// Helper function to select the best food dish photo from available photos
function selectBestFoodPhoto(photos) {
    if (!photos || photos.length === 0) {
        return null;
    }
    
    // Keywords that indicate restaurant/menu photos (to avoid)
    const avoidKeywords = ['menu', 'restaurant', 'exterior', 'outside', 'building', 'sign', 'front', 'entrance', 'store', 'shop', 'facade', 'storefront', 'bar', 'interior', 'inside', 'location'];
    
    // First, check if we have any Screenshot files (almost always food photos)
    const screenshotPhotos = photos.filter(photo => photo.toLowerCase().includes('screenshot'));
    if (screenshotPhotos.length > 0) {
        // Prefer middle screenshot photos (first might be menu, later ones are usually food)
        if (screenshotPhotos.length > 1) {
            // Return a screenshot from the middle of the list
            const midIndex = Math.floor(screenshotPhotos.length / 2);
            return screenshotPhotos[midIndex];
        }
        return screenshotPhotos[0];
    }
    
    // If no screenshots, always skip first photo and prefer photos from positions 2-5
    // (first photo is almost always restaurant/menu, food photos usually start from position 2-3)
    
    // Skip first photo, prefer positions 2-5 (indices 1-4)
    const candidatePhotos = photos.slice(1); // Skip first photo
    
    if (candidatePhotos.length === 0) {
        return photos[0]; // Only one photo available
    }
    
    // Filter out obvious restaurant photos
    const filteredPhotos = candidatePhotos.filter((photo, index) => {
        const lower = photo.toLowerCase();
        // Skip photos with avoid keywords
        for (const keyword of avoidKeywords) {
            if (lower.includes(keyword)) {
                return false;
            }
        }
        return true;
    });
    
    // Use filtered list if we have candidates
    const photosToChooseFrom = filteredPhotos.length > 0 ? filteredPhotos : candidatePhotos;
    
    // Prefer photos from positions 2-5 (indices 1-4 in original, 0-3 in sliced)
    // This targets the sweet spot where food photos usually are
    if (photosToChooseFrom.length >= 2) {
        // Prefer index 1-3 (positions 2-4 in original list)
        const preferredRange = photosToChooseFrom.slice(0, Math.min(4, photosToChooseFrom.length));
        const midIndex = Math.floor(preferredRange.length / 2);
        return preferredRange[midIndex];
    }
    
    // Fallback to first available candidate
    return photosToChooseFrom[0];
}

function getRestaurantPhotoPath(restaurantName) {
    // Safety check - ensure restaurantPhotos exists
    if (typeof restaurantPhotos === 'undefined' || !restaurantPhotos) {
        return null;
    }
    
    // Check if restaurant has a specific photo mapped
    if (restaurantPhotos[restaurantName]) {
        const photoInfo = restaurantPhotos[restaurantName];
        // Return null if no photos available
        if (!photoInfo || !photoInfo.allPhotos || photoInfo.allPhotos.length === 0) {
            return null;
        }
        
        // Select the best food dish photo instead of using filename
        const bestPhoto = selectBestFoodPhoto(photoInfo.allPhotos);
        if (!bestPhoto) {
            return null;
        }
        
        const slug = nameToSlug(restaurantName);
        const path = encodePhotoPath(photoInfo.folderNumber, slug, bestPhoto);
        return path;
    }
    return null;
}

// Helper function to get all photos for a restaurant (for gallery and banner)
function getRestaurantAllPhotos(restaurantName) {
    if (restaurantPhotos[restaurantName] && restaurantPhotos[restaurantName].allPhotos) {
        const photoInfo = restaurantPhotos[restaurantName];
        const slug = nameToSlug(restaurantName);
        // Return all photos with properly encoded paths
        return photoInfo.allPhotos.map(filename => 
            encodePhotoPath(photoInfo.folderNumber, slug, filename)
        );
    }
    return null;
}

// Helper function to get banner photos (first 3 photos)
function getRestaurantBannerPhotos(restaurantName) {
    const allPhotos = getRestaurantAllPhotos(restaurantName);
    if (allPhotos && allPhotos.length >= 3) {
        return allPhotos.slice(0, 3);
    }
    return null;
}

// Helper function to generate image URL for a restaurant
function getRestaurantImage(restaurantName, cuisine) {
    // First, check if restaurant has a photo in the "Restaurant Photos" folder
    const photoPath = getRestaurantPhotoPath(restaurantName);
    if (photoPath) {
        return photoPath;
    }
    
    // Fall back to cuisine-based images
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
    for (const [cuisineType, image] of Object.entries(cuisineImages)) {
        if (cuisine.includes(cuisineType) || cuisine.toLowerCase().includes(cuisineType.toLowerCase())) {
            return image;
        }
    }
    
    // Default image
    return 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop';
}

// Add images to all restaurants
allRestaurants.forEach(restaurant => {
    restaurant.image = getRestaurantImage(restaurant.name, restaurant.cuisine);
    if (!restaurant.reviews) {
        restaurant.reviews = "1,000";
    }
});

// Normalize restaurant data to support both Restaurant and Adventure types
// This adds new field names while maintaining backward compatibility
allRestaurants.forEach(function(place) {
    // Ensure type field exists (defaults to 'restaurant')
    if (!place.type) {
        place.type = 'restaurant';
    }
    
    // Map old restaurant fields to new unified field names
    if (place.type === 'restaurant') {
        // Rename cuisine to category (but keep both for compatibility)
        if (!place.category && place.cuisine) {
            place.category = place.cuisine;
        }
        // Rename price to cost (but keep both for compatibility)
        if (!place.cost && place.price) {
            place.cost = place.price;
        }
        // Rename reservations to timeNeeded (but keep both for compatibility)
        if (!place.timeNeeded && place.reservations) {
            place.timeNeeded = place.reservations === 'none' ? 'Walk-ins welcome' : place.reservations;
        }
        // Rename popularDishes to highlights (but keep both for compatibility)
        if (!place.highlights && place.popularDishes) {
            place.highlights = Array.isArray(place.popularDishes) ? place.popularDishes : [];
        }
    }
});

// Helper function to get normalized place data
function getPlaceField(place, field) {
    if (place.type === 'restaurant') {
        // For restaurants, prefer new field names but fall back to old ones
        switch(field) {
            case 'category': return place.category || place.cuisine;
            case 'cost': return place.cost || place.price;
            case 'timeNeeded': return place.timeNeeded || place.reservations;
            case 'highlights': return place.highlights || place.popularDishes || [];
            default: return place[field];
        }
    } else {
        // For adventures, use new field names only
        return place[field];
    }
}

