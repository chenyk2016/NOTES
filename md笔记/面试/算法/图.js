

class Graph {
  constructor() {
    this.graph = [
      [0, 2, 4, 0, 0, 0],
      [0, 0, 1, 4, 2, 0],
      [0, 0, 0, 0, 3, 0],
      [0, 0, 0, 0, 0, 2],
      [0, 0, 0, 3, 0, 2],
      [0, 0, 0, 0, 0, 0],
    ]
  }
  dijkstra() {
    let dist = [], visited = []
    length = this.graph.length;

    for(let i = 0; i < length; i++) {
      dist[i] = Infinity
      visited[i] = false
    };
    dist[0] = 0

    for(let i = 0; i < length - 1; i++) {
      var u = minDistance(dist, visited)
      visited[u] = true

      for(let v = 0; v < length; v++) {
          if(!visited[v] && this.graph[u][v] !== 0 &&
            dist[u] !== Infinity &&
            dist[u] + this.graph[u][v] < dist[v]) {
              dist[v] = dist[u] + this.graph[u][v]
          }
      };
    };

    return dist
  }
}

function minDistance(dist, visited) {
  var min = Infinity, minIndex = -1

  for(let v = 0; v < dist.length; v++) {
      if(visited[v] == false && dist[v] <= min ) {
          min = dist[v]
          minIndex = v
      }
  };
  return minIndex
}

const graph = new Graph()
console.log(graph.dijkstra());
