// There are n dominoes in a line, and we place each domino vertically upright. In the beginning,
// we simultaneously push some of the dominoes either to the left or to the right.

// After each second, each domino that is falling to the left pushes the
// adjacent domino on the left. Similarly, the dominoes falling to the right
// push their adjacent dominoes standing on the right.

// When a vertical domino has dominoes falling on it from both sides,
// it stays still due to the balance of the forces.

// For the purposes of this question, we will consider that a falling domino expends no
// additional force to a falling or already fallen domino.

// You are given a string dominoes representing the initial state where:

// dominoes[i] = 'L', if the ith domino has been pushed to the left,
// dominoes[i] = 'R', if the ith domino has been pushed to the right, and
// dominoes[i] = '.', if the ith domino has not been pushed.
// Return a string representing the final state.

/**
 * @param {string} dominoes
 * @return {string}
 */
 var pushDominoes = function(dominoes) {
    let dom = dominoes.split("")
    let queue = []
    for (let i = 0; i < dom.length; i++) {
        if (dom[i] !== ".") {
            queue.push([i, dom[i]])
        }
    }
    while (queue.length > 0) {
        let curr = queue.shift()
        let index = curr[0]
        let force = curr[1]
        if (force === "L" && index > 0 && dom[index-1] == ".") {
            queue.push([index-1, "L"])
            dom[index-1] = "L"
        } else if (force === "R") {
            if (index+1 < dom.length && dom[index+1] == ".") {
                if (index+2 < dom.length && dom[index+2] == "L") {
                    queue.shift()
                } else {
                    queue.push([index+1, "R"])
                    dom[index+1] = "R"
                }
            }
        }
    }
    return dom.join("")
};