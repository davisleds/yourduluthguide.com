// All Duluth Adventures Data (Explore Section)
const allAdventures = [
    { id: 'explore-1', type: 'adventure', name: 'Aerial Lift Bridge', category: 'Historic • Scenic • Views', cost: 'Free', timeNeeded: 'Spend 30-60 Minutes', rating: '4.8', reviews: '12,456', description: 'The iconic symbol of Duluth that lifts to let massive ships enter the harbor.', image: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=800&h=600&fit=crop', location: 'Canal Park', phone: '(218) 722-4011', website: 'https://visitduluth.com/', address: '601 S Lake Ave, Duluth, MN 55802', highlights: ["Historic Bridge", "Harbor Views", "Ship Watching"], hours: { "Monday": "6:00 AM - 10:00 PM", "Tuesday": "6:00 AM - 10:00 PM", "Wednesday": "6:00 AM - 10:00 PM", "Thursday": "6:00 AM - 10:00 PM", "Friday": "6:00 AM - 10:00 PM", "Saturday": "6:00 AM - 10:00 PM", "Sunday": "6:00 AM - 10:00 PM" } },
    { id: 'explore-2', type: 'adventure', name: 'Bagley Nature Area', category: 'Nature • Hiking • Outdoor', cost: 'Free', timeNeeded: 'Spend 1-2 Hours', rating: '4.6', reviews: '2,345', description: 'A peaceful nature area with trails through forests and wetlands.', image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop', location: 'West Duluth', phone: '(218) 730-4300', website: 'https://duluthmn.gov/parks/', address: 'West Duluth, Duluth, MN 55802', highlights: ["Nature Trails", "Forest", "Wildlife"], hours: { "Monday": "6:00 AM - 10:00 PM", "Tuesday": "6:00 AM - 10:00 PM", "Wednesday": "6:00 AM - 10:00 PM", "Thursday": "6:00 AM - 10:00 PM", "Friday": "6:00 AM - 10:00 PM", "Saturday": "6:00 AM - 10:00 PM", "Sunday": "6:00 AM - 10:00 PM" } },
    { id: 'explore-3', type: 'adventure', name: 'Brewer Park', category: 'Parks • Nature • Hiking', cost: 'Free', timeNeeded: 'Spend 1-2 Hours', rating: '4.3', reviews: '1,234', description: 'Features the Bi-to-Bi trail and great views from the bluffs.', image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop', location: 'West Duluth', phone: '(218) 730-4300', website: 'https://duluthmn.gov/parks/', address: 'Hwy 2 & 70th Ave W, Duluth, MN 55807', highlights: ["Bluff Views", "Hiking Trails"], hours: { "Monday": "6:00 AM - 10:00 PM", "Tuesday": "6:00 AM - 10:00 PM", "Wednesday": "6:00 AM - 10:00 PM", "Thursday": "6:00 AM - 10:00 PM", "Friday": "6:00 AM - 10:00 PM", "Saturday": "6:00 AM - 10:00 PM", "Sunday": "6:00 AM - 10:00 PM" } },
    { id: 'explore-4', type: 'adventure', name: 'Brighton Beach', category: 'Beach • Swimming • Nature', cost: 'Free', timeNeeded: 'Spend 1-2 Hours', rating: '4.5', reviews: '3,456', description: 'A popular beach on Lake Superior with sandy shores and picnic areas.', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop', location: 'East Duluth', phone: '(218) 730-4300', website: 'https://duluthmn.gov/parks/', address: 'Brighton Beach Rd, Duluth, MN 55804', highlights: ["Sandy Beach", "Swimming", "Picnic Areas"], hours: { "Monday": "6:00 AM - 10:00 PM", "Tuesday": "6:00 AM - 10:00 PM", "Wednesday": "6:00 AM - 10:00 PM", "Thursday": "6:00 AM - 10:00 PM", "Friday": "6:00 AM - 10:00 PM", "Saturday": "6:00 AM - 10:00 PM", "Sunday": "6:00 AM - 10:00 PM" } },
    { id: 'explore-5', type: 'adventure', name: 'Canal Park', category: 'Shopping • Dining • Waterfront', cost: 'Free', timeNeeded: 'Spend 1-3 Hours', rating: '4.7', reviews: '15,234', description: 'Duluth\'s vibrant waterfront district with shops, restaurants, and lake views.', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop', location: 'Canal Park', phone: '(218) 722-4011', website: 'https://visitduluth.com/', address: 'Canal Park Dr, Duluth, MN 55802', highlights: ["Shopping", "Restaurants", "Lake Views"], hours: { "Monday": "Open 24 hours", "Tuesday": "Open 24 hours", "Wednesday": "Open 24 hours", "Thursday": "Open 24 hours", "Friday": "Open 24 hours", "Saturday": "Open 24 hours", "Sunday": "Open 24 hours" } },
    { id: 'explore-6', type: 'adventure', name: 'Chambers Grove', category: 'Nature • Hiking • Outdoor', cost: 'Free', timeNeeded: 'Spend 1-2 Hours', rating: '4.4', reviews: '1,567', description: 'A scenic park with trails along the St. Louis River.', image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop', location: 'West Duluth', phone: '(218) 730-4300', website: 'https://duluthmn.gov/parks/', address: 'Chambers Grove Rd, Duluth, MN 55807', highlights: ["River Views", "Trails", "Nature"], hours: { "Monday": "6:00 AM - 10:00 PM", "Tuesday": "6:00 AM - 10:00 PM", "Wednesday": "6:00 AM - 10:00 PM", "Thursday": "6:00 AM - 10:00 PM", "Friday": "6:00 AM - 10:00 PM", "Saturday": "6:00 AM - 10:00 PM", "Sunday": "6:00 AM - 10:00 PM" } },
    { id: 'explore-7', type: 'adventure', name: 'Chester Park', category: 'Parks • Nature • Hiking', cost: 'Free', timeNeeded: 'Spend 1-2 Hours', rating: '4.5', reviews: '2,789', description: 'A favorite local park with ski jumps, hiking trails along Chester Creek, and concerts.', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop', location: 'Chester Park', phone: '(218) 730-4300', website: 'https://duluthmn.gov/parks/', address: '1800 E Skyline Pkwy, Duluth, MN 55812', highlights: ["Chester Creek", "Concert Series", "Trails"], hours: { "Monday": "6:00 AM - 10:00 PM", "Tuesday": "6:00 AM - 10:00 PM", "Wednesday": "6:00 AM - 10:00 PM", "Thursday": "6:00 AM - 10:00 PM", "Friday": "6:00 AM - 10:00 PM", "Saturday": "6:00 AM - 10:00 PM", "Sunday": "6:00 AM - 10:00 PM" } },
    { id: 'explore-8', type: 'adventure', name: 'Congdon Park', category: 'Parks • Nature • Hiking', cost: 'Free', timeNeeded: 'Spend 1-2 Hours', rating: '4.5', reviews: '2,345', description: 'Beautiful park featuring waterfalls and hiking trails along Tischer Creek.', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop', location: 'Congdon', phone: '(218) 730-4300', website: 'https://duluthmn.gov/parks/', address: 'Congdon Blvd, Duluth, MN 55812', highlights: ["Waterfalls", "Hiking", "Nature"], hours: { "Monday": "6:00 AM - 10:00 PM", "Tuesday": "6:00 AM - 10:00 PM", "Wednesday": "6:00 AM - 10:00 PM", "Thursday": "6:00 AM - 10:00 PM", "Friday": "6:00 AM - 10:00 PM", "Saturday": "6:00 AM - 10:00 PM", "Sunday": "6:00 AM - 10:00 PM" } },
    { id: 'explore-9', type: 'adventure', name: 'Ely\'s Peak', category: 'Hiking • Views • Nature', cost: 'Free', timeNeeded: 'Spend 2-3 Hours', rating: '4.7', reviews: '3,890', description: 'A rugged hike in West Duluth featuring an abandoned railroad tunnel and panoramic views.', image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop', location: 'West Duluth', phone: '(218) 730-4300', website: 'https://duluthmn.gov/parks/', address: 'Ely\'s Peak Trail, Duluth, MN 55807', highlights: ["Abandoned Tunnel", "Panoramic Views", "Hiking"], hours: { "Monday": "6:00 AM - 10:00 PM", "Tuesday": "6:00 AM - 10:00 PM", "Wednesday": "6:00 AM - 10:00 PM", "Thursday": "6:00 AM - 10:00 PM", "Friday": "6:00 AM - 10:00 PM", "Saturday": "6:00 AM - 10:00 PM", "Sunday": "6:00 AM - 10:00 PM" } },
    { id: 'explore-10', type: 'adventure', name: 'Enger Park', category: 'Parks • Nature • Hiking', cost: 'Free', timeNeeded: 'Spend 30-60 Minutes', rating: '4.7', reviews: '8,923', description: 'Hilltop park featuring a 5-story stone tower with 360-degree views of the harbor and Japanese gardens.', image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=600&fit=crop', location: 'Central Hillside', phone: '(218) 730-4300', website: 'https://duluthmn.gov/parks/', address: '1301 London Rd, Duluth, MN 55805', highlights: ["Stone Tower", "360 Views", "Japanese Gardens"], hours: { "Monday": "6:00 AM - 10:00 PM", "Tuesday": "6:00 AM - 10:00 PM", "Wednesday": "6:00 AM - 10:00 PM", "Thursday": "6:00 AM - 10:00 PM", "Friday": "6:00 AM - 10:00 PM", "Saturday": "6:00 AM - 10:00 PM", "Sunday": "6:00 AM - 10:00 PM" } },
    { id: 'explore-11', type: 'adventure', name: 'Fairmont Park', category: 'Parks • Nature • Hiking', cost: 'Free', timeNeeded: 'Spend 1-2 Hours', rating: '4.2', reviews: '987', description: 'Adjacent to the Zoo, featuring trails and community space.', image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop', location: 'East Duluth', phone: '(218) 730-4300', website: 'https://duluthmn.gov/parks/', address: 'Fairmont St, Duluth, MN 55807', highlights: ["Trails", "Community Space"], hours: { "Monday": "6:00 AM - 10:00 PM", "Tuesday": "6:00 AM - 10:00 PM", "Wednesday": "6:00 AM - 10:00 PM", "Thursday": "6:00 AM - 10:00 PM", "Friday": "6:00 AM - 10:00 PM", "Saturday": "6:00 AM - 10:00 PM", "Sunday": "6:00 AM - 10:00 PM" } },
    { id: 'explore-12', type: 'adventure', name: 'Gichi-ode\' Akiing', category: 'Nature • Hiking • Outdoor', cost: 'Free', timeNeeded: 'Spend 1-2 Hours', rating: '4.8', reviews: '4,123', description: 'A beautiful park with lake access and scenic views.', image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop', location: 'Canal Park', phone: '(218) 730-4300', website: 'https://duluthmn.gov/parks/', address: '200 E Superior St, Duluth, MN 55802', highlights: ["Lake Access", "Scenic Views"], hours: { "Monday": "Open 24 hours", "Tuesday": "Open 24 hours", "Wednesday": "Open 24 hours", "Thursday": "Open 24 hours", "Friday": "Open 24 hours", "Saturday": "Open 24 hours", "Sunday": "Open 24 hours" } },
    { id: 'explore-13', type: 'adventure', name: 'Glensheen Mansion', category: 'Historic • Tours • Culture', cost: '$20-$35', timeNeeded: 'Spend 1-3 Hours', rating: '4.7', reviews: '8,923', description: 'A 39-room historic estate on Lake Superior offering tours of the home and extensive grounds.', image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop', location: 'East Duluth', phone: '(218) 726-8910', website: 'https://glensheen.org/', address: '3300 London Rd, Duluth, MN 55804', highlights: ["Historic Estate", "Tours", "Gardens"], hours: { "Monday": "9:00 AM - 5:00 PM", "Tuesday": "9:00 AM - 5:00 PM", "Wednesday": "9:00 AM - 5:00 PM", "Thursday": "9:00 AM - 5:00 PM", "Friday": "9:00 AM - 5:00 PM", "Saturday": "9:00 AM - 5:00 PM", "Sunday": "9:00 AM - 5:00 PM" } },
    { id: 'explore-14', type: 'adventure', name: 'Great Lakes Aquarium', category: 'Family • Animals • Education', cost: '$20-$35', timeNeeded: 'Spend 1-3 Hours', rating: '4.6', reviews: '5,234', description: 'The world\'s only all-freshwater aquarium showcasing Lake Superior and Great Lakes ecosystems.', image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop', location: 'Canal Park', phone: '(218) 740-3474', website: 'https://glaquarium.org/', address: '353 Harbor Dr, Duluth, MN 55802', highlights: ["Freshwater Aquarium", "Lake Superior", "Education"], hours: { "Monday": "10:00 AM - 6:00 PM", "Tuesday": "10:00 AM - 6:00 PM", "Wednesday": "10:00 AM - 6:00 PM", "Thursday": "10:00 AM - 6:00 PM", "Friday": "10:00 AM - 6:00 PM", "Saturday": "10:00 AM - 6:00 PM", "Sunday": "10:00 AM - 6:00 PM" } },
    { id: 'explore-15', type: 'adventure', name: 'Hartley Park', category: 'Parks • Nature • Hiking', cost: 'Free', timeNeeded: 'Spend 1-3 Hours', rating: '4.6', reviews: '3,456', description: 'A massive 660-acre nature center with trails for hiking, biking, and skiing.', image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop', location: 'Woodland', phone: '(218) 724-6735', website: 'https://hartleynature.org/', address: '3001 Woodland Ave, Duluth, MN 55803', highlights: ["Old Hartley Pond", "Rock Knob", "Pines"], hours: { "Monday": "6:00 AM - 10:00 PM", "Tuesday": "6:00 AM - 10:00 PM", "Wednesday": "6:00 AM - 10:00 PM", "Thursday": "6:00 AM - 10:00 PM", "Friday": "6:00 AM - 10:00 PM", "Saturday": "6:00 AM - 10:00 PM", "Sunday": "6:00 AM - 10:00 PM" } },
    { id: 'explore-16', type: 'adventure', name: 'Hawk Ridge', category: 'Hiking • Views • Nature', cost: 'Free (Donation)', timeNeeded: 'Spend 1-2 Hours', rating: '4.8', reviews: '4,123', description: 'One of the best places in North America to watch hawk migrations in the fall.', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop', location: 'East Duluth', phone: '(218) 428-6209', website: 'https://www.hawkridge.org/', address: '3980 E Skyline Pkwy, Duluth, MN 55804', highlights: ["Bird Migration", "Overlook", "Hiking"], hours: { "Monday": "Sunrise to Sunset", "Tuesday": "Sunrise to Sunset", "Wednesday": "Sunrise to Sunset", "Thursday": "Sunrise to Sunset", "Friday": "Sunrise to Sunset", "Saturday": "Sunrise to Sunset", "Sunday": "Sunrise to Sunset" } },
    { id: 'explore-17', type: 'adventure', name: 'Jay Cooke State Park', category: 'Parks • Nature • Hiking', cost: '$7 Day Pass', timeNeeded: 'Spend 2-4 Hours', rating: '4.8', reviews: '9,123', description: 'Famous for its swinging bridge over the St. Louis River and rugged rock formations.', image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop', location: 'Carlton (Nearby)', phone: '(218) 384-4610', website: 'https://www.dnr.state.mn.us/state_parks/park.html?id=spk00157', address: '500 MN-210, Carlton, MN 55718', highlights: ["Swinging Bridge", "Rock Formations", "Hiking"], hours: { "Monday": "6:00 AM - 11:00 PM", "Tuesday": "6:00 AM - 11:00 PM", "Wednesday": "6:00 AM - 11:00 PM", "Thursday": "6:00 AM - 11:00 PM", "Friday": "6:00 AM - 11:00 PM", "Saturday": "6:00 AM - 11:00 PM", "Sunday": "6:00 AM - 11:00 PM" } },
    { id: 'explore-18', type: 'adventure', name: 'Lake Superior Maritime Visitor Center', category: 'Historic • Museum • Education', cost: 'Free', timeNeeded: 'Spend 30-60 Minutes', rating: '4.5', reviews: '2,567', description: 'Museum showcasing Great Lakes shipping history and the Aerial Lift Bridge.', image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop', location: 'Canal Park', phone: '(218) 727-2497', website: 'https://lsmma.org/', address: '600 Lake Ave S, Duluth, MN 55802', highlights: ["Maritime History", "Museum", "Bridge Views"], hours: { "Monday": "10:00 AM - 4:30 PM", "Tuesday": "10:00 AM - 4:30 PM", "Wednesday": "10:00 AM - 4:30 PM", "Thursday": "10:00 AM - 4:30 PM", "Friday": "10:00 AM - 4:30 PM", "Saturday": "10:00 AM - 4:30 PM", "Sunday": "10:00 AM - 4:30 PM" } },
    { id: 'explore-19', type: 'adventure', name: 'Lake Superior Zoo', category: 'Family • Animals • Education', cost: '$15-$20', timeNeeded: 'Spend 1-3 Hours', rating: '4.4', reviews: '3,456', description: 'Family-friendly zoo featuring animals from around the world and local wildlife.', image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop', location: 'West Duluth', phone: '(218) 730-4500', website: 'https://lszoo.org/', address: '7210 Fremont St, Duluth, MN 55807', highlights: ["Animals", "Family Fun", "Education"], hours: { "Monday": "10:00 AM - 6:00 PM", "Tuesday": "10:00 AM - 6:00 PM", "Wednesday": "10:00 AM - 6:00 PM", "Thursday": "10:00 AM - 6:00 PM", "Friday": "10:00 AM - 6:00 PM", "Saturday": "10:00 AM - 6:00 PM", "Sunday": "10:00 AM - 6:00 PM" } },
    { id: 'explore-20', type: 'adventure', name: 'Lakewalk', category: 'Walking • Biking', cost: 'Free', timeNeeded: 'Spend 1-3 Hours', rating: '4.7', reviews: '12,345', description: 'The paved 7-mile trail hugging the shoreline from Canal Park to Brighton Beach.', image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop', location: 'Canal Park / East', phone: '(218) 730-4300', website: 'https://duluthmn.gov/parks/', address: 'Lakewalk Trail, Duluth, MN 55802', highlights: ["7-Mile Trail", "Lake Views", "Biking"], hours: { "Monday": "Open 24 hours", "Tuesday": "Open 24 hours", "Wednesday": "Open 24 hours", "Thursday": "Open 24 hours", "Friday": "Open 24 hours", "Saturday": "Open 24 hours", "Sunday": "Open 24 hours" } },
    { id: 'explore-21', type: 'adventure', name: 'Leif Erikson Park', category: 'Gardens • Lake Views', cost: 'Free', timeNeeded: 'Spend 30-60 Minutes', rating: '4.5', reviews: '4,567', description: 'Home to the Duluth Rose Garden and a replica Viking ship, right on the lake.', image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=600&fit=crop', location: 'East Duluth', phone: '(218) 730-4300', website: 'https://duluthmn.gov/parks/', address: '1301 London Rd, Duluth, MN 55805', highlights: ["Rose Garden", "Viking Ship", "Lake Access"], hours: { "Monday": "6:00 AM - 10:00 PM", "Tuesday": "6:00 AM - 10:00 PM", "Wednesday": "6:00 AM - 10:00 PM", "Thursday": "6:00 AM - 10:00 PM", "Friday": "6:00 AM - 10:00 PM", "Saturday": "6:00 AM - 10:00 PM", "Sunday": "6:00 AM - 10:00 PM" } },
    { id: 'explore-22', type: 'adventure', name: 'Lester Park', category: 'Parks • Nature • Hiking', cost: 'Free', timeNeeded: 'Spend 1-2 Hours', rating: '4.5', reviews: '2,345', description: 'A beautiful park with waterfalls, hiking trails, and picnic areas.', image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop', location: 'Lester Park', phone: '(218) 730-4300', website: 'https://duluthmn.gov/parks/', address: 'Lester River Rd, Duluth, MN 55804', highlights: ["Waterfalls", "Hiking", "Picnic Areas"], hours: { "Monday": "6:00 AM - 10:00 PM", "Tuesday": "6:00 AM - 10:00 PM", "Wednesday": "6:00 AM - 10:00 PM", "Thursday": "6:00 AM - 10:00 PM", "Friday": "6:00 AM - 10:00 PM", "Saturday": "6:00 AM - 10:00 PM", "Sunday": "6:00 AM - 10:00 PM" } },
    { id: 'explore-23', type: 'adventure', name: 'Lincoln Park', category: 'Waterfalls • Hiking', cost: 'Free', timeNeeded: 'Spend 1-2 Hours', rating: '4.4', reviews: '3,456', description: 'The namesake park of the craft district, featuring Elephant Rock and waterfalls.', image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop', location: 'Lincoln Park', phone: '(218) 730-4300', website: 'https://duluthmn.gov/parks/', address: 'Lincoln Park Dr, Duluth, MN 55806', highlights: ["Elephant Rock", "Waterfalls", "Trails"], hours: { "Monday": "6:00 AM - 10:00 PM", "Tuesday": "6:00 AM - 10:00 PM", "Wednesday": "6:00 AM - 10:00 PM", "Thursday": "6:00 AM - 10:00 PM", "Friday": "6:00 AM - 10:00 PM", "Saturday": "6:00 AM - 10:00 PM", "Sunday": "6:00 AM - 10:00 PM" } },
    { id: 'explore-24', type: 'adventure', name: 'Magney-Snively', category: 'Nature • Hiking', cost: 'Free', timeNeeded: 'Spend 2-3 Hours', rating: '4.5', reviews: '2,567', description: 'A hidden gem protecting old-growth forests and rugged ski trails.', image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop', location: 'West Duluth', phone: '(218) 730-4300', website: 'https://duluthmn.gov/parks/', address: 'Skyline Pkwy & Snively Rd, Duluth, MN 55810', highlights: ["Old Growth Forest", "Rock Formations"], hours: { "Monday": "6:00 AM - 10:00 PM", "Tuesday": "6:00 AM - 10:00 PM", "Wednesday": "6:00 AM - 10:00 PM", "Thursday": "6:00 AM - 10:00 PM", "Friday": "6:00 AM - 10:00 PM", "Saturday": "6:00 AM - 10:00 PM", "Sunday": "6:00 AM - 10:00 PM" } },
    { id: 'explore-25', type: 'adventure', name: 'McQuade Small Craft Harbor', category: 'Water • Kayaking • Fishing', cost: 'Free', timeNeeded: 'Spend 2-3 Hours', rating: '4.5', reviews: '1,890', description: 'Protected harbor on the North Shore, perfect for kayaking and fishing.', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop', location: 'North Shore', phone: '(218) 723-4728', website: 'https://www.dnr.state.mn.us/', address: 'Scenic Hwy 61, Duluth, MN 55804', highlights: ["Breakwall", "Safe Launch", "Tunnel"], hours: { "Monday": "Open 24 hours", "Tuesday": "Open 24 hours", "Wednesday": "Open 24 hours", "Thursday": "Open 24 hours", "Friday": "Open 24 hours", "Saturday": "Open 24 hours", "Sunday": "Open 24 hours" } },
    { id: 'explore-26', type: 'adventure', name: 'Memorial Park', category: 'Sports • Community', cost: 'Free', timeNeeded: 'Spend 1-2 Hours', rating: '4.2', reviews: '1,456', description: 'Large park with athletic fields and winter skating rinks.', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop', location: 'West Duluth', phone: '(218) 730-4300', website: 'https://duluthmn.gov/parks/', address: '501 N 54th Ave W, Duluth, MN 55807', highlights: ["Hockey Rink", "Baseball Fields"], hours: { "Monday": "6:00 AM - 10:00 PM", "Tuesday": "6:00 AM - 10:00 PM", "Wednesday": "6:00 AM - 10:00 PM", "Thursday": "6:00 AM - 10:00 PM", "Friday": "6:00 AM - 10:00 PM", "Saturday": "6:00 AM - 10:00 PM", "Sunday": "6:00 AM - 10:00 PM" } },
    { id: 'explore-27', type: 'adventure', name: 'Mission Creek Trails', category: 'Hiking • Nature • Trails', cost: 'Free', timeNeeded: 'Spend 1-3 Hours', rating: '4.3', reviews: '1,234', description: 'Scenic trails through forests and along Mission Creek.', image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop', location: 'West Duluth', phone: '(218) 730-4300', website: 'https://duluthmn.gov/parks/', address: 'Mission Creek Blvd, Duluth, MN 55807', highlights: ["Forest Trails", "Creek Views"], hours: { "Monday": "6:00 AM - 10:00 PM", "Tuesday": "6:00 AM - 10:00 PM", "Wednesday": "6:00 AM - 10:00 PM", "Thursday": "6:00 AM - 10:00 PM", "Friday": "6:00 AM - 10:00 PM", "Saturday": "6:00 AM - 10:00 PM", "Sunday": "6:00 AM - 10:00 PM" } },
    { id: 'explore-28', type: 'adventure', name: 'North Shore Scenic Railroad', category: 'Historic • Museum • Education', cost: 'Varies ($15-$50)', timeNeeded: 'Spend 1-2 Hours', rating: '4.4', reviews: '4,234', description: 'Historic train rides along the North Shore with beautiful lake views.', image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop', location: 'Canal Park', phone: '(218) 722-1273', website: 'https://northshorescenicrailroad.org/', address: '506 W Michigan St, Duluth, MN 55802', highlights: ["Historic Train", "Scenic Rides", "Lake Views"], hours: { "Monday": "Seasonal", "Tuesday": "Seasonal", "Wednesday": "Seasonal", "Thursday": "Seasonal", "Friday": "Seasonal", "Saturday": "Seasonal", "Sunday": "Seasonal" } },
    { id: 'explore-29', type: 'adventure', name: 'Park Point', category: 'Beach • Nature', cost: 'Free', timeNeeded: 'Spend 1-3 Hours', rating: '4.5', reviews: '5,234', description: 'The world\'s longest freshwater sandbar, featuring a sandy beach and pine forests.', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop', location: 'Park Point', phone: '(218) 730-4300', website: 'https://duluthmn.gov/parks/', address: '45th St & Minnesota Ave, Duluth, MN 55802', highlights: ["Sandy Beach", "Sand Dunes", "Lake Views"], hours: { "Monday": "6:00 AM - 10:00 PM", "Tuesday": "6:00 AM - 10:00 PM", "Wednesday": "6:00 AM - 10:00 PM", "Thursday": "6:00 AM - 10:00 PM", "Friday": "6:00 AM - 10:00 PM", "Saturday": "6:00 AM - 10:00 PM", "Sunday": "6:00 AM - 10:00 PM" } },
    { id: 'explore-30', type: 'adventure', name: 'Piedmont Trail System', category: 'Hiking • Nature • Trails', cost: 'Free', timeNeeded: 'Spend 1-3 Hours', rating: '4.4', reviews: '2,345', description: 'Extensive trail network for hiking and mountain biking.', image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop', location: 'Piedmont', phone: '(218) 730-4300', website: 'https://duluthmn.gov/parks/', address: 'Piedmont Ave, Duluth, MN 55811', highlights: ["Mountain Biking", "Hiking Trails"], hours: { "Monday": "6:00 AM - 10:00 PM", "Tuesday": "6:00 AM - 10:00 PM", "Wednesday": "6:00 AM - 10:00 PM", "Thursday": "6:00 AM - 10:00 PM", "Friday": "6:00 AM - 10:00 PM", "Saturday": "6:00 AM - 10:00 PM", "Sunday": "6:00 AM - 10:00 PM" } },
    { id: 'explore-31', type: 'adventure', name: 'S.S. William A. Irvin', category: 'Historic • Museum • Education', cost: '$12-$18', timeNeeded: 'Spend 1-2 Hours', rating: '4.3', reviews: '3,456', description: 'Historic ore boat museum ship offering tours of a Great Lakes freighter.', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop', location: 'Canal Park', phone: '(218) 722-7876', website: 'https://duluthdepot.org/', address: '350 Harbor Dr, Duluth, MN 55802', highlights: ["Historic Ship", "Museum", "Tours"], hours: { "Monday": "10:00 AM - 5:00 PM", "Tuesday": "10:00 AM - 5:00 PM", "Wednesday": "10:00 AM - 5:00 PM", "Thursday": "10:00 AM - 5:00 PM", "Friday": "10:00 AM - 5:00 PM", "Saturday": "10:00 AM - 5:00 PM", "Sunday": "10:00 AM - 5:00 PM" } },
    { id: 'explore-32', type: 'adventure', name: 'Seven Bridges Road', category: 'Historic • Scenic • Views', cost: 'Free', timeNeeded: 'Spend 30-60 Minutes', rating: '4.8', reviews: '5,678', description: 'A historic stone-bridge road winding up changing elevation along Amity Creek.', image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop', location: 'Lester Park', phone: '(218) 730-4300', website: 'https://duluthmn.gov/parks/', address: 'Seven Bridges Rd, Duluth, MN 55804', highlights: ["Historic Road", "Stone Bridges", "Scenic Drive"], hours: { "Monday": "6:00 AM - 10:00 PM", "Tuesday": "6:00 AM - 10:00 PM", "Wednesday": "6:00 AM - 10:00 PM", "Thursday": "6:00 AM - 10:00 PM", "Friday": "6:00 AM - 10:00 PM", "Saturday": "6:00 AM - 10:00 PM", "Sunday": "6:00 AM - 10:00 PM" } },
    { id: 'explore-33', type: 'adventure', name: 'Spirit Mountain - Summer', category: 'Adventure • Mountain Biking • Activities', cost: 'Varies ($20-$60)', timeNeeded: 'Spend 2-4 Hours', rating: '4.5', reviews: '6,789', description: 'Summer recreation area featuring mountain biking trails, alpine coaster, zip line, and adventure park activities.', image: 'https://images.unsplash.com/photo-1551524164-6cf77f5e1d6e?w=800&h=600&fit=crop', location: 'West Duluth', phone: '(218) 628-2891', website: 'https://spiritmt.com/', address: '9500 Spirit Mountain Pl, Duluth, MN 55810', highlights: ["Alpine Coaster", "Zip Line", "MTB Trails", "Adventure Park"], hours: { "Monday": "Varies by Season", "Tuesday": "Varies by Season", "Wednesday": "Varies by Season", "Thursday": "Varies by Season", "Friday": "Varies by Season", "Saturday": "Varies by Season", "Sunday": "Varies by Season" } },
    { id: 'explore-34', type: 'adventure', name: 'Spirit Mountain - Winter', category: 'Skiing • Snowboarding • Winter Sports', cost: 'Varies ($20-$60)', timeNeeded: 'Spend 2-4 Hours', rating: '4.5', reviews: '6,789', description: 'Premier winter destination with downhill skiing, snowboarding, tubing, and snowmaking on multiple runs.', image: 'https://images.unsplash.com/photo-1551524164-6cf77f5e1d6e?w=800&h=600&fit=crop', location: 'West Duluth', phone: '(218) 628-2891', website: 'https://spiritmt.com/', address: '9500 Spirit Mountain Pl, Duluth, MN 55810', highlights: ["Downhill Skiing", "Snowboarding", "Tubing", "Ski Lessons"], hours: { "Monday": "Varies by Season", "Tuesday": "Varies by Season", "Wednesday": "Varies by Season", "Thursday": "Varies by Season", "Friday": "Varies by Season", "Saturday": "Varies by Season", "Sunday": "Varies by Season" } },
    { id: 'explore-35', type: 'adventure', name: 'Wade Stadium', category: 'Sports • Entertainment • Community', cost: 'Free', timeNeeded: 'Spend 1-2 Hours', rating: '4.2', reviews: '1,890', description: 'Historic baseball stadium home to the Duluth Huskies.', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop', location: 'West Duluth', phone: '(218) 786-9909', website: 'https://duluthhuskies.com/', address: '1015 W 35th St, Duluth, MN 55808', highlights: ["Baseball", "Historic Stadium"], hours: { "Monday": "Seasonal", "Tuesday": "Seasonal", "Wednesday": "Seasonal", "Thursday": "Seasonal", "Friday": "Seasonal", "Saturday": "Seasonal", "Sunday": "Seasonal" } },
    { id: 'explore-36', type: 'adventure', name: 'Web Woods', category: 'Nature • Hiking • Outdoor', cost: 'Free', timeNeeded: 'Spend 1-2 Hours', rating: '4.3', reviews: '1,567', description: 'A peaceful nature area with trails through old-growth forests.', image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop', location: 'West Duluth', phone: '(218) 730-4300', website: 'https://duluthmn.gov/parks/', address: 'Web Woods Trail, Duluth, MN 55807', highlights: ["Old Growth", "Nature Trails"], hours: { "Monday": "6:00 AM - 10:00 PM", "Tuesday": "6:00 AM - 10:00 PM", "Wednesday": "6:00 AM - 10:00 PM", "Thursday": "6:00 AM - 10:00 PM", "Friday": "6:00 AM - 10:00 PM", "Saturday": "6:00 AM - 10:00 PM", "Sunday": "6:00 AM - 10:00 PM" } },
    { id: 'explore-37', type: 'adventure', name: 'Western Waterfront Trail', category: 'Hiking • Nature • Trails', cost: 'Free', timeNeeded: 'Spend 1-3 Hours', rating: '4.4', reviews: '2,789', description: 'Scenic trail along the St. Louis River with views of the harbor.', image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop', location: 'West Duluth', phone: '(218) 730-4300', website: 'https://duluthmn.gov/parks/', address: 'Western Waterfront Trail, Duluth, MN 55807', highlights: ["River Views", "Harbor Views", "Trails"], hours: { "Monday": "6:00 AM - 10:00 PM", "Tuesday": "6:00 AM - 10:00 PM", "Wednesday": "6:00 AM - 10:00 PM", "Thursday": "6:00 AM - 10:00 PM", "Friday": "6:00 AM - 10:00 PM", "Saturday": "6:00 AM - 10:00 PM", "Sunday": "6:00 AM - 10:00 PM" } },
];

// Adventure photos from naturephotos folder (gallery only, not hero/cover)
// Only includes parks with matching adventure names AND folders with verified photos
const adventurePhotos = {
    "Aerial Lift Bridge": [
        "aerial_lift_bridge_1.jpg",
        "aerial_lift_bridge_10.jpg",
        "aerial_lift_bridge_11.jpg",
        "aerial_lift_bridge_12.jpg",
        "aerial_lift_bridge_13.jpg",
        "aerial_lift_bridge_14.jpg",
        "aerial_lift_bridge_15.jpg",
        "aerial_lift_bridge_2.jpg",
        "aerial_lift_bridge_3.jpg",
        "aerial_lift_bridge_4.jpg",
        "aerial_lift_bridge_5.jpg",
        "aerial_lift_bridge_6.jpg",
        "aerial_lift_bridge_7.jpg",
        "aerial_lift_bridge_8.jpg",
        "aerial_lift_bridge_9.jpg",
    ],
    "Brewer Park": [
        "brewer_park_1.jpg",
        "brewer_park_10.jpg",
        "brewer_park_11.jpg",
        "brewer_park_12.jpg",
        "brewer_park_13.jpg",
        "brewer_park_14.jpg",
        "brewer_park_15.jpg",
        "brewer_park_2.jpg",
        "brewer_park_3.jpg",
        "brewer_park_4.jpg",
        "brewer_park_5.jpg",
        "brewer_park_6.jpg",
        "brewer_park_7.jpg",
        "brewer_park_8.jpg",
        "brewer_park_9.jpg",
    ],
    "Brighton Beach": [
        "brighton_beach_1.jpg",
        "brighton_beach_10.jpg",
        "brighton_beach_2.jpg",
        "brighton_beach_3.jpg",
        "brighton_beach_4.jpg",
        "brighton_beach_5.jpg",
        "brighton_beach_7.jpg",
    ],
    "Canal Park": [
        "canal_park_1.jpg",
        "canal_park_11.jpg",
        "canal_park_13.jpg",
        "canal_park_2.jpg",
        "canal_park_3.jpg",
        "canal_park_6.jpg",
        "canal_park_7.jpg",
        "canal_park_8.jpg",
    ],
    "Chester Park": [
        "chester_park_1.jpg",
        "chester_park_2.jpg",
        "chester_park_6.jpg",
        "chester_park_7.jpg",
        "chester_park_8.jpg",
    ],
    "Congdon Park": [
        "congdon_park_1.jpg",
        "congdon_park_12.jpg",
        "congdon_park_13.jpg",
        "congdon_park_14.jpg",
        "congdon_park_15.jpg",
        "congdon_park_2.jpg",
        "congdon_park_5.jpg",
        "congdon_park_6.jpg",
        "congdon_park_7.jpg",
        "congdon_park_8.jpg",
    ],
    "Ely's Peak": [
        "ely's_peak_1.jpg",
        "ely's_peak_2.jpg",
        "ely's_peak_3.jpg",
        "ely's_peak_4.jpg",
        "ely's_peak_5.jpg",
        "ely's_peak_6.jpg",
        "ely's_peak_7.jpg",
    ],
    "Enger Park": [
        "enger_park_1.jpg",
        "enger_park_10.jpg",
        "enger_park_11.jpg",
        "enger_park_12.jpg",
        "enger_park_13.jpg",
        "enger_park_14.jpg",
        "enger_park_15.jpg",
        "enger_park_2.jpg",
        "enger_park_3.jpg",
        "enger_park_4.jpg",
        "enger_park_5.jpg",
        "enger_park_6.jpg",
        "enger_park_7.jpg",
        "enger_park_8.jpg",
        "enger_park_9.jpg",
    ],
    "Fairmont Park": [
        "fairmont_park_1.jpg",
    ],
    "Gichi-ode' Akiing": [
        "gichi-ode’_akiing_1.jpg",
        "gichi-ode’_akiing_2.jpg",
        "gichi-ode’_akiing_3.jpg",
    ],
    "Glensheen Mansion": [
        "glensheen_mansion_1.jpg",
        "glensheen_mansion_10.jpg",
        "glensheen_mansion_11.jpg",
        "glensheen_mansion_12.jpg",
        "glensheen_mansion_13.jpg",
        "glensheen_mansion_14.jpg",
        "glensheen_mansion_15.jpg",
        "glensheen_mansion_2.jpg",
        "glensheen_mansion_3.jpg",
        "glensheen_mansion_4.jpg",
        "glensheen_mansion_5.jpg",
        "glensheen_mansion_6.jpg",
        "glensheen_mansion_7.jpg",
        "glensheen_mansion_8.jpg",
        "glensheen_mansion_9.jpg",
    ],
    "Great Lakes Aquarium": [
        "great_lakes_aquarium_1.jpg",
        "great_lakes_aquarium_10.jpg",
        "great_lakes_aquarium_11.jpg",
        "great_lakes_aquarium_12.jpg",
        "great_lakes_aquarium_13.jpg",
        "great_lakes_aquarium_14.jpg",
        "great_lakes_aquarium_15.jpg",
        "great_lakes_aquarium_2.jpg",
        "great_lakes_aquarium_3.jpg",
        "great_lakes_aquarium_4.jpg",
        "great_lakes_aquarium_5.jpg",
        "great_lakes_aquarium_6.jpg",
        "great_lakes_aquarium_7.jpg",
        "great_lakes_aquarium_8.jpg",
        "great_lakes_aquarium_9.jpg",
    ],
    "Hawk Ridge": [
        "hawk_ridge_1.jpg",
        "hawk_ridge_10.jpg",
        "hawk_ridge_11.jpg",
        "hawk_ridge_12.jpg",
        "hawk_ridge_2.jpg",
        "hawk_ridge_3.jpg",
        "hawk_ridge_4.jpg",
        "hawk_ridge_7.jpg",
        "hawk_ridge_8.jpg",
        "hawk_ridge_9.jpg",
    ],
    "Jay Cooke State Park": [
        "jay_cooke_state_park_1.jpg",
        "jay_cooke_state_park_11.jpg",
        "jay_cooke_state_park_12.jpg",
        "jay_cooke_state_park_13.jpg",
        "jay_cooke_state_park_14.jpg",
        "jay_cooke_state_park_15.jpg",
        "jay_cooke_state_park_2.jpg",
        "jay_cooke_state_park_3.jpg",
        "jay_cooke_state_park_5.jpg",
        "jay_cooke_state_park_6.jpg",
        "jay_cooke_state_park_7.jpg",
        "jay_cooke_state_park_8.jpg",
    ],
    "Lake Superior Maritime Visitor Center": [
        "lake_superior_maritime_visitor_center_11.jpg",
        "lake_superior_maritime_visitor_center_12.jpg",
        "lake_superior_maritime_visitor_center_2.jpg",
        "lake_superior_maritime_visitor_center_3.jpg",
        "lake_superior_maritime_visitor_center_4.jpg",
        "lake_superior_maritime_visitor_center_5.jpg",
        "lake_superior_maritime_visitor_center_6.jpg",
    ],
    "Lake Superior Zoo": [
        "lake_superior_zoo_1.jpg",
        "lake_superior_zoo_2.jpg",
        "lake_superior_zoo_3.jpg",
        "lake_superior_zoo_5.jpg",
        "lake_superior_zoo_6.jpg",
    ],
    "Lakewalk": [
        "lakewalk_11.jpg",
        "lakewalk_7.jpg",
        "lakewalk_9.jpg",
    ],
    "Leif Erikson Park": [
        "leif_erikson_park_1.jpg",
        "leif_erikson_park_12.jpg",
        "leif_erikson_park_13.jpg",
        "leif_erikson_park_14.jpg",
        "leif_erikson_park_15.jpeg",
        "leif_erikson_park_2.jpg",
        "leif_erikson_park_3.jpg",
        "leif_erikson_park_6.jpg",
        "leif_erikson_park_7.jpg",
        "leif_erikson_park_8.jpg",
        "leif_erikson_park_9.jpg",
    ],
    "Lester Park": [
        "lester_park_1.jpg",
        "lester_park_2.jpg",
        "lester_park_3.jpg",
        "lester_park_4.jpg",
        "lester_park_6.jpg",
        "lester_park_8.jpg",
    ],
    "Memorial Park": [
        "memorial_park_1.jpg",
        "memorial_park_10.jpg",
        "memorial_park_11.jpg",
        "memorial_park_12.jpg",
        "memorial_park_13.jpg",
        "memorial_park_14.jpg",
        "memorial_park_15.jpg",
        "memorial_park_2.jpg",
        "memorial_park_3.jpeg",
        "memorial_park_4.jpg",
        "memorial_park_5.jpg",
        "memorial_park_7.jpg",
        "memorial_park_8.jpg",
        "memorial_park_9.jpg",
    ],
    "North Shore Scenic Railroad": [
        "north_shore_scenic_railroad_1.jpg",
        "north_shore_scenic_railroad_10.jpg",
        "north_shore_scenic_railroad_11.jpg",
        "north_shore_scenic_railroad_12.jpg",
        "north_shore_scenic_railroad_13.jpg",
        "north_shore_scenic_railroad_14.jpg",
        "north_shore_scenic_railroad_15.jpg",
        "north_shore_scenic_railroad_2.jpg",
        "north_shore_scenic_railroad_3.jpg",
        "north_shore_scenic_railroad_4.jpg",
        "north_shore_scenic_railroad_5.jpg",
        "north_shore_scenic_railroad_6.jpg",
        "north_shore_scenic_railroad_7.jpg",
        "north_shore_scenic_railroad_8.jpg",
        "north_shore_scenic_railroad_9.jpg",
    ],
    "Park Point": [
        "park_point_14.jpg",
        "park_point_3.jpg",
        "park_point_4.jpg",
        "park_point_5.jpg",
        "park_point_6.jpg",
    ],
    "S.S. William A. Irvin": [
        "s.s._william_a._irvin_2.jpg",
        "s.s._william_a._irvin_4.jpg",
        "s.s._william_a._irvin_5.jpg",
        "s.s._william_a._irvin_6.jpg",
        "s.s._william_a._irvin_7.jpg",
    ],
    "Seven Bridges Road": [
        "seven_bridges_road_1.jpg",
    ],
    "Skyline Parkway": [
        "skyline_parkway_1.jpg",
        "skyline_parkway_2.jpg",
        "skyline_parkway_3.jpg",
    ],
    "Spirit Mountain - Summer": [
        "spirit_mountain_15.jpg",
        "spirit_mountain_3.jpg",
        "spirit_mountain_4.jpg",
        "spirit_mountain_5.jpg",
    ],
    "Spirit Mountain - Winter": [
        "spirit_mountain_15.jpg",
        "spirit_mountain_3.jpg",
        "spirit_mountain_4.jpg",
        "spirit_mountain_5.jpg",
    ],
    "Wade Stadium": [
        "wade_stadium_1.jpg",
        "wade_stadium_10.jpg",
        "wade_stadium_11.jpg",
        "wade_stadium_13.jpg",
        "wade_stadium_14.jpg",
        "wade_stadium_15.jpg",
        "wade_stadium_2.jpg",
        "wade_stadium_4.jpg",
        "wade_stadium_7.jpg",
        "wade_stadium_8.jpg",
        "wade_stadium_9.jpg",
    ],
    "Web Woods": [
        "web_woods_2.jpg",
        "web_woods_3.jpg",
    ],
    };















// Helper function to convert adventure name to folder slug (e.g., "Aerial Lift Bridge" -> "aerial-lift-bridge")
function adventureNameToSlug(name) {
    return name
        .toLowerCase()
        .replace(/'/g, '') // Remove apostrophes
        .replace(/[^a-z0-9]+/g, '-') // Replace non-alphanumeric with hyphens
        .replace(/^-|-$/g, ''); // Remove leading/trailing hyphens
}

// Helper function to get priority photos from NaturePhotosPriority folder
function getAdventurePriorityPhotos(adventureName) {
    // Map adventure name to folder name in NaturePhotosPriority
    // For Spirit Mountain variants, use the full name with dash
    let priorityFolderName = adventureName;
    
    // Handle special case: Gichi-ode' Akiing folder has curly apostrophe in filesystem
    if (adventureName === "Gichi-ode' Akiing") {
        priorityFolderName = "Gichi-ode’ Akiing"; // Use curly apostrophe to match filesystem
    }
    
    // All priority photo filenames per adventure from NaturePhotosPriority folder
    const priorityPhotoFiles = {
        'Aerial Lift Bridge': ['bridge-view-1024x767-1.jpg', 'download-1.jpg', 'download.jpg'],
        'Bagley Nature Area': ['download-1.jpg', 'download-2.jpg', 'download-3.jpg', 'download.jpg'],
        'Brewer Park': ['download-1.jpg', 'download-2.jpg', 'download-3.jpg', 'download.jpg'],
        'Brighton Beach': ['download-1.jpg', 'download-2.jpg', 'download.jpg'],
        'Canal Park': ['download-1.jpg', 'download-2.jpg', 'download.jpg'],
        'Chambers Grove': ['download-1.jpg', 'download-2.jpg', 'download.jpg'],
        'Chester Park': ['download copy.jpg', 'download-1 copy.jpg', 'download-1.jpg', 'download-2 copy.jpg', 'download-2.jpg', 'download-3.jpg', 'download.jpg'],
        'Congdon Park': ['download-1.jpg', 'download-2.jpg', 'download-3.jpg', 'download-4.jpg', 'download-5.jpg', 'download.jpg', 'waterfallsamity-768x1024.jpg'],
        "Ely's Peak": ['download-1.jpg', 'download-2.jpg', 'download.jpg'],
        'Enger Park': ['download-1.jpg', 'download-2.jpg', 'download-3.jpg', 'download.jpg'],
        'Fairmont Park': ['download-1.jpg', 'download-2.jpg', 'download-3.jpg', 'download.jpg'],
        "Gichi-ode' Akiing": ['download-1.jpg', 'download-2.jpg', 'download-3.jpg', 'download.jpg'],
        'Glensheen Mansion': ['download-1.jpg', 'download-2.jpg', 'download.jpg'],
        'Great Lakes Aquarium': ['download-1.jpg', 'download-2.jpg', 'download.jpg'],
        'Hartley Park': ['download.jpg'],
        'Hawk Ridge': ['download-1.jpg', 'download-2.jpg', 'download-3.jpg'],
        'Jay Cooke State Park': ['download-1.jpg', 'download-2.jpg', 'images.jpg'],
        'Lake Superior Maritime Visitor Center': ['download-1.jpg', 'download-2.jpg', 'download.jpg'],
        'Lake Superior Zoo': ['download-1.jpg', 'download-2.jpg', 'download-3.jpg', 'download-4.jpg', 'download.jpg'],
        'Lakewalk': ['download-1.jpg', 'download.jpg', 'lakewalk.jpg'],
        'Leif Erikson Park': ['download-1.jpg', 'download-2.jpg', 'download-3.jpg', 'download-4.jpg', 'download.jpg'],
        'Lester Park': ['download-1.jpg', 'download.jpg', 'lesterpark2015pavillion2_500x375.jpg'],
        'Lincoln Park': ['download-1.jpg', 'download-2.jpg', 'download-3.jpg', 'download-4.jpg', 'download.jpg'],
        'Magney-Snively': ['download-1.jpg', 'download-2.jpg', 'download.jpg', 'images.jpg'],
        'McQuade Small Craft Harbor': ['mcquade1.jpg', 'mcquade2.jpg'],
        'Memorial Park': ['download-1.jpg', 'download-2.jpg', 'download.jpg'],
        'Mission Creek Trails': ['download-1.jpg', 'download.jpg', 'e860267e-5ca5-4800-a3e8-02ca0d7727ae_1000x1000.png'],
        'North Shore Scenic Railroad': ['download-1.jpg', 'download-2.jpg', 'download.jpg'],
        'Park Point': ['download-1.jpg', 'download-2.jpg', 'download.jpg'],
        'Piedmont Trail System': ['download-1.jpg', 'download.jpg', 'images.jpg'],
        'S.S. William A. Irvin': ['download-1.jpg', 'download-2.jpg', 'download.jpg'],
        'Seven Bridges Road': ['21Map.jpg', 'download.jpg', 'images.jpg', 'pxmMQQP.png'],
        'Skyline Parkway': ['download-1.jpg', 'download.jpg', 'images.jpg'],
        'Spirit Mountain - Summer': ['505764721_1213131370050612_2366552663850512836_n.heic', '521415687_681458401608644_3303109370459664445_n.heic', '544036384_18523288927021469_8227146770965933019_n.jpg', 'download-1.jpg', 'download-2.jpg', 'download-3.jpg', 'download.jpg'],
        'Spirit Mountain - Winter': ['download-1.jpg', 'download-2.jpg', 'download-3.jpg', 'download-4.jpg', 'download.jpg'],
        'Wade Stadium': ['download-1.jpg', 'download.jpg', 'images.jpg'],
        'Web Woods': ['download-1.jpg', 'download-2.jpg', 'download-3.jpg', 'download.jpg'],
        'Western Waterfront Trail': ['download-1.jpg', 'download-2.jpg', 'download-3.jpg', 'download.jpg']
    };
    
    const files = priorityPhotoFiles[adventureName];
    if (!files) {
        return [];
    }
    
    // Build paths to priority photos
    // Path format: /NaturePhotosPriority/[Adventure Name]/[filename]
    const encodedFolderName = encodeURIComponent(priorityFolderName);
    return files.map(filename => {
        return `/NaturePhotosPriority/${encodedFolderName}/${encodeURIComponent(filename)}`;
    });
}

// Helper function to get all photos for an adventure (gallery only, not hero/cover)
function getAdventureAllPhotos(adventureName) {
    // Get priority photos first
    const priorityPhotos = getAdventurePriorityPhotos(adventureName);
    console.log('getAdventureAllPhotos for', adventureName, '- Priority photos:', priorityPhotos.length);
    
    // Get regular gallery photos
    let regularPhotos = [];
    if (typeof adventurePhotos !== 'undefined' && adventurePhotos && adventurePhotos[adventureName]) {
        const photos = adventurePhotos[adventureName];
        // Map adventure name to folder name
        // For Spirit Mountain variants, use the base folder name
        let folderName = adventureName;
        if (adventureName === 'Spirit Mountain - Summer' || adventureName === 'Spirit Mountain - Winter') {
            folderName = 'Spirit Mountain';
        }
        // Convert folder name to slug format for path (e.g., "Spirit Mountain" -> "spirit-mountain")
        const folderSlug = adventureNameToSlug(folderName);
        regularPhotos = photos.map(filename => {
            // Build path: /images/nature/[adventure-slug]/[filename]
            return `/images/nature/${folderSlug}/${encodeURIComponent(filename)}`;
        });
        console.log('getAdventureAllPhotos for', adventureName, '- Regular photos:', regularPhotos.length);
    } else {
        console.log('getAdventureAllPhotos for', adventureName, '- No regular photos found in adventurePhotos');
    }
    
    // Return priority photos first, then regular photos
    const allPhotos = priorityPhotos.concat(regularPhotos);
    console.log('getAdventureAllPhotos for', adventureName, '- Total photos:', allPhotos.length);
    return allPhotos;
}

