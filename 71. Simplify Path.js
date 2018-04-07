/**
 * Given an absolute path for a file (Unix-style), simplify it.
 *
 * For example,
 * path = "/home/", -> "/home"
 * path = "/a/./b/../../c/", -> "/c"
 *
 * ... is a valid folder name.
 *
 * Corner Cases:
 * Did you consider the case where path = "/../"?
 * In this case, you should return "/".
 * Another corner case is the path might contain multiple slashes '/' together, such as "/home//foo/".
 * In this case, you should ignore redundant slashes and return "/home/foo".
 *
 * . means current folder, .. means parent folder. So "/a/b/.." means from a to b folder,
 * and from b to b's parent folder, finally we can simplified it as "/a"
 *
 * "/b/c/" - directory 'b ' - > directory 'c '
 * "." - current directory
 * "./" - current directory
 * "../" - one directory up
 * e.g
 * "/" : root directory
 * "b/c/../" : it will go from c to b
 * "c/b/./" : it is still in directory b
 */

/**
 * Stack.
 * Split path with slash, there can be 4 cases:
 * 1) A correct name, push into stack.
 * 2) A dot, skip.
 * 3) Double dot, should pop last directory from stack, if not empty.
 * 4) Empty, skip.
 * Finally, go through stack and concatenate names.
 * Implementation:
 * Check input path. If it's null or empty, return empty string.
 * Create a deque as stack.
 * Split input path with slash. Get a string array of names.
 * For each name in names:
 * | If name is empty, OR name is a dot:
 * |   Skip.
 * | If name is "..":
 * |   Pop from stack. But make sure stack is not empty first.
 * | Else if it's just a name:
 * |   Push the name onto stack.
 * Create a string builder for result
 * While stack is not empty:
 * | Insert the name popped from stack to the front.
 * | Insert a slash to the front before the name.
 * Return "/" if string builder is empty. Otherwise return the string.
 * @param {string} path
 * @return {string}
 */
const simplifyPath = path => {
  if (!path || !path.length) return '';
  const stack = [];
  const names = path.split('/');
  for (let name of names) {
    if (name === '.' || name === '') {
      continue; // Empty or 1 dot, skip. case 2, 4
    } else if (name === '..') {
      stack.pop(); // Double dots, pop. case 3
    } else {
      stack.push(name); // A correct name, push. case 1
    }
  }
  return '/' + stack.join('/');
};

// new file: 4/6/2018
