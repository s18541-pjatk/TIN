const fs = require('fs');
const path = "C:\\Users\\mateu\\Desktop\\TIN\\07";


fs.watch(path, (eventType, filename) => {
    console.log("There was a " + eventType + " on a: " + filename);

    if (eventType === "change") {
        try {
            console.log("New content: " + fs.readFileSync(filename,'utf8'))
        } catch (ignored) {}
    }
});
