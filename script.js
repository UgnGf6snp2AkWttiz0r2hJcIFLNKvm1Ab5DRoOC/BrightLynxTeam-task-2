const char2num = (x, y) => {
    const conf = {A: 1, B: 2, C: 3, D: 4, E: 5, F: 6, G: 7, H: 8};
    return [conf[x.toUpperCase()], parseInt(y)]
}

const num2char = (x, y) => {
    const conf = {1: 'A', 2: 'B', 3: 'C', 4: 'D', 5: 'E', 6: 'F', 7: 'G', 8: 'H'};
    return [conf[x], y]
}


const getMovesChar = (x, y) => getMovesDig(...char2num(x, y)).map(step => num2char(...step));

const getMovesDig = (x, y) => {
    return [
        [x - 2, y - 1],
        [x - 2, y + 1],
        [x - 1, y - 2],
        [x - 1, y + 2],
        [x + 2, y - 1],
        [x + 2, y + 1],
        [x + 1, y - 2],
        [x + 1, y + 2],
    ]
        .filter(step => step[0] > 0 && step[1] > 0 && step[0] < 9 && step[1] < 9)
    // .map(step => num2char(step[0], step[1]));
};

const movesToStr = moves => {
    return moves.map(step => step[0] + step[1]).join(' ')
}

const movesStr = (initial) => {
    const val = initial.match(/^([abcdefgh])([1-8])$/i);
    if (val)
        return `Возможные варианты хода:\n\n${movesToStr(getMovesChar(val[1], val[2]))}`;
    else
        return "Ввели неправильное положение";
};

const horseListener = () => alert(movesStr(document.getElementById('initial').value));

window.onload = () => document
    .getElementById('horse')
    .addEventListener("submit", horseListener, false);
