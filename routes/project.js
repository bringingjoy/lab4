// export the new endpoint requested in app.js
exports.viewProject = function(req, res) {
    // controller code: load file to display
    var name = req.params.name;
    console.log("The project name is: " + name);
    res.render('project',  {'projectName': name});
}
    
