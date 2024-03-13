// // option1: if-else
// export default function DevLog({lan, isAvailable}){
//     if(isAvailable){
//         return <li>{lan} Developer Available</li>
//     }
//     else{
//         return <li>{lan} Developer Not Available</li>
//     }
// }

// // option2: if
// export default function DevLog({lan, isAvailable}){
//     if(isAvailable){
//         return <li>{lan} Developer Available</li>
//     }
//     return <li>{lan} Developer Not Available</li>
// }

// // option3: ternary
// export default function DevLog({lan, isAvailable}){
//     return (
//         <li>{lan} Developer: {isAvailable? 'Available': 'Not Available'}</li>
//     )
// }

// // option4: &&
// export default function DevLog({lan, isAvailable}){
//     return (
//         <li>{lan} Developer: {isAvailable && 'Available'}</li>
//     )
// }

// option5: ||
export default function DevLog({lan, isAvailable}){
    return (
        <li>{lan} Developer: {isAvailable || 'Not Available'}</li>
    )
}