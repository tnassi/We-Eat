import React from 'react';
import {Header} from '@wework-dev/dieter-ui';
import './Header.css';

class PageHeader extends React.Component {
    render() {
        return (
            <div>
                <h1 className="pageheader" as="h1"> We Eat </h1>
            </div>
        )
    }
}

export default PageHeader;