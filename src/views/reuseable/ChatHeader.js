//react icon
import { AiOutlineWechat } from 'react-icons/ai'
import { RiRadioButtonLine } from 'react-icons/ri'

const ChatHeader = ({ isActive }) => {

    return (
        <div className='chat_header'>
            {/* app logo */ }
            <span className='logo'>
                <AiOutlineWechat size={ 45 } />
            </span>
            <div>
                <h3> chat app </h3>
            </div>

            {/* checking online status thru props */ }
            <span style={ { marginLeft: "auto", marginTop: "20px" } }>
                <RiRadioButtonLine size={ 20 } color={ isActive ? "	#00FF00" : "#FF0000" } />
            </span>
        </div>
    )
}
//export statement
export default ChatHeader