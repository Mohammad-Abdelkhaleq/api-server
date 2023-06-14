'use strict';
class collection {
    constructor(model) {
        this.model = model;
    }

    async add(obj) {
        // return  this.model.create(obj);
        let record = await this.model.create(obj);
        return record;
    };
    async read(id) {
        if (id) {
            return await this.model.findOne({ where: { id: id } });
        } else {
            return await this.model.findAll();
        }
    };
   async update(id, obj) {
        let record = await this.model.findOne({ where: { id: id } });
        let updatedRecord = await record.update(obj);
        return updatedRecord;
    };
    async delete(id) {
        let deletedRecord = await this.model.destroy({ where: { id: id } });
        return deletedRecord;
    }
    
    async getAuthersBooks(id) {
        let authersBooks = await this.model.findAll({ where: { autherId: id } });
        return authersBooks;
    }


}
module.exports = collection;