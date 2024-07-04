const PRIMARY_COLOR = {
    50: '#eff8ff',
    100: '#daf0ff',
    200: '#bee5ff',
    300: '#91d6ff',
    400: '#5dbdfd',
    500: '#379efa',
    600: '#2180ef',
    700: '#1969dc',
    800: '#1b55b2',
    900: '#1c4a8c',
    950: '#1b396a',
};

const NEUTRAL_COLOR = {
    50: '#f5f7fa',
    100: '#eaedf4',
    200: '#d1d9e6',
    300: '#a9b9d0',
    400: '#7b94b5',
    500: '#5a769d',
    600: '#465e83',
    700: '#3a4c6a',
    800: '#334259',
    900: '#2e394c',
    950: '#171c26',
};

const ACCENT_COLOR = {
    50: '#f2fbf9',
    100: '#d2f5ee',
    200: '#a5eadf',
    300: '#70d8ca',
    400: '#3caea3',
    500: '#29a399',
    600: '#1f827c',
    700: '#1c6965',
    800: '#1b5452',
    900: '#1b4644',
    950: '#0a2829',
};

const ACCENT_COLOR_2 = {
    50: '#fefbec',
    100: '#fcf3c9',
    200: '#f9e58e',
    300: '#f6d55c',
    400: '#f3bf2c',
    500: '#eca014',
    600: '#d17a0e',
    700: '#ae570f',
    800: '#8d4313',
    900: '#743813',
    950: '#431c05',
};

const ACCENT_COLOR_3 = {
    50: '#fef4f2',
    100: '#fee6e2',
    200: '#fed2ca',
    300: '#fbb2a6',
    400: '#f78572',
    500: '#ed553b',
    600: '#db4127',
    700: '#b8341d',
    800: '#982e1c',
    900: '#7e2c1e',
    950: '#45130a',
};


let palette_name = "";
let palette = {};

palette = {
    Color_Primario: PRIMARY_COLOR,
    Color_Neutral: NEUTRAL_COLOR,
    Acento_Uno: ACCENT_COLOR,
    Acento_Dos: ACCENT_COLOR_2,
    Acento_tres: ACCENT_COLOR_3
};

let palette_component = "";

for (const key in palette) {
    palette_component += `
         <article>
                <h2>${key.replace('_', ' ')}</h2>
                <ul class="lista-paleta">
                    ${Object.keys(palette[key]).map((color) => `
                        <li class="color" style="--bg-color: ${palette[key][color]}; ${color >= 400 ? '--txt-color:var(--midnight-blue-50);' : ''}">
                            <div class="grado">${color}</div>
                            <div class="valor">${palette[key][color].toUpperCase()}</div>
                        </li>
                    `).join('')}
                </ul>
            </article>
        <div class="separador-paleta"></div>
    `;
}

document.querySelector('.paleta-colores').innerHTML = palette_component;


// `<li>
//                             <span class="color" style="background-color: ${palette[key]}"></span>
//                             <span class="valor">${palette[key]}</span>
//                         </li>`;