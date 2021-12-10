var wateringPlants = function(plants, capacity) {
    steps = 0; currentCap = capacity
    for (let i = 0; i < plants.length; i++)
    {
        plant = plants[i]
        if (plant <= currentCap)
        {
            steps++
            currentCap -= plant
        }
        else {
            steps += i+i+1
            currentCap = capacity - plant
        }
    }
    return steps
};