function DCanvas(el) {
    const ctx = el.getContext('2d');
    const pixel = 20;

    let is_mouse_down = false;

    canv.width = 500;
    canv.height = 500;

    this.drawLine = function (x1, y1, x2, y2, color = 'gray') {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineJoin = 'miter';
        ctx.lineWidth = 1;
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
    }

    this.drawCell = function (x, y, w, h) {
        ctx.fillStyle = 'blue';
        ctx.strokeStyle = 'blue';
        ctx.lineJoin = 'miter';
        ctx.lineWidth = 1;
        ctx.rect(x, y, w, h);
        ctx.fill();
    }

    this.clear = function () {
        ctx.clearRect(0, 0, canv.width, canv.height);
    }

    this.drawGrid = function () {
        const w = canv.width;
        const h = canv.height;
        const p = w / pixel;

        const xStep = w / p;
        const yStep = h / p;

        for (let x = 0; x < w; x += xStep) {
            this.drawLine(x, 0, x, h);
        }

        for (let y = 0; y < h; y += yStep) {
            this.drawLine(0, y, w, y);
        }
    }

    this.calculate = function (draw = false) {
        const w = canv.width;
        const h = canv.height;
        const p = w / pixel;

        const xStep = w / p;
        const yStep = h / p;

        const vector = [];
        let __draw = [];

        for (let x = 0; x < w; x += xStep) {
            for (let y = 0; y < h; y += yStep) {
                const data = ctx.getImageData(x, y, xStep, yStep);

                let nonEmptyPixelsCount = 0;
                for (i = 0; i < data.data.length; i += 10) {
                    const isEmpty = data.data[i] === 0;

                    if (!isEmpty) {
                        nonEmptyPixelsCount += 1;
                    }
                }

                if (nonEmptyPixelsCount > 1 && draw) {
                    __draw.push([x, y, xStep, yStep]);
                }

                vector.push(nonEmptyPixelsCount > 1 ? 1 : 0);
            }
        }

        if (draw) {
            this.clear();
            this.drawGrid();

            for (_d in __draw) {
                this.drawCell(__draw[_d][0], __draw[_d][1], __draw[_d][2], __draw[_d][3]);
            }
        }

        return vector;
    }

    el.addEventListener('mousedown', function (e) {
        is_mouse_down = true;
        ctx.beginPath();
    });

    el.addEventListener('touchstart', function (e) {
        is_mouse_down = true;
    });

    el.addEventListener('mouseup', function (e) {
        is_mouse_down = false;
    });

    el.addEventListener('touchend', function (e) {
        is_mouse_down = false;
    });

    el.addEventListener('mousemove', function (e) {
        if (is_mouse_down) {
            ctx.fillStyle = 'red';
            ctx.strokeStyle = 'red';
            ctx.lineWidth = pixel;

            ctx.lineTo(e.offsetX, e.offsetY);
            ctx.stroke();

            ctx.beginPath();
            ctx.arc(e.offsetX, e.offsetY, pixel / 2, 0, Math.PI * 2);
            ctx.fill();

            ctx.beginPath();
            ctx.moveTo(e.offsetX, e.offsetY);
        }
    });

    el.addEventListener('touchmove', function (e) {
        if (is_mouse_down) {
            ctx.fillStyle = 'red';
            ctx.strokeStyle = 'red';
            ctx.lineWidth = pixel;

            ctx.lineTo(e.offsetX, e.offsetY);
            ctx.stroke();

            ctx.beginPath();
            ctx.arc(e.offsetX, e.offsetY, pixel / 2, 0, Math.PI * 2);
            ctx.fill();

            ctx.beginPath();
            ctx.moveTo(e.offsetX, e.offsetY);
        }
    });

}

function pressbtn(num) {
    $('.buttonnumbers').addClass('off');
    alert('Saved as ' + num);
}

let vector = [];
let net = null;
let train_data = [];

const d = new DCanvas(document.getElementById("canv"));

document.addEventListener('keypress', function (e) {
    if (e.key.toLowerCase() == 'c') {
        d.clear();
        $('.buttonnumbers').addClass('off');
    }

    if (e.key.toLowerCase() == 'v') {
        vector = d.calculate(true);
        $('.buttonnumbers').removeClass('off');
    }

    if (e.key.toLowerCase() == 'b') {
        net = new brain.NeuralNetwork();
        net.train(train_data, {
            log: true
        });

        const result = brain.likely(d.calculate(), net);
        alert(result);
    }

    if (e.key.toLowerCase() == '0') {
        if ($('#btnNum').attr('class') == 'buttonnumbers') {
            train_data.push({
                input: vector,
                output: {
                    0: 1
                }
            });
            pressbtn(Number(e.key.toLowerCase()));
        }
    }
    if (e.key.toLowerCase() == '1') {
        if ($('#btnNum').attr('class') == 'buttonnumbers') {
            train_data.push({
                input: vector,
                output: {
                    1: 1
                }
            });
            pressbtn(Number(e.key.toLowerCase()));
        }
    }
    if (e.key.toLowerCase() == '2') {
        if ($('#btnNum').attr('class') == 'buttonnumbers') {
            train_data.push({
                input: vector,
                output: {
                    2: 1
                }
            });
            pressbtn(Number(e.key.toLowerCase()));
        }
    }
    if (e.key.toLowerCase() == '3') {
        if ($('#btnNum').attr('class') == 'buttonnumbers') {
            train_data.push({
                input: vector,
                output: {
                    3: 1
                }
            });
            pressbtn(Number(e.key.toLowerCase()));
        }
    }
    if (e.key.toLowerCase() == '4') {
        if ($('#btnNum').attr('class') == 'buttonnumbers') {
            train_data.push({
                input: vector,
                output: {
                    4: 1
                }
            });
            pressbtn(Number(e.key.toLowerCase()));
        }
    }
    if (e.key.toLowerCase() == '5') {
        if ($('#btnNum').attr('class') == 'buttonnumbers') {
            train_data.push({
                input: vector,
                output: {
                    5: 1
                }
            });
            pressbtn(Number(e.key.toLowerCase()));
        }
    }
    if (e.key.toLowerCase() == '6') {
        if ($('#btnNum').attr('class') == 'buttonnumbers') {
            train_data.push({
                input: vector,
                output: {
                    6: 1
                }
            });
            pressbtn(Number(e.key.toLowerCase()));
        }
    }
    if (e.key.toLowerCase() == '7') {
        if ($('#btnNum').attr('class') == 'buttonnumbers') {
            train_data.push({
                input: vector,
                output: {
                    7: 1
                }
            });
            pressbtn(Number(e.key.toLowerCase()));
        }
    }
    if (e.key.toLowerCase() == '8') {
        if ($('#btnNum').attr('class') == 'buttonnumbers') {
            train_data.push({
                input: vector,
                output: {
                    8: 1
                }
            });
            pressbtn(Number(e.key.toLowerCase()));
        }
    }
    if (e.key.toLowerCase() == '9') {
        if ($('#btnNum').attr('class') == 'buttonnumbers') {
            train_data.push({
                input: vector,
                output: {
                    9: 1
                }
            });
            pressbtn(Number(e.key.toLowerCase()));
        }
    }

    //if (e.key.toLowerCase() == 'l') {
    //    var digit = mnist[0].get();
    //    
    //    mnist.draw(digit, document.getElementById('canv').getContext('2d'));
    //}
});

$('#clear').on('click', function (e) {
    d.clear();
    $('.buttonnumbers').addClass('off');
});
$('#save').on('click', function (e) {
    vector = d.calculate(true);

    $('.buttonnumbers').removeClass('off');
});
$('#brain').on('click', function () {
    net = new brain.NeuralNetwork();
    net.train(train_data, {
        log: true
    });

    const result = brain.likely(d.calculate(), net);
    alert(result);
});
$('#reset').on('click', function () {
    document.location = '';
});

//train

$('#b1').on('click', function () {
    train_data.push({
        input: vector,
        output: {
            1: 1
        }
    });
    $('.buttonnumbers').addClass('off');
    alert('Saved as 1');
});
$('#b2').on('click', function () {
    train_data.push({
        input: vector,
        output: {
            2: 1
        }
    });
    $('.buttonnumbers').addClass('off');
    alert('Saved as 2');
});
$('#b3').on('click', function () {
    train_data.push({
        input: vector,
        output: {
            3: 1
        }
    });
    $('.buttonnumbers').addClass('off');
    alert('Saved as 3');
});
$('#b4').on('click', function () {
    train_data.push({
        input: vector,
        output: {
            4: 1
        }
    });
    $('.buttonnumbers').addClass('off');
    alert('Saved as 4');
});
$('#b5').on('click', function () {
    train_data.push({
        input: vector,
        output: {
            5: 1
        }
    });
    $('.buttonnumbers').addClass('off');
    alert('Saved as 5');
});
$('#b6').on('click', function () {
    train_data.push({
        input: vector,
        output: {
            6: 1
        }
    });
    $('.buttonnumbers').addClass('off');
    alert('Saved as 6');
});
$('#b7').on('click', function () {
    train_data.push({
        input: vector,
        output: {
            7: 1
        }
    });
    $('.buttonnumbers').addClass('off');
    alert('Saved as 7');
});
$('#b8').on('click', function () {
    train_data.push({
        input: vector,
        output: {
            8: 1
        }
    });
    $('.buttonnumbers').addClass('off');
    alert('Saved as 8');
});
$('#b9').on('click', function () {
    train_data.push({
        input: vector,
        output: {
            9: 1
        }
    });
    $('.buttonnumbers').addClass('off');
    alert('Saved as 9');
});
$('#b0').on('click', function () {
    train_data.push({
        input: vector,
        output: {
            0: 1
        }
    });
    $('.buttonnumbers').addClass('off');
    alert('Saved as 0');
});
