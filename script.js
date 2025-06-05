// Object with potential character features: race, class, alignment and background
const characterFeatures = {
    race: ['Dwarf', 'Elf', 'Halfling', 'Human', 'Dragonborn', 'Gnome', 'Half-Elf', 'Half-Orc', 'Tiefling', 
        'Aasimar', 'Goliath', 'Aarakocra', 'Astral Elf', 'Autognome', 'Bugbear', 'Centaur', 'Changeling',
        'Deep Gnome', 'Dhampir', 'Duergar', 'Eladrin', 'Fairy', 'Firbolg', 'Genasi', 'Giff', 'Githyanki', 
        'Githzerai', 'Goblin', 'Hadozee', 'Harengon', 'Hexblood', 'Hobgoblin', 'Kalashtar', 'Kender',
        'Kenku', 'Kobold', 'Leonin', 'Lizardfolk', 'Loxodon', 'Minotaur', 'Owlin', 'Plasmoid', 'Reborn', 
        'Satyr', 'Sea Elf', 'Shadar-kai', 'Shifter', 'Simic Hybrid', 'Tabaxi', 'Thri-kreen', 'Tortle',
        'Triton', 'Vedalken', 'Verdan', 'Warforged', 'Yuan-ti'],

    class: ['Artificer', 'Barbarian', 'Bard', 'Cleric', 'Druid', 'Fighter', 'Monk', 'Paladin', 'Ranger', 
        'Rogue', 'Sorcerer', 'Warlock', 'Wizard'],

    alignment: [['Lawful', 'Neutral', 'Chaotic'], ['Good', 'Neutral', 'Evil']],

    background: ['Acolyte', 'Anthropologist', 'Archaeologist', 'Athlete', 'Charlatan', 'City Watch',
        'Clan Crafter',  'Cloistered Scholar', 'Courtier', 'Criminal', 'Entertainer', 'Faceless', 
        'Faction Agent', 'Far Traveler', 'Feylost', 'Fisher', 'Folk Hero', 'Giant Foundling', 'Gladiator',      
        'Guild Artisan', 'Guild Merchant', 'Haunted One', 'Hermit', 'House Agent', 'Inheritor', 'Investigator', 
        'Knight', 'Knight of the Order', 'Marine', 'Mercenary', 'Veteran', 'Noble', 'Outlander', 'Pirate',
        'Rewarded', 'Ruined', 'Rune Carver', 'Sage', 'Sailor', 'Shipwright', 'Smuggler', 'Soldier', 'Spy',          
        'Urban Bounty Hunter', 'Urchin', 'Waterdhavian Noble', 'Witchlight Hand']
}

const testObject = ['yada', 'bada', 'bing']

// Generates a random number based on length of an array
function generateRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
}

// Checks whether or not the first letter of a given word is a vowel and returns the appropriate article
function checkFirstLetter(word) {
    let lowercaseWord = word.toLowerCase();
    const vowels = 'aeiou';
    for (let vowel in vowels) {
        if (lowercaseWord.startsWith(vowels[vowel])) {
            return 'an';
        }
    }
    return 'a';
}

// Generates random character suggestion as long as a compatible object is passed in
function generateRandomCharacter(object) {
    if (!object.race || !object.class || !object.background || !object.alignment) {
        console.log("Check to make sure the object you are passing in has race, class, background and alignment properties.")
    } else {
        const race = object.race[generateRandomIndex(object.race)];
        const DnDclass = object.class[generateRandomIndex(object.class)];
        const background = object.background[generateRandomIndex(object.background)];
        const alignment = object.alignment[0][generateRandomIndex(object.alignment[0])] + " " + object.alignment[1][generateRandomIndex(object.alignment[1])];

        console.log(`For your next character, might we suggest ${checkFirstLetter(race)} ${race.toUpperCase()} ${DnDclass.toUpperCase()} with ${checkFirstLetter(background)} ${background.toUpperCase()} background whose alignment is ${alignment.toUpperCase()}.`);
    }
}

generateRandomCharacter(characterFeatures);
generateRandomCharacter(testObject);