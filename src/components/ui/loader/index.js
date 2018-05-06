import React from 'react';


export default class Loader extends React.Component {

    render() {
        return (
            <div className='cssload-loader'>
                <div className='cssload-inner cssload-one' />
                <div className='cssload-inner cssload-two' />
                <div className='cssload-inner cssload-three' />
            </div>
        );
    }
}
