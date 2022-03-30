//react hooks
import { useContext, Fragment, useState } from 'react'
//global states
import { User, ChatVisibility } from '../../useContext'

//functional component starts
const NameForm = () => {
    //accessing the global states
    const [name, setName] = useContext(User)
    const [showChat, setShowChat] = useContext(ChatVisibility)
    const [error, setError] = useState(null)

    //updating states
    const onSubmit = (e) => {
        //to prevent refresh
        e.preventDefault()
        //after name is sent, allow chat page to render
        if (name !== '') {
            setShowChat(true)
        } else {
            setError('Please provide a name')
        }
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
                                <span className='error'>{ error }</span>
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