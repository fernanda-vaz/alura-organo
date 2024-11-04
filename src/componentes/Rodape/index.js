import './style.css'

const Rodape = () => {
    return (
        <footer className='rodape'>
            <div className='redes-sociais'>
                <a href='facebook.com' target='_blank'>
                    <img src='/img/fb.png' alt=''/>
                </a>
                <a href='twitter.com' target='_blank'>
                    <img src='/img/tw.png' alt=''/>
                </a>
                <a href='instagram.com' target='_blank'>
                    <img src='/img/ig.png' alt=''/>
                </a>
            </div>
            <div className='logo'>
                <img src='/img/logo.png' alt=''/>
            </div>
            <div className='texto'>
                <p>Desenvolvido por Alura.</p>
            </div>
        </footer>
    )
}

export default Rodape