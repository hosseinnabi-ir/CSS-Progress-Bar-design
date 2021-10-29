function start(i) {

    var percent = document.querySelector(`#progress_${i} .percent`);
    var progressing = document.querySelector(`#progress_${i} .progressing`);
    var circle = document.querySelector(`#progress_${i} .circle`);

    requestAnimationFrame(startProgress);

    var progress = 0;
    var random = parseInt(Math.random() * 100);

    function startProgress() {
        progress += 1;
        if (progress <= random) {
            percent.innerHTML = parseInt(progress) + '%';
            progressing.style.width = progress + '%';
            circle.style.left = progress + '%';
        }
        requestAnimationFrame(startProgress);
    }

}

for (var i = 0; i < 3; i++) {
    start(i);
}