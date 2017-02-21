(function IIWC () {
    const box = document.getElementById('box');
    const p = document.getElementById('p');
    var countedTime = 0;
    var countFlag = false;
    var countInteval;
  
    function toggleCount() {
        countFlag = !countFlag;
        if (countFlag === true) {
            countInteval = setInterval(function(){
                countedTime += 1;
                p.textContent = countedTime;
            }, 1000);
        } else {
            clearInterval(countInteval);
//            countedTime = 0;
        }
    }

    box.addEventListener('click', toggleCount);

})();