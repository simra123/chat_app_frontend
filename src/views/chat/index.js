//react hooks
import { useEffect, useState, useContext, Fragment } from 'react'
//socketio
import io from 'socket.io-client'
//reuseable components
import { ChatFooter, ChatHeader, MessagesArea } from '../reuseable'
//global states
import { User, ChatVisibility, AllMessages } from '../../useContext'


//conneting socket to the server
const socket = io.connect(process.env.REACT_APP_BACKEND_URL)

const Chat = () => {
    //user active status
    const [isActive, setIsActive] = useState(false)
    //storing single message
    const [message, setMessage] = useState('')


    //accessing global state
    const [name] = useContext(User)
    const [showChat] = useContext(ChatVisibility)
    const [chat, setChat] = useContext(AllMessages)

    //onSumbit messages event
    const sendChat = (e) => {
        //avoid refreashing
        e.preventDefault()

        //sends data if its not null
        if (message !== "") {
            //harcoding object
            const chatData = {
                username: name,
                message: message.trim(),
                time: new Date(Date.now()).getHours() + ':' + new Date(Date.now()).getMinutes()
            }
            //send data to server
            socket.emit('send_messages', chatData)
            //saves data to context
            setChat((chat) => [...chat, chatData])
            //nulls the current state//message
            setMessage('')


        }
    }
    //useEffect for rerendering whenever socket var hits
    useEffect(() => {
        //geting chats
        socket.on('receive_messages', (data) => {
            setChat((chat) => [...chat, data])
            console.log(data)
        })
        //geting user active status
        socket.on('is_active', (data) => {
            setIsActive(data.status)
        })

    }, [])
    return (
        <Fragment>
            {/* Condition rendering */ }
            { showChat ?
                <div className='chat_sect'>
                    <div className='main'>
                        {/* reuseable components */ }
                        <ChatHeader isActive={ isActive } />
                        <MessagesArea />
                        <ChatFooter sendChat={ sendChat } setMessage={ setMessage } message={ message } />
                    </div>
                </div> : null
            }
        </Fragment>
    )

}
export default Chat