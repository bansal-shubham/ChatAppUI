import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import './ChatTitle.css';

const ChatTitle = ({ selectedConversation, onDeleteConversation }) => {
    return (
        <div id="chat-title">
            <span>{selectedConversation.title}</span>
            <DeleteIcon  fontSize="large" onClick={() => { onDeleteConversation();  } } />
            {/* <img 
                src={require("../../images/icons/trash-logo.svg")} 
                alt="Delete Conversation"
                onClick={() => { onDeleteConversation(); } } /> */}
        </div>
    );
}

export default ChatTitle;