function getElementWidth(content, padding, border) {
    content = Number(content.slice(0, -2));
    padding = Number(padding.slice(0, -2));
    border = Number(border.slice(0, -2));

    return content + (padding + border) * 2;
}

console.log("TASK 3")
console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
console.log("\n");