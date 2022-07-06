const select = () => {
    /* Write queries for each of the following */

    /* Section 1 */
    // 1. Get all seeded fruit elements
    let seededFruits = document.querySelectorAll(".seed");
    console.log(seededFruits);

    // 2. Get all seedless fruit elements
    let seedlessFruits = document.querySelectorAll(".seedless");
    console.log(seedlessFruits);

    // 3. Get first seedless fruit element
    let firstSeedlessFruit = document.querySelector(".seedless");
    console.log(firstSeedlessFruit);

    /* Section 2 */
    // 4. Get inner span with text "you"
    let span = document.querySelector("#wrapper > p > span")
    console.log(span);

    // 5. Get all children of element "wrapper"
    let wrapperDiv = document.querySelector("#wrapper");
    let wrapperChildren = wrapperDiv.children;
    console.log(wrapperChildren);

    // 6. Get all odd number list items in the list
    let oddNumberListItems = document.querySelectorAll("li.odd");
    console.log(oddNumberListItems);

    // 7. Get all even number list items in the list
    let ListItems = document.querySelectorAll("ol > li");
    let evenNumberListItems = [];

    ListItems.forEach( li => {
        if (li.className !== "odd") {
            evenNumberListItems.push(li);
        }
    });

    console.log(evenNumberListItems)

    /* Section 3 */
    // 8. Get all tech companies without a class name
    let section3 = document.getElementById("three");
    let firstP = section3.children[1];
    let google = firstP.children[0];
    console.log(google);

    // 9. Get "Amazon" list element
    let amazon = document.querySelector(".social");
    console.log(amazon);

    // 10. Get all unicorn list elements (not the image element)
    let unicornListEles = document.querySelectorAll("#three > ul > li");
    console.log(unicornListEles);
}

window.onload = select;
