const { PubSub } = require('apollo-server');
const pubsub = new PubSub();

const CLICK_BROADCAST = 'CLICK_BROADCAST';

module.exports = {
    Subscription: {
        clickBroadcast: {
            // Additional event labels can be passed to asyncIterator creation
            subscribe: () => pubsub.asyncIterator([CLICK_BROADCAST]),
        },
    },
    Mutation: {
        broadcastClick: async (root:any, args:{[key:string]:string}, context:any) => {
            pubsub.publish(CLICK_BROADCAST, { clickBroadcast: args })
            return { success: true, message: 'Broadcast successful!' }
        },
    }
}
