class Union {
    constructor(size) {
        this.root = []
        for (let i=0; i <= size; i++) {
            this.root.push(i)
        }
        this.rank = [1] * size
        this.count = size
    }
    
    // finds root of node x
    find(x) {
        if (x === this.root[x]) {
            return x
        }
        this.root[x] = this.find(this.root[x])
        return this.root[x]
    }
    
    // creates union between nodes
    union(x, y) {
        let rootX = this.find(x)
        let rootY = this.find(y)
        if (rootX !== rootY) {
            if (rootY > rootX) {
                this.root[rootX] = rootY
            } else if (rootY < rootX) {
                this.root[rootY] = rootX
            } else {
                this.root[rootY] = rootX
                this.rank[rootX] += 1
            }
            this.count--
        }
    }
    
    getCount() {
        return this.count
    }

    connected(x, y) {
        return self.find(x) === self.find(y)
    }
}