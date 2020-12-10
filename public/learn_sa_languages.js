{/* <script type="text/javascript"> */ }
// more documentation available at
// https://github.com/tensorflow/tfjs-models/tree/master/speech-commands

// the link to your model provided by Teachable Machine export panel
const URL = "https://teachablemachine.withgoogle.com/models/b-_CxRbS6/";

async function createModel() {
    const checkpointURL = URL + "model.json"; // model topology
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


    // 2. A configuration object with adjustable fields
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
        }
        labelContainer.innerHTML = modelTag;

    }, {
        includeSpectrogram: true, // in case listen should return result.spectrogram
        probabilityThreshold: 0.75,
        invokeCallbackOnNoiseAndUnknown: true,
        overlapFactor: 0.50 // probably want between 0.5 and 0.75. More info in README
    });

    async function qusetions(language) {
        let quest = "";

        if (quest === isiXhosa) {
            return "Can you Greet in isiXhosa" + xhosa.jpg
        } else if (quest === "English") {
            return "Can you Greet in English" + english.jpg
        } else if (quest === "isiZulu") {
            return "Can you greet in isiZulu" + zulu.jpg
        } else if (quest === "Venda"){
            return "Can you greet in Venda" + venda.jpg
        } else if (quest === "Ndebele"){
            return "Can you greet in Ndebele" + ndebele.jpg
        }
        return {
            qusetions
        }

    }

    // Stop the recognition in 5 seconds.
    // setTimeout(() => recognizer.stopListening(), 5000);
}
// </script>