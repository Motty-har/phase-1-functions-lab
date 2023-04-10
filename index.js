function distanceFromHqInBlocks(pickup) {
    if (pickup >= 42){
        return pickup - 42
} else {
        return 42 - pickup
}
}


function distanceFromHqInFeet(start) {
    const block = 264
    return distanceFromHqInBlocks(start) * block;
}  

function distanceTravelledInFeet(start, destination) {
    // if(start >= destination){
    //     return (start - destination) * 264
    // } else {
    //     return (destination - start) * 264
    // }
    return Math.abs((start - destination) * 264)
  }
  
  function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(start, destination)
    if(distance <= 400){
        return 0
    } else if (distance <= 2000){
        return (distance - 400) * .02
    } else if (distance <= 2500){
        return 25
    } else {
      return 'cannot travel that far'
    }
  }