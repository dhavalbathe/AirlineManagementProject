const { noDoubleNestedGroup } = require('sequelize/lib/utils/deprecations');
const { CityService } = require('../services/index.js');

const cityService = new CityService();

const create = async(req, res) => {
    try {
        const city = await cityService.createCity(req.body);
        console.log("res body: ", req.body);
        console.log("city: ", city);
        return res.status(201).json({
            data: city,
            success: true,
            message: "Successfully created a city",
            err: {}
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            data: {},
            success: false,
            message: "Not able to create a city",
            err: error
        });
    }
}

const destroy = async(req, res) => {
    try {
        const response = await cityService.deleteCity(req.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            message: "Successfully deleted a city",
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to destroy a city",
            err: error
        });
    }
}

const update = async(req, res) => {
    try {
        const city = await cityService.updateCity(req.params.id, req.body);
        return res.status(202).json({
            data: city,
            success: true,
            message: "Successfully updated a city",
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to update the city",
            err: error
        });
    }
}

const get = async(req, res) => {
    try {
        const city = await cityService.getCity(req.params.id);
        return res.status(200).json({
            data: city,
            success: true,
            message: "Successfully read the city",
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to read the city",
            err: error
        });
    }
}

module.exports = {
    create,
    destroy,
    update, 
    get
};