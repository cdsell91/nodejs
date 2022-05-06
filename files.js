const fs = require('fs');

fs.writeFile('./newFile.txt', "any content", function(error) {
    if (error) {
        console.log(error);
    } else {
        fs.readFile('./newFile.txt', function(error, data) {
            if (error) {
                console.log(error);
            } else {
                console.log(data.toString());
            }
        });
    }
});