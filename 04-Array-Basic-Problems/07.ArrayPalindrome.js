class Solution {
    /**
     * @param number[] arr
     * @returns boolean
     */
    isPerfect(arr) {
        // code here
        
        let constant = [...arr];
        let revArr = [];
        
        for (let i = arr.length -1; i >= 0; i--) {
            revArr.push(arr[i]);
        }
        
        if (arr.join(',') === revArr.join(',')) {
            return true
        }
        
        return false;
        
    }
}
