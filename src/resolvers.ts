const { PubSub } = require('apollo-server');
const pubsub = new PubSub();

const CLICK_BROADCAST = 'CLICK_BROADCAST';

module.exports = {
    Subscription: {
        clickBroadcast: {
            subscribe: () => pubsub.asyncIterator([CLICK_BROADCAST]),
        },
    },
    Mutation: {
        broadcastClick: async (_:any, {timestamp, type}:{[key:string]:string}, __:any) => {
            pubsub.publish(CLICK_BROADCAST, { clickBroadcast: {timestamp, type} })
            return { success: true, message: 'Broadcast successful!' }
        },
    }
}
