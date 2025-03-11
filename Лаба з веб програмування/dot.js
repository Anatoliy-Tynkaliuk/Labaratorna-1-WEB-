

function showAuthorInfo() {
    const authorInfo = document.getElementById('authorInfo');
    authorInfo.style.display = 'block';
}

function hideAuthorInfo() {
    const authorInfo = document.getElementById('authorInfo');
    authorInfo.style.display = 'none';
}


/*
Знайдiть найближчу пару точок на двовимiрнiй площинi. Напишiть функцiю JavaScript, 
яка приймає масив точок (координати x, y) як вхiднi данi та знаходить пару точок, якi є 
найближчими одна до одної, повертаючи двi точки.
 */

// START CODE


function get_coordinate() {
    const input = document.getElementById("points").value;
    const coordinatesArray = input.split(',');
    const points = [];
    
    for (let i = 0; i < coordinatesArray.length; i++) {
        const coordinates = coordinatesArray[i].split(' ');
        if (coordinates.length === 2) {
            const x = parseFloat(coordinates[0].trim());
            const y = parseFloat(coordinates[1].trim());
            if (!isNaN(x) && !isNaN(y)) {
                points.push({ x, y });
            }
        }
    }

    if (points.length < 2) {
        document.getElementById('result').innerText = 'Будь ласка, введіть як мінімум дві коректні точки.';
        return;
    }

    let [closestPair, minDistance] = findPairWithMinDistance(points);
    document.getElementById('result').innerText = `Найближча пара: (${closestPair[0].x}, ${closestPair[0].y}) і (${closestPair[1].x}, ${closestPair[1].y}), відстань: ${minDistance.toFixed(2)}`;
}

function findPairWithMinDistance(points) {
    let minDistance = Infinity;
    let closestPair = [];

    for (let i = 0; i < points.length - 1; i++) {
        for (let j = i + 1; j < points.length; j++) {
            const distance = calculateDistance(points[i], points[j]);
            if (distance < minDistance) {
                minDistance = distance;
                closestPair = [points[i], points[j]];
            }
        }
    }

    return [closestPair, minDistance];
}

function calculateDistance(point1, point2) {
    return Math.sqrt(Math.pow(point1.x - point2.x, 2) + Math.pow(point1.y - point2.y, 2));
}


//END CODE