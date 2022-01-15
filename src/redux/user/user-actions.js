export const setCurrentUser = user => {
    console.log("===> Executing user-actions.js setCurrentUser:");
    console.log(user)
    return {
        type:'SET_CURRENT_USER',
        payload: user
    }
};



// function setCurrentUser(user) {
//     return {
//         type: 'SET_CURRENT_USER',
//         payload:user
//     }
// }

// export default setCurrentUser;

