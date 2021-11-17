var floodFill = function(image, sr, sc, newColor) {
    let originalColor = image[sr][sc]
    fill(image,sr,sc,newColor,originalColor)
    return image
};

function fill(image,r,c,newColor,originalColor) {

	//base case
    //If R or C pass the length, are below 0, the color is the same, or the other is the new color
    if(r >= image.length || r < 0 || c >= image[0].length || c < 0 || image[r][c] == newColor || image[r][c] != originalColor) {
        return
    }
    image[r][c] = newColor
    
    //top
    fill(image, r, c-1, newColor, originalColor)
    // bottom
    fill(image, r, c+1, newColor, originalColor)
    // left
    fill(image, r-1, c, newColor, originalColor)
    // right
    fill(image, r+1, c, newColor, originalColor)

}