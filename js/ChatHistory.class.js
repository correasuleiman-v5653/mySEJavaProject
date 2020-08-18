//code for ChatHistory class
class ChatHistory
{
    //defining attributes
    _userMessages = new Array();
    _matchMessages = new Array();

    //constructor to instantiate example chat history
    constructor(userMessages,matchMessages){
        this._userMessages = userMessages;
        this._matchMessages = matchMessages;
    }

    //getters for appending messages in the chat log and the length
    getUserMessage(i){
        return (this._userMessages[i]);
    }

    getMatchMessage(i){
        return (this._matchMessages[i]);
    }

    getUserMessagesLength(){
        return this._userMessages.length;
    }

    getMatchMessagesLength(){
        return this._matchMessages.length;
    }

    //functions for logging new messages sent into the object
    logUserMessage(message){
        this._userMessages.push(message);
    }

    logMatchMessage(message){
        this._matchMessages.push(message);
    }
}