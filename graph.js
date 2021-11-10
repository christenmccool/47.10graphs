class Node {
  constructor(value, adjacent = new Set()) {
    this.value = value;
    this.adjacent = adjacent;
  }
}

class Graph {
  constructor() {
    this.nodes = new Set();
  }

  // this function accepts a Node instance and adds it to the nodes property on the graph
  addVertex(vertex) {
    this.nodes.add(vertex);
  }

  // this function accepts an array of Node instances and adds them to the nodes property on the graph
  addVertices(vertexArray) {
    for (let vertex of vertexArray) {
      this.nodes.add(vertex);
    }
  }

  // this function accepts two vertices and updates their adjacent values to include the other vertex
  addEdge(v1, v2) {
    v1.adjacent.add(v2);
    v2.adjacent.add(v1);
  }

  // this function accepts two vertices and updates their adjacent values to remove the other vertex
  removeEdge(v1, v2) {
    v1.adjacent.delete(v2);
    v2.adjacent.delete(v1);
  }

  // this function accepts a vertex and removes it from the nodes property, it also updates any adjacency lists that include that vertex
  removeVertex(vertex) {
    this.nodes.delete(vertex);
    for (let node of this.nodes) {
      node.adjacent.delete(vertex);
    }
  }

  // // this function returns an array of Node values using DFS
  // depthFirstSearch(start) {
  //   let stackToVisit = [start];
  //   let seen = new Set(stackToVisit);
  //   let visited = [];

  //   while (stackToVisit.length) {
  //     let currNode = stackToVisit.pop();
  //     visited.push(currNode.value);
  //     for (let neighbor of currNode.adjacent) {
  //       if (!seen.has(neighbor)) {
  //         stackToVisit.push(neighbor);
  //         seen.add(neighbor);
  //       }
  //     }
  //   }
  //   return visited;
  // }

    // this function returns an array of Node values using DFS
    depthFirstSearch(start) {
      let result = [];
      let seen = new Set();

      function dfsHelper(node) {
        result.push(node.value);
        seen.add(node);

        for (let neighbor of node.adjacent) {
          if (!seen.has(neighbor)) {
            dfsHelper(neighbor);
          }
        }
      }

      dfsHelper(start);
      return result;
    }
  

  // this function returns an array of Node values using BFS
  breadthFirstSearch(start) {
    let result = [];
    let queueToVisit = [start];
    let seen = new Set(queueToVisit);

    while (queueToVisit.length) {
      let currNode = queueToVisit.shift();
      result.push(currNode.value);
      for (let neighbor of currNode.adjacent) {
        if (!seen.has(neighbor)) {
          queueToVisit.push(neighbor);
          seen.add(neighbor);
        }
      }
    }
    return result;
  }



}

module.exports = {Graph, Node}