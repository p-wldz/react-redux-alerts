const alerts = (state = [], action) => {
    switch (action.type) {
        case 'ADD_ALERT':
            if (action.alertMessage.length == 0)
            {
                return state;
            }
            return [
                ...state,
                {
                    messageText: action.alertMessage,
                    messageType: action.alertType
                }
            ]
        default:
            return []
    }
}
export default alerts;