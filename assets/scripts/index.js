let bestChoicesArray = [];
const reachArrEnd = (array) => {
    let n = 0;

    if (array[0] === 0 && array.length !== 1) {
        return 'FAILURE';
    } else {
        let currentPossibleSteps = array[n];
        bestChoicesArray.push(currentPossibleSteps);
        for (let index = 0; index < array.length; index++) {
            if (n >= array.length-1) {
                return 'SUCCESS';
            } else {

                if (array[n] === 1) {
                    if (array[n + 1] < 1) {
                        return 'FAILURE';
                    }
                    n = n + 1; 
                    currentPossibleSteps = array[n];
                    bestChoicesArray.push(currentPossibleSteps);
                } else if (array[n] >= 2) {
                    if (array[n] + n >= array.length - 1) {
                        return 'SUCCESS';
                    } else {
                        let bestChoice;
                        for (let i = 1; i <= currentPossibleSteps; i++) {
                            if (!bestChoice || array[bestChoice] - (currentPossibleSteps - (bestChoice - n)) < array[n+i] - (currentPossibleSteps - i)) {
                                bestChoice = n + i;
                            }
                        }
                        n = bestChoice;

                        currentPossibleSteps = array[n];
                        bestChoicesArray.push(currentPossibleSteps);
                    }
                } else if (array[n] <= 0) {
                    return 'FAILURE';
                }
            }
        }
    }
};



let tryArr1 = [1, 2, 0, 3, 0, 2, 0];
let tryArr2 = [1, 2, -1, -1, -1];
let tryArr3 = [2, 2, 0, 3, 0, 2, 0];
let tryArr4 = [2,2,0,3,0,2,0];

const response = reachArrEnd(tryArr4);
console.log(response);

let firstBtn = document.getElementById("tryBtn");
let answer = document.getElementById("answer");

let pathBtn = document.getElementById("pathBtn");
let bestPath = document.getElementById("bestPath");

function reach (){
    if (response === 'SUCCESS') {
        answer.innerHTML = 'Array end can be reached';
    } else if (response === 'FAILURE') {
        firstBtn.style.backgroundColor = 'red';
        firstBtn.style.color = 'white';
        answer.innerHTML = 'End is not reachable';
    }
  }

function showPath (){
    if (response === 'SUCCESS') {
           bestPath.innerHTML = bestChoicesArray;
    } else if (response === 'FAILURE') {
            bestPath.innerHTML = 'No path available';
    }
  }

firstBtn.onclick = reach;
pathBtn.onclick = showPath;

