const { City } = require('../models/index.js');

class CityRepository {

    async createCity(data) {
        try {
            const city = await City.create(data);
            return city;
        } catch (error) {
            console.log("Something went wrong at Repository Layer");
            throw { error };
        }
    }

    async updateCity(cityId, data) {
        try {
            const city = await City.update(data, { where: { id : cityId }});
            return city;
        } catch (error) {
            console.log("Something went wrong at Repository Layer");
            throw { error };
        }
    }

    async deleteCity(cityId) {
        try {
            const city = await City.destroy({ where: { id: cityId }});
            return true;
        } catch (error) {
            console.log("Something went wrong at Repository Layer");
            throw { error };
        }
    }

    async getCity(cityId) {
        try {
            const city = await City.findOne({where: {id: cityId}});
            return city;
        } catch (error) {
            console.log("Something went wrong at Repository Layer");
            throw { error };
        }
    }
}

module.exports = CityRepository;