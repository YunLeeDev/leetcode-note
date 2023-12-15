/* 1.initialize the array */
const arr = new Array(5).fill(0)
const nums = [1,2,3,4,5];

/* 2.access the element  */

/**
 * Random access to elements
 * @param {Array[number]} - 
 * @return {number} - Elements that are accessed randomly
*/
function randomAccess(nums){
    // Generate arrays of random subscripts
    const random_index = Math.floor(Math.random() * nums.length);
    return nums[random_index];
}

/* 3.insert the element */

/**
 * Insert the element 
 * @param {Array[number]} nums - Insert an array of elements
 * @param {number} num - Elements that need to be inserted
 * @param {number} index - Insert an index in the array
 */
function insert(nums, num, index){
    // Move the index index and all the elements after it backward by one place
    for(let i = nums.length-1; i > index; i--){
        num[i] = nums[i - 1];
    }
    nums[index] = num;
}

/**
 * Insert the element 
 * @param {Array[number]} nums - Insert an array of elements
 * @param {number} num - Elements that need to be inserted
 * @param {number} index - Insert an index in the array
 */
function useArraySplice(nums,num,index){
    nums.splice(index, 0, num )
}

/* 4.Find element in an array */

/**
 * Find the specified element in the array
 * @param {Array[number]} nums -  The array to be found
 * @param {number} target - The element you are looking for
 * @return {number} - Find the index of the element
 */
function find(nums, target){
    for(let i = 0; i < nums.length; i++){
        if(nums[i]===target) return i;
    }
}

/**
 * Find the specified element in the array
 * @param {Array[number]} nums -  The array to be found
 * @param {number} target - The element you are looking for
 */
function useArrayFind(nums, target){
    return nums.findIndex(ele => ele === target)
}

/* 5.Extand the array */

/**
 * Extand the length of the array
 * @param {Array[number]} nums - Arrays need to be extended 
 * @param {number} enlarge - extended length
 * @returns {Array[number]} - return the extend array
 */
function extandLengthOfArray(nums, enlarge){
    const newArray = new Array(nums.length + enlarge).fill(0);
    for(let i = 0; i < nums.length; i++){
        newArray[i] = nums[i]
    }
    return newArray;
}