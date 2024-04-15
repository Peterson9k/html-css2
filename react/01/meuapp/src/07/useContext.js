import React from 'react'
import {UserStorage} from './subContext/useContent'
import Produto from './subContext/Produto'
const useContent = () =>{ 
    
    return(
        <UserStorage>
            <Produto/>
        </UserStorage>
    )
}

export default useContent