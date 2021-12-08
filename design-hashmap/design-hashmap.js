
var MyHashMap = function() {
    this.nodeLength = 1000
    this.nodes = []
};

MyHashMap.prototype.put = function(key, value) {
    let hashValue = key%this.nodeLength
    if (this.nodes[hashValue] === undefined)
    {
        this.nodes[hashValue] = [[key, value]]
    }
    else
    {
        for (let i=0;i<this.nodes[hashValue].length;i++)
        {
            if (this.nodes[hashValue][i][0] === key)
            {
                this.nodes[hashValue][i][1] = value
                return
            }
        }
        this.nodes[hashValue].push([key, value])
    }
};

MyHashMap.prototype.get = function(key) {
    let hashValue = key%this.nodeLength
    if (this.nodes[hashValue] === undefined) {return -1}
    
    for (let i=0;i<this.nodes[hashValue].length;i++){
        if (this.nodes[hashValue][i][0] === key){
            return this.nodes[hashValue][i][1]
        }
    }
    
    return -1
};

MyHashMap.prototype.remove = function(key) {
    let hashValue = key%this.nodeLength
    if (this.nodes[hashValue] === undefined ) {return}
    else
    {
        for (let i=0;i<this.nodes[hashValue].length;i++)
        {
            if (this.nodes[hashValue][i][0] === key)
            {
                this.nodes[hashValue][i] = [-1, -1]; return
            }
        }
    }
};