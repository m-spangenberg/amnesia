module.exports.randomColourGrabber = randomColourGrabber;
module.exports.randomNameGenerator = randomNameGenerator;

const backgroundColours = [
// See: https://tailwindcss.com/docs/background-color
"bg-gray-500",
"bg-red-500",
"bg-orange-500",
"bg-yellow-500",
"bg-green-500",
"bg-teal-500",
"bg-blue-500",
"bg-indigo-500",
"bg-purple-500",
"bg-pink-500",
"bg-red-300",
"bg-green-300",
"bg-teal-300",
"bg-blue-300",
"bg-indigo-300",
"bg-purple-300",
"bg-pink-300",
"bg-red-800",
"bg-orange-800",
"bg-yellow-800",
"bg-green-800",
"bg-teal-800",
"bg-blue-800",
"bg-indigo-800",
"bg-purple-800",
"bg-pink-800"
]

// add about 50 more two syllable words
const names = [
"purple",
"indigo",
"protest",
"sleepy",
"liquid",
"king",
"jester",
"queen",
"electron",
"racer",
"orbit",
"fog",
"whisper",
"season",
"flower",
"dreadnought",
"proton",
"pilot",
"eagle",
"fire",
"ninja",
"spirit",
"water",
"mayor" ,
"figure",
"earth",
"planet",
"pavement",
"double",
'thunder',
"air",
"hunter",
"missile",
"survive",
"heavy",
"battleship",
"eclipse",
"cosmonaut",
"bridges",
"elephant",
"metal" ,
"compass",
"phoenix",
"radar",
"samurai",
"enterprise",
"system",
"pollen",
"dark",
"soul",
"symbol",
"convex",
"flash",
"endeavour",
"lightning",
"snake",
"extinct",
"sumo",
"easy",
"knight",
"hornet",
"factor",
"astronaut",
"primate",
"zebra",
"fossil",
"viking",
"hundred",
"muscle",
"zen",
"crystal",
"cyclone",
"heart",
"mariner",
"instinct",
"glacier",
"control",
"success",
"thousand"
]

function randomColourGrabber() {
  let randomColour = backgroundColours.sort(() => .5 - Math.random()).slice(0,1)
  return randomColour
}

function randomNameGenerator() {
    let random = names.sort(() => .5 - Math.random()).slice(0,2)
    let twoWords = random.join()
    const randomUserID = twoWords.replace(',', '-')
    return randomUserID;
}
