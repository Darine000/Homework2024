import React from 'react';

function Description() {
    return (
        <div style={{ marginTop: '60px', marginLeft: '32px', display: 'flex' }}>
            <div style={{ marginRight: '16px' }}>
                <h1>Vítejte na našem webu!</h1>
                <div style={{ width: '710px', lineHeight: '2' }}>
                    <h5>Naše stránka nabízí kurzy pletení pro začátečníky i pokročilé.<br />
                        S našimi kurzy se naučíte různé techniky pletení, od základních po složitější vzory. <br />
                        Nabízíme širokou škálu kurzů, které odpovídají vašim potřebám a úrovni dovedností. <br />
                        Bez ohledu na to, zda jste začátečník nebo zkušený pletař, u nás najdete kurz, který vám pomůže zdokonalit vaše dovednosti a posunout se dál ve vašem pletařském umění. <br />
                        Připojte se k našim kurzům a objevte kouzlo pletení!
                    </h5>
                    
                </div>
            </div>
            <div style={{ marginLeft: 'auto' }}>
                <img src={process.env.PUBLIC_URL + '/img/img3.webp'} alt='#'
                    style={{
                        width: '600px',
                        height: '300px',
                        marginRight: '32px',
                        borderWidth: '1px',
                        borderRadius: '1%',
                    }} />
            </div>
        </div>
    )
}

export default Description;
