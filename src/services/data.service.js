const dataModel = require("../models/dataModel");
const { InternalServerError } = require("../services/error.service.js");
class DataService {
  async getData(page, limit) {
    try {
      if (limit != 0) {
        const data = await dataModel
          .find()
          .skip((page - 1) * limit)
          .limit(limit);
        const dataCount = await dataModel.countDocuments();
        return {
          data,
          totalPage: Math.ceil(dataCount / limit),
          currentPage: page,
        };
      }
      const data = await dataModel.find();
      return {
        data,
        totalPage: 1,
        currentPage: 1,
      };
    } catch (err) {
      throw new InternalServerError(err.message);
    }
  }
}

module.exports = new DataService();
