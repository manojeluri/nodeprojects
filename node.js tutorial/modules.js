var moduleFunction = function(){
    console.log("Module loaded");
}
//In order to expose this method (make it public), we need to use module.exports
//'exports' defines what 'require' returns
module.exports = moduleFunction;