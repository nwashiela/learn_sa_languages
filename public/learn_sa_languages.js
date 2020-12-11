
var image = document.querySelector('.img')
let userMessageElem = document.querySelector(".userMessageElem")
let successElem = document.querySelector(".successElem")
// let greetIn = document.querySelector(".greetIn")




let init;

async function createModel() {
    let checkpointURL = URL + "model.json"; // model topology
    const metadataURL = URL + "metadata.json"; // model metadata

    const recognizer = speechCommands.create(
        "BROWSER_FFT", // fourier transform type, not useful to change
        undefined, // speech commands vocabulary feature, not useful for your models
        checkpointURL,
        metadataURL);

    // check that model and metadata are loaded via HTTPS req/*  */uests.
    await recognizer.ensureModelLoaded();

    return recognizer;
}

async function init() {
    const recognizer = await createModel();
    const classLabels = recognizer.wordLabels(); // get class labels
    const labelContainer = document.getElementById("label-container");
    for (let i = 0; i < classLabels.length; i++) {
        labelContainer.appendChild(document.createElement("div"));
    }

    // listen() takes two arguments:
    // 1. A callback function that is invoked anytime a word is recognized.


    // 2. A configurationxh object with adjustable fields
    recognizer.listen(result => {
        const scores = result.scores; // probability of prediction for each class
        // render the probability scores per class
        // let nodeC;
        let highiestClass = 0;
        let modelTag = "";

        for (let i = 0; i < classLabels.length; i++) {
            const classPrediction = classLabels[i]
                + ": " + result.scores[i].toFixed(2);
            if (result.scores[i].toFixed(2) > highiestClass) {
                highiestClass = result.scores[i].toFixed(2)
                modelTag = classLabels[i]
            }

            console.log({ modelTag });

           // if (modelTag === "Isixhosa") {


           // } else {
           //     return
           // }


        }
        labelContainer.innerHTML = modelTag;
        image.innerHTML = ('.traditional pictures/xhosa.jpg')
    }, {
        includeSpectrogram: true, // in case listen should return result.spectrogram
        probabilityThreshold: 0.75,
        invokeCallbackOnNoiseAndUnknown: true,
        overlapFactor: 0.50 // probably want between 0.5 and 0.75. More info in README
    });

    // Stop the recognition in 5 seconds.
    // setTimeout(() => recognizer.stopListening(), 5000);
}