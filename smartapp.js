const SmartApp = require('@smartthings/smartapp');

module.exports = new SmartApp()
    .configureI18n()
    .enableEventLogging(2) // logs all lifecycle event requests/responses as pretty-printed JSON. Omit in production
    .appId('00000000-0000-0000-0000-000000000000')
    .permissions(['r:locations:*'])
    .page('mainPage', (context, page, configData) => {})
    .installed(async context => {
        console.log("Hello installed!");

        if (process.env.IS_LOCAL) {
            console.log("Running locally, skipping actual schedule creation");
        } else {
            // schedule to say hello every minute
            await context.api.schedules.schedule('helloSchedule', `0/1 * * * ? *`, 'UTC');
        }
    })
    .updated(context => {
        console.log("Hello updated!");
    })
    .uninstalled(context => {
        console.log("Hello uninstalled!");
    })
    .scheduledEventHandler('helloSchedule', context => {
        console.log("Hello schedule!");
    });
