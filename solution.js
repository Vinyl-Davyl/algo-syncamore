function solution(T) {
    if (!T) return 0;
    
    let maxZigzag = 0;
    
    function findLongestZigzag(node, prevDirection, currentLength) {
        if (!node) return;
        
        if (prevDirection === 0) {
            findLongestZigzag(node.l, -1, 0); 
            findLongestZigzag(node.r, 1, 0);  
        } else {
            if (prevDirection === -1) {
                findLongestZigzag(node.r, 1, currentLength + 1);
                findLongestZigzag(node.l, -1, 0);
            } 
            else if (prevDirection === 1) {
                findLongestZigzag(node.l, -1, currentLength + 1);
                findLongestZigzag(node.r, 1, 0);
            }
        }
    }
    
    findLongestZigzag(T, 0, 0);
    
    return maxZigzag;
}

const tree = {
    x: 5,
    l: {
        x: 3,
        l: {
            x: 20,
            l: {
                x: 6
            }
        }
    },
    r: {
        x: 10,
        l: {
            x: 1
        },
        r: {
            x: 15,
            l: {
                x: 30,
                r: {
                    x: 9
                }
            },
            r: {
                x: 8
            }
        }
    }
};

console.log(solution(tree));
