const getMoves = (x, y) => {
    const conf = {A: 1, B: 2, C: 3, D: 4, E: 5, F: 6, G: 7, H: 8};
    const xDig = conf[x.toUpperCase()];
    const yDig = parseInt(y);
    return [
        [xDig - 2, yDig - 1],
        [xDig - 2, yDig + 1],
        [xDig - 1, yDig - 2],
        [xDig - 1, yDig + 2],
        [xDig + 2, yDig - 1],
        [xDig + 2, yDig + 1],
        [xDig + 1, yDig - 2],
        [xDig + 1, yDig + 2],
    ]
        .filter(step => step[0] > 0 && step[1] > 0 &&  step[0] <9 && step[1] <9)
        .map(step => [Object.keys(conf).find(key => conf[key] === step[0]), step[1]]);
};

const movesToStr = moves => {
    return moves.map(step => step[0] + step[1]).join( ' ')
}

const movesStr = (initial) => {
    const val = initial.match(/^([abcdefgh])([1-8])$/i);
    if (val)
        return `Возможные варианты хода:\n\n${movesToStr(getMoves(val[1], val[2]))}`;
    else
        return "Ввели неправильное положение";
};

const horseListener = () => alert(movesStr(document.getElementById('initial').value));

window.onload = () => document
    .getElementById('horse')
    .addEventListener("submit", horseListener, false);
