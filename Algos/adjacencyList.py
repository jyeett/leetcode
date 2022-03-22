# Class representing a simple graph using an edge list converted to adjacency list
class Graph:
    # Basic constructor method
    def __init__(self, edge_list, num_of_nodes):
        # Convert edge list to adjacency list,
        # represented with a multi-dimensional array
        self.adjacency_list = [[] for _ in range(num_of_nodes)]
 
        # Add edges to corresponding nodes of the graph
        for (origin, dest) in edge_list:
            self.adjacency_list[origin].append(dest)
 
 
# Helper method to print adjacency list representation
def print_graph(graph):
    for origin in range(len(graph.adjacency_list)):
        # print current vertex and all its neighboring vertices
        for dest in graph.adjacency_list[origin]:
            print(f'{origin} —> {dest} ', end='')
        print()
 
 
if __name__ == '__main__':
    # Set up an edge list and number of nodes
    edge_list = [(0, 1), (1, 2), (2, 3), (0, 2), (3, 2), (4, 5), (5, 4)]
    num_of_nodes = 6
 
    graph = Graph(edge_list, num_of_nodes) 
    print_graph(graph)