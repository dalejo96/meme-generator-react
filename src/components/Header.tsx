import * as React from 'react'

export const Header = () => {
    return (
        <header>
            <img data-testid='header-img'
                src="http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png"
                alt="Problem?"
            />
            <p  data-testid='header-p'>Meme Generator</p>
        </header>

    )
}