import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ChatInput from './ChatInput';
import axios from 'axios';
import Chat from 'views/Chat';
import ServerUsers from './ServerUsers';

const ServerChat = () => {
	const location = useLocation();

    useLayoutEffect(() => {
        const userId = location.pathname.split("/")[2]
        // if(location.pathname.split("/").length!=4) return

        // setTimeout(() => {
        // socket.emit("getMessages",{
        //     receiver:userId,
        // })}, 500);
    }, [location])

	return (
		<>
			<div style={{display:"flex",height:"100%"}}>
				<div style={{display:"flex",flex:"1 1",flexDirection:"column"}}>
					<div className="dashboard-panel-body-wrapper">
						<Chat/>
					</div>
				</div>
				<ServerUsers user={[{name:"ali",online:true}]}/>
			</div>
		</>
	);
};

export default ServerChat;