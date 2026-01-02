const initialstate = {
    name: '',
    email: '',
    password: ''
}

function reducer(state,action){
    switch (action.type) {
        case "name":
            console.log("name",action.value)
            return{...state,name: action.value}
        case "email":
            console.log("email",action.value)
            return{...state,email: action.value}
        case "password":
            console.log("password",action.value)
            return{...state,password: action.value}        
        default:
            return state;
    }
}
export {initialstate,reducer};