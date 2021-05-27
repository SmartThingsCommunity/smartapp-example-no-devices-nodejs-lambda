const SmartApp = require('./smartapp')

module.exports.handle = (event, context, callback) => {
    SmartApp.handleLambdaCallback(event, context, callback)
}
