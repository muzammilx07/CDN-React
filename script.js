function ReactDOMCDN() {
    return React.createElement(
        'div',
        { className: 'container' },
        React.createElement('h1', { className: 'title' }, 'Hello World'),
        React.createElement(FirstDIV),
        React.createElement(SecondDIV),
        React.createElement(LastDIV)
    );
}

function FirstDIV() {
    return React.createElement(
        'p',
        { className: 'para' },
        React.createElement('span', null, 'This is the First Div'),
        React.createElement('hr'),
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae quibusdam magni corrupti tenetur consequatur obcaecati officia perspiciatis, nesciunt cupiditate? Harum alias pariatur sapiente quasi, qui perspiciatis totam nesciunt voluptatum expedita.'
    );
}

function SecondDIV() {
    return React.createElement(
        'div',
        { className: 'second-div' },
        React.createElement(
            'p',
            { className: 'para' },
            React.createElement('span', null, 'This is the Second Div with A tags'),
            React.createElement('hr'),
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae quibusdam magni corrupti tenetur consequatur obcaecati officia perspiciatis, nesciunt cupiditate? Harum alias pariatur sapiente quasi, qui perspiciatis totam nesciunt voluptatum expedita.'
        ),
        React.createElement('a', { href: '' }, 'Geekster'),
        React.createElement('a', { href: '' }, 'LinkedIn')
    );
}

function LastDIV() {
    return React.createElement(
        'p',
        { className: 'para' },
        React.createElement('span', null, 'This is the Last Div'),
        React.createElement('hr'),
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae quibusdam magni corrupti tenetur consequatur obcaecati officia perspiciatis, nesciunt cupiditate? Harum alias pariatur sapiente quasi, qui perspiciatis totam nesciunt voluptatum expedita.'
    );
}

ReactDOM.render(
    React.createElement(ReactDOMCDN),
    document.getElementById('root')
);
