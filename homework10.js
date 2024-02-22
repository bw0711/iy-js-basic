const createCity = (keys) => {
    return keys.reduce((acc, key) => {
        acc[key] = prompt(`Enter ${key}:`);
        return acc;
    }, {});
}

const keys = ['city name', 'area', 'population', 'main street', "mayor's name"];

const cityToObject = createCity(keys);
console.log(cityToObject);