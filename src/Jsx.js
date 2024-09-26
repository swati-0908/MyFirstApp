Without using JSX

const text = React.createElement('p', {}, 'This is a text');

const container = React.createElement('div','{}',text );
ReactDOM.render(container,rootElement);




Using JSX, the above code can be simplified:

const container = (
<div>
  <p>This is a text</p>
</div>
);
