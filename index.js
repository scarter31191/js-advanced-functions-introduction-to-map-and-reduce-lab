// Your code here
function mapToNegativize(array) {
    const x = []

    for (const i in array) {
        x.push(array[i] * -1)
    }
    return x
};

function  mapToNoChange(array) {
    const x = []

    for (const i in array) {
        x.push(array[i])
    }
    return x
};

function mapToDouble(array) {
    const x = []

    for (const i in array) {
        x.push(array[i] * 2)
    }
    return x
};

function mapToSquare(array) {
    const x = []

    for (const i in array) {
        x.push(array[i] ** 2)
    }
    return x
};

function reduceToTotal(array, sum = 0) {
    for (const i in array) {
        sum += array[i]
    }
    return sum
}

function reduceToAllTrue(array) {
    for (const i in array) {
        if (array[i] === false) {
            return false
        }
    }
    return true
};

function reduceToAnyTrue(array) {
    for (const i in array) {
        if (array[i] === true) {
            return true
        }
    }
    return false
}