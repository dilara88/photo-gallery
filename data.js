const photoData = [
    {
        id: 1,
        title: "Daily Objects",
        desc: "A collection of items found in a typical household, representing the beauty in the mundane."
    },
    {
        id: 2,
        title: "Lonely TV",
        desc: "An old television set standing as a relic of past technology and forgotten memories."
    },
    {
        id: 3,
        title: "The Analog Pulse",
        desc: "In the quiet interface of technology and tradition, a notebook holds the tactile blueprint of an idea not yet fully formed."
    },
    {
        id: 4,
        title: "An Extraordinary Path",
        desc: "A cyclist rides alone along a path, determined and in step with the water's peaceful song."
    },
    {
        id: 5,
        title: "Sudden Movement",
        desc: "The stillness of the water is broken by a sudden wave, reminding us of the ocean's depth."
    },
    {
        id: 6,
        title: "The Heat",
        desc: "A convoy of people trying to reach their destination in the heat of the desert and its orange colour."
    },
    {
        id: 7,
        title: "Harmony",
        desc: "The harmony of nature and its different elements."
    },
    {
        id: 8,
        title: "Beauty in Chaos",
        desc: "A representation of the hardwork required to build and repair."
    },
    {
        id: 9,
        title: "Sunset",
        desc: "A moment of reflection while everything around is basked in the light of a beautiful sunset."
    },
    {
        id: 10,
        title: "The Depth of Blue",
        desc: "A moment captured when the sky met the sea and the environment glowed like a jewel in blue."
    },
    {
        id: 11,
        title: "Modern Times",
        desc: "A representation of the modern times when one screen is never enough for anyone."
    },
    {
        id: 12,
        title: "The Fog",
        desc: "A reminder that even the most beautiful places can sometimes be out of visual reach due to circumstances."
    },
    {
        id: 13,
        title: "The Simplicity",
        desc: "A representation of the gratitude we often forget to extend to the simple aspects of life, such as the importance of owning a pair of shoes."
    },
    {
        id: 14,
        title: "Clarity",
        desc: "A feeling of cold clarity, surrounded by whiteness and crispness."
    },
    {
        id: 15,
        title: "The Rainbow",
        desc: "The bravery of nature, with no regard for the city life built by people."
    },
    {
        id: 16,
        title: "A Peaceful Afternoon",
        desc: "The freedom of enjoying nature on a sunny afternoon."
    },
    {
        id: 17,
        title: "The Enchanted Forest",
        desc: "The wall of trees gives the illusion of an enchanted forest where only light is allowed to infiltrate."
    },
    {
        id: 18,
        title: "The Wait",
        desc: "People waiting for a ship to arrive and take them to their dream destinations."
    },
    {
        id: 19,
        title: "A Coffee Date",
        desc: "A conversation filled with the smell of coffee and the bittersweetness of memories."
    },
    {
        id: 20,
        title: "Unmistakably Green",
        desc: "A tactile connection between the soft moss and the hard stone - nature’s resilient blanket."
    },
    {
        id: 21,
        title: "The Forgotten",
        desc: "A forgotten object on a clean, tidy table, still vibrant with its colours."
    },
    {
        id: 22,
        title: "The Precision",
        desc: "The architect’s tools to achieve perfection."
    },
    {
        id: 23,
        title: "Clouds",
        desc: "A surprising moment captured when air behaves like water and clouds appear as waves, showing the interchanging elements of life."
    },
    {
        id: 24,
        title: "An Old Garage",
        desc: "The stored items of a household, each one telling a different story from the past."
    },
    {
        id: 25,
        title: "A Collection",
        desc: "Stones waiting for the summer to be guests at different homes."
    },
    {
        id: 26,
        title: "The Mountain",
        desc: "A silent giant reaching for the heavens, standing as a testament to the enduring bond between the solid earth and the shifting clouds."
    },
    {
        id: 27,
        title: "Still Beautiful",
        desc: "Even when time leaves its mark, the soul of an object remains untouched and profoundly elegant."
    },
    {
        id: 28,
        title: "The Stillness",
        desc: "In the absence of motion, we find the deepest connection; a quiet moment where the world stops spinning, and the soul finally listens."
    },
    {
        id: 29,
        title: "Colours of Light",
        desc: "Even the greyest places can be influenced by light and its irresistible colours."
    },
    {
        id: 30,
        title: "The Essence of Being",
        desc: "A pure, unfiltered connection between an object and the light that defines it."
    },
    {
        id: 31,
        title: "The Wonder",
        desc: "The wonders of the universe and the beauty of its mysteries."
    },
    {
        id: 32,
        title: "The Inner Tempest",
        desc: "A visual translation of the soul's churning waters, where waves of doubt clash with the steadfast light, forging an unbreakable connection between our fears and our resilience."
    },
    {
        id: 33,
        title: "The Reversed Lens",
        desc: "A camera, this time turned towards us, in line with the contrast of the red and green in the frame."
    },
    {
        id: 34,
        title: "Zenith of Thought",
        desc: "A sublime boundary that connects our earthly presence to our celestial dreams."
    },
    {
        id: 35,
        title: "The Dreamland",
        desc: "A journey to a dreamland only a good story can provide."
    },
    {
        id: 36,
        title: "The Weaver of Light",
        desc: "Nature’s own cathedral, with walls made of mist and a roof of endless blue. It is a silent invitation to look up and reconnect with the vastness that surrounds our small, fleeting existence."
    },
    {
        id: 37,
        title: "The Cove",
        desc: "An intimate dialogue between the water and the shore, inviting us to rediscover the beauty of our own quiet reflection."
    },
    {
        id: 38,
        title: "The Looking Glass",
        desc: "A reminder that the perspective you look from has the ultimate effect on what you see."
    },
    {
        id: 39,
        title: "The Nostalgia",
        desc: "A gentle ache for a time we can no longer touch, yet can still feel in every grain and shadow. It is the golden thread that sews our past selves into the fabric of who we are today."
    },
    {
        id: 40,
        title: "Joy",
        desc: "The reflection of joy, friendship and how shared experiences enrich our happiness."
    },
    {
        id: 41,
        title: "The Foreign Shore",
        desc: "A landscape that defies the familiar, whispering of distant worlds and silent galaxies. It is a reminder that the universe's vast, unseen connections reach far beyond our own horizons, inviting us to explore the unknown."
    },
    {
        id: 42,
        title: "The Duplicate",
        desc: "A man, looking at himself from behind, knowing he is never truly alone, even if the tables around him remain empty."
    },
    {
        id: 43,
        title: "A Cup of Delight",
        desc: "A reminder that our cups can be filled with delight with the simple offerings of nature."
    },
    {
        id: 44,
        title: "The Comfort of Textures",
        desc: "From the rugged soul of the brick floor to the gentle steam of a morning cup, every element in this frame is a silent participant in the art of being present."
    },
    {
        id: 45,
        title: "The Bridge",
        desc: "The magnificence of bridging between continents, shining brightly and purposefully in the dark."
    },
    {
        id: 46,
        title: "An Invitation",
        desc: "An old door, inviting exploration of all the history behind it."
    },
    {
        id: 47,
        title: "A Piece of Heaven",
        desc: "A glimpse of how heaven and its abundance would feel."
    },
    {
        id: 48,
        title: "The Golden Thread",
        desc: "Bathed in the warmth of a thousand suns, this frame captures the vibrant energy that binds our brightest moments, a visual celebration of the light we carry within."
    },
    {
        id: 49,
        title: "The Perfect Mirror",
        desc: "A reminder that even the most perfect mirrors show our reflection upside down, guiding us to rely on our inner reflections instead."
    },
    {
        id: 50,
        title: "Summertime Sadness",
        desc: "Where the desert meets the deep. A stark, beautiful dissonance that captures the bittersweet heart of a season that is always leaving us just as we learn to love it."
    },
    {
        id: 51,
        title: "The Golden Horizon",
        desc: "A promise written in amber. Where the sky spills its liquid gold upon the earth, erasing the boundaries between the known and the infinite."
    },
    {
        id: 52,
        title: "The Organised Void",
        desc: "Stripped of colour and distractions, the office desk stands as a silent monument to our daily endeavours."
    },
    {
        id: 53,
        title: "Time",
        desc: "Measured not only by clocks, but by the shifting shadows and the fading light."
    },
    {
        id: 54,
        title: "An Offer",
        desc: "A daring offer to love and value daisies, a silent plea to pause and connect with the simple, fragile beauty we often overlook."
    },
    {
        id: 55,
        title: "The Road",
        desc: "An open invitation to the unknown - a silver ribbon cutting through the emerald wild."
    },
    {
        id: 56,
        title: "The Hidden Labor",
        desc: "The banquet is over, and the voices have faded, leaving behind only the small, quiet witnesses of a shared connection. This single leaf and its tiny burdens are a testament to the unseen effort that goes into every moment of togetherness."
    },
    {
        id: 57,
        title: "The Eternal Flow",
        desc: "Time, much like water, never passes the same point twice. It is a restless connection between the 'before' and the 'after,' a liquid mirror reflecting our own journey through the ever-changing currents of existence."
    },
    {
        id: 58,
        title: "Beyond the Veil",
        desc: "A world painted in the colours of a whisper. It is the moment the horizon forgets where it began and where it ends, binding the heavy soil to the weightless clouds in a timeless, golden embrace."
    },
    {
        id: 59,
        title: "Solitude",
        desc: "The peaceful gravity of being one's own centre, a solitary point of light in the vast, unfolding mystery of existence."
    },
    {
        id: 60,
        title: "The Final",
        desc: "The completion of a sacred circle - a moment that holds every whisper, every shadow, and every golden light we’ve encountered, reminding us that every beautiful story has a final chapter, and every end is but a threshold to a new, untold mystery."
    }
];

