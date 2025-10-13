// Step 1: Define the TreeNode class
class TreeNode {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  addChild(childNode) {
    this.children.push(childNode);
  }
}

// Step 2: Build the tree
const root = new TreeNode("A");
const nodeB = new TreeNode("B");
const nodeC = new TreeNode("C");
const nodeD = new TreeNode("D");
const nodeE = new TreeNode("E");
const nodeF = new TreeNode("F");

root.addChild(nodeB);
root.addChild(nodeC);
nodeB.addChild(nodeE);
nodeB.addChild(nodeF);
nodeC.addChild(nodeD);

// Step 3: Function to count total nodes
function countNodes(node) {
  // 👉 You will write the logic here
}

// Step 4: Test the function
console.log("Total Nodes:", countNodes(root));
