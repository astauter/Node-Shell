var fs = require('fs');
module.exports = {
    pwd: function () {
        process.stdout.write(process.mainModule.filename)
        process.stdout.write("\nprompt > ");
    },
    date: function () {
        var date = new Date()
        process.stdout.write(date.toDateString() + " " + date.toTimeString())
        process.stdout.write("\nprompt > ");
    },
    ls: function () {
        fs.readdir('.', function (err, files) {
            if (err) throw err;
            files.forEach(function (file) {
                process.stdout.write(file.toString() + "\n");
            })
            process.stdout.write("prompt > ");
        });
    },
    echo: function (input) {
        console.log(input)
        process.stdout.write("prompt > ");
    },
    cat: function (input) {

        fs.readFile(input, 'utf8', function (err, data) {
            if (err) {
                return console.log(err);
            }
            console.log(data);
            process.stdout.write('\nprompt > ')
        });
        //setTimeout(function() {process.stdout.write('\nprompt > ')}, 5);
    },
    head: function (input) {
        var headArray = [];
        fs.readFile(input, 'utf8', function (err, data) {
            if (err) {
                return console.log(err);
            }
            headArray = data;
            var func = function () {
                headArray = headArray.split('\n');
                for (let i = 0; i < 5; i++) {
                    console.log(headArray[i]);
                }
                process.stdout.write('\nprompt > ')
            }
            func();
        });


        // setTimeout(function() {
        //     headArray = headArray.split('\n');
        //     for (let i = 0; i < 5; i++){
        //         console.log(headArray[i])
        //     }
        //     process.stdout.write('\nprompt > ')
        // }, 5)

    },
    tail: function (input) {
        var tailArray = [];
        fs.readFile(input, 'utf8', function (err, data) {
            if (err) {
                return console.log(err);
            }
            tailArray = data;


            var func = function () {
                tailArray = tailArray.split('\n');
                for (let i = tailArray.length - 6; i < tailArray.length; i++) {
                    console.log(tailArray[i])
                }
                process.stdout.write('\nprompt > ')
            }
            func()
        });


    }
}
