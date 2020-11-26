
let initialState = {
    friends: [
        { name: 'Bill', ava: require('../img/bill.jpg') },
        { name: 'Vanya', ava: require('../img/ivan.jpg') },
        { name: 'Arny', ava: require('../img/arny.jpg') }
    ]
}

let sidebarReduser = (state = initialState, action) => {
    return state
}
export default sidebarReduser