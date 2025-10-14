var hasCycle = function(head) {
    const seenNodes = new Set();
    let curr = head

    while (curr != null){
        if(seenNodes.has(curr)){
            return true 
        }

        seenNodes.add(curr)
        curr = curr.next;
    }

    return false
};