//step 1 create an array with 5 strings
const northwestTrees = ['Western Red Cedar', 'Big Leaf Maple', 'Douglas Fir', 'Red Alder', 'Western Hemlock'];

console.log(northwestTrees);


//step 2 add an element to the end of the array
const northwestTrees = ['Western Red Cedar', 'Big Leaf Maple', 'Douglas Fir', 'Red Alder', 'Western Hemlock'];

northwestTrees.push ("Lodgepole Pine")

console.log(northwestTrees);

//step 3 remove the third element
const northwestTrees = ['Western Red Cedar', 'Big Leaf Maple', 'Douglas Fir', 'Red Alder', 'Western Hemlock'];

northwestTrees.splice(2, 1)

console.log(northwestTrees);

//step 4 create a string from the elements and comma separate them
const northwestTrees = ['Western Red Cedar', 'Big Leaf Maple', 'Douglas Fir', 'Red Alder', 'Western Hemlock'];

northwestTrees.join(",")

console.log(northwestTrees);
