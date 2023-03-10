const { FrontEnd } = require("../models/frontEnd.model");

module.exports.createFrontEnd = (request, response) => {
    const { title, description, html, style, userProjects } = request.body;
    FrontEnd.create({
        title,
        description,
        html,
        style,
        userProjects,
    })
        .then((frontEnd) => response.json(frontEnd))
        .catch((err) => response.json(err));
};

module.exports.findProjectsByUser= (request, response) => {
    FrontEnd.find({ userProjects: request.params.id })
      .sort({ createdAt: -1 })
      .then((user) => response.json({ user }))
      .catch((err) =>
        response.json({ message: "something have gone wrong", error: err })
      );
  };

module.exports.getAllFrontEnd = (request, response) => {
    FrontEnd.find({})
        .then((frontEnds) => response.json(frontEnds))
        .catch((err) => response.json(err));
};

module.exports.getFrontEnd = (request, response) => {
    FrontEnd.findOne({ _id: request.params.id })
        .then((frontEnd) => response.json(frontEnd))
        .catch((err) => response.json(err));
};

// module.exports.updateFrontEnd = (request, response) => {
//     FrontEnd.findOneAndUpdate(
//         { _id: request.params.id },
//         request.body,
//         { new: true }
//     )
//     .then((updatedFrontEnd) => response.json(updatedFrontEnd))
//     .catch((err) => response.json(err));
// };
module.exports.updateFrontEnd = (request, response) => {
    FrontEnd.findOneAndUpdate(
        { _id: request.params.id },
        { $set: request.body},
        { new: true }
    )
    .then((updatedFrontEnd) => response.json(updatedFrontEnd))
    .catch((err) => response.json(err));
};

module.exports.deleteFrontEnd = (request, response) => {
    FrontEnd.deleteOne({ _id: request.params.id })
        .then((deleteConfirmation) => response.json(deleteConfirmation))
        .catch((err) => response.json(err));
};
