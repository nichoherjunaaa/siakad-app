// resources/js/Components/Schedule/TeacherContacts.jsx
import { useState } from 'react';

export default function TeacherContacts() {
    const [teachers] = useState([
        {
            id: 1,
            name: 'Bu Sari, S.Pd.',
            subject: 'Matematika',
            email: 'sari@insanmulia.sch.id',
            phone: '0812-3456-7890',
            available: true,
            consultationHours: 'Senin & Kamis, 13:00 - 15:00'
        },
        {
            id: 2,
            name: 'Pak Budi, M.Pd.',
            subject: 'Fisika',
            email: 'budi@insanmulia.sch.id',
            phone: '0813-4567-8901',
            available: true,
            consultationHours: 'Selasa & Jumat, 10:00 - 12:00'
        },
        {
            id: 3,
            name: 'Bu Lisa, S.Si.',
            subject: 'Kimia',
            email: 'lisa@insanmulia.sch.id',
            phone: '0814-5678-9012',
            available: false,
            consultationHours: 'Rabu, 14:00 - 16:00'
        },
        {
            id: 4,
            name: 'Bu Maya, S.Pd.',
            subject: 'Bahasa Inggris',
            email: 'maya@insanmulia.sch.id',
            phone: '0815-6789-0123',
            available: true,
            consultationHours: 'Kamis, 09:00 - 11:00'
        }
    ]);

    const handleSendMessage = (teacherId) => {
        console.log('Send message to teacher:', teacherId);
        // Implement message sending functionality
    };

    const handleScheduleConsultation = (teacherId) => {
        console.log('Schedule consultation with teacher:', teacherId);
        // Implement consultation scheduling
    };

    return (
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-200">
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-bold text-neutral-900">Kontak Guru</h3>
                <button className="text-sm text-primary hover:underline">
                    Lihat semua
                </button>
            </div>

            <div className="space-y-4">
                {teachers.map((teacher) => (
                    <div key={teacher.id} className="p-4 border border-neutral-200 rounded-xl hover:bg-neutral-50">
                        <div className="flex items-start justify-between mb-3">
                            <div className="flex items-start">
                                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mr-3">
                                    <span className="text-white font-semibold">
                                        {teacher.name.charAt(0)}
                                    </span>
                                </div>
                                <div>
                                    <h4 className="font-medium text-neutral-900">{teacher.name}</h4>
                                    <div className="flex items-center mt-1">
                                        <span className="text-sm text-neutral-600">{teacher.subject}</span>
                                        <div className={`w-2 h-2 rounded-full mx-2 ${teacher.available ? 'bg-green-500' : 'bg-red-500'}`}></div>
                                        <span className={`text-xs ${teacher.available ? 'text-green-600' : 'text-red-600'}`}>
                                            {teacher.available ? 'Tersedia' : 'Tidak Tersedia'}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <button
                                onClick={() => handleSendMessage(teacher.id)}
                                className="p-2 rounded-full hover:bg-white"
                            >
                                <i className="fas fa-comment text-primary"></i>
                            </button>
                        </div>

                        {/* Contact Info */}
                        <div className="space-y-2 text-sm">
                            <div className="flex items-center text-neutral-600">
                                <i className="fas fa-envelope w-5 mr-2"></i>
                                <span className="truncate">{teacher.email}</span>
                            </div>
                            <div className="flex items-center text-neutral-600">
                                <i className="fas fa-phone w-5 mr-2"></i>
                                <span>{teacher.phone}</span>
                            </div>
                            <div className="flex items-center text-neutral-600">
                                <i className="fas fa-clock w-5 mr-2"></i>
                                <span>{teacher.consultationHours}</span>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex space-x-2 mt-4">
                            <button
                                onClick={() => handleScheduleConsultation(teacher.id)}
                                className="flex-1 px-3 py-2 text-sm bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
                            >
                                <i className="fas fa-calendar-plus mr-1"></i>
                                Jadwalkan Konsultasi
                            </button>
                            <button className="px-3 py-2 text-sm border border-neutral-300 rounded-lg hover:bg-neutral-100 transition-colors">
                                <i className="fas fa-phone-alt"></i>
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Quick Actions */}
            <div className="mt-6 pt-6 border-t border-neutral-200">
                <h4 className="font-medium text-neutral-900 mb-3">Aksi Cepat</h4>
                <div className="grid grid-cols-2 gap-2">
                    <button className="flex items-center justify-center p-3 border border-neutral-200 rounded-lg hover:bg-neutral-50">
                        <i className="fas fa-download text-primary mr-2"></i>
                        <span className="text-sm">Download Jadwal</span>
                    </button>
                    <button className="flex items-center justify-center p-3 border border-neutral-200 rounded-lg hover:bg-neutral-50">
                        <i className="fas fa-print text-primary mr-2"></i>
                        <span className="text-sm">Cetak Jadwal</span>
                    </button>
                </div>
            </div>
        </div>
    );
}