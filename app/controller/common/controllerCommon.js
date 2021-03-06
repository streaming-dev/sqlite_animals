/**
 * Controllers Common functions
 */
class controllerCommon {

    findSuccess(res) {
        return (result) => {
            res.status(200); // Found
            res.json({status: true, message: "success", data: result});
        }
    }

    existsSuccess(res) {
        return (result) => {
            res.status(200); // Found
            res.json({status: true, message: "success", data: result});
        }
    }

    editSuccess(res) {
        return () => {
            res.status(201); // Created/Updated/Deleted
            res.json({status: true, message: "success"});
        }
    }

    serverError(res) {
        return (error) => {
            res.status(500);
            res.json(error);
        }
    }

    findError(res) {
        return (error) => {
            res.status(404); // Not found
            res.json(error);
        }
    }
}

module.exports = controllerCommon;