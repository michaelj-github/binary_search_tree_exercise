class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    if (this.root === null) {
      this.root = new Node(val);
      return this;
    }

    let current = this.root;

    while (current.val !== val) {
      if (val < current.val) {
        if (!current.left) {
          current.left = new Node(val);
          return this;
        } else {
          current = current.left;
        }
      } else if (val > current.val) {
        if (!current.right) {
          current.right = new Node(val);
          return this;
        } else {
          current = current.right;
        }
      }
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, current = this.root) {
    if (this.root === null) {
      this.root = new Node(val);
      return this;
    }

    if (val < current.val) {
      if (!current.left) {
        current.left = new Node(val);
        return this;
      }
      return this.insertRecursively(val, current.left);
    } else {
      if (!current.right) {
        current.right = new Node(val);
        return this;
      }
      return this.insertRecursively(val, current.right);
    }
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let current = this.root;
    let foundIt = false;

    if (val === current.val) return current;

    while (current && !foundIt) {
      if (val < current.val) {
        current = current.left;
      } else if (val > current.val) {
        current = current.right;
      } else {
        foundIt = true;
      }
    }

    if (!foundIt) return undefined;
    return current;
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, current = this.root) {
    if (this.root === null) return undefined;

    if (val < current.val) {
      if (!current.left) return undefined;
      return this.findRecursively(val, current.left);
    } else if (val > current.val) {
      if (!current.right) return undefined;
      return this.findRecursively(val, current.right);
    }
    return current;
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    let theReturnArray = [];
    function traverse(node = this.root) {
      theReturnArray.push(node.val);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return theReturnArray;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    let theReturnArray = [];
    function traverse(node = this.root) {
      if (node.left) traverse(node.left);
      theReturnArray.push(node.val);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return theReturnArray;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    let theReturnArray = [];
    function traverse(node = this.root) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      theReturnArray.push(node.val);
    }
    traverse(this.root);
    return theReturnArray;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    let current = this.root;
    let theQueueArray = [this.root];
    let theReturnArray = [];
    while (theQueueArray.length) {
      current = theQueueArray.shift();
      theReturnArray.push(current.val);
      if (current.left) theQueueArray.push(current.left);
      if (current.right) theQueueArray.push(current.right);
    }
    return theReturnArray;
  }
}

module.exports = BinarySearchTree;
