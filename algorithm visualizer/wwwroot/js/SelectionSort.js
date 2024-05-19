
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
    elements[0].style.backgroundColor = "#d32f2f";
    elements[1].style.backgroundColor = "#03dac6";



}


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function exampleUsage() {
    var elements = document.getElementsByClassName('bar');
    var console_section = document.getElementsByClassName('console_box');
    var n = arr.length;
    for (var i = 0; i < n - 1; i++) {
        // Find the minimum element in the unsorted part of the array
        var minIndex = i;

        for (var j = i + 1; j < n; j++) {

            elements[j].style.backgroundColor = "#03dac6";
            
            await sleep(500);
            if (arr[j] < arr[minIndex]) {
                elements[minIndex].style.backgroundColor = "#a8a8a8";
                minIndex = j;
                elements[minIndex].style.backgroundColor = "#d32f2f";
            }
            else {
                elements[j].style.backgroundColor = "#a8a8a8";
            }

        }
        // Swap the found minimum element with the first element
        var swap_log = Object.assign(document.createElement('div'), { className: 'console_log' });
        swap_log.innerText = 'swap ' + arr[minIndex] + ' and ' + arr[i]
        console_section[0].appendChild(swap_log);
        var temp = arr[minIndex];
        elements[minIndex].style.height = arr[i] + 'px';
        elements[minIndex].style.backgroundColor = "#a8a8a8"
        arr[minIndex] = arr[i];
        elements[i].style.height = temp + 'px';
        arr[i] = temp;
        elements[i].style.backgroundColor = "white";

        await sleep(500);
    }
    elements[n - 1].style.backgroundColor = "white";
    var final_array_log = document.createElement('div');
    final_array_log.className = 'console_log';
    var final_str_array = 'sorted array = [ ';
    for (var j = 0; j < n; j++) {
        final_str_array = final_str_array + arr[j] + ', ';
    }
    final_array_log.textContent = final_str_array + ']';
    console_section[0].appendChild(final_array_log);

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
        exampleUsage();
        
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
        arr = userArray
        // Clear the input for the next entry
        inputElement.value = '';
        start()
    }
}
