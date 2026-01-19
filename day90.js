//  Insertion sort 
let arr = [9,8,7,6,5,4,3,2,1]

function insertionSort(arr) {
    let n = arr.length

    for (let i = 1; i < n; i++) {
        let curr = arr[i]
        let prev = i - 1

        while (prev >= 0 && arr[prev] > curr) {
            arr[prev + 1] = arr[prev]
            prev--
        }

        arr[prev + 1] = curr
    }

    return arr
}

let result = insertionSort(arr)
console.log(result)
