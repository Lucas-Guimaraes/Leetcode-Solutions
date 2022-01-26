var capitalizeTitle = function(title) {
    title = title.split(' ')
    for (let i = 0; i < title.length; i++)
    {
        title[i] = title[i].length >= 3 ? titleize(title[i]) : title[i].toLowerCase()
    }
    return title.join(' ')
};

titleize = (x) => x.charAt(0).toUpperCase() + x.substring(1).toLowerCase()