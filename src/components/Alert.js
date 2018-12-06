import React from 'react';

const Alert = (props) => (
     <div>
         <div className={"alert alert-" + props.alert.messageType} role="alert">
             {props.alert.messageText}
         </div>
     </div>
);
export default Alert;