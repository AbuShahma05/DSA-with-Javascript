// merge sorted Array homework
let nums1 = [1, 3, 5];
let nums2 = [2, 4, 6];

let i = 0;
let j = 0;
let merged = [];

while (i < nums1.length && j < nums2.length) {
    if (nums1[i] < nums2[j]) {
        merged[merged.length] = nums1[i];
        i++;
    } else {
        merged[merged.length] = nums2[j];
        j++;
    }
}
while (i < nums1.length) {
    merged[merged.length] = nums1[i];
    i++;
}
while (j < nums2.length) {
    merged[merged.length] = nums2[j];
    j++;
}

console.log(merged); 

// array right rotation by k step home work
// Remove duplicates from sorted Array homework