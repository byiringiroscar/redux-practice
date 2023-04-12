const redux = require('redux')

const bindActionCreators = redux.bindActionCreators
const createStore = redux.createStore
const CAKE_ORDERED = 'CAKE_ORDERED'
const CAKE_RESTOCKED = 'CAKE_RESTOCKED'
const ICEREAM_ORDERED = 'ICEREAM_ORDERED'
const ICEREAM_RESTOCKED = 'ICEREAM_RESTOCKED'


function orderCake(){
    return {
        type: CAKE_ORDERED,
        payload: 1,
    }
}
function restockCake(qty=1){
    return {
        type: CAKE_RESTOCKED,
        payload: qty,      
    }
}
function orderIceCream(qty=1){
    return {
        type: ICEREAM_ORDERED,
        payload: qty,      
    }
}
function restockIceCream(qty=1){
    return {
        type: ICEREAM_RESTOCKED,
        payload: qty,      
    }
}

const initialState = {
    numOfCakes: 10,  
    numOfIceCream: 20
}

// (previousState, action) => newState

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case CAKE_ORDERED:
            return {
                ...state, 
                numOfCakes: state.numOfCakes - 1
            }
        case CAKE_RESTOCKED:
            return {
                ...state,
                numOfCakes: state.numOfCakes  + action.payload
            }
        case ICEREAM_ORDERED:
            return {
                ...state, 
                numOfIceCream: state.numOfIceCream - 1
            }
        case ICEREAM_RESTOCKED:
            return {
                ...state,
                numOfIceCream: state.numOfIceCream  + action.payload
            }
        default:
            return state
}
}

const store = createStore(reducer)
console.log('initial state', store.getState());
const unsubscribe = store.subscribe(() => console.log('Update state', store.getState()))
// store.dispatch(orderCake())
// store.dispatch(orderCake())
// store.dispatch(orderCake())
// store.dispatch(restockCake(3)) 

const actions = bindActionCreators({orderCake, restockCake, orderIceCream, restockIceCream}, store.dispatch)
actions.orderCake()
actions.orderCake()
actions.orderCake()
actions.restockCake(3)

actions.orderIceCream()
actions.orderIceCream()
actions.restockIceCream(2)

unsubscribe()
