import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";

import Layout from './layouts/Layout';
import './style.css';

ReactDOM.render((<BrowserRouter>
    <Layout/>
</BrowserRouter>), document.querySelector('.wrapper'));