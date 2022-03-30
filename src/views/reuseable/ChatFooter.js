//react icon
import { RiSendPlane2Fill } from 'react-icons/ri'
//destructuring props
const ChatFooter = ({ sendChat, message, setMessage }) => {

    return (
        //sends single message thru props
        <form onSubmit={ (e) => sendChat(e) }>
            <div className='chat_footer'>
                <input placeholder='Enter your name msg' value={ message } onChange={ (e) => setMessage(e.target.value) } />
                {/* submit icon */ }
                <button>
                    <RiSendPlane2Fill size={ 30 } />
                </button>
            </div>
        </form>
    )
}
//export statement
export default ChatFooter