// resources/js/Components/Layout/Footer.jsx
import { useState, useEffect } from 'react';

export default function Footer() {
    const [lastSync, setLastSync] = useState('');

    // Update sync time
    useEffect(() => {
        const updateSyncTime = () => {
            const now = new Date();
            const timeString = now.toLocaleTimeString('id-ID', { 
                hour: '2-digit', 
                minute: '2-digit' 
            });
            setLastSync(`Disinkronkan ${timeString}`);
        };

        updateSyncTime();
        const interval = setInterval(updateSyncTime, 60000); // Update every minute

        return () => clearInterval(interval);
    }, []);

    return (
        <footer className="bg-white border-t border-neutral-200 p-4 text-center">
            <p className="text-sm text-neutral-600">
                © {new Date().getFullYear()} Sekolah Insan Mulia • v2.1.0 • 
                <span className="text-primary font-medium ml-1">{lastSync}</span>
            </p>
        </footer>
    );
}