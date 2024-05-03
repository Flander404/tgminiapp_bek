const uuid = require('uuid')
const path = require('path');
const ApiError = require('../error/ApiError')
const { UserData } = require('../models/models');
class DataController {
    async create(req, res, next) {
        try {
            const { img } = req.files
            let fileName = uuid.v4() + '.jpg'
            img.mv(path.resolve(__dirname, '..', 'static', fileName))

            const data = await UserData.create({ img: fileName })


            return res.json(data)
        } catch (err) {
            console.log(err);
            next(ApiError.badRequest('Не удолось создать'))
        }
    }
    async read(req, res) {
        try{
            const img = await UserData.findAll({ img: req.files })
            return res.json(img)
        }catch(err){
            console.log(err);
            next(ApiError.badRequest('Не удалось заполучить картинки'))
        }
    }
    async update(req, res) {

    }
    async delete(req, res, next) {
        const { id } = req.params;
        try {
          await UserData.destroy({ where: { id } });
          return res.json({message: "Картинка успешно удалена"})
        } catch (error) {
          console.log(error);
          next(ApiError.internal('Не возможно удалить картинку'))
        }
    }
}

module.exports = new DataController();