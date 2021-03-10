const rods = {
    "A": [8,7,6,5,4,3,2,1],
    "B": [],
    "C": []
  };
  let moves = 0;
  
  const displayRods = (rods) => {
    let newRods = Object.keys(rods);
    newRods.forEach(rod => console.log(rod + ": " + rods[rod]));
  
    console.log(`${moves} moves`);
    moves++;
    console.log("\n");
  }
  displayRods(rods);
  
  const towerOfHanoi = (n, sourceRod, destinationRod, bufferRod) => {
  
    // Our base case is implicitly when n, the height of our stack of disks, gets down to zero.
  
    if (n >= 1) { 
  
      towerOfHanoi(n - 1, sourceRod, bufferRod, destinationRod);
  
      console.log(`Move disk ${n} from ${sourceRod} to ${destinationRod}`);  
  
      rods[bufferRod].push(rods[sourceRod].pop())
      rods[destinationRod].push(rods[bufferRod].pop())
  
      displayRods(rods);
  
      towerOfHanoi(n - 1, bufferRod, destinationRod, sourceRod);
  
    }
    return;
  }
  towerOfHanoi(8, "A", "C", "B");