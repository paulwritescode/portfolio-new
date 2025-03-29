'use client';

import { useConversation } from '@11labs/react';
import { Pause, Play } from 'lucide-react';
import { useCallback } from 'react';

export function Conversation() {
    const conversation = useConversation({
        onConnect: () => console.log('Connected'),
        onDisconnect: () => console.log('Disconnected'),
        onMessage: (message) => console.log('Message:', message),
        onError: (error) => console.error('Error:', error),
    });


    const startConversation = useCallback(async () => {
        try {
            // Request microphone permission
            await navigator.mediaDevices.getUserMedia({ audio: true });

            // Start the conversation with your agent
            await conversation.startSession({
                agentId: process.env.NEXT_PUBLIC_AGENT_ID as string, // Replace with your agent ID
            });

        } catch (error) {
            console.error('Failed to start conversation:', error);
        }
    }, [conversation]);

    const stopConversation = useCallback(async () => {
        await conversation.endSession();
    }, [conversation]);

    return (
        <div className="flex flex-col items-center gap-4">
            <div className="flex gap-2">
                <button
                    onClick={startConversation}
                    disabled={conversation.status === 'connected'}
                    className="p-3 bg-primary text-primary-foreground rounded-full disabled:bg-muted disabled:text-muted-foreground"
                >
                    <Play className='' />
                </button>
                <button
                    onClick={stopConversation}
                    disabled={conversation.status !== 'connected'}
                    className="p-3  rounded-full bg-secondary text-secondary-foreground  disabled:bg-muted disabled:text-muted-foreground"
                >
                    <Pause />
                </button>
            </div>

            <div className="flex gap-4 items-center text-xs">
                <p>{conversation.status}</p>
                <p>{conversation.isSpeaking ? 'speaking' : 'listening'}</p>
            </div>
        </div>
    );
}
