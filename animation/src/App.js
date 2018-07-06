import React, { Component, Fragment } from 'react';
import Cradle from './components/Animation/Animation';
import Sound from 'react-sound';

const App = () => (
    <Fragment>
        <Sound url="http://ol4.mp3party.net/online/5428/5428652.mp3"
               playStatus={Sound.status.PLAYING}/>
        <Cradle/>
    </Fragment>
);

export default App;
