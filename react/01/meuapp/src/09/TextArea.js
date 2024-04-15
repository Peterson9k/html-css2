import React from 'react'

const TextArea = () => {
    const [mensagem, setMensagem] = React.useState(undefined)


  return (
    <form>
        <textarea name="Mensagem" id="mensagem" cols="10" rows="5" value={mensagem} onChange={({target})=>setMensagem(target.value)}></textarea>

        <p>{mensagem}</p>
    </form>
  )
}

export default TextArea