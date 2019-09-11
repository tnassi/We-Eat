import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '@wework-dev/dieter-ui/dist/index.less';
import 'semantic-ui-css/semantic.min.css'



ReactDOM.render(<App txt={"this is the prop text"} />,
    document.getElementById('root')
    );

