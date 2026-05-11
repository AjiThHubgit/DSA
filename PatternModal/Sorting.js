let arr = [5, 7, 1, 3, 0, 2];

function BubbleSort(nums) {
    let n = nums.length;

    for (let i = 0; i < n - 1; i++) {

        let isSwapped = false;

        for (let j = 0; j < n - (1 + i); j++) {
            if (nums[j] < nums[j + 1]) {
                let temp = nums[j];
                nums[j] = nums[j + 1];
                nums[j + 1] = temp;

                isSwapped = true;
            }
        }

        if (!isSwapped) break;
    }

    return nums;

}

console.log(BubbleSort(arr));


// Selection Sort

let arr = [5, 7, 1, 3, 0, 2];

function SelectionSort(nums) {
    let n = nums.length;

    for (let i = 0; i < n - 1; i++) {
        let min = i;

        for (let j = i + 1; j < n; j++) {
            if (nums[j] < nums[min]) {
                min = j;
            }
        }

        if (min !== i) {
            let temp = nums[i];
            nums[i] = nums[min];
            nums[min] = temp;
        }

    }

    return nums;

}

console.log(SelectionSort(arr));