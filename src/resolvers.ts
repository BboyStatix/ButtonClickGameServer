const { PubSub } = require('apollo-server');
const pubsub = new PubSub();

const CLICK_BROADCAST = 'CLICK_BROADCAST';

interface Click {
    timestamp: string,
    type: string
}

module.exports = {
    Subscription: {
        clickBroadcast: {
            subscribe: () => pubsub.asyncIterator([CLICK_BROADCAST]),
        },
    },
    Query: {
        broadcastClick: async (_:any, {timestamp, type}:Click, __:any) => {
            await pubsub.publish(CLICK_BROADCAST, { clickBroadcast: {timestamp, type} })
            return { success: true, message: 'Broadcast successful!' }
        }
    }
}
