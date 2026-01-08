// resources/js/Components/Dashboard/WelcomeBanner.jsx
import { useState, useEffect } from 'react';

export default function WelcomeBanner({ userName, role = 'siswa' }) {
    const [welcomeMessage, setWelcomeMessage] = useState('');

    // Set welcome message based on role and time
    useEffect(() => {
        const hour = new Date().getHours();
        let timeGreeting = "Selamat pagi";

        if (hour >= 12 && hour < 15) timeGreeting = "Selamat siang";
        else if (hour >= 15 && hour < 18) timeGreeting = "Selamat sore";
        else if (hour >= 18 || hour < 4) timeGreeting = "Selamat malam";

        const roleMessages = {
            siswa: "Terus semangat meraih prestasi!",
            guru: "Inspirasi untuk generasi penerus.",
            orangtua: "Dukung perkembangan anak Anda."
        };

        setWelcomeMessage(`${timeGreeting}, ${userName}! ${roleMessages[role] || roleMessages.siswa}`);
    }, [userName, role]);

    const handleStartLearning = () => {
        console.log('Start learning clicked');
        // Implement start learning functionality
    };

    return (
        <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-6 text-white mb-6 animate-fade-in">
            <div className="flex flex-col md:flex-row md:items-center justify-between">
                <div>
                    <h2 className="text-2xl font-bold mb-2">
                        Selamat Datang Kembali!
                    </h2>
                    <p className="opacity-90">
                        {welcomeMessage}
                    </p>
                </div>
                <div className="mt-4 md:mt-0">
                    <button
                        onClick={handleStartLearning}
                        className="bg-white text-primary font-semibold px-6 py-3 rounded-xl hover:bg-opacity-90 transition-all hover:scale-105"
                    >
                        <i className="fas fa-rocket mr-2"></i>
                        Mulai Belajar
                    </button>
                </div>
            </div>
        </div>
    );
}