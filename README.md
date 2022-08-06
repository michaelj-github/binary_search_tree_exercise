# Binary Search Tree Exercises

## Solution Notes

To install per package.json

    npm install

Testing

    npm test

## Exercise instructions and requirements

We’ve supplied you with a Node class and a constructor for the BinarySearchTree class. Here are descriptions of the methods you should write for instances of BinarySearchTree:

### insert

This function should insert a node in a binary tree. It should return the BinarySearchTree and should be solved using iteration.

```
var binarySearchTree = new BinarySearchTree();
binarySearchTree.insert(15);
binarySearchTree.insert(20);
binarySearchTree.insert(10);
binarySearchTree.insert(12);
binarySearchTree.root.value // 15
binarySearchTree.root.right.value // 20
binarySearchTree.root.left.right.value // 12

var binarySearchTree = new BinarySearchTree();
binarySearchTree.insert(15)
binarySearchTree.insert(20)
binarySearchTree.insert(10)
binarySearchTree.insert(12);
binarySearchTree.root.value // 15
binarySearchTree.root.right.value // 20
binarySearchTree.root.left.right.value // 12
```

### insertRecursively

This function should insert a node in a binary tree. It should return the BinarySearchTree and should be solved using recursion.

```
var binarySearchTree = new BinarySearchTree();
binarySearchTree.insertRecursively(15);
binarySearchTree.root.value // 15
binarySearchTree.root.left // null
binarySearchTree.root.right // null

var binarySearchTree = new BinarySearchTree();
binarySearchTree.insertRecursively(15);
binarySearchTree.insertRecursively(20);
binarySearchTree.insertRecursively(10);
binarySearchTree.insertRecursively(12);
binarySearchTree.root.value // 15
binarySearchTree.root.right.value // 20
binarySearchTree.root.left.right.value // 12

var binarySearchTree = new BinarySearchTree();
binarySearchTree.insertRecursively(15)
binarySearchTree.insertRecursively(20)
binarySearchTree.insertRecursively(10)
binarySearchTree.insertRecursively(12);
binarySearchTree.root.value // 15
binarySearchTree.root.right.value // 20
binarySearchTree.root.left.right.value // 12
```

### find

This function should find a node in a binary tree. It should return the node if found, otherwise return undefined. This should be solved using iteration.

```
var binarySearchTree = new BinarySearchTree();
binarySearchTree.insert(15)
binarySearchTree.insert(20)
binarySearchTree.insert(10)
binarySearchTree.insert(12);
var foundNode = binarySearchTree.findIteratively(20);
foundNode.value // 20
foundNode.left // null
foundNode.right // null

var binarySearchTree = new BinarySearchTree();
binarySearchTree.insert(15)
binarySearchTree.insert(20)
binarySearchTree.insert(10)
binarySearchTree.insert(12);
var foundNode = binarySearchTree.findIteratively(120);
foundNode // undefined
```

### findRecursively

This function should find a node in a binary tree. It should return the node if found, otherwise return undefined. This should be solved using recursion.

```
var binarySearchTree = new BinarySearchTree();
binarySearchTree.insert(15)
binarySearchTree.insert(20)
binarySearchTree.insert(10)
binarySearchTree.insert(12);
var foundNode = binarySearchTree.findRecursively(20);
foundNode.value // 20
foundNode.left // null
foundNode.right // null

var binarySearchTree = new BinarySearchTree();
binarySearchTree.insert(15)
binarySearchTree.insert(20)
binarySearchTree.insert(10)
binarySearchTree.insert(12);
var foundNode = binarySearchTree.findRecursively(120);
foundNode // undefined
```

### dfsPreOrder

This function should search through each node in the binary search tree using pre-order depth first search and return an array containing each node’s value.

```
var binarySearchTree = new BinarySearchTree();
binarySearchTree.insert(15)
binarySearchTree.insert(20)
binarySearchTree.insert(10)
binarySearchTree.insert(12)
binarySearchTree.insert(1)
binarySearchTree.insert(5)
binarySearchTree.insert(50);
binarySearchTree.dfsPreOrder() // [15, 10, 1, 5, 12, 20, 50]
```

### dfsInOrder

This function should search through each node in the binary search tree using in-order depth first search and return an array containing each node’s value.

```
var binarySearchTree = new BinarySearchTree();
binarySearchTree.insert(15)
binarySearchTree.insert(20)
binarySearchTree.insert(10)
binarySearchTree.insert(12)
binarySearchTree.insert(1)
binarySearchTree.insert(5)
binarySearchTree.insert(50);
binarySearchTree.dfsInOrder() // [1, 5, 10, 12, 15, 20, 50]
```

### dfsPostOrder

This function should search through each node in the binary search tree using post-order depth first search and return an array containing each node’s value.

```
var binarySearchTree = new BinarySearchTree();
binarySearchTree.insert(15)
binarySearchTree.insert(20)
binarySearchTree.insert(10)
binarySearchTree.insert(12)
binarySearchTree.insert(1)
binarySearchTree.insert(5)
binarySearchTree.insert(50);
binarySearchTree.dfsPostOrder() // [5, 1, 12, 10, 50, 20, 15]
```

### bfs

This function should search through each node in the binary search tree using breadth first search and return an array containing each node’s value.

```
var binarySearchTree = new BinarySearchTree();
binarySearchTree.insert(15)
binarySearchTree.insert(20)
binarySearchTree.insert(10)
binarySearchTree.insert(12)
binarySearchTree.insert(1)
binarySearchTree.insert(5)
binarySearchTree.insert(50);
binarySearchTree.bfs() // [15, 10, 20, 1, 12, 50, 5]
```
