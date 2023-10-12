function toggle(state) {
  return !state;
}

function getFinalOpenedDoors(numDoors) {
  // initiallize the row of doors
  const doors = new Array(numDoors).fill(false);

  // passes from all doors with the multiple of the pass
  for (let pass = 1; pass <= numDoors; pass++) {
    // passing through the doors
    for (let doorNo = pass - 1; doorNo < numDoors; doorNo += pass) {
      doors[doorNo] = toggle(doors[doorNo]);
    }
  }
  // return the index of the doors which are opened
  const openedDoors = doors.reduce((acc, door, i) => {
    if (door) {
      acc.push(i + 1);
    }
    return acc;
  }, []);

  console.log(openedDoors);
  return openedDoors;
}

getFinalOpenedDoors(100);
