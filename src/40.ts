function solveTsp() {
  const distances = [
    [0, 1, 2],
    [1, 0, 3],
    [2, 3, 0]
  ];

  let startTime = new Date().getTime();

  // Initialize the solution (dijkstra's algorithm)
  function dijkstra(start, end) {
    const openSet = new Map();
    const closedSet = new Map();

    for (const [node, distance] of distances) {
      if (distance <= 0) {
        openSet.set(node, distance);
      } else {
        closedSet.set(node, false);
      }
    }

    while (!openSet.isEmpty()) {
      let currentNode = null;
      let minDistance = Infinity;

      for (const [node, distance] of distances) {
        if (distance <= 0 && openSet.has(node)) {
          const currentDistance = openSet.get(node);

          if (currentDistance + distance < minDistance) {
            currentNode = node;
            minDistance = currentDistance + distance;
          }
        }
      }

      if (!currentNode) break;

      for (const [neighbor, _distance] of distances) {
        if ((currentNode === null || !closedSet.has(currentNode)) && openSet.get(currentNode) >= neighbor) {
          openSet.set(currentNode, neighbor);
        } else if ((currentNode !== null && closedSet.has(currentNode)) && openSet.get(currentNode) + neighbor < openSet.get(currentNode)) {
          openSet.set(currentNode, openSet.get(currentNode) + neighbor);
        }
      }

      currentDistance = 0;
    }

    return currentNode === end ? `Solution found in ${new Date().getTime() - startTime}ms` : "No solution";
  }

  const result = dijkstra(1, 3);

  if (result) {
    console.log(result);
  } else {
    console.log("No solution");
  }
}
