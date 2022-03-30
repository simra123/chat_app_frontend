//react hooks
import { useContext, Fragment } from 'react'
//global states
import { User, ChatVisibility } from '../../useContext'

//functional component starts
const NameForm = () => {
    //accessing the global states
    const [name, setName] = useContext(User)
    const [showChat, setShowChat] = useContext(ChatVisibility)

    //updating states
    const onSubmit = (e) => {
        //to prevent refresh
        e.preventDefault()
        //after name is sent, allow chat page to render
        setShowChat(true)
    }


    return (
        <Fragment>
            {/* Condition rendering */ }
            {
                !showChat ?
                    <div className='name_form'>
                        <div className='main'>
                            <h1>
                                welcome to chat app
                            </h1>
                            <form onSubmit={ (e) => onSubmit(e) }>
                                <label>Join Chat</label><br />
                                <input type="text" value={ name } onChange={ (e) => setName(e.target.value) } placeholder='Enter your name' /><br />
                                <button> Enter</button>
                            </form>
                        </div>
                    </div> : null
            }

        </Fragment>
    )
}
//exporting component
export default NameForm