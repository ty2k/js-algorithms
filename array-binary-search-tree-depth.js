
// Given an array of values, sorts them into a binary search tree, returns depth
function binarySearchTreeDepth(values) {
  function Tree() {
    this.root = null
  }

  Tree.prototype.addValue = function(val) {
    const n = new Node(val)

    depth = 1

    if (this.root === null) {
      if (depth > maxDepth) {
        maxDepth = depth
      }
      
      this.root = n
    } else {
      this.root.addNode(n)
    }
  }

  function Node(val) {
    this.value = val
    this.left = null
    this.right = null
  }

  Node.prototype.addNode = function(n) {
    depth += 1

    if (depth > maxDepth) {
      maxDepth = depth
    }

    if (n.value < this.value) {
      if (this.left === null) {
        this.left = n
      } else {
        this.left.addNode(n)
      }
    } else if (n.value > this.value) {
      if (this.right === null) {
        this.right = n
      } else {
        this.right.addNode(n)
      }
    }
  }

  let tree = new Tree()
  let maxDepth = 0

  values.forEach((value) => {
    tree.addValue(value)
  })

  return maxDepth
}

module.exports = binarySearchTreeDepth