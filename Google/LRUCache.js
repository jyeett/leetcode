// Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.

// Implement the LRUCache class:

// LRUCache(int capacity) Initialize the LRU cache with positive size capacity.
// int get(int key) Return the value of the key if the key exists, otherwise return -1.
// void put(int key, int value) Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache. If the number of keys exceeds the capacity from this operation, evict the least recently used key.
// The functions get and put must each run in O(1) average time complexity.

/**
 * @param {number} capacity
 */
 var LRUCache = function(capacity) {
    this.capacity = capacity
    this.obj = new Map()
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if (this.obj.has(key)) {
        let temp = this.obj.get(key)
        this.obj.delete(key)
        this.obj.set(key, temp)
        return this.obj.get(key)
    } else {
        return -1
    }
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    let keys = this.obj.keys()
    
    if (this.obj.has(key)) {
        this.obj.delete(key)
    }
    if (this.obj.size === this.capacity) {
        this.obj.delete(keys.next().value)
    }
    this.obj.set(key, value)
    
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */