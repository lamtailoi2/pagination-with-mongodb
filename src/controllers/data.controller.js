const DataService = require("../services/data.service");

class DataController {
  async getData(req, res, next) {
    console.log(req.query);

    try {
      const page = req.query.page || 1;
      const limit = req.query.limit || 0;
      const { data, totalPage, currentPage } = await DataService.getData(
        page,
        limit
      );
      res.status(201).json({
        data: data,
        message: "Data fetched successfully",
        totalPage: totalPage,
        currentPage: currentPage,
      });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new DataController();
