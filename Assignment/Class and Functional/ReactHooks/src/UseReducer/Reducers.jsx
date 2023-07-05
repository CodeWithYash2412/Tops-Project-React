const reducer = (state, action) => {
    switch (action.type) {
        case "INC":
            return state = state + 1

        case "DEC":
            let newNum = 0
            state >= 1 ? (newNum = state - 1) : (newNum = 0);
            return newNum

        default:
            return state
    }
}

export default reducer