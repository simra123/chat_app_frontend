//react hooks 
import { useContext } from 'react'
import ScrollToBottom from 'react-scroll-to-bottom';
//global states
import { User, AllMessages } from '../../useContext'

const MessagesArea = () => {
    //accessing global state
    const [name] = useContext(User)
    const [chat] = useContext(AllMessages)

    return (
        <ScrollToBottom className='messages'>
            {

                //maping thru the array
                chat.map((value, index) => {
                    return (
                        <div key={ index } className={ name === value.username ? "outcoming" : "incoming" }>
                            <p className='content'>{ value.message }</p> <span className='time'>{ value.time }</span><span className='name'>{ value.username }</span>
                        </div>
                    )
                })
            }
        </ScrollToBottom>
    )
}
//export statement
export default MessagesArea