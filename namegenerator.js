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
"protest",
"sleepy",
"liquid",
"king",
"queen",
"racer",
"orbit",
"whisper",
"season",
"flower",
"proto",
"pilot",
"mayor" ,
"figure",
"planet",
"pavement",
"double",
'thunder',
"survive",
"heavy",
"eclipse",
"bridges",
"metal" ,
"compass",
"phoenix",
"radar",
"system",
"pollen",
"dark",
"symbol",
"convex",
"flash",
"extinct",
"easy",
"hornet",
"factor",
"primate",
"fossil",
"hundred",
"muscle",
"zen",
"crystal",
"cyclone",
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
