var btn = document.getElementById("btn")
var num = document.getElementById("num")
var input = document.getElementById('input')
var input2 = document.getElementById("input2")
var divcontainer2 = document.querySelector(".container2")
btn.onclick = function () {
    readXlsxFile(input.files[0]).then(function (data) {
        if (num.value == 1) {
            console.log("func 1");
            var loop = 0
            for (const i of data) {
                const param = document.createElement("p");
                param.innerHTML = i[1] + " " + i[2];
                if (loop != 0) {
                    divcontainer2.appendChild(param);
                }
                loop++
            };
        } else if (num.value == 2) {
            console.log("func 2");
            for (const i of data) {
                const param = document.createElement("p");
                param.innerHTML = '<img src="' + i[6] + '" alt="" ></img>'
                divcontainer2.appendChild(param);
            };
        } else if (num.value == 3) {
            var loop = 0
            console.log("func 3");
            for (const i of data) {
                const param = document.createElement("p");
                param.innerHTML = '<img src="' + i[6] + '" alt="" ></img>'
                if (loop == 1) {
                    divcontainer2.appendChild(param);
                }
                loop++
            };
        } else if (num.value == 4) {
            console.log("func 4");
            for (const i of data) {
                const param = document.createElement("p");
                if (i[7] == 'Asker') {
                    console.log(i[1] + " " + i[2]);
                    param.innerHTML = '<img src="' + i[6] + '" alt="" ></img>'
                    divcontainer2.appendChild(param);
                }
            };
        } else if (num.value == 5) {
            console.log("func 5");
            for (const i of data) {
                const param = document.createElement("p");
                if (i[3] == "15") {
                    console.log(i[1] + " " + i[2]);
                    param.innerHTML = i[1] + " " + i[2] + '<br><br><img src="' + i[6] + '" alt="" ></img>'
                    divcontainer2.appendChild(param);
                }
            };
        } else if (num.value == 6) {
            var Biggest = 0
            var i2 = 0
            console.log("func 6");
            for (const i of data) {
                if (i[3] > Biggest) {
                    Biggest = i[3]
                    var big = i2
                }
                i2++
            };
            var counting = 0
            for (const i of data) {
                if (counting == big) {
                    const param = document.createElement("p");
                    console.log(i[1] + " " + i[2]);
                    param.innerHTML = i[1] + " " + i[2] + " " + i[3]
                    divcontainer2.appendChild(param);
                }

                counting++
            }
        }
    })
}