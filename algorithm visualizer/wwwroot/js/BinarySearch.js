
var arr = [124, 95, 42, 150, 63, 84, 40, 75, 98, 50, 55, 28, 83, 40, 73, 150, 84, 120, 119, 65, 89, 250, 200, 243, 168, 90, 105, 75, 140,];


function start() {
    var container = document.getElementsByClassName('border_box');
    var x_axis = document.getElementsByClassName('array_box');
    var console_section = document.getElementsByClassName('console_box');
    var array_log = document.createElement('div');
    array_log.className = 'console_log';
    var str_array = 'original array = [ '



    for (var i = 0; i < arr.length; i++) {
        // bar graph
        var value = arr[i];
        var bar = document.createElement('div');
        bar.className = 'bar';
        bar.style.height = value + 'px';
        bar.setAttribute('data-tooltip', value);
        container[0].appendChild(bar);

        // bar graph element
        var bar_value = document.createElement('div');
        bar_value.className = 'array_ele';
        bar_value.textContent = value;
        x_axis[0].appendChild(bar_value);

        // make an array in string for console print
        str_array = str_array + value + ', ';

    }

    array_log.textContent = str_array + ']';
    console_section[0].appendChild(array_log);


    var elements = document.getElementsByClassName('bar');
    var n = arr.length;
    elements[0].style.backgroundColor = "#eea47f";
    elements[n - 1].style.backgroundColor = "#eea47f";



}


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function exampleUsage(target) {
    var elements = document.getElementsByClassName('bar');
    var console_section = document.getElementsByClassName('console_box');
    
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        await sleep(1000);
        const mid = Math.floor((left + right) / 2);
        elements[mid].style.backgroundColor = "#01539d";
        var console_log = Object.assign(document.createElement('div'), { className: 'console_log' });
        console_log.innerText = 'Searching at index ' + mid
        console_section[0].appendChild(console_log);
        await sleep(1000);
        if (arr[mid] === target) {
            elements[mid].style.backgroundColor = "#fa6166";
            var console_log = Object.assign(document.createElement('div'), { className: 'console_log' });
            console_log.innerText = target + ' is found at position ' + mid
            console_section[0].appendChild(console_log);
            return mid; // Element found, return its index
        } else if (arr[mid] < target) {
            elements[left].style.backgroundColor = "#a8a8a8";
            left = mid + 1; // Discard the left half
            elements[left].style.backgroundColor = "#eea47f";
            var console_log = Object.assign(document.createElement('div'), { className: 'console_log' });
            console_log.innerText = 'Going Right'
            console_section[0].appendChild(console_log);
        } else {
            elements[right].style.backgroundColor = "#a8a8a8";
            right = mid - 1; // Discard the right half
            elements[right].style.backgroundColor = "#eea47f";
            var console_log = Object.assign(document.createElement('div'), { className: 'console_log' });
            console_log.innerText = 'Going Left'
            console_section[0].appendChild(console_log);
        }
        elements[mid].style.backgroundColor = "#a8a8a8";
        /*await sleep(1000);
        light(left, right);*/
    }

    return -1;
}

// Button Script
var isPlaying = false




function togglePlayPause() {
    var playPauseButton = document.getElementById('playPauseButton');
    var playPauseIcon = document.getElementById('playPauseIcon');
    var playPauseText = document.getElementById('playPauseText');

    if (isPlaying) {
        isPlaying = false;
        playPauseIcon.textContent = '\u25B6'; // Unicode for "play" icon
        playPauseText.textContent = 'Play';

    } else {
        console.log("else")
        isPlaying = true;
        playPauseIcon.textContent = '\u275A\u275A'; // Unicode for "pause" icon
        playPauseText.textContent = 'Pause';
        exampleUsage(90);

    }

}

function handleKeyPress(event) {
    // Check if the pressed key is Enter (key code 13)
    if (event.key === 'Enter') {
        // Get the input element and its value
        var inputElement = document.getElementById('styledInput');
        var inputValue = inputElement.value;

        var userArray = inputValue.split(',');

        // Convert each element of the array to an integer
        userArray = userArray.map(function (value) {
            return parseInt(value, 10);
        });

        console.warn(typeof (userArray));
        userArray.sort(function (a, b) {
            return a - b;
        });
        arr = userArray
        // Clear the input for the next entry
        inputElement.value = '';
        start()
    }
}
